// Footer to Landing Page
import React from "react"

// Logo Telemida
import logo from "../../assets/img/brand/logo_telemidia.jpeg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
    render(){
        return(
            <>
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-5 text-center">
                                <img class="mx-auto d-block" src={logo} width="150px" alt="Logo do laboratório" />
                                <p><FontAwesomeIcon icon={faCopyright} /> 2019</p>
                            </div>
                            <div class="col-2">
                                <h5>Project</h5>
                                <p>Updates</p>
                                <p>API</p>
                                <p>License</p>
                                <p>Github</p>
                            </div>
                            <div class="col-2">
                                <h5>Supports</h5>
                                <p>Report Bug</p>
                                <p>Get Help</p>
                                <p>Contact Us</p>
                            </div>
                            <div class="col-2">
                                <h5>Guide Lines</h5>
                                <p>Plugins</p>
                                <p>Packs</p>
                                <p>Core</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer