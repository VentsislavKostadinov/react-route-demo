
import React from "react";
import { Link } from "react-router-dom";


const Header = () => (
    <div>

        <Link to= "/">Home</Link> &nbsp;&nbsp;
        <Link to= "/about">About</Link> &nbsp;&nbsp;
        <Link to= "/contacts">Contacts</Link>
    </div>

);

export default Header;