import React from 'react'
import Image from 'next/image';
interface PropsType{
    image:string;
    title:string;
}
const Card:React.FC<PropsType> = ({image,title}) => {
  return (
    <div className='rounded-xl border border-gray-300 mb-[50px]  hover:shadow-slate-200  hover:shadow-lg'>
        <div className='rounded-xl'>
            <Image 
            src={image}
            alt="card"
            width={200}
            height={200}
            className='w-[250px] pb-[10px] h-[190px] rounded-lg hover:h-[200px]'
            />
            <h2 className='text-gray-700 pb-[10px] text-center content-center pl-6 text-[16px] font-bold w-[190px]'>{title}</h2>
        </div>
    </div>
  )
}

export default Card