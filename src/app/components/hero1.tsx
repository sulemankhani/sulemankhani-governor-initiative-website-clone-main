import React from 'react'
import Image from 'next/image'
const Hero1 = () => {
  return (
    <div>
        <h2  className="font-bold text-[25px] text-center mt-[40px] text-[#044E83]">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur <br /> Developing Billion-Dollar Valued Developers and Solopreneurs</h2>
    <p className='items-center justify-between m-[30px] mr-[20px]'>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.

</p>
    <div className='flex gap-5 items-center justify-center mb-10'>
        <Image src="/images/img3.png" alt="Img" width={350} height={200} className='img1  rounded-lg shadow-md p-2 shadow-slate-500 '/>
        
        <Image src="/images/img2.png" alt="Img" width={380} height={220} className='img1  rounded-lg shadow-md p-2 shadow-slate-500 '/>
        
        <Image src="/images/img.png" alt="Img" width={350} height={200} className='img1  rounded-lg shadow-md p-2 shadow-slate-500 '/>
    </div>
    </div>
  )
}

export default Hero1