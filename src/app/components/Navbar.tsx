"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    
    <div className='flex justify-evenly relative  w-full  bg-[#044E83] text-white h-20 rounded-r rounded-e'>
      <div className='ml-[40px]  pt-[25px] relative '>
        <Image src="/images/logo.png" alt="logo" width={70} height={70} className=' w-[70px] sm:w-[80px] md:w-[90px]'/>
      </div>
      <div>
      <h1 className=' text-center mt-7 text-[23px] text-blue-200'>Tuition Free Education Program on Latest Technologies</h1>
      </div>
      <div>
        <ul className='flex text-white gap-4 mt-8 text-[16px]'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/apply">Apply</Link></li>
          <li><Link href="/jobs">Jobs</Link></li>
          <li><Link href="/result">Result</Link></li>
          <li><Link href="/"> Courses
          <select className='flex-grow-0 w-[15px] border-none h-full bg-[#044E83] py-1 text-white' >
          
            <option className='bg text-[20px] font-bold py-2 h-5' value="core-courses">Core Courses</option>
            <option value="Programming Fundamentials"  className=' h-[15px] bg-white text-black row-gap-3'> <Link href="https://www.governorsindh.com/compulsory/1" >Programming Fundamentials</Link></option>
            <option value="Web2 Using NextJS"  className='bg-white text-black'> <Link href="https://www.governorsindh.com/compulsory/2">Web2 Using NextJS</Link></option>
           <option value="Earn as You Learn" className='bg-white text-black'> <Link href="https://www.governorsindh.com/compulsory/3"  >Earn as You Learn</Link></option> 
            <hr />
            <option className='bg  text-[20px] font-bold' value="Advanced Courses">Advanced Courses</option>
            <option value="Web 3 and Metaverse" className='bg-white text-black'><Link href="https://www.governorsindh.com/tracks/wmd/4">Web 3 and Metaverse</Link></option>
            <option  value="Cloud-Native Computing" className='bg-white text-black'><Link href="https://www.governorsindh.com/tracks/cnc/4">Cloud-Native Computing</Link></option>
           <option  value="Artificial Intlligence (AI) and Deep Learning" className='bg-white text-black'> <Link href="https://www.governorsindh.com/tracks/ai/4">Artificial Intlligence (AI) and Deep Learning</Link></option>
           <option value="Ambient Computing and IoT" className='bg-white text-black'> <Link href="https://www.governorsindh.com/tracks/iot/4">Ambient Computing and IoT</Link></option>
<option value="Genomics and Bioinformatics" className='bg-white text-black'>            <Link href="https://www.governorsindh.com/tracks/gbs/4">Genomics and Bioinformatics</Link></option>
         <option  value="Network Programmability and Automation" className='bg-white text-black'>   <Link href="https://www.governorsindh.com/tracks/npa/4">Network Programmability and Automatio</Link></option>
            </select> 
            </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar