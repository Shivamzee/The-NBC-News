import Leftnav from "./Leftnav";
import Rightnav from "./Rightnav";

type newsProp ={
  gnews:any
}


const Home = (props:newsProp) => {


  return <div className="flex">
        <Leftnav gnews={props?.gnews} />
        <Rightnav gnews={props?.gnews} />
    </div>;
};

export default Home;
