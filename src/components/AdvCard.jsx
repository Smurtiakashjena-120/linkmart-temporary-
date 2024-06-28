
import { useNavigate } from "react-router-dom"


export function AdvCard(props){
    const navigation=useNavigate();
  
    const goToShop=()=>{
     navigate("/shop");
     navigation.navigate('/shop', props);
    }


    return <div className="showingCard border border-gray-800 rounded ml-5 mr-5  mt-5">
        <div className="image">
        <img src={props.link}></img>
        </div>
        <div className="cost border border-zinc-300 font-thin p-1 m-1 flex justify-end ">
        <p> Rs {props.cost}/kg</p>
        </div>
        <div className="heading p-1 pr-2 pl-5 font-bold font-serif">  
        {props.name}
        </div>
        <div className="description p-1 pr-2 pl-5">
        <p>{props.description}</p>
        </div>
        <div className="link pt-3 pb-8 pl-5 cursor-pointer ">
        <a href="#" onClick={e=>goToShop()}>See More</a>
        </div>
        
    </div>
}