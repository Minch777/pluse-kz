'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, Award, Building, LineChart, BarChart3, ArrowRight } from 'lucide-react'

export default function DigitalBranch() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative isolate pt-32 pb-20">
        {/* Radial gradient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_30%,_var(--tw-gradient-stops))] from-[#F0F4FF] via-white to-white opacity-90"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-6xl">
              О цифровом филиале
            </h1>
          </div>
        </div>
      </div>

      {/* About Bank Block */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 w-full bg-[radial-gradient(100%_50%_at_50%_0%,_var(--tw-gradient-stops))] from-[#F0F4FF] via-white to-white opacity-60"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative">
            {/* Logo positioned top right */}
            <div className="absolute top-0 right-0 w-48 h-16 bg-white rounded-xl shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/rbk_logo.png"
                alt="RBK Bank Logo"
                width={160}
                height={48}
                className="object-contain"
              />
            </div>

            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A] mb-8">
                О Банке
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-12">
                АО RBK Bank – один из крупнейших частных банков Казахстана. Работает с 1992 года. Обслуживает бизнес и частных клиентов.
              </p>

              {/* Ratings as modern badges */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#F0F4FF]">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="h-5 w-5 text-[#8F6ED5]" />
                    <span className="font-medium text-[#1A1A1A]">Moody's</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#1A1A1A]">Ba2</span>
                      <span className="text-sm text-[#4A4A4A]">депозиты</span>
                    </div>
                    <div className="text-sm text-[#4A4A4A]">Прогноз: стабильный</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#F0F4FF]">
                  <div className="flex items-center gap-3 mb-2">
                    <LineChart className="h-5 w-5 text-[#8F6ED5]" />
                    <span className="font-medium text-[#1A1A1A]">Moody's</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#1A1A1A]">Ba1</span>
                      <span className="text-sm text-[#4A4A4A]">контрагент</span>
                    </div>
                    <div className="text-sm text-[#4A4A4A]">12.09.2024</div>
                  </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Branch Block */}
      <section className="py-24 sm:py-32 bg-[#FDFCFB] relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 w-full bg-[radial-gradient(100%_50%_at_50%_100%,_var(--tw-gradient-stops))] from-[#F0F4FF] via-white to-white opacity-60"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A] mb-8">
                О цифровом филиале
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-12">
                Pluse.kz создан в партнерстве с RBK Bank, чтобы предприниматели могли открывать счет, управлять бизнесом и получать сервисы в одном месте. Все — онлайн, без бумажной волокиты.
              </p>

              <div className="inline-flex items-center gap-2 group">
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 rounded-2xl text-base font-medium bg-[#8F6ED5] text-white shadow-sm hover:bg-[#7C5CC3] transition-all duration-300"
                >
                  Все сервисы
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
        </div>
      </div>

            {/* Decorative element */}
            <div className="absolute top-0 right-0 -z-10 h-48 w-48 rounded-full bg-gradient-to-r from-[#8F6ED5] to-[#E0FF4F] opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-24 -z-10 h-32 w-32 rounded-full bg-gradient-to-r from-[#E0FF4F] to-[#8F6ED5] opacity-20 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Why People Trust Us */}
      <div id="trust" className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Почему нам доверяют предприниматели
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#E0FF4F] mb-6">
                <Award className="h-8 w-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                Резидент Astana Hub
              </h3>
              <p className="text-[#4A4A4A]">
                Мы развиваемся в крупнейшем IT-хабе Центральной Азии.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#8F6ED5] mb-6">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                Поддержка Tumar Ventures
              </h3>
              <p className="text-[#4A4A4A]">
                Наш проект поддерживает один из самых активных венчурных фондов Казахстана.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#E0FF4F] mb-6">
                <Building className="h-8 w-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                Партнер RBK Bank
              </h3>
              <p className="text-[#4A4A4A]">
                Все счета открываются через лицензированный казахстанский банк.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Хотите стать партнером?
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A]">
              Пишите нам на partner@pluse.kz или в WhatsApp.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/77001112233"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Написать в WhatsApp
              </a>
              <Link
                href="/"
                className="bg-white text-[#1A1A1A] px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
              >
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 