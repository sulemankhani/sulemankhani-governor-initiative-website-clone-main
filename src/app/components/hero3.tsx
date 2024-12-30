import React from 'react'
import Card from './card'
const Hero3 = () => {
    const cardData = [
        {
            id:1,
            img:"/images/4.jpg",
            title:"Artificial Intelligence"
        },
        {
            id:2,
            img:"/images/5.jpg",
            title:"Web 3 and Metaverse"
        },
        {
            id:3,
            img:"/images/6.jpg",
            title:"Cloud-Native Computing"
        },
        {
            id:3,
            img:"/images/7.jpg",
            title:"Ambient Computing and Io T"
        },
        {
            id:3,
            img:"/images/8.jpg",
            title:"Genomics and Bioinformatics"
        },
        {
            id:3,
            img:"/images/9.jpg",
            title:"Network Programmability and Automation"
        },
        
    ]
  return (
    <div>
        <h2 className='text-3xl font-extrabold text-[#044E83] text-left px-12 py-8'>Advanced Courses</h2>
        <div className='flex flex-wrap px-12 py-6 gap-6'>
        {cardData.map((item,index)=>(
            <Card
            key={index}
            image={item.img}
            title={item.title}
            >
            </Card>
        ))}
            </div>
            </div>
  )
}

export default Hero3