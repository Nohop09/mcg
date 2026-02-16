import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import HomeImage from "@/assets/images/home.jpeg";
import WarehouseImage from "@/assets/images/warehouse.jpeg";
import BoxesImage from "@/assets/images/boxes.jpeg";
import MovingImage from "@/assets/images/moving.jpeg";
import PlanesImage from "@/assets/images/planes.jpeg";
import TruckImage from "@/assets/images/truck.jpeg";

export default function Services() {
  const services = [
    {
      title: "Грузоперевозки по Москве и Московской области",
      description:
        "Доставка любых грузов по Москве в пределах ТТК, МКАД и Московской области. Работаем с МГТ и КГТ.",
      image: HomeImage,
    },
    {
      title: "Грузоперевозки с грузчиками",
      description:
        "Комплексная услуга доставки груза с погрузкой и разгрузкой. Профессиональные грузчики с опытом работы.",
      image: WarehouseImage,
    },
    {
      title: "Организация переезда",
      description:
        "Организуем квартирный или офисный переезд под ключ. Упаковка, транспортировка, сборка мебели.",
      image: MovingImage,
    },
    {
      title: "Перевозка сборных грузов",
      description:
        "Экономичная доставка небольших партий товара. Оптимизируем маршруты для снижения стоимости.",
      image: BoxesImage,
    },
    {
      title: "Экспедирование грузов",
      description:
        "Полное сопровождение груза от отправки до получения. Контроль на каждом этапе доставки.",
      image: PlanesImage,
    },
    {
      title: "Перевозка специализированных грузов",
      description:
        "Перевозка бытовой техники, воды, торгового и промышленного оборудования с соблюдением всех норм.",
      image: TruckImage,
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Наши услуги</h1>
          <p className="text-xl text-blue-100">
            Полный спектр логистических услуг для вашего бизнеса
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/contacts"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Подробнее
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Специализация компании
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-4">
                Moscow Cargo Group специализируется на перевозке:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Бытовой техники всех типов и размеров</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Питьевой воды и напитков в больших объемах</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Торгового оборудования для магазинов и ТЦ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Промышленного оборудования и комплектующих</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Нужна консультация?
          </h2>
          <p className="text-xl mb-8">
            Оставьте заявку, и мы подберём оптимальное решение для вашего груза
          </p>
          <Link
            to="/contacts"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Оставить заявку
          </Link>
        </div>
      </section>
    </div>
  );
}
