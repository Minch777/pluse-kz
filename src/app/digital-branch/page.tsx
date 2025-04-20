'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, Award, Building } from 'lucide-react'

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

      {/* Introduction Block */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Pluse.kz — необанк для предпринимателей
              </h2>
              <p className="mt-6 text-lg text-[#4A4A4A] leading-relaxed">
                Цифровой филиал Pluse.kz создан в партнёрстве с RBK Bank, чтобы предприниматели могли открывать счёт, управлять бизнесом и получать сервисы в одном месте. Всё — онлайн, без бумажной волокиты.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[#F0F4FF] blur-3xl opacity-70"></div>
                <Image
                  src="/entrepreneur.svg"
                  alt="Предприниматель с сервисами Pluse.kz"
                  width={500}
                  height={500}
                  className="relative z-10 w-auto h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why People Trust Us */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
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
                Партнёр RBK Bank
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
              Хотите стать партнёром?
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