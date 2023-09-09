import React from 'react'

const ServiceCard = ({imgURL,label,subtext,gradient,dark}) => {
  return (
    <div>
        <div className='relative'>
            <div className={`m-1  absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-1 blur`}></div>
            <div className={`relative flex-1 sm:w-[350px] sm:min-w-[350px] w-full
            rounded-[10px] px-10 py-16 bg-black text-primary ${!dark && 'bg-white text-black'}`}>
                <div className={`relative rounded-full w-11 h-11 flex justify-center items-center bg-gradient-to-r bg-${gradient}`}>
                    <img
                      src={imgURL} 
                      alt="label" 
                      width={24}
                      height={24}
                    />
                </div>  
                <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
                <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard