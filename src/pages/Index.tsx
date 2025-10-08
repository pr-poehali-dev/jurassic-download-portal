import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            JURASSIC WORLD EVOLUTION
          </div>
          <div className="hidden md:flex gap-6">
            {['Главная', 'Скачать', 'Особенности', 'Требования', 'Галерея', 'Новости'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(['hero', 'download', 'features', 'requirements', 'gallery', 'news'][index])}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary">
              <Icon name="Gamepad2" size={16} className="mr-2" />
              Игра года 2024
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-slide-up">
              JURASSIC WORLD
              <br />
              EVOLUTION
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Создай свой парк юрского периода. Управляй динозаврами. Построй империю развлечений.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('download')}
              >
                <Icon name="Download" size={24} className="mr-2" />
                Скачать игру
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('features')}
              >
                <Icon name="Play" size={24} className="mr-2" />
                Смотреть трейлер
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Скачать игру</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">Выберите платформу для загрузки</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Windows', icon: 'Monitor', size: '15.2 GB', version: 'v2.5.1' },
              { name: 'PlayStation', icon: 'Gamepad2', size: '18.4 GB', version: 'v2.5.0' },
              { name: 'Xbox', icon: 'Gamepad', size: '18.4 GB', version: 'v2.5.0' }
            ].map((platform) => (
              <Card key={platform.name} className="border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in bg-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon name={platform.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl text-center">{platform.name}</CardTitle>
                  <CardDescription className="text-center">
                    {platform.size} • {platform.version}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Особенности игры</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">Погрузись в мир юрского периода</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '80+ динозавров', desc: 'Создавай и управляй уникальными видами', icon: '🦕' },
              { title: 'Режим песочницы', desc: 'Безграничные возможности строительства', icon: '🏗️' },
              { title: 'Управление парком', desc: 'Контролируй финансы и безопасность', icon: '💼' },
              { title: 'Онлайн режим', desc: 'Соревнуйся с друзьями', icon: '🌐' }
            ].map((feature, index) => (
              <Card 
                key={feature.title} 
                className="border border-border hover:border-primary transition-all duration-300 hover:scale-105 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-5xl mb-4 text-center">{feature.icon}</div>
                  <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                  <CardDescription className="text-center">{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12">Системные требования</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Cpu" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Минимальные</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Cpu" size={18} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Процессор</p>
                    <p className="text-sm text-foreground/70">Intel i5-4590 / AMD FX 8350</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MemoryStick" size={18} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Память</p>
                    <p className="text-sm text-foreground/70">8 GB RAM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MonitorPlay" size={18} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Видеокарта</p>
                    <p className="text-sm text-foreground/70">NVIDIA GTX 1050 / AMD RX 560</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="HardDrive" size={18} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Место на диске</p>
                    <p className="text-sm text-foreground/70">15 GB свободного места</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary bg-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Рекомендуемые</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Cpu" size={18} className="text-secondary mt-1" />
                  <div>
                    <p className="font-semibold">Процессор</p>
                    <p className="text-sm text-foreground/70">Intel i7-8700 / AMD Ryzen 5 3600</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MemoryStick" size={18} className="text-secondary mt-1" />
                  <div>
                    <p className="font-semibold">Память</p>
                    <p className="text-sm text-foreground/70">16 GB RAM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MonitorPlay" size={18} className="text-secondary mt-1" />
                  <div>
                    <p className="font-semibold">Видеокарта</p>
                    <p className="text-sm text-foreground/70">NVIDIA RTX 3060 / AMD RX 6700 XT</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="HardDrive" size={18} className="text-secondary mt-1" />
                  <div>
                    <p className="font-semibold">Место на диске</p>
                    <p className="text-sm text-foreground/70">20 GB свободного места (SSD)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Галерея скриншотов</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">Оцени графику игры</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80',
              'https://images.unsplash.com/photo-1578663899664-27b62dc07603?w=800&q=80',
              'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80',
              'https://images.unsplash.com/photo-1578663899664-27b62dc07603?w=800&q=80',
              'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80',
              'https://images.unsplash.com/photo-1578663899664-27b62dc07603?w=800&q=80'
            ].map((img, index) => (
              <div 
                key={index}
                className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={img} 
                  alt={`Jurassic World Evolution Screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="ZoomIn" size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4">Новости и обновления</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">Последние новости из мира Jurassic</p>
          <div className="space-y-6">
            {[
              { title: 'Обновление 2.5.1 - Новые динозавры!', date: '15 марта 2024', desc: 'Добавлено 5 новых видов динозавров, включая легендарного Индоминуса Рекса' },
              { title: 'Режим выживания теперь доступен', date: '1 марта 2024', desc: 'Испытайте себя в новом режиме, где каждое решение может стать решающим' },
              { title: 'Скидка 30% в честь юбилея', date: '20 февраля 2024', desc: 'Празднуем 2 года игры! Специальная цена только на этой неделе' }
            ].map((news, index) => (
              <Card 
                key={news.title} 
                className="border border-border hover:border-primary transition-all duration-300 hover:translate-x-2 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{news.title}</CardTitle>
                      <CardDescription>{news.desc}</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary shrink-0">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {news.date}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            JURASSIC WORLD EVOLUTION
          </div>
          <p className="text-foreground/70 mb-6">© 2024 Все права защищены</p>
          <div className="flex gap-6 justify-center">
            {['Facebook', 'Twitter', 'Youtube', 'Twitch'].map((social) => (
              <button 
                key={social}
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {social}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;