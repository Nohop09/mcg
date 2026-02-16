import { Link } from "react-router";
import { Truck, Users, Shield, CheckCircle, Award, Clock } from "lucide-react";

export default function About() {
  const vehicles = [
    {
      name: "Газель Business / NEXT",
      capacity: "1.5 тонны",
      features: [
        "Грузоподъёмность до 1.5т",
        "Объём кузова до 18 м³",
        "Городская доставка",
      ],
    },
    {
      name: "Ford Transit",
      capacity: "2 тонны",
      features: [
        "Грузоподъёмность до 2т",
        "Объём кузова до 20 м³",
        "Средние грузы",
      ],
    },
    {
      name: "Fiat Ducato",
      capacity: "2.5 тонны",
      features: [
        "Грузоподъёмность до 2.5т",
        "Объём кузова до 22 м³",
        "Крупногабаритные грузы",
      ],
    },
    {
      name: "Микрогрузовики",
      capacity: "400-800 кг",
      features: [
        "Компактный размер",
        "Проезд в узких дворах",
        "Быстрая доставка",
      ],
    },
  ];

  const advantages = [
    {
      icon: Users,
      title: "Подбор экипажа под задачи",
      description:
        "Индивидуальный подход к каждому заказу. Подбираем водителей и грузчиков исходя из специфики вашего груза.",
    },
    {
      icon: Shield,
      title: "Водители с документами",
      description:
        "Все водители имеют необходимые документы, медицинские книжки и опыт работы от 3 лет.",
    },
    {
      icon: Truck,
      title: "Работа по Москве и области",
      description:
        "Осуществляем доставку по всей Москве, в пределах МКАД, ТТК и Московской области.",
    },
    {
      icon: Clock,
      title: "Готовность 24/7",
      description:
        "Принимаем заказы круглосуточно. Готовы к сотрудничеству в любое время суток.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">О компании</h1>
          <p className="text-xl text-blue-100">
            Moscow Cargo Group — ваш надёжный партнёр в грузоперевозках
          </p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Наша компания
              </h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Moscow cargo group</strong> — транспортная компания,
                  специализирующаяся на грузоперевозках по Москве и Московской
                  области.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Мы работаем на рынке логистических услуг более 8 лет и за это
                  время заслужили доверие десятков компаний, став их надёжным
                  партнёром в области доставки грузов.
                </p>
                <p className="text-lg text-gray-700">
                  Наша специализация — перевозка бытовой техники, воды,
                  торгового и промышленного оборудования. Мы работаем как с
                  крупногабаритными (КГТ), так и с малогабаритными грузами
                  (МГТ).
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
                <div className="text-gray-700">лет на рынке</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">35+</div>
                <div className="text-gray-700">единиц техники</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  1000+
                </div>
                <div className="text-gray-700">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Наш автопарк</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Современный автопарк, регулярное техобслуживание и опытные водители
            — гарантия сохранности вашего груза
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{vehicle.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {vehicle.capacity}
                </p>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block bg-blue-50 px-6 py-3 rounded-lg">
              <p className="text-gray-700">
                <strong className="text-blue-600">Дополнительно:</strong>{" "}
                Автомобили грузоподъёмностью до 10 тонн под специальные задачи
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Наша специализация
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Типы грузов
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Бытовая техника</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Питьевая вода</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Торговое оборудование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Промышленное оборудование</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Направления работы
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Доставка коммерческих грузов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Доставка личных вещей и покупок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Экспедирование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Складская логистика</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-16 h-16" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-center">
              Наши стандарты качества
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Пунктуальность</h4>
                  <p className="text-blue-100">
                    Доставка строго в согласованное время
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Сохранность груза</h4>
                  <p className="text-blue-100">
                    Бережная транспортировка любых грузов
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Полная отчётность</h4>
                  <p className="text-blue-100">
                    Ежедневные отчёты о каждой доставке
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Прозрачность</h4>
                  <p className="text-blue-100">
                    Честные цены без скрытых платежей
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Готовы стать нашим партнёром?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Свяжитесь с нами для обсуждения условий сотрудничества
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacts"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Связаться с нами
            </Link>
            <Link
              to="/tariffs"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors border-2 border-blue-600"
            >
              Посмотреть тарифы
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
