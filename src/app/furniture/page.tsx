import RoomTypeBox from '@/components/furniture/RoomTypeBox'
import TabsStyle from '@/components/furniture/TabsStyle'
import Header from '@/components/layout/Header'
import Navbar from '@/components/layout/Navbar'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className="" >
      <Navbar isHomePage={false} />
      <Header
        backgroundImage="/images/header/headerfurniture.png"
        title="Furniture"
        isHomePage={false}
      />
      <RoomTypeBox />
      <TabsStyle/>
    </main>
  )
}

export default page