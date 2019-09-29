// Documentar Depois
import React from "react";

// Estructure to Design System
import Header from "./Landing/header"
import Description from "./Landing/content/description"
import Values from "./Landing/content/values";
import Box from "./Landing/content/box"
import Footer from "./Landing/footer"

class Index extends React.Component {
    render() {
        return(
            <>
                <Header />
                <Description />
                <Box />
                <Values />
                <Footer />
            </>
        );
    }
}

export default Index;