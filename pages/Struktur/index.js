import Atasan from '@/components/Atasan'
import Footer from '@/components/Footer'
import Kepsek from '@/components/Kepsek'
import Navbar from '@/components/Navbar'
import Stuktur from '@/components/stuktur'
import React from 'react'

export default function Struktur() {
  return (
    <div>
        <Navbar />
        <Stuktur/>
        <Kepsek />
        <Atasan />
        <Footer />
    </div>
  )
}
