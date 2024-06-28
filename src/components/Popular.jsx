import { useNavigate } from "react-router-dom"



export function Popular(){

   const navigate=useNavigate();
  
   const goToShop=()=>{
    navigate("/shop");
   }

    return <div className=" border-y border-slate-400">
        <div className="heading flex justify-center items-center text-5xl font-serif m-5">
            Popular Categories
        </div>
        <div className="description flex flex-col justify-center items-center font-sans text-xl m-5">
            <i>Crafted with care and dedication, bringing you a curated selection that reflects </i> <i>Our commitment to excellence</i>
        </div>

        <div className="pictureBox flex justify-around items-center mb-10">
            <div className="vegetable flex flex-col justify-center items-center">
                <img src="/vegetable.png" className="rounded-full"></img>

                <p className="text-2xl m-3">Vegetables</p>
                <button   className="bg-green-800 p-2 rounded m-1 text-white" onClick={e=>goToShop()}>Go Shop</button>
            </div>
            <div className="spices flex flex-col justify-center items-center">
                <img src="/spices.jpg" className="rounded-full "></img>
                <p className="text-2xl m-3">Spices</p>
                <button className="bg-green-800 p-2 rounded m-1 text-white" onClick={e=>goToShop()}>Go Shop</button>
            </div>
            <div className="diary flex flex-col justify-center items-center">
                <img src="/diary.jpg" className="rounded-full"></img>
                <p className="text-2xl m-3">Diary</p>
                <button className="bg-green-800 p-2 rounded m-1 text-white" onClick={e=>goToShop()}>Go Shop</button>
            </div>
        </div>
    </div>
}