import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaOpencart, FaRegHeart  } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: mobile, isPending: mobilePending } = useQuery({
    queryKey: ["mobile"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/mobile/${id}`);
      return result.data;
    },
  });
//   const handleAddToCart = (id) => {
//     axiosPublic.post()
//   }
  if (mobilePending) {
    return;
  }
  const { name, image, type, processor, memory, OS, _id } = mobile;
  return (
    <div className="max-w-7xl p-5 mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-none">
        <figure className="md:flex-1">
          <img src={image} className="w-full" alt="Album" />
        </figure>
        <div className="card-body p-0 flex-1">
         <div className="card-body">
         <h2 className="card-title flex justify-between ">
          {name}
          <button><FaRegHeart className="text-[#FF00D3]"/></button>
        </h2>
          <p>
            <span className="font-semibold">Type:</span> {type}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Processor:</span> {processor}
          </p>
          <p>
            {" "}
            <span className="font-semibold">Memory:</span> {memory}
          </p>
          <p>
            {" "}
            <span className="font-semibold"> Operating System:</span> {OS}
          </p>
         </div>
          <div className="card-actions justify-end">
                 <button className=" btn w-full rounded-none bg-[#8338ec] text-white text-md font-semibold p-4 "><FaOpencart className="text-lg"  /> &nbsp; ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
