// Header to Design System
import React from "react";

// Import to Project Logo
import glob from "../../assets/img/brand/glob.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    render(){
        return(
            <>
                <div class="header-main">
                    <div class="container">
                        <div class="text-center row vh-100">
                            <div class="m-auto">
                                <img src={glob} alt="Logo do Projeto"/>
                                <h5 class="light"><span class="bold">Design System</span> feito em bootstrap 4. Uma UI Kit feita especialmente para o <b>Cosmo</b>. <FontAwesomeIcon icon={faSmileBeam} /></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;