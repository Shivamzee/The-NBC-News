import Leftnav from "./Leftnav";
import Rightnav from "./Rightnav";

type newsProp = {
  gnews: any;
};

const Home = (props: newsProp) => {
  return (
    <div className="flex pt-4 ">
      <Leftnav gnews={props?.gnews} />
      <Rightnav gnews={props?.gnews} />
    </div>
  );
};

export default Home;
