const Button = ({label,iconURL,bg}) => {
  return (
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