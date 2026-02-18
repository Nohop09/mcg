import { Phone, Mail, MapPin } from "lucide-react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import TruckImage from "@/assets/images/truck.jpeg";

export default function Contacts() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-xl text-blue-100">
            Мы всегда на связи и готовы помочь
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Contact Phones */}
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-3">Телефоны</h3>
                      <div className="space-y-4">
                        <div className="p-4 pb-0 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">
                            Александр
                          </p>
                          <a
                            href="tel:+79998884686"
                            className="text-xl text-blue-600 hover:text-blue-700 transition-colors font-semibold block"
                          >
                            +7 (999) 888-46-86
                          </a>
                        </div>
                        <div className="p-4 pt-0 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">Павел</p>
                          <a
                            href="tel:+79292674959"
                            className="text-xl text-blue-600 hover:text-blue-700 transition-colors font-semibold block"
                          >
                            +7 (929) 267-49-59
                          </a>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        Работаем 24/7
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <a
                        href="mailto:moscowcargogroup@mail.ru"
                        className="text-lg text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        moscowcargogroup@mail.ru
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Ответим в течение часа
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Адрес</h3>
                      <p className="text-gray-700">
                        г. Москва, волжский бульвар 12к1
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Офис и складской комплекс
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messengers */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">
                  Напишите нам в мессенджер
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://t.me/+WEBqAwmddfgzOTky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#0088cc] text-white px-6 py-3 rounded-lg hover:bg-[#0077b5] transition-colors font-semibold"
                  >
                    <FaTelegram className="w-5 h-5" />
                    Telegram
                  </a>
                  <a
                    href="https://wa.me/79998884686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20BA5A] transition-colors font-semibold"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Image with CTA */}
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div
                  className="relative h-64 lg:h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${TruckImage})`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <h3 className="text-3xl font-bold mb-2">Работаем 24/7</h3>
                      <p className="text-lg">Всегда готовы помочь</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Быстрая связь</h3>
                  <p className="text-gray-700 mb-6">
                    Позвоните нам или напишите в мессенджер — мы ответим в
                    течение нескольких минут и поможем с расчётом стоимости
                    доставки вашего груза.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <p className="text-gray-700">
                        Свяжитесь удобным способом
                      </p>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <p className="text-gray-700">
                        Опишите ваш груз и маршрут
                      </p>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <p className="text-gray-700">
                        Получите расчёт и оформите заказ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Как нас найти</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.743328%2C55.713796&z=16&l=map&pt=37.743328,55.713796,pm2rdm"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg"
                title="Карта офиса Moscow Cargo Group"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-700 mb-2">
                <strong>г. Москва, волжский бульвар 12к1</strong>
              </p>
              <p className="text-gray-600">
                Удобная транспортная развязка, рядом с МКАД
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Режим работы</h2>
            <p className="text-xl mb-2">Работаем круглосуточно, без выходных</p>
            <p className="text-blue-100">
              Принимаем заказы 24/7 • Доставка в любое удобное для вас время
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
