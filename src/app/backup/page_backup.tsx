'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheck, PiggyBank, MapPin, Users, MessageCircle, Briefcase, UserPlus, Layers, Rocket, ChevronDown, Mail, Instagram, Menu } from 'lucide-react'

const bnplStats = [
  { id: 1, text: '82 заявки одобрено за месяц' },
  { id: 2, text: '15 заявок одобрено сегодня' },
  { id: 3, text: 'Средняя сумма — 240 000 ₸' },
]

const shopStats = [
  { id: 1, text: 'Магазин создан: pluse.market/demo' },
  { id: 2, text: 'Открыт магазин по продаже техники' },
  { id: 3, text: 'Первый заказ оформлен через 2 часа' },
]

const services = [
  {
    id: 'bnpl',
    icon: '💳',
    name: 'BNPL (рассрочка)',
    title: 'Продавайте больше — клиенты платят частями',
    description: 'Вы получаете деньги сразу. 0% для клиента. Одобрение за 10 минут.',
    href: '/bnpl',
    cta: 'Подключить BNPL'
  },
  {
    id: 'shopping',
    icon: '🛍',
    name: 'Pluse.Shopping',
    title: 'Интернет-магазин под ключ за 1 день',
    description: 'Встроенные оплата, доставка и рассрочка. Всё уже готово.',
    href: '/shopping',
    cta: 'Создать магазин'
  },
  {
    id: 'accounting',
    icon: '🧾',
    name: 'Онлайн-бухгалтерия',
    title: 'Бухгалтерия, которая считает за вас',
    description: 'Синхронизация с налоговой, автоматические отчёты и напоминания.',
    href: '/accounting',
    cta: 'Попробовать бесплатно'
  },
  {
    id: 'other',
    icon: '🧩',
    name: 'Другие сервисы',
    title: 'Дополнительные инструменты для роста',
    description: 'Бизнес-карта, проверка контрагентов, подключение расчётного счёта.',
    href: '/services',
    cta: 'Посмотреть все сервисы'
  },
]

