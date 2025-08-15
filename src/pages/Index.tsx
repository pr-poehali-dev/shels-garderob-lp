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
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-display font-bold text-warm-brown">ShelsMebel</div>
              <div className="text-sm text-saddle-brown">Стильные гардеробные – удобные платежи!</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-dark-slate">
                <Icon name="Phone" size={18} />
                <span className="font-semibold">8 800 51 140 45</span>
              </div>
              <Button className="bg-warm-brown hover:bg-saddle-brown text-white hover-scale">
                Бесплатный расчет
              </Button>
            </div>
          </div>
          
          {/* Promotion Banner */}
          <div className="mt-4 bg-gradient-to-r from-warm-brown to-saddle-brown text-white px-6 py-3 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="Gift" size={20} />
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
                <Button size="lg" className="bg-warm-brown hover:bg-saddle-brown text-white hover-scale text-lg px-8 py-4">
                  <Icon name="Wrench" size={20} className="mr-2" />
                  Спроектировать онлайн
                </Button>
                <Button size="lg" variant="outline" className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white text-lg px-8 py-4">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Для молодоженов
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/7db68f43-b009-4228-8c76-bd47abc71b5b.jpg" 
                alt="Элегантный шкаф-купе с зеркалами"
                className="rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-dark-slate mb-16">
            Почему выбирают нас?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "CreditCard",
                title: "Рассрочка 0% до 6 месяцев",
                description: "Платите удобно без переплат и скрытых комиссий",
                badge: "Популярно"
              },
              {
                icon: "Heart",
                title: "Для молодоженов – 12 месяцев",
                description: "Специальное предложение для новых семей",
                badge: "Эксклюзив"
              },
              {
                icon: "Wrench",
                title: "Онлайн-конструктор",
                description: "Создайте дизайн за 5 минут прямо на сайте",
                badge: "Бесплатно"
              },
              {
                icon: "Shield",
                title: "Гарантия 1 год",
                description: "Надежные материалы и качественная сборка",
                badge: null
              },
              {
                icon: "Clock",
                title: "Изготовление от 7 дней",
                description: "Быстрое производство без задержек",
                badge: null
              },
              {
                icon: "Star",
                title: "500+ довольных клиентов",
                description: "Реальные отзывы и высокие оценки",
                badge: null
              }
            ].map((benefit, index) => (
              <Card key={index} className="hover-scale hover:shadow-lg transition-all duration-300 border-wheat-beige/50">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-warm-brown/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon name={benefit.icon} size={32} className="text-warm-brown" />
                    </div>
                    {benefit.badge && (
                      <Badge className="absolute -top-2 -right-2 bg-saddle-brown text-white">
                        {benefit.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-dark-slate mb-3">{benefit.title}</h3>
                  <p className="text-saddle-brown">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-wheat-beige/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-dark-slate mb-6">
            Примеры наших работ
          </h2>
          <p className="text-center text-saddle-brown text-xl mb-16">
            Реальные проекты для наших клиентов!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/img/7db68f43-b009-4228-8c76-bd47abc71b5b.jpg",
                title: "Шкаф-купе с зеркалами в спальню",
                description: "Элегантное решение для спальни"
              },
              {
                image: "/img/0a4ab1ae-d964-4cf6-b84b-cf7fd1f7f0e2.jpg",
                title: "Гардеробная с организованным хранением",
                description: "Максимум места для всех вещей"
              },
              {
                image: "/img/13c951ef-2ad0-47d3-ac62-e306199de840.jpg",
                title: "Угловой шкаф с раздвижными дверями",
                description: "Идеально для небольших помещений"
              }
            ].map((work, index) => (
              <Card key={index} className="hover-scale hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-dark-slate mb-2">{work.title}</h3>
                    <p className="text-saddle-brown">{work.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Installment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-dark-slate mb-16">
            Как получить рассрочку?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: "Wrench",
                title: "Проектирование",
                description: "Спроектируйте в онлайн-конструкторе или оставьте заявку"
              },
              {
                step: "2",
                icon: "Ruler",
                title: "Замер",
                description: "Подтвердите замер при необходимости"
              },
              {
                step: "3",
                icon: "FileText",
                title: "Оформление",
                description: "Договор с рассрочкой 0% до 6-12 месяцев"
              },
              {
                step: "4",
                icon: "Home",
                title: "Установка",
                description: "Быстрое производство и профессиональная установка"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-warm-brown to-saddle-brown rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Icon name={step.icon} size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-dark-slate text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-dark-slate mb-3">{step.title}</h3>
                <p className="text-saddle-brown">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-wheat-beige/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-dark-slate mb-16">
            Отзывы наших клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ольга",
                city: "Симферополь",
                text: "Заказали шкаф в рассрочку – очень довольны! Качество отличное, установили быстро. Спасибо!",
                rating: 5
              },
              {
                name: "Иван",
                city: "Керчь",
                text: "Понравился онлайн-конструктор – сразу увидели, как будет выглядеть шкаф. Очень удобно!",
                rating: 5
              },
              {
                name: "Анастасия",
                city: "Ялта",
                text: "Молодоженам дали 12 месяцев рассрочки – отличное предложение! Рекомендуем всем.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-saddle-brown mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-warm-brown/20 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-warm-brown" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-slate">{review.name}</div>
                      <div className="text-sm text-saddle-brown">{review.city}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-warm-brown to-saddle-brown text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Получите расчет за 5 минут + рассрочку 0%
            </h2>
            <p className="text-xl mb-8 opacity-90">
              до конца 2025 года!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
                <Input
                  placeholder="Телефон"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
                <Input
                  placeholder="Город"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="bg-white text-warm-brown hover:bg-wheat-beige hover:text-saddle-brown font-semibold px-12 py-4 hover-scale"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <p className="text-sm opacity-75">
                Акция действует до 31.12.2025
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-slate text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-display font-bold text-warm-brown mb-4">ShelsMebel</div>
              <p className="text-gray-300 mb-4">
                Гардеробные в рассрочку 0% – только до конца года!
              </p>
              <div className="flex space-x-4">
                <a href="https://vk.com/shels.mebel" className="text-gray-300 hover:text-warm-brown transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>8 800 51 140 45</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Крым, вся территория</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <div className="space-y-2 text-gray-300">
                <a href="https://shelsmebel.ru/konstruktor-shkafy-kupe" className="block hover:text-warm-brown transition-colors story-link">
                  Онлайн-конструктор
                </a>
                <div>Гардеробные на заказ</div>
                <div>Шкафы-купе с зеркалами</div>
                <div>Рассрочка 0%</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 ShelsMebel. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;