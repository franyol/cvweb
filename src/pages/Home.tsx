import React from "react";
import AboutMe from "./homeSections/AboutMe";
import FedeancoWebRegistry from "./homeSections/FedeancoWebRegistry";
import LambdaEngine from "./homeSections/LambdaEngine";

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

        <section>
			<div className="plain">
            <h1 id="Projects">Projects</h1>
            </div>
        </section>
        <section>
			<div className="plain">
            <h1 id="Onging">&#8227; Ongoing</h1>
            </div>
        </section>

        <FedeancoWebRegistry />

        <LambdaEngine />
		</>
	);
};

export default Home;