const trustCards = [
  {
    id: 'reliability',
    icon: ShieldCheck,
    color: 'bg-[#7C3AED]',
    title: 'Pluse.kz — цифровой филиал RBK Bank',
    description: 'Все счета и операции открываются через лицензированный банк'
  },
  {
    id: 'investors',
    icon: PiggyBank,
    color: 'bg-[#FACC15]',
    title: 'Нас профинансировал фонд Tumar Ventures',
    description: 'Фонд инвестирует в сильные и масштабируемые финтех-стартапы'
  },
  {
    id: 'astana-hub',
    icon: MapPin,
    color: 'bg-[#38BDF8]',
    title: 'Pluse.kz — резидент Astana Hub',
    description: 'Мы развиваемся в крупнейшем технопарке Центральной Азии'
  },
  {
    id: 'clients',
    icon: Users,
    color: 'bg-[#4ADE80]',
    title: 'Более 100 предпринимателей уже с нами',
    description: 'Подключают BNPL, запускают магазины, ведут учёт'
  },
  {
    id: 'transparency',
    icon: MessageCircle,
    color: 'bg-[#F472B6]',
    title: 'Instagram @pluse.kz с историями клиентов',
    description: 'Мы показываем, как работает продукт в реальности'
  },
  {
    id: 'company',
    icon: Briefcase,
    color: 'bg-[#CBD5E1]',
    title: 'Проект реализуется компанией Persons',
    description: 'В партнёрстве с RBK Bank, Tumar Ventures и Astana Hub'
  }
]

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-white">
      {/* Градиентный фон вместо изображения */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_30%,_var(--tw-gradient-stops))] from-[#F0F4FF] via-white to-white opacity-90"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Финансовые сервисы для{' '}
            <span className="text-[#8F6ED5]">вашего бизнеса</span>
          </h1>
          <p className="text-xl text-[#4A4A4A] mb-8">
            BNPL, интернет-магазин и онлайн-бухгалтерия — всё в одном месте
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link 
              href="/register" 
              className="bg-[#1326FD] text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-[#9539F2] transition-all duration-200"
            >
              Открыть счёт
            </Link>
            <Link 
              href="/about" 
              className="text-white px-6 py-3 rounded-lg border border-white hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              Узнать больше
              <ChevronDown className="text-white" size={20} />
            </Link>
          </div>
          <p className="text-gray-200 italic">
            Подключение за <span className="text-[#C6D9FD]">5 минут</span>, <span className="text-[#A57EFF]">рассрочка 0%</span> для клиентов
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("bnpl")
  const [currentBnplStat, setCurrentBnplStat] = useState(0)
  const [currentShopStat, setCurrentShopStat] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [expandedFaqItems, setExpandedFaqItems] = useState(new Set())
  const activeService = services.find(service => service.id === activeTab)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsLoading(false)
    }, 100)
    
    const bnplInterval = setInterval(() => {
      setCurrentBnplStat((prev) => (prev + 1) % bnplStats.length)
    }, 5000)
    
    const shopInterval = setInterval(() => {
      setCurrentShopStat((prev) => (prev + 1) % shopStats.length)
    }, 5000)
    
    return () => {
      clearTimeout(timer)
      clearInterval(bnplInterval)
      clearInterval(shopInterval)
    }
  }, [])

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        {/* Radial gradient background */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_30%,_var(--tw-gradient-stops))] from-[#F0F4FF] via-white to-white opacity-90"></div>
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -z-10 transform-gpu blur-3xl">
            <div className="aspect-[1200/900] w-[50rem] bg-gradient-to-br from-[#F0F4FF] via-[#F9FAFF] to-[#F3F6FF] opacity-30"></div>
          </div>
        </motion.div>

        {/* Main content */}
        <AnimatePresence>
          {!isLoading && (
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full bg-[#FDFCFB]"
            >
              {/* Background with radial gradient */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,_var(--tw-gradient-stops))] from-[#F0F4FF] via-[#FDFCFB] to-[#FDFCFB] opacity-90"></div>
              </div>

              <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 sm:pt-40 lg:pt-48">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-x-12 items-center">
                  <div className="max-w-xl">
                    <h1 className="text-5xl font-bold tracking-tight text-[#1A1A1A] sm:text-6xl lg:text-7xl">
                      Необанк для предпринимателей
                    </h1>
                    <p className="mt-6 text-[#4A4A4A] text-lg leading-relaxed">
                      Откройте счёт за 5 минут, предложите клиентам рассрочку 0%, запустите интернет-магазин и автоматизируйте бухгалтерию.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <Link
                        href="/register"
                        className="bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                      >
                        Открыть счёт
                      </Link>
                      <Link 
                        href="/about" 
                        className="text-[#8F6ED5] font-medium hover:opacity-80 transition-opacity"
                      >
                        Узнать больше →
                      </Link>
                    </div>
                    <p className="mt-8 text-[#4A4A4A] text-sm">100+ предпринимателей уже с нами</p>
                  </div>
                  
                  <div className="relative mt-8 lg:mt-0">
                    <Image
                      src="/pers.png"
                      alt="Pluse.kz illustration"
                      width={500}
                      height={500}
                      className="w-auto h-auto max-w-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.main>
          )}
        </AnimatePresence>
      </div>

      {/* Services section */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-medium text-[#8F6ED5] mb-3">Наши сервисы</h2>
            <p className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Всё для вашего бизнеса в одном месте
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-16 sm:mt-20">
            <nav className="flex rounded-2xl bg-[#FDFCFB] p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)]" aria-label="Сервисы">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`
                    flex-1 relative min-w-0 flex items-center justify-center gap-x-2 rounded-xl px-4 py-3 text-sm font-medium
                    transition-all duration-200
                    ${activeTab === service.id
                      ? 'bg-white text-[#8F6ED5] shadow-[0_2px_8px_rgb(0,0,0,0.04)]'
                      : 'text-[#4A4A4A] hover:text-[#1A1A1A]'
                    }
                  `}
                >
                  <span className="text-xl">{service.icon}</span>
                  <span className="truncate">{service.name}</span>
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="mt-12 lg:mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
                    {activeService?.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-[#4A4A4A]">
                    {activeService?.description}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={activeService?.href || '#'}
                      className="inline-flex items-center bg-[#8F6ED5] text-white px-6 py-3 rounded-xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                    >
                      {activeService?.cta}
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                    {activeTab === "bnpl" && (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="text-lg font-medium text-[#8F6ED5]">Заявка на BNPL</div>
                            <div className="text-sm text-[#4A4A4A]">На рассмотрении</div>
                          </div>
                          <div className="h-12 w-12 bg-[#E0FF4F] rounded-full flex items-center justify-center">
                            <span className="text-[#1A1A1A] text-xl">💳</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-2 bg-[#EDFFLF] rounded-full w-full"></div>
                          <div className="h-2 bg-[#EDFFLF] rounded-full w-3/4"></div>
                        </div>
                        <div className="flex justify-between items-center bg-[#FDFCFB] p-4 rounded-xl">
                          <span className="text-[#1A1A1A] font-medium">250 000 ₸</span>
                          <span className="px-3 py-1.5 bg-[#E0FF4F] text-[#1A1A1A] rounded-lg text-sm font-medium">Одобрено</span>
                        </div>
                      </div>
                    )}
                    {activeTab === "shopping" && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[#EDFFLF] rounded-xl p-4 aspect-square"></div>
                          <div className="bg-[#EDFFLF] rounded-xl p-4 aspect-square"></div>
                          <div className="bg-[#EDFFLF] rounded-xl p-4 aspect-square"></div>
                          <div className="bg-[#EDFFLF] rounded-xl p-4 aspect-square"></div>
                        </div>
                        <div className="flex justify-between items-center bg-[#FDFCFB] p-4 rounded-xl">
                          <div className="space-y-1">
                            <div className="text-sm font-medium text-[#1A1A1A]">Ваш магазин</div>
                            <div className="text-xs text-[#4A4A4A]">pluse.market/demo</div>
                          </div>
                          <div className="h-10 w-10 bg-[#E0FF4F] rounded-full flex items-center justify-center">
                            <span className="text-[#1A1A1A] text-base">🛍</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 'accounting' && (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between mb-6">
                          <div className="space-y-1">
                            <div className="text-lg font-medium text-[#8F6ED5]">Отчёт за месяц</div>
                            <div className="text-sm text-[#4A4A4A]">Октябрь 2023</div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="h-10 w-10 bg-[#E0FF4F] rounded-full flex items-center justify-center">
                              <span className="text-[#1A1A1A] text-base">📊</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-2 bg-[#EDFFLF] rounded-full w-full"></div>
                          <div className="h-2 bg-[#EDFFLF] rounded-full w-5/6"></div>
                          <div className="h-2 bg-[#EDFFLF] rounded-full w-4/6"></div>
                        </div>
                        <div className="h-32 bg-[#FDFCFB] rounded-xl"></div>
                      </div>
                    )}
                    {activeTab === "other" && (
                      <div className="grid grid-cols-3 gap-6">
                        {[
                          { icon: "💳", label: "Бизнес-карта" },
                          { icon: '🔍', label: 'Проверка' },
                          { icon: '🏦', label: 'Счёт' }
                        ].map((item, index) => (
                          <div key={index} className="text-center">
                            <div className="h-16 w-16 bg-[#EDFFLF] rounded-xl mx-auto mb-3 flex items-center justify-center">
                              <span className="text-2xl">{item.icon}</span>
                            </div>
                            <div className="text-sm text-[#4A4A4A]">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="mt-8 flex justify-center gap-x-4 lg:hidden">
              <button
                onClick={() => {
                  const currentIndex = services.findIndex(s => s.id === activeTab)
                  const prevIndex = (currentIndex - 1 + services.length) % services.length
                  setActiveTab(services[prevIndex].id)
                }}
                className="w-10 h-10 rounded-full bg-white shadow-[0_2px_8px_rgb(0,0,0,0.04)] flex items-center justify-center text-[#4A4A4A] hover:text-[#8F6ED5] transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => {
                  const currentIndex = services.findIndex(s => s.id === activeTab)
                  const nextIndex = (currentIndex + 1) % services.length
                  setActiveTab(services[nextIndex].id)
                }}
                className="w-10 h-10 rounded-full bg-white shadow-[0_2px_8px_rgb(0,0,0,0.04)] flex items-center justify-center text-[#4A4A4A] hover:text-[#8F6ED5] transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Как подключиться к Pluse.kz
            </h2>
            <p className="mt-6 text-[#4A4A4A] text-lg">
              Подключение занимает 10 минут. Всё онлайн, без визита в банк и лишних документов.
            </p>
          </div>

          <div className="relative mt-16 sm:mt-20">
            <div className="relative grid gap-10 lg:grid-cols-3 lg:gap-12">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#E0FF4F] text-lg font-medium text-[#1A1A1A]">1</div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#EDFFLF]">
                      <UserPlus className="h-8 w-8 text-[#8F6ED5]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A]">
                      Зарегистрируйтесь и откройте счёт
                    </h3>
                    <p className="mt-2 text-[#4A4A4A]">
                      Создайте аккаунт и откройте расчётный счёт онлайн за 5 минут.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#E0FF4F] text-lg font-medium text-[#1A1A1A]">2</div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#EDFFLF]">
                      <Layers className="h-8 w-8 text-[#8F6ED5]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A]">
                      Выберите нужные инструменты
                    </h3>
                    <p className="mt-2 text-[#4A4A4A]">
                      Подключите рассрочку, интернет-магазин, бухгалтерию и другие сервисы.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#E0FF4F] text-lg font-medium text-[#1A1A1A]">3</div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#EDFFLF]">
                      <Rocket className="h-8 w-8 text-[#8F6ED5]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A]">
                      Запускайте бизнес — мы поможем
                    </h3>
                    <p className="mt-2 text-[#4A4A4A]">
                      Pluse.kz автоматизирует рутину, а вы фокусируетесь на росте.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 flex justify-center">
            <Link
              href="/register"
              className="bg-[#8F6ED5] text-white px-8 py-4 rounded-xl text-lg font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
            >
              Попробовать бесплатно
            </Link>
          </div>
        </div>
      </div>

      {/* Trust section */}
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
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#EDFFLF]">
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

      {/* FAQ section */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Частые вопросы
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A]">
              Отвечаем на популярные вопросы предпринимателей
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            {[
              {
                title: 'Защита от блокировок',
                description: 'Не теряйте деньги из-за блокировок — подключите резервный счёт за 1 день.'
              },
              {
                title: 'Нет времени на банк',
                description: 'Открываем счёт за вас — просто пришлите документы.'
              },
              {
                title: 'Нужен белый оборот',
                description: 'Поможем нарастить обороты для банков и партнёров.'
              },
              {
                title: 'Счёт заблокировали',
                description: 'Разблокируем или откроем новый — без потери денег.'
              },
              {
                title: 'Защитим от блокировок',
                description: 'Проверим ваши риски и дадим рекомендации.'
              },
              {
                title: 'Ответов по неделям — не будет',
                description: 'Отвечаем быстро, как будто сами теряем деньги.'
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
          </div>
        </div>
      </div>
    </div>
  )
} 