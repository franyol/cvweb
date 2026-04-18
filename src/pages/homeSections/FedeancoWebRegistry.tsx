import fedeancoImage from "../../assets/images/Logo-Fedeanco.png";

import {
	FaLayerGroup,
	FaCode,
	FaReact,
	FaDatabase,
	FaCloud
} from "react-icons/fa";

export default function FedeancoWebRegistry() {
	return (
		<section>
			<article id="Fedeanco">

				<h1>Fedeanco Web Registry</h1>

				{/* TOP SECTION */}
				<div style={{
					display: "flex",
					flexWrap: "wrap-reverse",
					gap: "15px",
				}}>

					{/* LEFT */}
					<div style={{ flex: 7, minWidth: "300px", paddingLeft: "20px" }}>

						<h2>Stack</h2>

						<ul style={{
							display: "flex",
							flexDirection: "column",
							gap: "14px"
						}}>

							{/* FULL STACK */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaLayerGroup /> Full Stack
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>Next.js</li>
								<li>TypeScript</li>
							</ul>

							{/* FRONTEND */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaReact /> Frontend
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>React</li>
								<li>TailwindCSS</li>
							</ul>

							{/* DATABASE */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaDatabase /> Database
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>Drizzle ORM</li>
								<li>MySQL</li>
							</ul>

							{/* HOSTING */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaCloud /> Hosting
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>AWS</li>
							</ul>

						</ul>

					</div>

					{/* RIGHT IMAGE (TOP AS BEFORE) */}
					<div style={{
						flex: 3,
						minWidth: "180px",
						maxWidth: "260px"
					}}>
						<img
							src={fedeancoImage}
							alt="Fedeanco Logo"
							style={{
								width: "100%",
								height: "auto",
								borderRadius: "12px"
							}}
						/>
					</div>

				</div>

				{/* CONTEXT */}
				<h2 style={{ paddingTop: "20px" }}>Context</h2>
				<p style={{ paddingLeft: "20px" }}>
					This project was developed for Fedeanco, a Colombian federation focused on
					genetic improvement, traceability, and livestock productivity.
				</p>

				{/* PROJECT */}
				<h2 style={{ paddingTop: "20px" }}>The project</h2>

				<p style={{ paddingLeft: "20px" }}>
					A secure platform for registering and tracking livestock, managing certificates,
					and improving data accessibility.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					Built as a freelance project covering database design, responsive UI, and authentication systems.
				</p>

				<footer>
					Updated: 04/05/2026
				</footer>

			</article>
		</section>
	);
}
