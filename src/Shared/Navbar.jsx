import { useEffect, useState } from "react";
import NavMenuBeforeLogin from "./NavMenuBeforeLogin";
import NavMenuAfterLogin from "./NavMenuAfterLogin";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Replace "authToken" with your key
    setIsLoggedIn(!!token); // If the token exists, the user is logged in
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove the token
    setIsLoggedIn(false); // Update login status
  };

  return (
    <div>
      {isLoggedIn ? (
        <NavMenuAfterLogin handleLogout={handleLogout} />
      ) : (
        <NavMenuBeforeLogin />
      )}
    </div>
  );
};

export default Navbar;
