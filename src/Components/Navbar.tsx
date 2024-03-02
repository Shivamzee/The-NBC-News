import logo from "../assets/nbc.png";

const Navbar = () => {
  return (
    <div className="flex items-center bg-blue-950 w-screen h-16 text-white">
      <img src={logo} className="w-10 h-6" alt="nbc logo" />
      <h1 className="font-bold text-3xl ml-2">NBC NEWS</h1>
      <h1 className="font-bold ml-7">LIVE</h1>
      <h1 className="font-bold ml-7">POLITICS</h1>
      <h1 className="font-bold ml-7">WORLD</h1>
      <h1 className="font-bold ml-7">U.S. NEWS</h1>
      <h1 className="font-bold ml-7">BUSINESS</h1>
      <h1 className="font-bold ml-7">HEALTH</h1>
    </div>
  );
};

export default Navbar;
