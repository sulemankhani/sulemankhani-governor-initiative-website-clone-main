import React from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
const Apply = () => {
  return (
    <div>
      <Navbar/>
        <form action="form" className=' mb-[6%] ' >
          <div className='border border-gray-200 shadow-lg shadow-gray-400  ml-[30%] w-[40%] p-6 mt-4'>
        <div className='flex flex-col w-[100%]  mt-[6%] mb-[20px]'>
            <h1 className='text-[25px] font-extrabold text-center text-[#044E83]'>Student Course Registration Form</h1>
            <p className='text-center text-[14px]'>Already applied? <Link href="https://www.gmaill.com" className='underline text-blue-500'>Get Admit Card</Link></p>
            </div>
        <div className='flex flex-col w-[100%] mb-[20px]'>
            <label htmlFor="Full Name">Full Name*</label>
            <input type="text" placeholder='Full Name' className='border border-slate-400 p-[10px] bg-gray-100 rounded-s rounded-e'/>
            </div>
            <div className='flex flex-col w-[100%] mb-[20px]'>
            <label htmlFor="Father Name">Father Name*</label>
            <input type="text" placeholder='Father Name' className='border border-slate-400 p-[10px]  bg-gray-100 rounded-s rounded-e'/>
            </div>
            <div className='flex flex-col w-[100%] mb-[20px]'>
            <label htmlFor="phone number">Phone Number*</label>
            <input type="tel" placeholder='+92 | Phone Number' className='border border-slate-400 p-[10px]  bg-gray-100 rounded-s rounded-e'/>
            </div>
            <div className='flex flex-col w-[100%] mb-[20px]'>
            <label htmlFor="Email">Email*</label>
            <div className='flex flex-row'>
            <input type="tel" placeholder='Email' className='border border-slate-400 p-[10px] w-[75%]  bg-gray-100 rounded-s '/>
            <span className='border border-slate-300 bg-[#044E83] text-white text-center pt-[10px] pl-[10px] w-[25%] pr-[10px] rounded-e text-[15px] items-center justify-center'>Send OTP</span>
            </div>
            </div>
            <div className='flex flex-col w-[100%] mb-[20px]'>
            <label htmlFor="PTP">OTP*</label>
            <input type="text" placeholder='OTP' className='border border-slate-400 p-[10px]  bg-gray-100 rounded-s rounded-e'/>
            </div>
            <div className='flex flex-col w-[100%]  mb-[20px]'>
            <label htmlFor="CNIC or B-Form Number">CNIC or B-Form Number*</label>
            <input type="tel" placeholder='CNIC or B-Form Number' className='border border-slate-400 p-[10px]  bg-gray-100 rounded-s rounded-e'/>
            </div>
            <div className='flex flex-col w-[100%] mb-[20px]'>
            <label htmlFor="City">City*</label>
        
            <select name="city" id="city" className='p-[10px] border border-slate-400  bg-gray-100 rounded-s rounded-e'>
           
                <option value="Karachi">Karachi</option>
                <option value="Lahor">Lahore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Quetta">Quetta</option>
             
            </select>
            </div>
            <div className='flex flex-col w-[100%]  mb-[20px]'>
            <label htmlFor="Date of Birth">Date of Birth*</label>
            <input type="date" placeholder='mm/dd/yyyy'  className='border border-slate-400 p-[10px]  bg-gray-100 rounded-s rounded-e'/>
            </div>
            <div className='flex flex-col w-[100%] '>
            <label htmlFor="Gender">Gender*</label>
            </div>
            <div className='flex flex-row ml-[30%] pl-[10px]  w-[100%] p-[10px] mb-[20px] '>
            <div className='ml-[60px] '><input type="radio" value="Male" /><span className='ml-[10px]'>Male</span></div>
           <div className='ml-[60px] '><input type="radio" value="Female"  className='border border-slate-400 p-[10px]'/><span className='ml-[10px]'>Female</span></div> 
            </div>
            <div className='flex flex-col w-[100%] mb-[20px]'>
            <label htmlFor="Qualification">Highest Qualification*</label>
            <select name="city" id="city" className='p-[10px] border border-slate-400  bg-gray-100 rounded-s rounded-e'>
           <option value="Please Select">Please Select</option>
           <option value="Under Middle (Under grade8)">Under Middle (Under grade8)</option>
           <option value="Matric / 0 levels">Matric / O levels</option>
           <option value="Intermadiate / A levels">Intermediate / A levels</option>
           <option value="Undergraduate (Bachelor's)">Undergraduate (Bachelors)</option>
           <option value="Graduate (Master's)">Graduate (Masters)</option>
            <option value="Post-Graduate (Phd)">Post-Graduate (Phd)</option>
       </select>
            </div>
            <div className='flex flex-col w-[100%] mt-[6%] mb-[20px]'>
            <button className='bg-[#044E83] font-bold text-white p-[10px]'>SUBMIT</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Apply