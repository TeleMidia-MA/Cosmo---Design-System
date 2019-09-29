// Section about open Source
import React from "react";

// Import to Project Logo
import balls from "../../../assets/img/ill/balls.svg";

class Values extends React.Component  {
    render(){
        return(
            <>
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <img class="m-auto d-block" src={balls} width="200px" alt="Globo do conhecimento" />
                            </div>
                            <div class="col-6 text-center m-auto">
                                <h3><b>Cosmo</b> project</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum itaque, laudantium cumque, eveniet natus fugiat dolore explicabo possimus ex reprehenderit sit distinctio maxime quam adipisci asperiores placeat nihil saepe? Libero.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Values;