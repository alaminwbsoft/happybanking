import React, { useState } from 'react';
import NavMenuBeforeLogin from '../../Shared/NavMenuBeforeLogin';
import NavMenuAfterLogin from '../../Shared/NavMenuAfterLogin';

const Logout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
        {isLoggedIn?(
<NavMenuAfterLogin/>
        ):(
<NavMenuBeforeLogin/>
        )

        }
        </>
     
    );
};

export default Logout;