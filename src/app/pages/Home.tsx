import { Link } from "react-router";
import HomeImage from "@/assets/images/home.jpeg";
import {
  Truck,
  Clock,
  DollarSign,
  Users,
  FileText,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  const advantages = [
    {
      icon: Truck,
      title: "Собственный автопарк",
      description: "Более 35 единиц современной техники",
    },
    {
      icon: DollarSign,
      title: "Гибкие тарифы",
      description: "Индивидуальный подход к каждому клиенту",
    },
    {
      icon: Clock,
      title: "Работа 24/7",
      description: "Доступны в любое время суток",
    },
    {
      icon: TrendingUp,
      title: "Быстрая интеграция с клиентами",
      description: "Подключение за 1-2 дня",
    },
    {
      icon: FileText,
      title: "Отчётность ежедневно",
      description: "Полная прозрачность операций",
    },
    {
      icon: Users,
      title: "Профессиональная команда",
      description: "Опыт работы более 8 лет",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Заключаем договор",
      description: "Быстрое юридическое оформление сотрудничества",
    },
    {
      number: "02",
      title: "Принимаем заказы",
      description: "Интеграция с вашими системами",
    },
    {
      number: "03",
      title: "Принимаем товар",
      description: "Самозабор или доставка на наш склад",
    },
    {
      number: "04",
      title: "Предоставляем отчёт",
      description: "Ежедневная отчётность по всем доставкам",
    },
  ];

  const partners = [
    "Мосводовоз",
    "Водовоз Маркет",
    "Камилла Мед",
    "Корпорация Окна 21 Века",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HomeImage})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Грузоперевозки по Москве и Московской области
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8">
              Доставка любого груза — МГТ и КГТ. Работаем более 8 лет
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/tariffs"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Рассчитать стоимость
              </Link>
              <Link
                to="/contacts"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-gray-700 mb-8">
              Moscow Cargo Group — транспортная компания, осуществляющая
              доставку любого товара, включая крупногабаритные (КГТ) и
              малогабаритные грузы (МГТ) по Москве и Московской области.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
                <div className="text-gray-700">лет опыта работы</div>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">35+</div>
                <div className="text-gray-700">единиц техники</div>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-700">работаем круглосуточно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Этапы работы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Наши партнёры
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center"
              >
                <p className="font-semibold text-gray-700">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl mb-8">Свяжитесь с нами прямо сейчас</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tariffs"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Узнать тарифы
            </Link>
            <Link
              to="/contacts"
              className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
