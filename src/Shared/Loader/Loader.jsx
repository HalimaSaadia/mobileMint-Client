import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
    
    return (
        <div>
             <ClipLoader
        // color={color}
        // loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
    );
};

export default Loader;