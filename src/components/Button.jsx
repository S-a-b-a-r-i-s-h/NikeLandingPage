const Button = ({label,iconURL,bg}) => {
  return (
    //text-coral-red text-yellow-700 text-cyan-900 border-coral-red bg-coral-red border-yellow-700 bg-yellow-700 border-cyan-900 bg-cyan-900
    <button className={`flex justify-center items-center hover:shadow-2xl
    gap-2 px-7 py-4 border-none font-montserrat text-lg leading-none bg-${bg} rounded-xl text-white border-${bg} transition duration-1000`}>
        {label}
        {iconURL && <img 
            src={iconURL} 
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
            />}
    </button>
  )
}

export default Button