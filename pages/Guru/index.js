import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head'
import Teacher from '@/components/Teacher'

export default function Guru() {
  return (
    <div>
         <Head>
        <title>Guru</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
        <Navbar/>
        <Teacher/>
        <Footer />
    </div>
  )
}
