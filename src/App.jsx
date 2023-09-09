import { 
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer 
}  from "./sections";
import { React, useState} from "react";
import Nav from "./components/Nav";

const App = () => {
  let colour = "coral-red";
  let gradient = "gradient-to-r from-pink-500 to-amber-500"
  const [color, setColor] = useState(colour);
  const [dark,setDark] = useState(false)
  return(
    <main className={`relative ${dark&&'bg-black'}`}>
      <Nav changeDark={(ifdark) => setDark(ifdark)} />
      {/* {console.log(dark)} */}
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero changeColor={(shoecolor) => setColor(shoecolor)} dark={dark} />
        {/* {console.log(color)} */}
      </section>
      <section className="padding">
        <SuperQuality dark={dark} />
      </section>
      <section className="padding">
        <PopularProducts color={color} dark={dark} />
      </section>
      
      <section className="padding-x py-10">
        <Services gradient={gradient} dark={dark} />
      </section>
      <section className="padding">
        <SpecialOffers gradient={gradient} dark={dark} />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews color={color} dark={dark} />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full border-b-2 border-white">
        <Subscribe color={color} dark={dark} />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  )
};

export default App;