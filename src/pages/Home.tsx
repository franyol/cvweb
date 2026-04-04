import React from "react";
import AboutMe from "./homeSections/AboutMe";

const Home = () => {
	return (
		<>
        <section>
			<div className="plain">
            <h1>Francisco Javier Valbuena Ortega</h1>
            <p
                style={{color: "#798188"}}
            ><b><i>Franyol</i></b></p>
            </div>
        </section>

        <AboutMe />
		</>
	);
};

export default Home;
