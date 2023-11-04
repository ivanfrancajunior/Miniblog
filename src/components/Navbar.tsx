import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    if (location.pathname === location.pathname) {
      setShowMenu(false);
    }
  }, [location]);
  /*
    capturar o valor atual da rota
    adiciona useeffect olhando o path 
    sempre q o path trocar fechar o menu
  */
  return (
    <>
      <nav className="text-zinc-50 font-bold flex items-center justify-between gap-5 px-6 h-24 bg-[#4099db] shadow-md">
        <Link to="/">
          <h3>MiniBlog</h3>
        </Link>
        <div className="hidden md:flex">
          <input type="text" placeholder="search" />
        </div>
        <div className="hidden md:flex">
          <ul className="flex  gap-10">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/post">Posts</Link>
            {/* <Link to="/create">New</Link> */}
            <Link to="/signin">Login</Link>
            <Link to="/register">Register</Link>
          </ul>
        </div>
        <button className="pointer" onClick={() => setShowMenu(!showMenu)}>
          <RiMenuFill size={30} />
        </button>
      </nav>
      <div
        className={` ${
          showMenu ? "block" : "hidden"
        } md:hidden absolute top-24 w-full`}
      >
        <ul className="flex flex-col bg-[#1a1a1a] text-white gap-2 p-8 w-80% rounded-md  items-end  justify-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/post">Posts</Link>
          {/* <Link to="/create">New</Link> */}
          <Link to="/signin">Login</Link>
          <Link to="/register">Register</Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
