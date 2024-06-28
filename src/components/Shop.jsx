import { ShopCard } from "./ShopCard"

import '../App.css'
import { Dropdown } from "./Dropdown"
const items=[
    {
        name:"Mango",
        cost:100,
        link:"/mango.avif"
    },
    {
        name:"Apples",
        cost:115,
        link:"/apples.avif"
    },
    {
        name:"Berry",
        cost:90,
        link:"/berry.jpg"
    },
    {
        name:"Carrot",
        cost:75,
        link:"/carrot.jpg"
    },
    {
        name:"Custard",
        cost:250,
        link:"/custard.jpg"
    },
    {
        name:"Sweet Dahi",
        cost:50,
        link:"/dahi.avif"
    },
    {
        name:"Masala Eggs",
        cost:200,
        link:"/eggs.avif"
    },
    {
        name:"Gobi",
        cost:150,
        link:"/gobi.avif"
    },
    {
        name:"Guavas",
        cost:100,
        link:"/guavas.jpg"
    },
    {
        name:"Spices",
        cost:500,
        link:"/spices.jpg"
    },
    {
        name:"Onion",
        cost:90,
        link:"/onion.jpg"
    },
    {
        name:"Paneer",
        cost:250,
        link:"/paneer.jpg"
    },
    {
        name:"Pepper",
        cost:420,
        link:"/paper.jpg"
    },
    {
        name:"Pumpkin",
        cost:45,
        link:"/pumpkin.jpg"
    },
    {
        name:"Turmeric",
        cost:300,
        link:"/turmeric.avif"
    },
    {
        name:"vegitables",
        cost:100,
        link:"/vegetable.png"
    },

]



export function Shop(){

   
    return <div className="Shop bg-gray-200 flex flex-col items-center">  

 <div className="dropDown p-5">
   <div className="heading p-4">
    <p> Catagory</p>
   </div>
 <Dropdown></Dropdown>
 </div>
 <div className="ShopItems grid grid-cols-2 md:grid-cols-3 pt-5">
    {
        items.map(item=><ShopCard name={item.name} cost={item.cost} link={item.link}></ShopCard>)
    }
 </div>


    </div>



}