import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const Services = ({gradient,dark}) => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} gradient={gradient} dark={dark} />
      ))}
    </section>
  )
}

export default Services