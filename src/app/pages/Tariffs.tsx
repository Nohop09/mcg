import { Link } from "react-router";
import { Check } from "lucide-react";

export default function Tariffs() {
  const tariffs = [
    {
      name: "Внутри ТТК",
      price: "от 600 ₽",
      priceUnit: "за адрес",
      minRate: "8000 ₽",
      features: [
        "Минимальная ставка: 8000 рублей",
        "До 100 км — в рамках минимальной ставки",
        "Свыше 100 км — 30 руб/км",
        "До 1000 кг — в рамках минимальной ставки",
        "Свыше 1000 кг — 4 руб/кг",
      ],
      popular: false,
    },
    {
      name: "Вне ТТК (включая МКАД)",
      price: "от 500 ₽",
      priceUnit: "за адрес",
      minRate: "7000 ₽",
      features: [
        "Минимальная ставка: 7000 рублей",
        "До 120 км — в рамках минимальной ставки",
        "Свыше 120 км — 30 руб/км",
        "До 1500 кг — в рамках минимальной ставки",
        "Свыше 1500 кг — 4 руб/кг",
      ],
      popular: true,
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Тарифы на услуги
          </h1>
          <p className="text-xl text-blue-100">
            Прозрачное ценообразование без скрытых платежей
          </p>
        </div>
      </section>

      {/* Tariffs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tariffs.map((tariff, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                  tariff.popular ? "ring-2 ring-blue-600" : ""
                }`}
              >
                {tariff.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Популярный
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{tariff.name}</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-blue-600">
                        {tariff.price}
                      </span>
                      <span className="text-gray-600">{tariff.priceUnit}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      Минимальная ставка: {tariff.minRate}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contacts"
                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      tariff.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Оставить заявку
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Важная информация
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Итоговая стоимость зависит от:</strong>
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Количества адресов доставки</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Условий перевозки (этажность, наличие лифта, подъезд)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Типа груза (МГТ - малогабаритный, КГТ - крупногабаритный)
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Необходимости дополнительных услуг (грузчики, упаковка)
                  </span>
                </li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong className="text-blue-600">Примечание:</strong> Для
                  получения точного расчёта стоимости доставки вашего груза
                  свяжитесь с нашими менеджерами. Мы подберём оптимальный
                  вариант под ваши задачи.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Специальные предложения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  Постоянным клиентам
                </h3>
                <p className="text-blue-800">Скидки при регулярных отгрузках</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-green-900">
                  Большие объёмы
                </h3>
                <p className="text-green-800">
                  Индивидуальные тарифы при больших заказах
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-purple-900">
                  Долгосрочный договор
                </h3>
                <p className="text-purple-800">
                  Особые условия при заключении годового контракта
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Готовы рассчитать стоимость?
          </h2>
          <p className="text-xl mb-8">
            Свяжитесь с нами для индивидуального расчёта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacts"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Оставить заявку
            </Link>
            <a
              href="tel:+76972072478"
              className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
