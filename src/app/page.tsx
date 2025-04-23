'use client'

import { useState } from 'react'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Trust from '@/components/home/Trust'
import HowToConnect from '@/components/home/HowToConnect'
import FAQ from '@/components/home/FAQ'

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* How To Connect Section */}
      <HowToConnect />

      {/* Trust Section */}
      <Trust />

      {/* FAQ Section */}
      <FAQ />
    </main>
  )
} 