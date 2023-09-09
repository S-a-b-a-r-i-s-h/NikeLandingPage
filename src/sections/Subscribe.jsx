import Button from "../components/Button"
const Subscribe = ({color,dark}) => {
  return (
    <section 
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className={`text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold ${dark && 'text-primary'}`}>
        Sign Up from<span className={`text-${color}`}> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-xl'>
        <input type='text' placeholder='subscribe@nike.com' className={`input ${dark && 'text-primary bg-black'}`} />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' bg={color} />
        </div>
      </div>
    </section>
  )
}

export default Subscribe