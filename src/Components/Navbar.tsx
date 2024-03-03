import logo from "../assets/nbc.png";

type newsCategoryProp = {
  setNewsCategory: any;
};

const Navbar = (props: newsCategoryProp) => {
  return (
    <div className="flex fixed w-full top-0 left-0 items-center bg-blue-950  h-16  text-white">
      <img src={logo} className="w-10 h-6" alt="nbc logo" />
      <h1 className="font-bold text-3xl ml-2">NBC NEWS</h1>
      <h1
        onClick={() => props.setNewsCategory("LIVE")}
        className="font-bold ml-7 cursor-pointer"
      >
        LIVE
      </h1>
      <h1
        onClick={() => props.setNewsCategory("POLITICS")}
        className="font-bold ml-7 cursor-pointer"
      >
        POLITICS
      </h1>
      <h1
        onClick={() => props.setNewsCategory("WORLD")}
        className="font-bold ml-7 cursor-pointer"
      >
        WORLD
      </h1>
      <h1
        onClick={() => props.setNewsCategory("U.S.NEWS")}
        className="font-bold ml-7 cursor-pointer"
      >
        U.S. NEWS
      </h1>
      <h1
        onClick={() => props.setNewsCategory("BUSINESS")}
        className="font-bold ml-7 cursor-pointer"
      >
        BUSINESS
      </h1>
      <h1
        onClick={() => props.setNewsCategory("HEALTH")}
        className="font-bold ml-7 cursor-pointer"
      >
        HEALTH
      </h1>
    </div>
  );
};

export default Navbar;
