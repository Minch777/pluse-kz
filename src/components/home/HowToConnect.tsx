'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { UserPlus, ArrowRight, Layers, CreditCard, Store, Calculator, Building2 } from 'lucide-react'

export default function HowToConnect() {
  return (
    <section className="py-16 bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Как подключиться к Pluse.kz
          </h2>
          <p className="mt-6 text-[#4A4A4A] text-lg">
            Подключение занимает 5 минут. Всё онлайн, без визита в банк и лишних документов.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Card 1 - Open Account */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
            className="relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="h-[240px] mb-8">
                <div className="bg-[#F9FAFF] rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E0FF4F] flex items-center justify-center">
                      <UserPlus className="w-5 h-5 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[#8F6ED5] font-medium">Регистрация</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[#4A4A4A]">ИИН директора</span>
                      <span className="text-[#1A1A1A] font-medium">✓</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#4A4A4A]">БИН компании</span>
                      <span className="text-[#1A1A1A] font-medium">✓</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#4A4A4A]">Документы</span>
                      <span className="text-[#8F6ED5] font-medium">Онлайн</span>
                    </div>
                    <div className="h-1 w-full bg-[#E5E5E5] rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-[#8F6ED5] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
                Откройте счёт
              </h3>
              <p className="text-[#4A4A4A] mb-8">
                Создайте аккаунт и откройте расчётный счёт онлайн за 5 минут. Без посещения банка.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center text-[#8F6ED5] font-medium group-hover:opacity-80 transition-all"
              >
                Открыть счёт
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[#F9FAFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Card 2 - All Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2
            }}
            className="relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="h-[240px] mb-8">
                <div className="bg-[#F9FAFF] rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E0FF4F] flex items-center justify-center">
                      <Layers className="w-5 h-5 text-[#1A1A1A]" />
                    </div>
                    <span className="text-[#8F6ED5] font-medium">Сервисы</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="w-4 h-4 text-[#8F6ED5]" />
                        <span className="text-sm text-[#1A1A1A]">BNPL</span>
                      </div>
                      <span className="text-xs text-[#4A4A4A]">Рассрочка 0%</span>
                    </div>
                    <div className="bg-white rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Store className="w-4 h-4 text-[#8F6ED5]" />
                        <span className="text-sm text-[#1A1A1A]">Магазин</span>
                      </div>
                      <span className="text-xs text-[#4A4A4A]">За 1 день</span>
                    </div>
                    <div className="bg-white rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Calculator className="w-4 h-4 text-[#8F6ED5]" />
                        <span className="text-sm text-[#1A1A1A]">Учёт</span>
                      </div>
                      <span className="text-xs text-[#4A4A4A]">Автоматически</span>
                    </div>
                    <div className="bg-white rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-4 h-4 text-[#8F6ED5]" />
                        <span className="text-sm text-[#1A1A1A]">Банкинг</span>
                      </div>
                      <span className="text-xs text-[#4A4A4A]">Онлайн</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
                Подключите сервисы
              </h3>
              <p className="text-[#4A4A4A] mb-8">
                Выберите нужные инструменты для вашего бизнеса. Всё работает из одного кабинета.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-[#8F6ED5] font-medium group-hover:opacity-80 transition-all"
              >
                Все сервисы
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[#F9FAFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 