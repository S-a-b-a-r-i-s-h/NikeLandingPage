import { useState,createContext,useContext } from "react";

import { shoes, statistics } from "../constants";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard"
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons/index"; 


const Hero = ({changeColor,dark}) => {
  let colour1 = "coral-red"
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [colour,setColour] = useState(colour1);
  // const changecolor = () =>{
    
  //   console.log(colour) 
  // }
  return (
    <section
      id='home'
      className={`w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ${dark && 'bg-black'}`}
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className={`text-xl font-montserrat text-${colour}  transition duration-1000`}>
          Our Summer collections
        </p>

        <h1 className={`mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ${dark && 'bg-black text-primary'}`}>
          {/* <span className={`pr-10 ${dark && 'bg-black text-primary'}`}>
            The New Arrival
          </span> */}
          The New Arrival
        </h1>
        <h1 className={`mt-1 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ${dark && ' text-primary'}`}>
          <span className={`text-${colour} inline-block mt-3 transition duration-1000 `}>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} bg={colour} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className={`text-4xl font-palanquin font-bold ${dark && ' text-primary'}`}>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40  bg-primary bg-hero bg-cover bg-center transition duration-1000'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10 transition duration-1000'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 transition duration-1000'
          // onClick={changecolor}
        >
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
                
                changeColour={(shoe) => {  
                  changeColor(shoe) 
                  setColour(shoe)
                }}  
                // colour={colour}  
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;