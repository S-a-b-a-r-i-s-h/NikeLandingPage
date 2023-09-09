import React from 'react'
import { star } from '../assets/icons'
const PopularProductsCard = ({color,imgURL,name,price,dark}) => {
  return (
    <div className='flex flex-1 items-center flex-col w-full max-sm:w-full'>
      <img 
        src={imgURL}
        alt={name}
        className='w-[280px] h-[280px]'
      />
      <div className='lg:mt-8  flex justify-start gap-2.5'>
        <img 
          src={star} 
          alt='rating' 
          width={24}
          height={24}  
        />
        <p className='text-xl font-montserrat leading-normal text-slate-gray'>(4.5)</p>
      </div>
      <h3 className={`mt-2 text-2xl leading-normal font-semibold font-palanquin ${dark && 'text-primary'}`}>{name}</h3>
      <p className={`mt-2 font-semibold font-montserrat text-lg leading-normal text-${color}`}>{price}</p>
    </div>
  )
}

export default PopularProductsCard