import { Dispatch, SetStateAction } from "react";
import { Api } from "./ProviderItem";


const ApiDetails = ({detail, setOnApiClick} : {detail: Api | null,setOnApiClick: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div className="wrapper">
      <img src={detail?.["x-logo"].url} width="100" height="100" />
      <h4 className="heading">{detail?.title}</h4>
      <text className="information text">{detail?.description}</text>
        <button
        className="button"
        onClick={() => setOnApiClick(false)}
      >
        Explore more APIs
     </button> 
     
    </div>
  );
};

export default ApiDetails