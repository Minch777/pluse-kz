'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Check, ArrowRight, PhoneCall, Smartphone, Sofa, GraduationCap, Stethoscope, Home, ShoppingBag, ShieldCheck, PiggyBank, MapPin, CreditCard, UserRound, Calendar, Banknote, Percent, QrCode, Headset } from 'lucide-react'

export default function BnplPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData)
    // Сбросить форму
    setFormData({ name: '', phone: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative isolate pt-32 pb-20 overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_30%,_var(--tw-gradient-stops))] from-[#F0F4FF] via-white to-white opacity-90"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl leading-tight">
                Продавайте в рассрочку не теряя прибыль
              </h1>
              <p className="mt-6 text-lg text-[#6B6B6B] leading-relaxed">
                Запустите рассрочку за 1 день — <br className="hidden md:block" />
                без бумажек и сложностей
              </p>
              <div className="mt-10">
                <a
                  href="https://wa.me/77001112233?text=Здравствуйте!%20Хочу%20узнать%20условия%20рассрочки%20BNPL%20от%20Pluse.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 gap-2"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <path d="M17.6 6.32A8.86 8.86 0 0 0 12.04 4C7.58 4 4 7.58 4 12.04C4 13.84 4.52 15.56 5.5 17L4 20.5L7.6 19.02C9.02 19.92 10.48 20.38 12.04 20.38C16.5 20.38 20.38 16.8 20.38 12.34C20.38 9.5 19.38 7.04 17.6 6.32ZM12.04 18.98C10.62 18.98 9.26 18.54 8.1 17.7L7.82 17.52L5.86 18.34L6.68 16.44L6.44 16.1C5.52 14.9 5.02 13.48 5.02 12.04C5.02 8.12 8.12 5.02 12.04 5.02C15.96 5.02 18.96 8.12 18.96 12.04C18.96 15.96 15.94 18.98 12.04 18.98Z" fill="currentColor"/>
                  </svg>
                  Получить условия в WhatsApp
                </a>
                <p className="mt-3 text-sm text-[#6B6B6B]">Ответим в течение 5 минут</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Декоративные элементы вокруг телефона */}
                <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F0F4FF] via-[#FCFCFC] to-[#FFF8E0] opacity-80"></div>
                
                {/* Декоративные точки и символы */}
                <div className="absolute -z-10 top-12 left-0 w-3 h-3 rounded-full bg-[#8F6ED5]"></div>
                <div className="absolute -z-10 bottom-24 left-4 w-3 h-3 rounded-full bg-[#8F6ED5]"></div>
                <div className="absolute -z-10 top-1/4 right-8 w-4 h-4 text-[#8F6ED5] opacity-40">✱</div>
                <div className="absolute -z-10 bottom-1/3 right-4 w-6 h-6 border border-[#8F6ED5] rounded-full opacity-30"></div>
                <div className="absolute -z-10 top-2/3 right-12 w-3 h-3 rounded-full bg-[#FFD662]"></div>
                
                {/* Телефон с наклоном */}
                <div className="relative w-72 h-[580px] transform rotate-[-5deg] perspective-1000">
                  <div className="w-full h-full bg-black rounded-[40px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.18)] border-[8px] border-black">
                    <div className="w-full h-full bg-white rounded-[32px] p-4 flex flex-col">
                      {/* Вырез под камеру */}
                      <div className="w-32 h-6 bg-black rounded-full mx-auto mb-8"></div>
                      
                      {/* Контент экрана */}
                      <div className="flex-grow flex flex-col items-center justify-start pt-6">
                        {/* QR код с фиолетовым фоном */}
                        <div className="w-48 h-48 bg-[#F0F4FF] rounded-2xl flex items-center justify-center mb-6">
                          <div className="w-40 h-40 flex flex-col items-center justify-center">
                            <div className="w-32 h-32 bg-white p-2 mb-2">
                              <svg viewBox="0 0 100 100" className="w-full h-full">
                                {/* Стилизованный QR-код */}
                                <rect x="10" y="10" width="80" height="80" fill="none" stroke="black" strokeWidth="4" />
                                <rect x="20" y="20" width="20" height="20" fill="black" />
                                <rect x="60" y="20" width="20" height="20" fill="black" />
                                <rect x="20" y="60" width="20" height="20" fill="black" />
                                <rect x="25" y="25" width="10" height="10" fill="white" />
                                <rect x="65" y="25" width="10" height="10" fill="white" />
                                <rect x="25" y="65" width="10" height="10" fill="white" />
                                <rect x="40" y="40" width="20" height="20" fill="black" />
                                <rect x="60" y="50" width="10" height="10" fill="black" />
                                <rect x="50" y="60" width="10" height="10" fill="black" />
                                <rect x="60" y="70" width="10" height="10" fill="black" />
                                <rect x="70" y="60" width="10" height="10" fill="black" />
                              </svg>
                            </div>
                            <p className="text-xs text-center font-medium">
                              QR-код для оплаты
                            </p>
                          </div>
                        </div>
                        
                        {/* Сумма */}
                        <div className="w-full text-center mb-1">
                          <h2 className="text-4xl font-bold text-[#1A1A1A]">250 000 ₸</h2>
                        </div>
                        
                        {/* Имя */}
                        <div className="w-full text-center mb-8">
                          <p className="text-[#6B6B6B]">Анна Иванова</p>
                        </div>
                        
                        {/* Кнопка */}
                        <div className="w-full px-12">
                          <button className="w-full h-14 bg-[#8F6ED5] rounded-full flex items-center justify-center text-white font-medium">
                            Оставить
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Проблемы предпринимателей */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Проблемы, которые мы решаем
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '80% покупателей приходят без денег',
                description: 'Не отдавайте клиента конкурентам — подключите рассрочку за 1 день.'
              },
              {
                title: 'У клиента везде отказ',
                description: 'Больше шансов на одобрение — благодаря выписке из банка.'
              },
              {
                title: 'Теряете прибыль на процентах банка',
                description: 'Теперь вы сами решаете, какие товары и под какой процент продавать.'
              },
              {
                title: 'Зависимость от "соседа"',
                description: 'Перестаньте отдавать маржу чужому ИП — подключаем даже без оборота.'
              },
              {
                title: 'Защитим от блокировок',
                description: 'Продажи не проседают из-за "мелочи", мы решаем, а не выгоняем.'
              },
              {
                title: 'Ответов по неделям — не будет',
                description: 'Отвечаем быстро, как будто сами теряем клиента.'
              }
            ].map((card, index) => (
              <div key={index} className='bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300'>
                <h3 className='text-xl font-semibold text-[#1A1A1A] mb-3'>
                  {card.title}
                </h3>
                <p className='text-[#6B6B6B]'>
                  {card.description}
                </p>
              </div>
            ))}

            {/* Спецблок */}
            <div className="md:col-span-2 lg:col-span-3 bg-[#E0FF4F] rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                    Продавай с комиссией 0%
                  </h3>
                  <p className="text-[#1A1A1A]">
                    Первые 14 дней после подключения.
                  </p>
                </div>
                <a
                  href="https://wa.me/77001112233?text=Здравствуйте!%20Хочу%20активировать%200%%20на%20BNPL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#1A1A1A] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 gap-2"
                >
                  Активировать 0%
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Повышаем шансы на одобрение */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl mb-6">
                Повышаем шанс одобрения для ваших клиентов
              </h2>
              <p className="text-lg text-[#6B6B6B] leading-relaxed">
                Выписка из банка — это онлайн-справка о доходах и расходах клиента, которую можно выгрузить за 1 минуту через приложение банка. Только через сервис Pluse.kz можно подгрузить выписку при подаче заявки, чтобы подтвердить платёжеспособность и повысить вероятность одобрения.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-[0_16px_50px_rgba(0,0,0,0.08)] p-6 max-w-md">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                    Выберите банк
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Kaspi.kz", 'Halyk'].map((bank, i) => (
                      <div key={i} className={`rounded-lg border ${i === 0 ? 'border-[#8F6ED5] bg-[#F9F5FF]' : 'border-[#E0E0E0]'} p-3 text-center text-sm font-medium ${i === 0 ? 'text-[#8F6ED5]' : 'text-[#6B6B6B]'}`}>
                        {bank}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-2 border-dashed border-[#E0E0E0] rounded-lg p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F0F4FF] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8F6ED5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8V16" stroke="#8F6ED5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12H16" stroke="#8F6ED5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[#6B6B6B] mb-4">
                    Загрузите выписку в формате PDF
                  </p>
                  <button className="bg-[#8F6ED5] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                    Выбрать файл
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Вы выбираете, как продавать */}
      <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-[#F9F9F9]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl mb-4">
                  Вы выбираете, как продавать
                </h2>
                <p className="text-lg text-[#6B6B6B]">
                  Подключение бесплатно. Вы сами выбираете: рассрочку или кредит, срок и сумму продажи — всё под ваш контроль.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <CreditCard className="h-6 w-6 text-[#8F6ED5]" />,
                    title: "Подключение бесплатно",
                    description: 'Не требует интеграций или бумаг — начните в тот же день'
                  },
                  {
                    icon: <Check className="h-6 w-6 text-[#8F6ED5]" />,
                    title: "Вы сами выбираете: рассрочка или кредит",
                    description: 'Клиенту удобно, вам выгодно'
                  },
                  {
                    icon: <Calendar className="h-6 w-6 text-[#8F6ED5]" />,
                    title: "Продавайте на срок от 3 до 36 месяцев",
                    description: 'Подходит для разных цен и чеков'
                  },
                  {
                    icon: <Banknote className="h-6 w-6 text-[#8F6ED5]" />,
                    title: "Сумма до 3 000 000 ₸ на одного покупателя",
                    description: 'Продавайте дорогие товары без стресса'
                  },
                  {
                    icon: <Percent className="h-6 w-6 text-[#8F6ED5]" />,
                    title: "Минимальная комиссия — от 3%",
                    description: 'И никаких скрытых платежей'
                  },
                  {
                    icon: <QrCode className="h-6 w-6 text-[#8F6ED5]" />,
                    title: "Клиент сам заполняет заявку по QR или ссылке",
                    description: 'Заявка оформляется за 1–2 минуты'
                  },
                  {
                    icon: <Headset className="h-6 w-6 text-[#8F6ED5]" />,
                    title: "Персональный менеджер под вашу сферу",
                    description: 'Поможет быстро решить любые вопросы'
                  }
                ].map((card, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F4FF] mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#6B6B6B]">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 hidden lg:block">
              <div className="h-full w-full flex items-center justify-center">
                <Image
                  src="/pers_bnpl.png"
                  alt="Персональный менеджер"
                  width={600}
                  height={800}
                  className="h-full w-auto object-contain"
                  style={{ maxHeight: "calc(100%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Преимущества */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Рассрочка на ваших условиях — вместе с Pluse.kz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Вы определяете срок и процент для продажи",
              '0% комиссии — 2 недели после подключения',
              'Выписка клиента повышает вероятность одобрения',
              'Меньший % банку — больше прибыли',
              '12 и 24 мес. рассрочка всегда доступна',
              'Персональный менеджер вместо колл-центра'
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F4FF] mb-4">
                  <Check className="h-6 w-6 text-[#8F6ED5]" />
                </div>
                <p className="text-lg font-medium text-[#1A1A1A]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Кому подойдёт секция */}
      <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-[#F9F9F9]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              В каких нишах подойдет
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Smartphone className="h-6 w-6 text-[#8F6ED5]" />,
                title: 'Электроника и техника',
                description: 'Смартфоны, ноутбуки, гаджеты — рассрочка помогает продать больше.'
              },
              {
                icon: <Sofa className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Мебель и интерьер",
                description: 'Диваны, кухни, матрасы — большинство клиентов предпочитает оплату частями.'
              },
              {
                icon: <GraduationCap className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Образование и курсы",
                description: 'Онлайн-школы, тренинги и репетиторы — повысьте конверсию за счёт рассрочки.'
              },
              {
                icon: <Stethoscope className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Медицинские центры и стоматология",
                description: 'Рассрочка позволяет пациентам проходить лечение без стресса.'
              },
              {
                icon: <Home className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Товары для дома и хобби",
                description: 'Увлечения, спорт, ремонт и декор — клиенты готовы платить частями.'
              },
              {
                icon: <ShoppingBag className="h-6 w-6 text-[#8F6ED5]" />,
                title: "Любой онлайн- или офлайн-бизнес",
                description: 'Подключите рассрочку и увеличьте продажи независимо от вашей сферы.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F4FF] mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#6B6B6B]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#6B6B6B] text-lg">
              Если вы продаёте от 50 000 ₸ — рассрочка поможет увеличить конверсию
            </p>
          </div>
        </div>
      </div>

      {/* Почему нам доверяют */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Почему нам доверяют предприниматели
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A]">
              Pluse.kz сочетает банковскую надёжность, венчурную поддержку и активное сообщество
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl gap-8 lg:mx-0 lg:max-w-none">
            {/* Main card */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-start gap-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#F0F4FF]">
                  <ShieldCheck className="h-8 w-8 text-[#8F6ED5]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1A1A1A]">
                    Pluse.kz — цифровой филиал RBK Bank
                  </h3>
                  <p className="mt-3 text-[#4A4A4A]">
                    Счета и операции открываются через лицензированный банк
                  </p>
                </div>
                <Image
                  src="/rbk_logo.png"
                  alt="RBK Bank"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain opacity-80"
                />
              </div>
            </div>

            {/* Secondary cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#E0FF4F]">
                    <PiggyBank className="h-8 w-8 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">
                      Фонд Tumar Ventures — среди наших инвесторов
                    </h3>
                    <p className="mt-2 text-[#4A4A4A]">
                      Tumar поддерживает сильные и масштабируемые стартапы
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#E0FF4F]">
                    <MapPin className="h-8 w-8 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">
                      Pluse.kz — резидент крупнейшего технопарка ЦА
                    </h3>
                    <p className="mt-2 text-[#4A4A4A]">
                      Мы развиваемся в Astana Hub — главном IT-хабе региона
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partners and stats */}
          <div className="mt-16 flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center items-center gap-12">
              <Image
                src="/rbk_logo.png"
                alt="RBK Bank"
                width={120}
                height={40}
                className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
              />
              <Image
                src="/tumar_logo.png"
                alt="Tumar Ventures"
                width={120}
                height={40}
                className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
              />
              <Image
                src="/astanahub_logo.png"
                alt="Astana Hub"
                width={120}
                height={40}
                className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1 w-1 rounded-full bg-[#8F6ED5]"></div>
              <p className="text-[#4A4A4A] text-lg">
                100+ предпринимателей уже с нами
              </p>
              <div className="h-1 w-1 rounded-full bg-[#8F6ED5]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Форма заявки */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
                Подключите рассрочку и увеличьте продажи уже сегодня
              </h2>
              <p className="mt-4 text-lg text-[#6B6B6B] mb-8">
                Оставьте номер, и мы пришлём условия в WhatsApp
              </p>

              <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#6B6B6B] text-sm mb-2">Имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8F6ED5] focus:border-transparent transition"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-[#6B6B6B] text-sm mb-2">Номер WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8F6ED5] focus:border-transparent transition"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="bg-[#8F6ED5] text-white px-6 py-3 rounded-xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                  >
                    Отправить
                  </button>
                  <a
                    href="https://wa.me/77001112233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-6 py-3 rounded-xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6 6.32A8.86 8.86 0 0 0 12.04 4C7.58 4 4 7.58 4 12.04C4 13.84 4.52 15.56 5.5 17L4 20.5L7.6 19.02C9.02 19.92 10.48 20.38 12.04 20.38C16.5 20.38 20.38 16.8 20.38 12.34C20.38 9.5 19.38 7.04 17.6 6.32ZM12.04 18.98C10.62 18.98 9.26 18.54 8.1 17.7L7.82 17.52L5.86 18.34L6.68 16.44L6.44 16.1C5.52 14.9 5.02 13.48 5.02 12.04C5.02 8.12 8.12 5.02 12.04 5.02C15.96 5.02 18.96 8.12 18.96 12.04C18.96 15.96 15.94 18.98 12.04 18.98ZM15.84 13.42C15.64 13.32 14.56 12.8 14.38 12.72C14.18 12.64 14.06 12.62 13.92 12.82C13.78 13.02 13.42 13.48 13.28 13.64C13.14 13.8 13.04 13.82 12.84 13.72C12.14 13.38 11.66 13.12 11.16 12.34C10.78 11.76 10.96 11.88 10.68 11.34C10.64 11.2 10.6 11.08 10.54 10.94C10.48 10.8 10.34 10.52 10.22 10.24C10.08 9.96 9.96 10.08 9.82 10.08C9.68 10.08 9.56 10.08 9.42 10.08C9.28 10.08 9.08 10.18 8.9 10.38C8.72 10.58 8.16 11.1 8.16 12.18C8.16 13.26 8.94 14.3 9.04 14.44C9.14 14.58 10.96 17.4 13.76 18.56C15.36 19.32 15.96 19.38 16.72 19.24C17.16 19.16 18.04 18.7 18.24 18.18C18.44 17.66 18.44 17.22 18.38 17.12C18.32 17.02 18.2 16.98 18 16.88C17.8 16.78 16.8 16.28 16.6 16.18C16.4 16.08 16.28 16.04 16.14 16.24C16 16.44 15.64 16.9 15.5 17.04C15.36 17.18 15.26 17.22 15.06 17.12C14.36 16.78 13.88 16.52 13.38 15.74C13 15.26 12.74 14.68 12.6 14.48C12.4 13.96 12.94 13.96 13.44 12.96C13.52 12.82 13.44 12.72 13.38 12.62C13.32 12.52 13.04 11.84 12.84 11.44C12.64 11.04 12.44 11.12 12.3 11.12C12.16 11.12 12.04 11.08 11.9 11.08C11.76 11.08 11.52 11.12 11.34 11.32C11.16 11.52 10.56 12.04 10.56 13.12C10.56 14.2 11.32 15.26 11.42 15.4C11.52 15.54 13.38 18.38 16.16 19.54C17.76 20.3 18.36 20.36 19.12 20.22C19.54 20.14 20.44 19.68 20.64 19.16C20.84 18.64 20.84 18.2 20.78 18.1C20.72 18 20.6 17.96 20.4 17.86C20.2 17.76 19.2 17.26 19 17.16C18.8 17.06 18.68 17.02 18.54 17.22C18.4 17.42 18.04 17.88 17.9 18.02C17.76 18.16 17.66 18.2 17.46 18.1C16.76 17.76 16.28 17.5 15.78 16.72C15.4 16.24 15.14 15.66 15 15.46C14.8 14.94 15.34 14.94 15.84 13.94C15.92 13.8 15.84 13.7 15.78 13.6C15.74 13.52 15.48 12.84 15.28 12.44C15.08 12.04 14.88 12.12 14.74 12.12C14.6 12.12 14.48 12.08 14.34 12.08C14.2 12.08 13.96 12.12 13.78 12.32C13.6 12.52 13 13.04 13 14.12C13 15.2 13.76 16.26 13.86 16.4C13.96 16.54 15.84 19.38 18.64 20.54C20.24 21.3 20.84 21.36 21.6 21.22C22.04 21.14 22.94 20.68 23.14 20.16C23.34 19.64 23.34 19.2 23.28 19.1C23.22 19 23.1 18.96 22.9 18.86C22.7 18.76 21.94 18.32 21.74 18.22C21.54 18.12 21.42 18.08 21.28 18.28C21.14 18.48 20.78 18.94 20.64 19.08C20.5 19.22 20.4 19.26 20.2 19.16C19.5 18.82 19.02 18.56 18.52 17.78C18.14 17.3 17.88 16.72 17.74 16.52C17.54 16 18.08 16 18.58 15C18.66 14.86 18.58 14.76 18.52 14.66C18.46 14.56 18.2 13.88 18 13.48C17.8 13.08 17.6 13.16 17.46 13.16C17.32 13.16 17.2 13.12 17.06 13.12C16.92 13.12 16.68 13.16 16.5 13.36C16.32 13.56 15.72 14.08 15.72 15.16C15.72 16.24 16.48 17.3 16.58 17.44C16.68 17.58 18.56 20.42 21.36 21.58C22.98 22.34 23.58 22.4 24.34 22.26C24.78 22.18 25.68 21.72 25.88 21.2C26.08 20.68 26.08 20.24 26.02 20.14C25.96 20.04 25.84 19.98 25.64 19.9C25.44 19.8 24.44 19.28 24.24 19.18C24.04 19.08 23.92 19.04 23.78 19.24C23.64 19.44 23.28 19.9 23.14 20.04C23 20.18 22.9 20.22 22.7 20.12C22 19.78 21.52 19.52 21.02 18.74C20.64 18.26 20.38 17.68 20.24 17.48C20.04 16.96 20.58 16.96 21.08 15.96C21.16 15.82 21.08 15.72 21.02 15.62C20.96 15.52 20.7 14.84 20.5 14.44" fill="currentColor"/>
                    </svg>
                    Написать в WhatsApp
                  </a>
                </div>
              </form>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#F0F4FF] blur-3xl opacity-70"></div>
                <div className="relative w-64 h-[500px] bg-[#1A1A1A] rounded-[40px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.14)] border-[8px] border-[#1A1A1A]">
                  <div className="w-full h-full bg-white rounded-[32px] p-4 flex flex-col">
                    <div className="w-32 h-8 bg-[#1A1A1A] rounded-full mx-auto"></div>
                    <div className="flex-grow flex flex-col justify-center items-center p-4">
                      <div className="w-36 h-36 bg-[#F0F4FF] rounded-lg flex items-center justify-center mb-4">
                        <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center border border-[#E0E0E0]">
                          <div className="text-xs text-center">
                            QR код<br />для оформления<br />рассрочки
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-10 bg-[#F0F4FF] rounded-lg mb-2"></div>
                      <div className="w-3/4 h-10 bg-[#F0F4FF] rounded-lg mb-8"></div>
                      <div className="w-full h-14 bg-[#8F6ED5] rounded-xl flex items-center justify-center text-white font-medium">
                        Оформить
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 