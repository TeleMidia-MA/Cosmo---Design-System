// Nav to Landing page
import React from "react";

// Import to Project Logo
import logo from "../../../assets/img/brand/logo.svg";

class Header extends React.Component {
    render(){
        return(
            <>
                {/* Só uma imagem */}
                <nav class="navbar navbar-light container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="130px" alt="logo cosmo" />
                    </a>

                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Development</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Getting Start</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sign Up</a>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Header;