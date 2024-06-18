import Header from '@/components/layout/Header'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className="" >
      <Navbar isHomePage={false} />
      <Header
        backgroundImage="/images/header/headerfurniture.png"
        title="Inspirasi"
        isHomePage={false}
      />
    </main>
  )
}

export default page