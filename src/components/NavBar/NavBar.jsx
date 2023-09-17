import Link from "../link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";

const NavBar = () => {

    const [open, setOpen] =useState(false)
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav>
        <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
            {
                open === true ? <AiOutlineClose></AiOutlineClose> 
                :
                <AiOutlineMenu className=""></AiOutlineMenu>
            }
        
        </div>
      <ul className="md:flex ">      
        {
        routes.map((route) => <Link key={route.id} route={route}></Link>)
        }
      </ul>
    </nav>
  );
};

export default NavBar;
