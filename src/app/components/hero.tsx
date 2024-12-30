
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Navbar from './Navbar';
const Hero = () => {
  return (
   
  
          <div className="relative z-0 w-full overflow-hidden  bg-cover __className_092cb9nter" 
         style={{ backgroundImage: "url(/images/bg.png)" }}>  
         <Navbar/>
      
      {/* Overlay */}
      <div className=" absolute inset-0 -z-30 h-full w-full bg-zinc-100 bg-opacity-80"></div>
    
      {/* Content */}
      <div className=" z-10 text-center flex justify-end items-end h-full">
       <div className='max-w-full'> 
        <h2 className="font-bold pt-[100px] text-[50px] text-[#044E83]">Governor Sindh</h2>
        <h2 className='text-[#044E83] text-[35px] pl-[10px] text-left '>Kamran Khan Tessori</h2>
        <div className='mb-[20px]'>
        <h3 className='text-[#2EB6E8] text-[30px] mt-[20px] pl-[10px] font-extrabold text-left'>Certified Cloud</h3>
        <h3 className='text-[#2EB6E8] text-[30px] pl-[10px] font-extrabold text-left'>Applied Generative AI</h3>
        <h3 className='text-[#2EB6E8] text-[30px] pl-[10px] font-extrabold text-left'>Engineer (GenEng)</h3>
        </div>
        <div className='pl-[10px]'>
        <p className='text-[#044E83] text-[20px] font-extrabold text-left'>Earn up to 55.000 / month</p>
        <p className='text-[#044E83] text-[20px] font-extrabold text-left'>Now admissions are open in <br />
        Hyderabad</p>
        </div>
        <br />
        <div className='flex gap-10 mb-[90px]'>
          <Link href="/apply" className='bg-[#044E83] rounded-lg p-3 text-white font-bold text-[15px] text-center w-[150px]'><button className=' text-center rounded-xl w-full'>APPLY NOW</button></Link>
          
          <button className='text-slate-400 text-[15px] font-semibold'><span className='text-[#044E83] text-[20px] font-extrabold'>562,143 </span><br />Accepted Applications</button>
        </div>
        </div>
        <div className='img pt-[30px]'>
        <Image 
          src="/images/kmt.png"
          alt="K.K.T"
          width={700}
          height={800}
          className="h-[600px]"
        />
        </div>
      </div>
  
      </div>
  );
};

export default Hero;
