import fedeancoImage from "../../assets/images/SlipperyHands.png";
import GameLink from "../../components/GameLink";
import GithubLink from "../../components/GithubLink";

import {
	FaJs,
	FaGamepad,
	FaGithub,
	FaPlay
} from "react-icons/fa";

export default function SlipperyHands() {
	return (
		<section>
			<article id="SlipperyHands">

				<h1>Slippery Hands - Browser Game</h1>

				{/* LINKS */}
				<GithubLink href="https://github.com/franyol/Slippery-Hands">
					<h3>View on GitHub</h3>
				</GithubLink>

				<GameLink href="/Slippery-Hands/">
					<h3 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
						Try it Now
					</h3>
				</GameLink>

				<p style={{ paddingLeft: "20px", color: "#8fa0ad" }}>
					( Move: W A S D · Jump: Space )
				</p>

				{/* TOP */}
				<div style={{
					display: "flex",
					flexWrap: "wrap-reverse"
				}}>

					{/* LEFT */}
					<div style={{
						flex: 7,
						minWidth: "300px",
						paddingLeft: "20px"
					}}>

						<h2>Stack</h2>

						<ul style={{
							display: "flex",
							flexDirection: "column",
							gap: "10px"
						}}>

							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaJs /> JavaScript
							</li>

							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaGamepad /> Game Development
							</li>

						</ul>

					</div>

					{/* IMAGE */}
					<div style={{
						flex: 3,
						minWidth: "200px",
						maxWidth: "500px"
					}}>
						<img
							src={fedeancoImage}
							alt="Slippery Hands"
							style={{
								width: "100%",
								height: "auto",
								borderRadius: "15px"
							}}
						/>
					</div>

				</div>

				{/* CONTEXT */}
				<h2 style={{ paddingTop: "20px" }}>Context</h2>

				<p style={{ paddingLeft: "20px" }}>
					I built this project as an experiment in <strong>raw JavaScript game development</strong>,
					after mostly working in TypeScript.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					The goal was to explore a simpler, lower-abstraction workflow for browser games.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					Developed over two months between jobs while preparing for an internship at <OAELab />.
				</p>

				{/* PROJECT */}
				<h2 style={{ paddingTop: "20px" }}>The Project</h2>

				<p style={{ paddingLeft: "20px" }}>
					Built in vanilla JavaScript with a structure inspired by my C++ engine work in <LambdaEngine />.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					Includes basic movement, hitboxes, and early animation logic.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					The original idea was a hitman whose gun would bounce out of his hands after every shot.
				</p>

				<footer>
					Updated: 04/05/2026
				</footer>

			</article>
		</section>
	);
}

/* references */
const OAELab = () => {
	return <a href="https://www.eecis.udel.edu/~badiey/">Laboratory of Ocean Acoustics & Engineering</a>;
};

const LambdaEngine = () => {
	return <a href="#LambdaEngine">Lambda Engine</a>;
};
