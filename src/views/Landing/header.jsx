// Header to Landing Page
import React from "react"

// Import Header logo
import developer from "../../assets/img/ill/web_developer.svg"

// Nav
import Nav from "./nav/nav"

class Header extends React.Component {
    render(){
        return(
            <>
                <header class="header-main">
                    <Nav />
                    <div class="container">
                        <div class="row vh-80">
                            
                            <div class="col-6 text-center m-auto">
                                <h1>Seja bem-vindo <br/> ao <b>Cosmo</b></h1>
                            </div>

                            <div class="col-6 m-auto">
                                <img src={developer} width="400px" alt="Ilustração homem programando"/>
                            </div>
                        
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header