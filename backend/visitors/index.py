import json
import os
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Track and retrieve visitor statistics
    Args: event with httpMethod (GET to get count, POST to track visit)
    Returns: HTTP response with visitor count or success status
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Database not configured'})
        }
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor(cursor_factory=RealDictCursor)
    
    if method == 'GET':
        cur.execute('SELECT COUNT(*) as total FROM visitors')
        result = cur.fetchone()
        total_visitors = result['total'] if result else 0
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'total': total_visitors})
        }
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        page_url = body_data.get('page_url', '/')
        user_agent = event.get('headers', {}).get('user-agent', 'unknown')
        
        source_ip = 'unknown'
        request_context = event.get('requestContext', {})
        if request_context:
            identity = request_context.get('identity', {})
            source_ip = identity.get('sourceIp', 'unknown')
        
        cur.execute(
            "INSERT INTO visitors (page_url, user_agent, ip_address) VALUES (%s, %s, %s)",
            (page_url, user_agent, source_ip)
        )
        conn.commit()
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'success': True})
        }
    
    return {
        'statusCode': 405,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'})
    }
