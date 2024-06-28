import { AdvCard } from "./AdvCard"

const list=[
    {
     name:"Blissful Mangoes",
     cost:300,
     description:"Blissful Mangoes: ₹300/dozen - Exquisite Alphonso mangoes, organically grown for sweetness, aroma, and premium quality.",
     link:"/mango.avif"
    },
    {
     name:"Pumpkin Spice",
     cost:55,
     description:"Pumpkin Spice: ₹55/kg - Red pumpkin infused with red chili, adding spice and versatility to your recipes.",
     link:"/masala.avif"
    },
    {
     name:"Traditional Dahi",
     cost:60,
     description:"Traditional Dahi: ₹60/kg - Traditional dahi, a creamy delight for both plain consumption and Indian recipes, made from organic milk.",
     link:"/dahi.avif"
    },
    {
     name:"Traditional Dahi",
     cost:60,
     description:"Traditional Dahi: ₹60/kg - Traditional dahi, a creamy delight for both plain consumption and Indian recipes, made from organic milk.",
     link:"/dahi.avif"
    },
    {
     name:"Traditional Dahi",
     cost:60,
     description:"Traditional Dahi: ₹60/kg - Traditional dahi, a creamy delight for both plain consumption and Indian recipes, made from organic milk.",
     link:"/dahi.avif"
    },
    {
     name:"Traditional Dahi",
     cost:60,
     description:"Traditional Dahi: ₹60/kg - Traditional dahi, a creamy delight for both plain consumption and Indian recipes, made from organic milk.",
     link:"/dahi.avif"
    },
]


export function FeatureProduct(){
    
    return <div className="bg-slate-200 "> 
    <div className="heading flex justify-center pt-20 text-6xl font-thin font-serif mb-3">
        Featured Products
        </div>
        <div className="description flex justify-center">
            <p><i>Each item is crafted with care, delivering an unparalleled</i> </p> 
            <p> <i>experience of taste and freshness.</i></p>
        </div>

        <div className="products grid grid-cols-2 md:grid-cols-3 mt-10 pb-10 ">
           {
            list.map(item=> <AdvCard name={item.name} cost={item.cost} description={item.description} link={item.link}></AdvCard>
               )
           }

            </div> 

    
    </div>
}