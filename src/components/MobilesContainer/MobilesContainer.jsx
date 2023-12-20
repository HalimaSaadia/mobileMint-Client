import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Shared/Loader/Loader";
import MobileCard from "../MobileCard/MobileCard";

const MobilesContainer = () => {
  const axiosPublic = useAxiosPublic();
  const { data: mobiles, isPending: mobilesPending } = useQuery({
    queryKey: ["mobiles"],
    queryFn: async () => {
      const result = await axiosPublic.get("/mobiles");
      console.log(result.data);
      return result.data;
    },
  });
  console.log(mobiles);
  return (
    <div>
      {mobilesPending ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mobiles.map((mobile) => (
            <MobileCard key={mobile?._id} mobile={mobile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobilesContainer;
