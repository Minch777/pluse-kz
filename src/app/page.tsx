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
    cta: 'Подключить BNPL',
    mockup: (
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-2.5 bg-[#F0F4FF] rounded w-24"></div>
            <div className="h-6 w-6 bg-[#F0F4FF] rounded-full"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-[#F0F4FF] rounded w-full"></div>
            <div className="h-4 bg-[#F0F4FF] rounded w-3/4"></div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#5D5FEF]">250 000 ₸</span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Одобрено</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'shopping',
    icon: '🛍',
    name: 'Pluse.Shopping',
    title: 'Интернет-магазин под ключ за 1 день',
    description: 'Встроенные оплата, доставка и рассрочка. Всё уже готово.',
    href: '/shopping',
    cta: 'Создать магазин',
    mockup: (
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#F0F4FF] rounded-lg p-3 aspect-square"></div>
            <div className="bg-[#F0F4FF] rounded-lg p-3 aspect-square"></div>
            <div className="bg-[#F0F4FF] rounded-lg p-3 aspect-square"></div>
            <div className="bg-[#F0F4FF] rounded-lg p-3 aspect-square"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <div className="h-3 bg-[#F0F4FF] rounded w-24"></div>
              <div className="h-3 bg-[#F0F4FF] rounded w-16"></div>
            </div>
            <div className="h-8 w-8 bg-[#F0F4FF] rounded-full"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'accounting',
    icon: '🧾',
    name: 'Онлайн-бухгалтерия',
    title: 'Бухгалтерия, которая считает за вас',
    description: 'Синхронизация с налоговой, автоматические отчёты и напоминания.',
    href: '/accounting',
    cta: 'Попробовать бесплатно',
    mockup: (
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto">
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <div className="h-3 bg-[#F0F4FF] rounded w-20"></div>
              <div className="h-2 bg-[#F0F4FF] rounded w-16"></div>
            </div>
            <div className="flex space-x-2">
              <div className="h-6 w-6 bg-green-100 rounded"></div>
              <div className="h-6 w-6 bg-[#F0F4FF] rounded"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-[#F0F4FF] rounded w-full"></div>
            <div className="h-2 bg-[#F0F4FF] rounded w-5/6"></div>
            <div className="h-2 bg-[#F0F4FF] rounded w-4/6"></div>
          </div>
          <div className="h-24 bg-[#F0F4FF] rounded w-full"></div>
        </div>
      </div>
    )
  },
  {
    id: 'other',
    icon: '🧩',
    name: 'Другие сервисы',
    title: 'Дополнительные инструменты для роста',
    description: 'Бизнес-карта, проверка контрагентов, подключение расчётного счёта.',
    href: '/services',
    cta: 'Посмотреть все сервисы',
    mockup: (
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="h-12 w-12 bg-[#F0F4FF] rounded-xl mx-auto mb-2"></div>
            <div className="h-2 bg-[#F0F4FF] rounded w-full"></div>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 bg-[#F0F4FF] rounded-xl mx-auto mb-2"></div>
            <div className="h-2 bg-[#F0F4FF] rounded w-full"></div>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 bg-[#F0F4FF] rounded-xl mx-auto mb-2"></div>
            <div className="h-2 bg-[#F0F4FF] rounded w-full"></div>
          </div>
        </div>
      </div>
    )
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

export default function Home() {
  const [activeTab, setActiveTab] = useState('bnpl')
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

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
          <nav className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="hover:opacity-90 transition-opacity">
                <Image
                  src="/logo.png"
                  alt="Pluse.kz"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
              
              {/* Desktop menu */}
              <div className="hidden md:flex items-center gap-x-8">
                <Link 
                  href="/services" 
                  className="text-sm font-medium text-gray-700 hover:text-[#635BFF] transition-colors"
                >
                  Сервисы
                </Link>
                <Link 
                  href="/partners" 
                  className="text-sm font-medium text-gray-700 hover:text-[#635BFF] transition-colors"
                >
                  Партнёрам
                </Link>
                <Link 
                  href="/digital-branch" 
                  className="text-sm font-medium text-gray-700 hover:text-[#635BFF] transition-colors"
                >
                  Цифровой филиал
                </Link>
                <Link
                  href="/cabinet"
                  className="rounded-full bg-[#635BFF] px-4 py-2 text-sm font-medium text-white hover:bg-[#4A3AFF] transition-colors"
                >
                  Кабинет
                </Link>
              </div>

              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 text-gray-700 hover:text-[#635BFF] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden mt-4 pb-4"
                >
                  <div className="flex flex-col gap-4">
                    <Link 
                      href="/services" 
                      className="text-sm font-medium text-gray-700 hover:text-[#635BFF] transition-colors"
                    >
                      Сервисы
                    </Link>
                    <Link 
                      href="/partners" 
                      className="text-sm font-medium text-gray-700 hover:text-[#635BFF] transition-colors"
                    >
                      Партнёрам
                    </Link>
                    <Link 
                      href="/digital-branch" 
                      className="text-sm font-medium text-gray-700 hover:text-[#635BFF] transition-colors"
                    >
                      Цифровой филиал
                    </Link>
                    <Link
                      href="/cabinet"
                      className="rounded-full bg-[#635BFF] px-4 py-2 text-sm font-medium text-white hover:bg-[#4A3AFF] transition-colors text-center"
                    >
                      Кабинет
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </header>

        {/* Main content */}
        <AnimatePresence>
          {!isLoading && (
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 sm:pt-40 lg:pt-48"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-x-8 items-start">
                {/* Text content */}
                <div className="max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                    Необанк для предпринимателей
                  </h1>
                  <p className="mt-8 text-lg leading-8 text-gray-600 lg:text-xl">
                    <span>
                      <span className="font-semibold text-[#5D5FEF]">Откройте счёт за 5 минут</span>,
                      предложите клиентам <br className="hidden lg:block" />
                      <span className="whitespace-nowrap font-semibold text-[#5D5FEF]">рассрочку 0%</span>,
                      запустите интернет-магазин и <span className="font-semibold text-[#5D5FEF]">автоматизируйте бухгалтерию</span>.
                    </span>
                  </p>
                  <div className="mt-12 flex items-center gap-x-8">
                    <Link
                      href="/register"
                      className="rounded-full bg-[#5D5FEF] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#4A3AFF] hover:scale-[1.02] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5D5FEF]"
                    >
                      Открыть счёт
                    </Link>
                    <Link href="/about" className="text-base font-semibold leading-6 text-gray-700 hover:text-[#5D5FEF] transition-colors">
                      Узнать больше <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  <p className="mt-4 text-sm text-slate-400 italic tracking-wide font-light">100+ предпринимателей уже с нами</p>
                </div>

                {/* Visual content */}
                <div className="relative mt-20 lg:mt-0">
                  <div className="relative flex-none">
                    {/* Background blur and glow effects */}
                    <div className="absolute w-[300px] h-[150px] bottom-[-30px] right-[100px] rounded-full bg-[#5D5FEF]/10 blur-2xl z-0"></div>
                    
                    {/* Container for phone and cards */}
                    <div className="relative w-[360px] h-[640px] lg:w-[480px] mx-auto lg:mx-0 lg:ml-auto">
                      {/* Phone mockup */}
                      <div 
                        className={`
                          absolute left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 top-0 
                          max-w-[320px] w-full h-[640px] 
                          bg-gradient-to-br from-[#F0F4FF] to-[#F9FAFF]
                          rounded-[48px] shadow-2xl transform rotate-[6deg]
                          scale-90 lg:scale-100 z-20
                          transition-all duration-1000 ease-out hover:rotate-[7deg]
                          ${isVisible ? 'opacity-100 translate-y-0 drop-shadow-lg blur-[0.2px]' : 'opacity-0 translate-y-8'}
                        `}
                      >
                        <div className="absolute inset-4 bg-white rounded-[40px] p-6 overflow-hidden shadow-inner">
                          {/* Interface content */}
                          <div className="space-y-6">
                            <div className="flex items-center justify-between">
                              <div className="w-28 h-3 bg-[#F0F4FF] rounded"></div>
                              <div className="w-10 h-10 bg-[#F0F4FF] rounded-full"></div>
                            </div>
                            <div className="bg-[#F9FAFF] rounded-2xl p-5 shadow-sm">
                              <div className="text-base font-medium text-[#5D5FEF]">Заявка на BNPL</div>
                              <div className="mt-3 space-y-2.5">
                                <div className="w-full h-2.5 bg-[#F0F4FF] rounded"></div>
                                <div className="w-3/4 h-2.5 bg-[#F0F4FF] rounded"></div>
                              </div>
                              <div className="mt-5 flex justify-between items-center">
                                <div className="text-sm text-[#5D5FEF] font-medium">Сумма: 250 000 ₸</div>
                                <div className="px-3 py-1.5 bg-green-100 rounded-full text-sm text-green-700 font-medium">Одобрено</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Info cards */}
                      <div className="hidden lg:block absolute right-[280px] bottom-[140px] w-[300px] space-y-4 z-30">
                        {/* BNPL Status Card */}
                        <div 
                          className={`
                            absolute right-4 bottom-0
                            bg-white rounded-xl px-4 py-3 text-sm shadow-lg
                            transform rotate-[-2deg] translate-y-[-20px]
                            transition-all duration-500 ease-out
                            hover:scale-[1.01] hover:translate-y-[-22px]
                            ${isVisible ? 'opacity-100 translate-y-[-20px] drop-shadow-md' : 'opacity-0 translate-y-0'}
                          `}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shadow-inner">
                              <span className="text-green-600 text-xl">✅</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-gray-900 text-sm leading-snug">{bnplStats[currentBnplStat].text}</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Shop Status Card */}
                        <div 
                          className={`
                            absolute right-8 bottom-[-48px]
                            bg-white rounded-xl px-4 py-3 text-sm shadow-lg
                            transform rotate-[1deg] translate-y-[8px]
                            transition-all duration-500 ease-out delay-200
                            hover:scale-[1.01] hover:translate-y-[6px]
                            ${isVisible ? 'opacity-100 translate-y-[8px] drop-shadow-md' : 'opacity-0 translate-y-[28px]'}
                          `}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-[#F0F4FF] rounded-full flex items-center justify-center shadow-inner">
                              <span className="text-[#5D5FEF] text-xl">🛍</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-gray-900 text-sm leading-snug">{shopStats[currentShopStat].text}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile cards (stacked under phone) */}
                      <div className="lg:hidden mt-8 space-y-4">
                        {/* BNPL Status Card */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-white rounded-xl px-4 py-3 text-sm shadow-xl"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shadow-inner">
                              <span className="text-green-600 text-xl">✅</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-gray-900 text-sm leading-snug">{bnplStats[currentBnplStat].text}</div>
                            </div>
                          </div>
                        </motion.div>
                        
                        {/* Shop Status Card */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="bg-white rounded-xl px-4 py-3 text-sm shadow-xl"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-[#F0F4FF] rounded-full flex items-center justify-center shadow-inner">
                              <span className="text-[#5D5FEF] text-xl">🛍</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-gray-900 text-sm leading-snug">{shopStats[currentShopStat].text}</div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Gradient transition */}
                  <div className="absolute bottom-0 w-full h-[140px] bg-gradient-to-b from-transparent via-[#F9FAFF] to-white z-0"></div>
                </div>
              </div>
            </motion.main>
          )}
        </AnimatePresence>
      </div>

      {/* Services section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-[#5D5FEF]">Наши сервисы</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Всё для вашего бизнеса в одном месте
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-16 sm:mt-20">
            <nav className="isolate flex rounded-lg bg-gray-50 p-1.5 shadow-sm" aria-label="Сервисы">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`
                    flex-1 relative min-w-0 flex items-center justify-center gap-x-2 rounded-md px-4 py-2.5 text-sm font-medium
                    transition-all duration-200
                    ${activeTab === service.id
                      ? 'bg-white text-[#5D5FEF] shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                    }
                  `}
                >
                  <span className="text-xl">{service.icon}</span>
                  <span className="truncate">{service.name}</span>
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="mt-8 lg:mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                    {activeService?.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-gray-600">
                    {activeService?.description}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={activeService?.href || '#'}
                      className="rounded-full bg-[#5D5FEF] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#4A3AFF] hover:scale-[1.02] transition-all duration-200"
                    >
                      {activeService?.cta}
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  {activeService?.mockup}
                </div>
              </div>
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="mt-8 flex justify-center gap-x-2 lg:hidden">
              <button
                onClick={() => {
                  const currentIndex = services.findIndex(s => s.id === activeTab)
                  const prevIndex = (currentIndex - 1 + services.length) % services.length
                  setActiveTab(services[prevIndex].id)
                }}
                className="rounded-full p-2 text-gray-600 hover:text-gray-900"
              >
                ←
              </button>
              <button
                onClick={() => {
                  const currentIndex = services.findIndex(s => s.id === activeTab)
                  const nextIndex = (currentIndex + 1) % services.length
                  setActiveTab(services[nextIndex].id)
                }}
                className="rounded-full p-2 text-gray-600 hover:text-gray-900"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div className="py-24 sm:py-32 bg-gradient-to-b from-white via-white to-[#F9FAFF]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Как подключиться к Pluse.kz
            </h2>
            <p className="mt-6 text-base text-gray-600">
              Подключение занимает 10 минут. Всё онлайн, без визита в банк и лишних документов.
            </p>
          </div>

          <div className="relative mt-16 sm:mt-20">
            {/* Connection line */}
            <div className="absolute left-[50%] top-0 h-full w-0.5 bg-gradient-to-b from-[#5D5FEF]/20 via-[#5D5FEF]/10 to-transparent lg:hidden"></div>

            <div className="relative grid gap-12 lg:grid-cols-3 lg:gap-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5D5FEF] to-[#4A3AFF] shadow-lg">
                  <span className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold text-[#5D5FEF] shadow-sm">1</span>
                  <UserPlus className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  Зарегистрируйтесь и откройте счёт
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Создайте аккаунт и откройте расчётный счёт онлайн за 5 минут.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5D5FEF] to-[#4A3AFF] shadow-lg">
                  <span className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold text-[#5D5FEF] shadow-sm">2</span>
                  <Layers className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  Выберите нужные инструменты
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Подключите рассрочку, интернет-магазин, бухгалтерию и другие сервисы.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5D5FEF] to-[#4A3AFF] shadow-lg">
                  <span className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold text-[#5D5FEF] shadow-sm">3</span>
                  <Rocket className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  Запускайте бизнес — мы поможем
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Pluse.kz автоматизирует рутину, а вы фокусируетесь на росте.
                </p>
              </motion.div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 flex justify-center">
            <Link
              href="/register"
              className="rounded-full bg-gradient-to-r from-[#5D5FEF] to-[#4A3AFF] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5D5FEF]"
            >
              Попробовать бесплатно
            </Link>
          </div>
        </div>
      </div>

      {/* Trust section */}
      <div className="py-24 sm:py-32 bg-[radial-gradient(70%_60%_at_50%_50%,_var(--tw-gradient-stops))] from-[#f5f7ff] via-white to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Почему нам доверяют предприниматели
            </h2>
            <p className="mt-6 text-base text-gray-600">
              Pluse.kz сочетает банковскую надёжность, венчурную поддержку и активное сообщество
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl gap-8 lg:mx-0 lg:max-w-none">
            {/* Main card */}
            <div className="relative bg-white rounded-2xl shadow-sm p-8 hover:shadow-md hover:scale-[1.02] transition duration-200">
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#5D5FEF]/10">
                  <ShieldCheck className="h-8 w-8 text-[#5D5FEF]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Pluse.kz — цифровой филиал RBK Bank
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Счета и операции открываются через лицензированный банк
                  </p>
                </div>
                <Image
                  src="/rbk_logo.png"
                  alt="RBK Bank"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

            {/* Secondary cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md hover:scale-[1.02] transition duration-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                  <PiggyBank className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Фонд Tumar Ventures — среди наших инвесторов
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Tumar поддерживает сильные и масштабируемые стартапы
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md hover:scale-[1.02] transition duration-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Pluse.kz — резидент крупнейшего технопарка ЦА
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Мы развиваемся в Astana Hub — главном IT-хабе региона
                </p>
              </div>
            </div>
          </div>

          {/* Partners and stats */}
          <div className="mt-16 flex flex-col items-center gap-8">
            <div className="flex items-center gap-8 grayscale opacity-80">
              <Image
                src="/rbk_logo.png"
                alt="RBK Bank"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <Image
                src="/tumar_logo.png"
                alt="Tumar Ventures"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <Image
                src="/astanahub_logo.png"
                alt="Astana Hub"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-base text-gray-600 font-medium">
              100+ предпринимателей уже с нами
            </p>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Частые вопросы
            </h2>
            <p className="mt-6 text-base text-gray-600">
              Отвечаем на популярные вопросы предпринимателей
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200">
            {[
              {
                question: 'Как открыть счёт в Pluse.kz?',
                answer: 'Регистрация занимает 5 минут, всё онлайн. После подтверждения личности вы получаете доступ ко всем сервисам.'
              },
              {
                question: 'Сколько стоит подключение?',
                answer: 'Открытие счёта и базовые функции — бесплатно. Продвинутые сервисы доступны по подписке.'
              },
              {
                question: 'Кто даёт рассрочку (BNPL)?',
                answer: 'Pluse.kz — это агрегатор банков. Мы подключаем вас к банкам-партнёрам, которые одобряют заявки.'
              },
              {
                question: 'Могу ли я подключить только интернет-магазин или только бухгалтерию?',
                answer: 'Да, вы можете использовать только нужные вам модули.'
              },
              {
                question: 'Насколько безопасны мои данные?',
                answer: 'Данные хранятся на защищённых серверах, передаются в зашифрованном виде, и мы соблюдаем все требования по безопасности.'
              }
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <motion.button
                  initial={false}
                  className="flex w-full items-start justify-between text-left"
                  onClick={() => {
                    const newExpandedItems = new Set(expandedFaqItems)
                    if (newExpandedItems.has(index)) {
                      newExpandedItems.delete(index)
                    } else {
                      newExpandedItems.add(index)
                    }
                    setExpandedFaqItems(newExpandedItems)
                  }}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    <ChevronDown
                      className={`h-6 w-6 transform text-gray-500 transition-transform duration-200 ${
                        expandedFaqItems.has(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                </motion.button>
                <AnimatePresence initial={false}>
                  {expandedFaqItems.has(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-base text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1f1f24] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Logo and description */}
            <div className="lg:col-span-1">
              <Image
                src="/logo_white.png"
                alt="Pluse.kz"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>

            {/* Links columns */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-4">
              <div>
                <h3 className="text-sm font-semibold text-white">О компании</h3>
                <ul className="mt-6 space-y-4">
                  {['О нас', 'Партнёрство', 'Резидент Astana Hub', 'Поддержка'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">Сервисы</h3>
                <ul className="mt-6 space-y-4">
                  {['Открытие счёта', 'BNPL', 'Pluse.Shopping', 'Онлайн-бухгалтерия'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">Документы</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    'Пользовательское соглашение',
                    'Политика конфиденциальности',
                    'Правила обработки данных'
                  ].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">Контакты</h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <Link href="mailto:support@pluse.kz" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      support@pluse.kz
                    </Link>
                  </li>
                  <li>
                    <Link href="https://t.me/pluse_support" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      @pluse_support
                    </Link>
                  </li>
                  <li>
                    <Link href="https://instagram.com/pluse.kz" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                      <Instagram className="h-4 w-4" />
                      @pluse.kz
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">© 2025 Pluse.kz</p>
              <p className="text-sm text-gray-400 text-center lg:text-right">
                Проект реализуется компанией Persons в партнёрстве с RBK Bank и фондом Tumar Ventures
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 