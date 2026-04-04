import React from "react";

const Home = () => {
	return (
		<>
        {[...Array(20)].map((_, i) => (
		<section>
			<article id="{i}">
                <h1>Article {i}</h1>
                <p>These are the contents of this article</p>
			</article>
		</section>
        ))}
		</>
	);
};

export default Home;
