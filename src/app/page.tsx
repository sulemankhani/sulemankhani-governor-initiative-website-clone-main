
import Hero from "./components/hero";
import Hero1 from "./components/hero1";
import Hero2 from "./components/hero2";
import Hero3 from "./components/hero3";
import Images from "./components/image";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Hero1/>
     <Images/>
     <hr />
     <div className='w-[90%] h-[1px] bg-gray-300  items-center ml-[5%] justify-center'></div>
     <Hero2/>
     <Hero3/>
    </div>
  );
}
