import fedeancoImage from "../../assets/images/BulletHeaven.png";
import GithubLink from "../../components/GithubLink";

import {
	FaCode,
	FaCubes,
	FaGamepad,
	FaBook
} from "react-icons/fa";

export default function LambdaEngine() {
	return (
		<section>
			<article id="LambdaEngine">

				<h1>Lambda Engine - Game Engine</h1>

				{/* GitHub link already handles its own icon */}
				<GithubLink href="https://github.com/franyol/Lambda_Engine">
					<h3>View on GitHub</h3>
				</GithubLink>

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
							gap: "12px"
						}}>

							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaCode /> C++
							</li>

							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaCubes /> SDL2
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>SDL2_mixer</li>
								<li>SDL2_ttf</li>
								<li>SDL2_image</li>
							</ul>

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
							alt="BulletHeaven"
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
					I became interested in <strong>game development</strong>, but leaned toward
					<strong>engine architecture</strong> and <strong>low-level systems</strong>.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					Instead of using Unity or Unreal, I decided to build my own engine in C++.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					This became a long-term solo project focused on design patterns and system design.
				</p>

				{/* PROJECT */}
				<h2 style={{ paddingTop: "20px" }}>The Project</h2>

				<p style={{ paddingLeft: "20px" }}>
					Built in <strong>C++</strong> using SDL2 as a rendering and systems foundation.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					Driven by interest in memory control, performance, and engine-level design.
				</p>

				{/* LEARNING */}
				<h2 style={{ paddingTop: "20px" }}>Learning Source</h2>

				<p style={{
					paddingLeft: "20px",
					display: "flex",
					alignItems: "center",
					gap: "8px"
				}}>
					<FaBook />
					<SdlGameDevBook />
				</p>

				<footer>
					Updated: 04/05/2026
				</footer>

			</article>
		</section>
	);
}

const SdlGameDevBook = () => {
	return (
		<a href="https://elhacker.info/manuales/Lenguajes%20de%20Programacion/C++/SDL.Game.Development.pdf">
			SDL Game Development
		</a>
	);
};
