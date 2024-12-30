import React from 'react'
import Card from './card'


const Hero2 = () => {
    const cardData = [
        {
            id:1,
            img:"/images/1.jpg",
            title:"Programming Fundamentals"
        },
        {
            id:2,
            img:"/images/2.jpg",
            title:"Web2 Using NextJS"
        },
        {
            id:3,
            img:"/images/3.jpg",
            title:"Earn as, you learn"
        },
        
    ]
  return (
    <div>
        <h2 className='text-3xl font-extrabold text-[#044E83] text-left px-12 py-8'>Core Courses Sequence</h2>
        <div className='flex flex-wrap px-12 py-6 gap-6'>
        {cardData.map((item,index)=>(
            <Card
            key={index}
            image={item.img}
            title={item.title}
            ></Card>
        ))}
            </div>
            </div>
  )
}

export default Hero2