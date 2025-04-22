'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheck, PiggyBank, MapPin, Users, MessageCircle, Briefcase, UserPlus, Layers, Rocket, ChevronDown, Mail, Instagram, Menu, CreditCard, Store, Calculator, Settings, Check, Smartphone, Laptop, Building2, Search, ArrowRight } from 'lucide-react'

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
    icon: CreditCard,
    name: 'BNPL (рассрочка)',
    title: 'Продавайте больше с выгодной рассрочкой',
    description: 'Вы сами выбираете срок и сумму.\nРешение — за 2 минуты.',
    href: '/bnpl',
    cta: 'Подключить BNPL'
  },
  {
    id: 'shopping',
    icon: Store,
    name: 'Pluse.Shopping',
    title: 'Интернет-магазин под ключ за 1 день',
    description: 'Встроенные оплата, доставка и рассрочка. Всё уже готово.',
    href: '/shopping',
    cta: 'Создать магазин'
  },
  {
    id: 'accounting',
    icon: Calculator,
    name: 'Онлайн-бухгалтерия',
    title: 'Бухгалтерия, которая считает за вас',
    description: 'Синхронизация с налоговой, автоматические отчёты и напоминания.',
    href: '/accounting',
    cta: 'Скоро'
  },
  {
    id: 'bank',
    icon: Building2,
    name: 'Банкинг',
    title: 'Современный банкинг для бизнеса',
    description: 'Мгновенные платежи, бизнес-карта и контроль финансов в одном месте.',
    href: '/banking',
    cta: 'Открыть счёт'
  },
  {
    id: 'other',
    icon: Settings,
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
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Финансовые сервисы для{' '}
            <span className="text-[#1326FD]">вашего бизнеса</span>
          </h1>
          <p className="text-xl text-[#6B656B] mb-8">
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
              className="text-[#1A1A1A] px-6 py-3 rounded-lg border border-[#C6D9FD] hover:bg-[#C6D9FD] transition-colors flex items-center gap-2"
            >
              Узнать больше
              <ChevronDown className="text-[#1326FD]" size={20} />
            </Link>
          </div>
          <p className="text-[#6B656B] italic">
            Подключение за <span className="text-[#1326FD]">5 минут</span>, <span className="text-[#9539F2]">рассрочка 0%</span> для клиентов
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
  
  const { scrollY } = useScroll()
  const phoneX = useTransform(scrollY, [0, 300], [0, 500])
  const phoneOpacity = useTransform(scrollY, [0, 200], [1, 0])
  const springPhoneX = useSpring(phoneX, { stiffness: 100, damping: 30 })
  const springPhoneOpacity = useSpring(phoneOpacity, { stiffness: 100, damping: 30 })

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
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero_home.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90"></div>
          </div>

        {/* Main content */}
        <AnimatePresence>
          {!isLoading && (
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full"
            >
              <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-32 lg:pt-36 lg:pb-24">
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
                    <div className="mt-10 flex items-center gap-3">
                      <div className="flex items-center">
                    <Image
                          src="/people_home.svg"
                          alt="People using Pluse.kz"
                          width={480}
                          height={120}
                          className="h-24 w-auto"
                    />
                  </div>
                      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-5 h-5 text-[#FF69B4]">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-[#1A1A1A]">100+ предпринимателей уже с нами</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* iPhone with Cards */}
                  <motion.div 
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      duration: 0.8
                    }}
                    style={{
                      x: springPhoneX,
                      opacity: springPhoneOpacity
                    }}
                    className="relative w-[320px] h-[640px] -translate-x-4 -translate-y-4"
                  >
                    {/* iPhone Frame */}
                    <div className="absolute inset-0 bg-[#1A1A1A] rounded-[40px] transform rotate-[15deg] perspective-1000">
                      {/* Power Button */}
                      <div className="absolute -right-[2px] top-[120px] w-[2px] h-[60px] bg-[#2A2A2A] rounded-r-lg" />
                      {/* Volume Buttons */}
                      <div className="absolute -left-[2px] top-[100px] w-[2px] h-[30px] bg-[#2A2A2A] rounded-l-lg" />
                      <div className="absolute -left-[2px] top-[140px] w-[2px] h-[30px] bg-[#2A2A2A] rounded-l-lg" />
                      
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#1A1A1A] rounded-b-[16px] flex items-center justify-center">
                        <div className="w-[60px] h-[4px] bg-[#2A2A2A] rounded-full" />
                  </div>
                      
                      {/* Screen */}
                      <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] bg-[#FAFAFA] rounded-[32px] overflow-hidden">
                        {/* Status Bar */}
                        <div className="h-12 px-4 flex items-center justify-between text-xs bg-gradient-to-b from-[#FAFAFA] to-transparent">
                          <span className="text-[#1A1A1A] font-medium">9:41</span>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3">
                              <svg viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" fill="#1A1A1A"/>
                              </svg>
                            </div>
                            <div className="w-3 h-3">
                              <svg viewBox="0 0 24 24" fill="none">
                                <path d="M2 9.5V14.5C2 15.33 2.67 16 3.5 16H4.5C5.33 16 6 15.33 6 14.5V9.5C6 8.67 5.33 8 4.5 8H3.5C2.67 8 2 8.67 2 9.5ZM8 5.5V14.5C8 15.33 8.67 16 9.5 16H10.5C11.33 16 12 15.33 12 14.5V5.5C12 4.67 11.33 4 10.5 4H9.5C8.67 4 8 4.67 8 5.5ZM14 3.5V14.5C14 15.33 14.67 16 15.5 16H16.5C17.33 16 18 15.33 18 14.5V3.5C18 2.67 17.33 2 16.5 2H15.5C14.67 2 14 2.67 14 3.5Z" fill="#1A1A1A"/>
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Cards Container */}
                        <div className="relative w-full h-[calc(100%-3rem)] p-4 flex flex-col gap-4">
                          {/* BNPL Card */}
                          <div className="w-full bg-gradient-to-br from-[#8F6ED5] to-[#6C4CB3] rounded-xl p-4 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                <div className="relative w-6 h-6 flex flex-row justify-center gap-1">
                                  <div className="w-1 h-full bg-white rounded-full"></div>
                                  <div className="w-1 h-full bg-white rounded-full"></div>
                                  <div className="w-1 h-full bg-white rounded-full"></div>
                                </div>
                              </div>
                              <div>
                                <h3 className="text-base font-semibold text-white">Рассрочка 0%</h3>
                                <p className="text-xs text-white/70">Мгновенно</p>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-white/70">Сумма покупки</span>
                                <span className="text-base font-semibold text-white">250 000 ₸</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-white/70">Ежемесячный платеж</span>
                                <span className="text-sm font-medium text-white">41 667 ₸ × 6</span>
                              </div>
                              <div className="mt-3">
                                <div className="py-1.5 px-3 bg-[#E0FF4F] rounded-lg inline-block">
                                  <span className="text-xs text-[#1A1A1A] font-medium">Одобрено</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Shop Card */}
                          <div className="w-full bg-white rounded-xl p-4 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-10 h-10 bg-[#E0FF4F] rounded-lg flex items-center justify-center">
                                <div className="relative w-6 h-6 flex items-center justify-center">
                                  <div className={`
                                    w-5 h-6
                                    bg-[#F472B6]
                                    transform rotate-[-12deg]
                                    relative
                                  `}
                                  style={{
                                    clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)'
                                  }}
                                  >
                                    <div className="absolute top-[12%] left-[12%] w-1 h-1 rounded-full bg-[#E0FF4F]"></div>
                                    <div className="absolute top-0 left-0 w-[25%] h-[25%] bg-[#EC4899]"
                                      style={{
                                        clipPath: 'polygon(0 100%, 100% 0, 0 0)'
                                      }}
                                    ></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-[#E0FF4F]">
                                      %
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h3 className="text-base font-semibold text-[#1A1A1A]">Магазин</h3>
                                <p className="text-xs text-[#4A4A4A]">pluse.shopping/demo</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="bg-[#F9FAFF] rounded-lg p-2">
                                <div className="text-base font-semibold text-[#1A1A1A]">24</div>
                                <div className="text-xs text-[#4A4A4A]">Товара</div>
                              </div>
                              <div className="bg-[#F9FAFF] rounded-lg p-2">
                                <div className="text-base font-semibold text-[#1A1A1A]">12</div>
                                <div className="text-xs text-[#4A4A4A]">Заказов</div>
                              </div>
                              <div className="bg-[#F9FAFF] rounded-lg p-2">
                                <div className="text-base font-semibold text-[#8F6ED5]">4.9</div>
                                <div className="text-xs text-[#4A4A4A]">Рейтинг</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.main>
          )}
        </AnimatePresence>
      </div>

      {/* Services section */}
      <div className="py-16 sm:py-24 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Service Icons Grid */}
          <div className="grid grid-cols-5 gap-8 mb-20">
            {/* BNPL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`flex flex-col items-center group cursor-pointer relative ${
                activeTab === "bnpl" ? 'after:content-[""] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-[#8F6ED5] after:rounded-full' : ''
              }`}
              onClick={() => setActiveTab("bnpl")}
            >
              <div className={`
                relative w-24 h-24 mb-4 
                ${activeTab === "bnpl" 
                  ? 'scale-110 shadow-[0_8px_30px_rgba(143,110,213,0.3)]' 
                  : 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
                }
                transition-all duration-300
              `}>
                <div className={`
                  absolute inset-0 bg-gradient-to-br 
                  ${activeTab === "bnpl" 
                    ? 'from-[#8F6ED5] to-[#6C4CB3]' 
                    : 'from-[#F472B6] to-[#EC4899]'
                  } 
                  rounded-2xl transform rotate-[-5deg] shadow-xl
                  ${activeTab !== "bnpl" ? 'group-hover:from-[#8F6ED5] group-hover:to-[#6C4CB3]' : ''}
                `}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="relative w-12 h-12 flex flex-row justify-center gap-2">
                    <div className={`w-2 h-full ${activeTab === "bnpl" ? 'bg-white' : 'bg-white'} rounded-full`}></div>
                    <div className={`w-2 h-full ${activeTab === "bnpl" ? 'bg-white' : 'bg-white'} rounded-full`}></div>
                    <div className={`w-2 h-full ${activeTab === "bnpl" ? 'bg-white' : 'bg-white'} rounded-full`}></div>
          </div>
                </div>
              </div>
              <span className={`text-sm font-medium transition-colors duration-200 ${
                activeTab === "bnpl" ? 'text-[#8F6ED5]' : 'text-[#4A4A4A] group-hover:text-[#8F6ED5]'
              }`}>
                Рассрочка
                {activeTab === "bnpl" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block ml-1"
                  >
                    →
                  </motion.span>
                )}
              </span>
            </motion.div>

            {/* Shopping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`flex flex-col items-center group cursor-pointer relative ${
                activeTab === "shopping" ? 'after:content-[""] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-[#8F6ED5] after:rounded-full' : ''
              }`}
              onClick={() => setActiveTab("shopping")}
            >
              <div className={`
                relative w-24 h-24 mb-4 
                ${activeTab === "shopping" 
                  ? 'scale-110 shadow-[0_8px_30px_rgba(143,110,213,0.3)]' 
                  : 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
                }
                transition-all duration-300
              `}>
                <div className={`
                  absolute inset-0 bg-gradient-to-br 
                  ${activeTab === "shopping" 
                    ? 'from-[#8F6ED5] to-[#6C4CB3]' 
                    : 'from-[#E0FF4F] to-[#D4F63C]'
                  } 
                  rounded-2xl transform rotate-[-5deg] shadow-xl
                `}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <div className={`
                      w-12 h-14
                      ${activeTab === "shopping" ? 'bg-white' : 'bg-[#F472B6]'}
                      transform rotate-[-12deg]
                      transition-all duration-300
                      relative
                    `}
                    style={{
                      clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)'
                    }}
                    >
                      {/* Circle hole */}
                      <div className={`
                        absolute top-[12%] left-[12%]
                        w-2.5 h-2.5 rounded-full
                        ${activeTab === "shopping" ? 'bg-[#6C4CB3]' : 'bg-[#E0FF4F]'}
                        transition-all duration-300
                      `}></div>
                      
                      {/* Corner fold */}
                      <div className={`
                        absolute top-0 left-0
                        w-[25%] h-[25%]
                        ${activeTab === "shopping" ? 'bg-[#8F6ED5]/20' : 'bg-[#EC4899]'}
                        transition-all duration-300
                      `}
                      style={{
                        clipPath: 'polygon(0 100%, 100% 0, 0 0)'
                      }}
                      ></div>

                      {/* Percentage symbol */}
                      <div className={`
                        absolute top-1/2 left-1/2 
                        transform -translate-x-1/2 -translate-y-1/2
                        text-xl font-bold
                        ${activeTab === "shopping" ? 'text-[#6C4CB3]' : 'text-[#E0FF4F]'}
                        transition-all duration-300
                      `}>
                        %
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className={`text-sm font-medium transition-colors duration-200 ${
                activeTab === "shopping" ? 'text-[#8F6ED5]' : 'text-[#4A4A4A] group-hover:text-[#8F6ED5]'
              }`}>
                Pluse.Shopping
                {activeTab === "shopping" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block ml-1"
                  >
                    →
                  </motion.span>
                )}
              </span>
            </motion.div>

            {/* Accounting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`flex flex-col items-center group cursor-pointer relative ${
                activeTab === "accounting" ? 'after:content-[""] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-[#8F6ED5] after:rounded-full' : ''
              }`}
              onClick={() => setActiveTab("accounting")}
            >
              <div className={`
                relative w-24 h-24 mb-4 
                ${activeTab === "accounting" 
                  ? 'scale-110 shadow-[0_8px_30px_rgba(143,110,213,0.3)]' 
                  : 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
                }
                transition-all duration-300
              `}>
                <div className={`
                  absolute inset-0 bg-gradient-to-br 
                  ${activeTab === "accounting" 
                    ? 'from-[#8F6ED5] to-[#6C4CB3]' 
                    : 'from-[#40E0D0] to-[#20B2AA]'
                  } 
                  rounded-2xl transform rotate-[-5deg] shadow-xl
                `}></div>
                {/* Calculator Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-20 bg-white rounded-lg p-2">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-[#40E0D0] rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <span className={`text-sm font-medium transition-colors duration-200 ${
                activeTab === "accounting" ? 'text-[#8F6ED5]' : 'text-[#4A4A4A] group-hover:text-[#8F6ED5]'
              }`}>
                Бухгалтерия
                {activeTab === "accounting" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block ml-1"
                  >
                    →
                  </motion.span>
                )}
              </span>
            </motion.div>

            {/* Bank Account */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`flex flex-col items-center group cursor-pointer relative ${
                activeTab === "bank" ? 'after:content-[""] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-[#8F6ED5] after:rounded-full' : ''
              }`}
              onClick={() => setActiveTab("bank")}
            >
              <div className={`
                relative w-24 h-24 mb-4 
                ${activeTab === "bank" 
                  ? 'scale-110 shadow-[0_8px_30px_rgba(143,110,213,0.3)]' 
                  : 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
                }
                transition-all duration-300
              `}>
                <div className={`
                  absolute inset-0 bg-gradient-to-br 
                  ${activeTab === "bank" 
                    ? 'from-[#8F6ED5] to-[#6C4CB3]' 
                    : 'from-black to-[#2A2A2A]'
                  } 
                  rounded-2xl transform rotate-[-5deg] shadow-xl
                `}></div>
                {/* Card and Building Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-10 bg-[#FFD700] rounded-lg"></div>
                  <div className="w-12 h-8 bg-white rounded-lg mt-2 mx-auto"></div>
                </div>
              </div>
              <span className={`text-sm font-medium transition-colors duration-200 ${
                activeTab === "bank" ? 'text-[#8F6ED5]' : 'text-[#4A4A4A] group-hover:text-[#8F6ED5]'
              }`}>
                Банкинг
                {activeTab === "bank" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block ml-1"
                  >
                    →
                  </motion.span>
                )}
              </span>
            </motion.div>

            {/* All Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`flex flex-col items-center group cursor-pointer relative ${
                activeTab === "other" ? 'after:content-[""] after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-[#8F6ED5] after:rounded-full' : ''
              }`}
              onClick={() => setActiveTab("other")}
            >
              <div className={`
                relative w-24 h-24 mb-4 
                ${activeTab === "other" 
                  ? 'scale-110 shadow-[0_8px_30px_rgba(143,110,213,0.3)]' 
                  : 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
                }
                transition-all duration-300
              `}>
                <div className={`
                  absolute inset-0 bg-gradient-to-br 
                  ${activeTab === "other" 
                    ? 'from-[#8F6ED5] to-[#6C4CB3]' 
                    : 'from-[#DEB887] to-[#D2B48C]'
                  } 
                  rounded-2xl transform rotate-[-5deg] shadow-xl
                `}></div>
                {/* Grid Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="w-6 h-6 bg-white rounded"></div>
                    <div className="w-6 h-6 bg-[#E0FF4F] rounded"></div>
                    <div className="w-6 h-6 bg-[#E0FF4F] rounded"></div>
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                </div>
              </div>
              <span className={`text-sm font-medium transition-colors duration-200 ${
                activeTab === "other" ? 'text-[#8F6ED5]' : 'text-[#4A4A4A] group-hover:text-[#8F6ED5]'
              }`}>
                Все сервисы
                {activeTab === "other" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block ml-1"
                  >
                    →
                  </motion.span>
                )}
              </span>
            </motion.div>
          </div>

            {/* Content */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-12 lg:mt-16"
          >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
                    {activeService?.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-[#4A4A4A]">
                    {activeService?.description}
                  </p>
                  <div className="mt-8">
                    {activeTab !== "other" && activeTab !== "accounting" && (
                      <div className="flex items-center gap-6">
                    <Link
                      href={activeService?.href || '#'}
                          className="bg-[#8F6ED5] text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                    >
                      {activeService?.cta}
                    </Link>
                        <Link 
                          href={
                            activeTab === "bnpl" 
                              ? "/bnpl"
                              : activeTab === "shopping"
                              ? "/shopping"
                              : activeTab === "bank"
                              ? "/account"
                              : "#"
                          }
                          className="inline-flex items-center text-[#8F6ED5] font-medium hover:opacity-80 transition-opacity"
                        >
                          Узнать подробнее →
                    </Link>
                      </div>
                    )}
                    {(activeTab === "other" || activeTab === "accounting") && (
                      <Link
                        href={activeService?.href || '#'}
                        className={`${
                          activeTab === "accounting" 
                            ? "bg-[#9CA3AF] cursor-not-allowed" 
                            : "bg-[#8F6ED5] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        } text-white px-8 py-4 rounded-2xl text-base font-medium shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300`}
                        onClick={(e) => activeTab === "accounting" && e.preventDefault()}
                      >
                        {activeService?.cta}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                    {activeTab === "bnpl" && (
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="space-y-1">
                            <div className="text-lg font-medium text-[#8F6ED5]">Рассрочка 0%</div>
                            <div className="text-sm text-[#4A4A4A]">Быстрое подключение</div>
                          </div>
                          <div className="relative w-14 h-14 flex items-center justify-center">
                            <div className="relative w-12 h-12 flex flex-row justify-center gap-2">
                              <div className="w-2 h-full bg-[#F472B6] rounded-full"></div>
                              <div className="w-2 h-full bg-[#F472B6] rounded-full"></div>
                              <div className="w-2 h-full bg-[#F472B6] rounded-full"></div>
                          </div>
                        </div>
                        </div>

                        {/* Mini Interface */}
                        <div className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-3 border-b border-[#F0F0F0]">
                              <span className="text-sm text-[#4A4A4A]">ID клиента</span>
                              <span className="text-sm font-medium text-[#1A1A1A]">12345-KZ</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-[#4A4A4A]">Сумма</span>
                              <span className="text-lg font-medium text-[#1A1A1A]">1 200 000 ₸</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-[#4A4A4A]">Срок</span>
                              <span className="text-lg font-medium text-[#1A1A1A]">12 месяцев</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-[#4A4A4A]">Ежемесячный платёж</span>
                              <span className="text-lg font-medium text-[#8F6ED5]">100 000 ₸</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#F0FFF4] rounded-lg px-4 py-2">
                              <div className="w-5 h-5 rounded-full bg-[#4ADE80] flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm font-medium text-[#1A1A1A]">Одобрено</span>
                            </div>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
                            <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
                              <div className="text-xl">🧾</div>
                            </div>
                            <div className="text-sm font-medium text-[#1A1A1A]">Комиссия</div>
                            <div className="text-xs text-[#4A4A4A] mt-1">от 3%</div>
                          </div>
                          <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
                            <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
                              <div className="text-xl">⚡️</div>
                            </div>
                            <div className="text-sm font-medium text-[#1A1A1A]">Быстро</div>
                            <div className="text-xs text-[#4A4A4A] mt-1">2 минуты</div>
                          </div>
                          <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
                            <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
                              <div className="text-xl">💰</div>
                            </div>
                            <div className="text-sm font-medium text-[#1A1A1A]">Гибко</div>
                            <div className="text-xs text-[#4A4A4A] mt-1">до 3 000 000 ₸</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === "shopping" && (
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="space-y-1">
                            <div className="text-lg font-medium text-[#8F6ED5]">Pluse.Shopping</div>
                            <div className="text-sm text-[#4A4A4A]">Готовый магазин за 1 день</div>
                          </div>
                          <div className="relative w-14 h-14 flex items-center justify-center">
                            <div className="w-14 h-14 bg-[#E0FF4F] rounded-xl flex items-center justify-center">
                              <div className="relative w-8 h-8 flex items-center justify-center">
                                <div className={`
                                  w-7 h-8
                                  bg-[#F472B6]
                                  transform rotate-[-12deg]
                                  relative
                                `}
                                style={{
                                  clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)'
                                }}
                                >
                                  <div className="absolute top-[12%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#E0FF4F]"></div>
                                  <div className="absolute top-0 left-0 w-[25%] h-[25%] bg-[#EC4899]"
                                    style={{
                                      clipPath: 'polygon(0 100%, 100% 0, 0 0)'
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Products Mini Interface */}
                        <div className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#F9FAFF] rounded-xl p-4">
                              <div className="w-full h-24 bg-[#EDFFLF] rounded-lg mb-3 flex items-center justify-center relative">
                                <Image 
                                  src="/iphone.svg"
                                  alt="iPhone"
                                  width={72}
                                  height={72}
                                  className="w-auto h-24 object-contain"
                                />
                        </div>
                              <div className="space-y-2">
                                <div className="text-sm font-medium text-[#1A1A1A]">iPhone 15</div>
                                <div className="text-lg font-medium text-[#8F6ED5]">499 990 ₸</div>
                                <div className="text-xs text-[#4A4A4A]">Доступна рассрочка</div>
                          </div>
                          </div>
                            <div className="bg-[#F9FAFF] rounded-xl p-4">
                              <div className="w-full h-24 bg-[#EDFFLF] rounded-lg mb-3 flex items-center justify-center relative">
                                <Image 
                                  src="/laptop.svg"
                                  alt="MacBook"
                                  width={96}
                                  height={96}
                                  className="w-auto h-24 object-contain"
                                />
                              </div>
                              <div className="space-y-2">
                                <div className="text-sm font-medium text-[#1A1A1A]">MacBook Air</div>
                                <div className="text-lg font-medium text-[#8F6ED5]">699 990 ₸</div>
                                <div className="text-xs text-[#4A4A4A]">Доступна рассрочка</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
                            <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
                              <div className="text-xl">🧾</div>
                            </div>
                            <div className="text-sm font-medium text-[#1A1A1A]">Бесплатно</div>
                            <div className="text-xs text-[#4A4A4A] mt-1">Магазин за 1 день</div>
                          </div>
                          <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
                            <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
                              <div className="text-xl">🚚</div>
                            </div>
                            <div className="text-sm font-medium text-[#1A1A1A]">Доставка</div>
                            <div className="text-xs text-[#4A4A4A] mt-1">Подключена логистика</div>
                          </div>
                          <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
                            <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
                              <div className="text-xl">💳</div>
                            </div>
                            <div className="text-sm font-medium text-[#1A1A1A]">Оплата</div>
                            <div className="text-xs text-[#4A4A4A] mt-1">Встроен эквайринг и рассрочка</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === "accounting" && (
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="space-y-1">
                            <div className="text-lg font-medium text-[#8F6ED5]">Бухгалтерия</div>
                            <div className="text-sm text-[#4A4A4A]">Всё для отчётности — в одном месте</div>
                          </div>
                          <div className="h-14 w-14 bg-[#40E0D0] rounded-xl flex items-center justify-center">
                            <div className="w-8 h-10 bg-white rounded-lg p-1">
                              <div className="grid grid-cols-3 gap-0.5">
                                {[...Array(9)].map((_, i) => (
                                  <div key={i} className="w-1.5 h-1.5 bg-[#40E0D0] rounded-sm"></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Financial Report Interface */}
                        <div className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-3 border-b border-[#F0F0F0]">
                              <span className="text-sm text-[#4A4A4A]">Финансовый отчёт</span>
                              <span className="text-sm font-medium text-[#1A1A1A]">2025 год</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-[#4A4A4A]">Доходы</span>
                              <span className="text-lg font-medium text-[#1A1A1A]">1 250 000 ₸</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-[#4A4A4A]">Расходы</span>
                              <span className="text-lg font-medium text-[#1A1A1A]">850 000 ₸</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-[#4A4A4A]">Прибыль</span>
                              <span className="text-lg font-medium text-[#8F6ED5]">400 000 ₸</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#F0FFF4] rounded-lg px-4 py-2">
                              <div className="w-5 h-5 rounded-full bg-[#4ADE80] flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm font-medium text-[#1A1A1A]">Отчёт готов</span>
                            </div>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
                            <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
                              <div className="text-xl">📄</div>
                            </div>
                            <div className="text-sm font-medium text-[#1A1A1A]">Автоматическая отчётность</div>
                            <div className="text-xs text-[#4A4A4A] mt-1">910-я форма создается автоматически</div>
                          </div>
                          <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
                            <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
                              <div className="text-xl">🔗</div>
                            </div>
                            <div className="text-sm font-medium text-[#1A1A1A]">Интеграция с налоговой</div>
                            <div className="text-xs text-[#4A4A4A] mt-1">Всё готово для онлайн-отправки</div>
                          </div>
                          <div className="bg-[#F9FAFF] rounded-xl p-4 text-center">
                            <div className="w-10 h-10 bg-[#F0F0F0] rounded-full flex items-center justify-center mx-auto mb-3">
                              <div className="text-xl">💸</div>
                            </div>
                            <div className="text-sm font-medium text-[#1A1A1A]">Контроль расходов</div>
                            <div className="text-xs text-[#4A4A4A] mt-1">Следим за налогами и зарплатами</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === "other" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#F9FAFF] rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="h-10 w-10 bg-[#E0FF4F] rounded-xl flex items-center justify-center">
                              <CreditCard className="h-5 w-5 text-[#1A1A1A]" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-[#1A1A1A]">Бизнес-карта</div>
                              <div className="text-xs text-[#4A4A4A]">Visa Business</div>
                          </div>
                      </div>
                          <div className="text-lg font-medium text-[#8F6ED5]">500 000 ₸</div>
                          <div className="text-xs text-[#4A4A4A] mt-1">Доступный лимит</div>
                  </div>
                        <div className="bg-[#F9FAFF] rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="h-10 w-10 bg-[#E0FF4F] rounded-xl flex items-center justify-center">
                              <Search className="h-5 w-5 text-[#1A1A1A]" />
                </div>
                            <div>
                              <div className="text-sm font-medium text-[#1A1A1A]">Проверка</div>
                              <div className="text-xs text-[#4A4A4A]">Контрагентов</div>
              </div>
            </div>
                          <div className="text-lg font-medium text-[#1A1A1A]">Безопасно</div>
                          <div className="text-xs text-[#4A4A4A] mt-1">Все контрагенты проверены</div>
            </div>
          </div>
                      <div className="bg-[#F9FAFF] rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 bg-[#E0FF4F] rounded-xl flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-[#1A1A1A]" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#1A1A1A]">Бизнес-банкинг</div>
                            <div className="text-xs text-[#4A4A4A]">KZ123456789</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div>
                            <div className="text-lg font-medium text-[#8F6ED5]">1 250 000 ₸</div>
                            <div className="text-xs text-[#4A4A4A]">Баланс счёта</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-medium text-[#1A1A1A]">12</div>
                            <div className="text-xs text-[#4A4A4A]">Операций сегодня</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
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

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Card 1 - Open Account */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              className="relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 overflow-hidden group"
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 overflow-hidden group"
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
      </div>

      {/* Trust section */}
      <div className="py-24 sm:py-32 bg-[#FDFCFB]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Почему нам доверяют предприниматели
            </h2>
            <p className="mt-6 text-lg text-[#4A4A4A]">
              Pluse.kz сочетает банковскую надёжность, венчурную поддержку и активное сообщество
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl gap-8 lg:mx-0 lg:max-w-none">
            {/* Main card */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-start gap-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F5F5]">
                  <ShieldCheck className="h-8 w-8 text-[#8F6ED5]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1A1A1A]">
                    Pluse.kz — цифровой филиал RBK Bank
                  </h3>
                  <p className="mt-3 text-[#4A4A4A]">
                    Счета и операции открываются через лицензированный банк. Мы работаем под надзором Национального Банка РК и соблюдаем все требования регулятора.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/about"
                      className="inline-flex items-center text-[#8F6ED5] font-medium hover:opacity-80 transition-opacity"
                    >
                      Узнать подробнее
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
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
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F5F5]">
                    <PiggyBank className="h-8 w-8 text-[#8F6ED5]" />
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

              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F5F5]">
                    <MapPin className="h-8 w-8 text-[#8F6ED5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A]">
                      Pluse.kz — резидент Astana Hub
                    </h3>
                    <p className="mt-2 text-[#4A4A4A]">
                      Мы развиваемся в Astana Hub — главном IT-хабе региона
                    </p>
                </div>
              </div>
            </div>
          </div>

            {/* Partners logos */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-12">
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
                width={320}
                height={106}
                className="h-24 w-auto opacity-60 hover:opacity-80 transition-opacity"
              />
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
                question: "Как открыть счёт в Pluse.kz?",
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
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] mb-4 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
              >
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
                  <span className="text-lg font-medium text-[#1A1A1A] pr-8">{faq.question}</span>
                  <div className="flex-shrink-0">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        expandedFaqItems.has(index) ? 'bg-[#E0FF4F]' : 'bg-[#EDFFLF]'
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transform transition-transform duration-200 ${
                          expandedFaqItems.has(index) ? 'rotate-180 text-[#1A1A1A]' : 'text-[#8F6ED5]'
                        }`}
                      />
                    </div>
                  </div>
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
                      <p className="mt-4 text-[#4A4A4A] leading-relaxed pr-8">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 