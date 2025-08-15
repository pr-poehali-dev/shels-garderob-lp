import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Countdown timer for promotion
  const getTimeLeft = () => {
    const end = new Date('2025-12-31T23:59:59');
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return { days, hours };
  };

  const timeLeft = getTimeLeft();

  return (
    <div className="min-h-screen bg-warm-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-wheat-beige/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://cdn.poehali.dev/files/c8c91c77-2bb4-4532-b7d5-5967a2c34abf.png" 
                alt="ShelsMebel логотип"
                className="h-12"
              />
              <div className="text-sm text-saddle-brown font-medium">Стильные гардеробные – удобные платежи!</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-lg font-bold text-dark-slate">8 800 51 140 45</div>
                <div className="text-xs text-saddle-brown">Звонок бесплатный</div>
              </div>
              <a href="https://shelsmebel.ru/konstruktor-shkafy-kupe" target="_blank" rel="noopener noreferrer">
                <Button className="bg-warm-brown hover:bg-warm-brown/90 text-white">
                  Бесплатный расчет
                </Button>
              </a>
            </div>
          </div>
          
          {/* Promo Banner */}
          <div className="mt-4 bg-gradient-to-r from-warm-brown to-saddle-brown text-white rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <span className="font-semibold">Акция! Рассрочка 0% до 6 месяцев! Молодоженам – 12 месяцев!</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Clock" size={16} />
                <span>До конца: {timeLeft.days} дн. {timeLeft.hours} ч.</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm-white to-wheat-beige py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-dark-slate leading-tight mb-6">
                Гардеробные в рассрочку <span className="text-warm-brown">0%</span> – без переплат!
              </h1>
              <p className="text-xl text-saddle-brown mb-8 leading-relaxed">
                Создайте идеальную систему хранения с онлайн-конструктором! 
                Никаких скрытых платежей и комиссий.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://shelsmebel.ru/konstruktor-shkafy-kupe" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-warm-brown hover:bg-warm-brown/90 text-white px-8 py-4 text-lg">
                    <Icon name="PenTool" className="mr-2" size={20} />
                    Спроектировать онлайн
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white px-8 py-4 text-lg">
                  Для молодоженов
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="/img/a9093b79-6e18-4311-bd0e-e08dfe208a41.jpg"
                alt="Элегантная гардеробная с зеркалами"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-dark-slate mb-12">
            Почему выбирают нас?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-wheat-beige/30 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-warm-brown/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="CreditCard" size={32} className="text-warm-brown" />
                </div>
                <h3 className="text-xl font-semibold text-dark-slate">Рассрочка 0% до 6 месяцев</h3>
                <p className="text-saddle-brown">Платите удобно без переплат и скрытых комиссий!</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-wheat-beige/30 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-warm-brown/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Heart" size={32} className="text-warm-brown" />
                </div>
                <h3 className="text-xl font-semibold text-dark-slate">Для молодоженов – 12 месяцев</h3>
                <p className="text-saddle-brown">Специальное предложение для новой семьи!</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-wheat-beige/30 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-warm-brown/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Monitor" size={32} className="text-warm-brown" />
                </div>
                <h3 className="text-xl font-semibold text-dark-slate">Онлайн-конструктор</h3>
                <p className="text-saddle-brown">Создайте дизайн за 5 минут прямо в браузере!</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-wheat-beige/30 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-warm-brown/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Shield" size={32} className="text-warm-brown" />
                </div>
                <h3 className="text-xl font-semibold text-dark-slate">Гарантия 1 год</h3>
                <p className="text-saddle-brown">Надежные материалы и качественная сборка!</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-wheat-beige/30 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-warm-brown/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Clock" size={32} className="text-warm-brown" />
                </div>
                <h3 className="text-xl font-semibold text-dark-slate">Изготовление от 7 дней</h3>
                <p className="text-saddle-brown">Быстрое производство без задержек!</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-wheat-beige/30 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-warm-brown/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Wrench" size={32} className="text-warm-brown" />
                </div>
                <h3 className="text-xl font-semibold text-dark-slate">Профессиональная установка</h3>
                <p className="text-saddle-brown">Опытные мастера установят идеально!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gradient-to-br from-wheat-beige to-warm-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-dark-slate mb-4">
            Примеры наших работ
          </h2>
          <p className="text-center text-saddle-brown mb-12 text-lg">
            Реальные проекты для наших клиентов!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: "/img/96b72f43-ddb1-4011-9455-db328f97f338.jpg",
                title: "Шкаф-купе с зеркалами в спальню",
                description: "Раздвижные зеркальные двери, встроенная подсветка"
              },
              {
                image: "/img/a40cccf0-a0be-439b-a6c9-a13eadb1ffce.jpg",
                title: "Гардеробная с пескоструйным рисунком",
                description: "Стильные узоры на стекле, цвет сонома"
              },
              {
                image: "/img/2594a1e1-f8fc-41dc-b0a6-e5650ffed44d.jpg",
                title: "Угловой шкаф с раздвижными дверями",
                description: "Максимальное использование пространства"
              },
              {
                image: "/img/a9093b79-6e18-4311-bd0e-e08dfe208a41.jpg",
                title: "Вместительная система хранения в прихожую",
                description: "Организованное хранение для всей семьи"
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden border-wheat-beige/30 hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-dark-slate mb-2">{item.title}</h3>
                  <p className="text-sm text-saddle-brown">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to get installment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-dark-slate mb-12">
            Как получить рассрочку?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-brown text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-dark-slate mb-2">Спроектируйте</h3>
              <p className="text-saddle-brown">В онлайн-конструкторе или оставьте заявку</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-brown text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-dark-slate mb-2">Подтвердите</h3>
              <p className="text-saddle-brown">Замер при необходимости</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-brown text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-dark-slate mb-2">Оформите</h3>
              <p className="text-saddle-brown">Договор – рассрочка 0% до 6 месяцев</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-brown text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-dark-slate mb-2">Получите</h3>
              <p className="text-saddle-brown">Быстрое производство и установка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gradient-to-br from-warm-white to-wheat-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-dark-slate mb-12">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-wheat-beige/30">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-saddle-brown italic">
                  "Заказали шкаф в рассрочку – очень довольны! Спасибо!"
                </p>
                <div className="text-right">
                  <p className="font-semibold text-dark-slate">Ольга</p>
                  <p className="text-sm text-saddle-brown">Симферополь</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-wheat-beige/30">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-saddle-brown italic">
                  "Понравился онлайн-конструктор – сразу увидели, как будет выглядеть шкаф."
                </p>
                <div className="text-right">
                  <p className="font-semibold text-dark-slate">Иван</p>
                  <p className="text-sm text-saddle-brown">Керчь</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-wheat-beige/30">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-saddle-brown italic">
                  "Молодоженам дали 12 месяцев рассрочки – отличное предложение!"
                </p>
                <div className="text-right">
                  <p className="font-semibold text-dark-slate">Анастасия</p>
                  <p className="text-sm text-saddle-brown">Ялта</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-warm-brown text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-4">
              Получите расчет за 5 минут + рассрочку 0%
            </h2>
            <p className="text-lg mb-8 opacity-90">
              До конца 2025 года!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Input
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Input
                  placeholder="Город"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="bg-white text-warm-brown hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Рассчитать стоимость
              </Button>
            </form>
            
            <p className="text-sm mt-4 opacity-70">
              Акция действует до 31.12.2025
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-slate text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/c8c91c77-2bb4-4532-b7d5-5967a2c34abf.png" 
                alt="ShelsMebel"
                className="h-12 mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-300 mb-4">
                Гардеробные в рассрочку 0% – только до конца года!
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>8 800 51 140 45</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="ExternalLink" size={16} />
                  <a href="https://shelsmebel.ru/konstruktor-shkafy-kupe" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Онлайн-конструктор
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <a href="https://vk.com/shels.mebel" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center space-x-2">
                <Icon name="ExternalLink" size={16} />
                <span>VK: shels.mebel</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ShelsMebel. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;