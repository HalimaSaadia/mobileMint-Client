import { FaOpencart, FaHeart, FaRegHeart   } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
const MobileCard = ({ mobile }) => {

    const {name,image,type,processor, memory, OS, _id} = mobile
  return (
    <div className="card max-w-96 rounded-none shadow-2xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="h-64 w-full"
        />
      </figure>
      <div className="card-body p-0">
       <div className="card-body">
       <h2 className="card-title flex justify-between ">
          {name}
          <button><FaRegHeart className="text-[#FF00D3]"/></button>
        </h2>
       
       </div>
        <div className="card-actions ">
         
    
          <Link to={`/details/${_id}`} className="w-full"><button className=" btn w-full rounded-none bg-[#8338ec] text-white text-md font-semibold p-4 "><TbListDetails className="text-lg"  /> &nbsp; Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
