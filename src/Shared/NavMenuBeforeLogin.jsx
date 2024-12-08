
// Assuming you're using react-router for routing
import {
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa"; // Example icons from React Icons
import { Link } from "react-router";

const navItems = [
  { name: "Home", icon: <FaHome />, path: "/" },
  { name: "Login", icon: <FaSignInAlt />, path: "/login" },
  { name: "Register", icon: <FaUserPlus />, path: "/register" },
  { name: "Blog", icon: <FaBlog />, path: "/blog" },
  { name: "Contact", icon: <FaEnvelope />, path: "/contact" },
];

const NavMenuBeforeLogin = () => {
  return (
    <>
    <nav className="bg-[#FFFFFF] py-2">
      <ul className="flex justify-around mx-3">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="flex flex-col items-center text-center"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    
    </>
  );
};

export default NavMenuBeforeLogin;
