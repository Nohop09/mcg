import { Link } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Moscow Cargo Group
            </h3>
            <p className="text-sm mb-4">
              Транспортная компания с более чем 8-летним опытом работы в сфере
              грузоперевозок.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Навигация</h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Главная
              </Link>
              <Link
                to="/services"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Услуги
              </Link>
              <Link
                to="/tariffs"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Тарифы
              </Link>
              <Link
                to="/about"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                О компании
              </Link>
              <Link
                to="/contacts"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Контакты
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Услуги</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Грузоперевозки по Москве</li>
              <li>Перевозка с грузчиками</li>
              <li>Организация переезда</li>
              <li>Экспедирование грузов</li>
              <li>Перевозка КГТ и МГТ</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+79998884686"
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +7 (999) 888-46-86
              </a>
              <a
                href="mailto:moscowcargogroup@mail.ru"
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                moscowcargogroup@mail.ru
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>г. Москва, волжский бульвар 12к1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© 2026 Moscow Cargo Group. Все права защищены.</p>
          <p className="mt-2">Работаем 24/7 для вашего удобства</p>
        </div>
      </div>
    </footer>
  );
}
