import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuView, setMenuView] = useState(false)

  const toggleMenu = () => {
    setMenuView(!menuView)
  }

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="w-full flex justify-between items-center max-w-screen-xl mx-auto lg:px-0 px-6">
      <Link to={'/#hero'} className="" onClick={()=>{
        setMenuView(false)
      }}>
        <img src="/assets/img/logo.svg" alt="" width={98} />
      </Link>

      <div className="lg:hidden block">
        <button onClick={toggleMenu}>
          {menuView ? (
            <X color="#ffffff" size={32} />
          ) : (
            <List color="#ffffff" size={32} />
          )}
        </button>
      </div>

      <div className={`absolute top-20 left-0 px-6 py-6 w-full transition-all duration-300 ease-in-out ${menuView ? 'h-screen backdrop-blur-md' : 'h-0'}`}>
        <ul className={`${menuView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out flex flex-col gap-3`}>
          {menuView && (
            <>
              <li>
                <Link to={"/#explore"} onClick={() => setMenuView(!menuView)} className="font-medium hover:text-blacks transition-all duration-300 flex items-center gap-1">Exprole Us</Link>
              </li>
              <li>
                <Link to={"/#pricing"} onClick={() => setMenuView(!menuView)} className="font-medium hover:text-blacks transition-all duration-300 flex items-center gap-1">Pricing</Link>
              </li>
              <li>
                <Link to={'/'} className="font-medium hover:text-blacks transition-all duration-300 flex items-center gap-1">
                  Login
                </Link>
              </li>
              <li>
                <Link to={'/'} className="font-medium hover:text-blacks transition-all duration-300 flex items-center gap-1">
                  Register
                </Link>
              </li>
              
            </>
          )}
        </ul>
      </div>

      <div className="lg:block hidden">
        <ul className="flex items-center gap-[35px] text-lg text-textAccent">
          <Link to={'/#explore'} className="hover:text-white">Explore us</Link>
          <Link to={'/#pricing'} className="hover:text-white">Pricing</Link>
          <Link to={'/'} className="hover:text-white">Login</Link>
          <Link to={'/'} className="hover:text-white">Register</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;