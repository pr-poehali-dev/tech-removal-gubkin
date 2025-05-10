import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы API-запрос
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4CAF50]/90 to-[#1976D2]/90 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair animate-fade-in">
              Освободите пространство от ненужной техники в Губкине
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Бесплатно вывозим старую технику и электронику, заботясь об
              экологии и вашем комфорте
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#4CAF50] hover:bg-white/90"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Icon name="PhoneCall" className="mr-2 h-5 w-5" />
                Оставить заявку
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20"
                onClick={() => {
                  document
                    .getElementById("advantages")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Icon name="Info" className="mr-2 h-5 w-5" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Take Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-playfair">
            Что мы вывозим
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-scale">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-[#4CAF50]/10 p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Monitor" className="h-10 w-10 text-[#4CAF50]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Компьютерная техника</h3>
                <p className="text-gray-600">
                  Компьютеры, ноутбуки, мониторы, принтеры и периферия
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-[#1976D2]/10 p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon
                    name="Smartphone"
                    className="h-10 w-10 text-[#1976D2]"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Мобильные устройства</h3>
                <p className="text-gray-600">
                  Телефоны, планшеты, электронные книги и аксессуары
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-[#FF9800]/10 p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Tv" className="h-10 w-10 text-[#FF9800]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Бытовая техника</h3>
                <p className="text-gray-600">
                  Стиральные машины, холодильники, микроволновки
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="pt-6 text-center">
                <div className="rounded-full bg-[#9C27B0]/10 p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Radio" className="h-10 w-10 text-[#9C27B0]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Прочая электроника</h3>
                <p className="text-gray-600">
                  Аудиотехника, электроинструменты и другие устройства
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-playfair">
            Примеры техники, которую мы забираем
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://cdn.poehali.dev/files/01e17633-f5c7-4469-930c-2996103854b2.jpg"
                alt="Стиральная машина"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://cdn.poehali.dev/files/e4cdf3de-b0f0-43a6-8d23-29783cac0b17.jpg"
                alt="Аудиотехника"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://cdn.poehali.dev/files/925c60e2-7d65-422f-9b2c-50597d82d5bb.jpg"
                alt="Старое радио"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://cdn.poehali.dev/files/e0b13567-0f30-43f6-88de-8b5f128fc337.jpg"
                alt="Разобранная техника"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03"
                alt="Электроника"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1601791074012-d4e0ee30d77c"
                alt="Компьютерная техника"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-playfair">
            Почему выбирают нас
          </h2>

          <Tabs defaultValue="convenient" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="convenient">Удобно</TabsTrigger>
              <TabsTrigger value="free">Бесплатно</TabsTrigger>
              <TabsTrigger value="eco">Экологично</TabsTrigger>
              <TabsTrigger value="fast">Быстро</TabsTrigger>
            </TabsList>

            <TabsContent
              value="convenient"
              className="mt-8 p-6 bg-[#F5F5F5] rounded-lg"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="rounded-full bg-[#4CAF50]/10 p-6">
                    <Icon
                      name="LayoutGrid"
                      className="h-20 w-20 text-[#4CAF50]"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">
                    Максимальное удобство для вас
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Мы подстраиваемся под ваше расписание и приезжаем в удобное
                    для вас время. Никаких хлопот с транспортировкой - мы всё
                    сделаем сами.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-[#4CAF50] mr-2"
                      />
                      <span>Выбор удобного времени вывоза</span>
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-[#4CAF50] mr-2"
                      />
                      <span>Подъем с любого этажа</span>
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-[#4CAF50] mr-2"
                      />
                      <span>Самостоятельный вынос техники</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="free"
              className="mt-8 p-6 bg-[#F5F5F5] rounded-lg"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="rounded-full bg-[#1976D2]/10 p-6">
                    <Icon name="Wallet" className="h-20 w-20 text-[#1976D2]" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">
                    Полностью бесплатно
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Мы не берем денег за вывоз техники. Это абсолютно бесплатная
                    услуга для всех жителей Губкина и ближайших районов.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-[#1976D2] mr-2"
                      />
                      <span>Бесплатный вывоз любой техники</span>
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-[#1976D2] mr-2"
                      />
                      <span>Никаких скрытых платежей</span>
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-[#1976D2] mr-2"
                      />
                      <span>Освобождение вашего пространства без затрат</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="eco"
              className="mt-8 p-6 bg-[#F5F5F5] rounded-lg"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="rounded-full bg-[#4CAF50]/10 p-6">
                    <Icon name="Leaf" className="h-20 w-20 text-[#4CAF50]" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">
                    Забота об экологии
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Мы гарантируем экологичную утилизацию техники. Ваша старая
                    техника не окажется на свалке, а будет правильно
                    переработана или отреставрирована.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-[#4CAF50] mr-2"
                      />
                      <span>Безопасная утилизация опасных элементов</span>
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-[#4CAF50] mr-2"
                      />
                      <span>
                        Переработка материалов для вторичного использования
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-[#4CAF50] mr-2"
                      />
                      <span>Сертифицированные методы утилизации</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="fast"
              className="mt-8 p-6 bg-[#F5F5F5] rounded-lg"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="rounded-full bg-[#FF9800]/10 p-6">
                    <Icon name="Timer" className="h-20 w-20 text-[#FF9800]" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Оперативный вывоз</h3>
                  <p className="text-gray-700 mb-4">
                    Мы ценим ваше время, поэтому организуем вывоз максимально
                    быстро. В большинстве случаев мы приезжаем на следующий день
                    после заявки.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-[#FF9800] mr-2"
                      />
                      <span>Быстрое согласование времени</span>
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-[#FF9800] mr-2"
                      />
                      <span>
                        Вывоз в день обращения (при наличии возможности)
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-[#FF9800] mr-2"
                      />
                      <span>Пунктуальность и ответственность</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="bg-gradient-to-br from-[#4CAF50] to-[#1976D2] p-8 text-white md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 font-playfair">
                  Оставьте заявку
                </h2>
                <p className="mb-8">
                  Заполните форму, и мы свяжемся с вами, чтобы договориться о
                  времени вывоза техники. Это бесплатно и займет всего несколько
                  минут.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon name="MapPin" className="h-6 w-6 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Адрес</h3>
                      <p>г. Губкин, Белгородская область</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Icon name="Phone" className="h-6 w-6 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Телефон</h3>
                      <p>+7 (919) 288-91-45</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Icon name="Clock" className="h-6 w-6 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg">Время работы</h3>
                      <p>Пн-Пт: 9:00 - 20:00</p>
                      <p>Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (XXX) XXX-XX-XX"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Что нужно вывезти
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Опишите технику, которую нужно вывезти, и укажите адрес"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#4CAF50] hover:bg-[#3d8c40]"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 font-playfair">
                Вывоз техники в Губкине
              </h3>
              <p className="max-w-md opacity-75">
                Бесплатный вывоз и утилизация старой техники и электроники в
                Губкине. Мы заботимся о вашем комфорте и окружающей среде.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">Контакты</h4>
                <ul className="space-y-2 opacity-75">
                  <li className="flex items-center">
                    <Icon name="Phone" className="h-4 w-4 mr-2" />
                    <span>+7 (919) 288-91-45</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="MapPin" className="h-4 w-4 mr-2" />
                    <span>г. Губкин, Белгородская область</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Навигация</h4>
                <ul className="space-y-2 opacity-75">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#4CAF50] transition-colors"
                    >
                      Главная
                    </a>
                  </li>
                  <li>
                    <a
                      href="#advantages"
                      className="hover:text-[#4CAF50] transition-colors"
                    >
                      Преимущества
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#4CAF50] transition-colors"
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="opacity-75 text-sm mb-4 md:mb-0">
              © 2025 Вывоз техники в Губкине. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#4CAF50] transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#4CAF50] transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#4CAF50] transition-colors"
              >
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
