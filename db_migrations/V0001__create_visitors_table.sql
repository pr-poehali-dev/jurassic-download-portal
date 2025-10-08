CREATE TABLE IF NOT EXISTS visitors (
    id SERIAL PRIMARY KEY,
    visit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    page_url VARCHAR(255),
    user_agent TEXT,
    ip_address VARCHAR(45)
);

CREATE INDEX idx_visit_date ON visitors(visit_date);
