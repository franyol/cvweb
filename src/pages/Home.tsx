import React from "react";
import AboutMe from "./homeSections/AboutMe";
import FedeancoWebRegistry from "./homeSections/FedeancoWebRegistry";
import LambdaEngine from "./homeSections/LambdaEngine";
import SlipperyHands from "./homeSections/SlipperyHands";
import Mars from "./homeSections/MARS";
import Kiwibot from "./homeSections/Kiwibot";

const sectionStyle: React.CSSProperties = {
	padding: "10px 0",
};

const headerStyle: React.CSSProperties = {
	padding: "20px",
	borderRadius: "12px",
};

const CategoryTitle = ({
	id,
	children,
}: {
	id: string;
	children: React.ReactNode;
}) => (
	<section id={id} style={sectionStyle}>
		<div className="plain" style={headerStyle}>
			<h2 style={{ margin: 0 }}>{children}</h2>
		</div>
	</section>
);

const Home = () => {
	return (
		<>
			{/* ===================== HERO ===================== */}
			<section style={sectionStyle}>
				<div className="plain" style={headerStyle}>
					<h1 style={{ marginBottom: "6px" }}>
						Francisco Javier Valbuena Ortega
					</h1>
					<p style={{ color: "#798188", marginTop: 0 }}>
						<b><i>Franyol</i></b>
					</p>
				</div>
			</section>

			<AboutMe />

			{/* ===================== PROJECTS OVERVIEW ===================== */}
			<CategoryTitle id="Projects">📌 Projects Overview</CategoryTitle>

			<section style={sectionStyle}>
				<div className="plain" style={{ ...headerStyle, lineHeight: "1.7" }}>
					<p>
						I am an <strong>electrical engineer and full-stack developer</strong> focused on building
						<strong> real-world systems</strong> that combine software, hardware, and automation.
					</p>

					<p>
						My work spans <strong>robotics systems</strong>, <strong>backend infrastructure</strong>,
						and <strong>low-level software engineering</strong>, with a strong emphasis on
						<strong> practical deployment and system reliability</strong>.
					</p>

					<p>
						I enjoy working across the stack — from <strong>embedded devices and signal processing</strong>,
						to <strong>cloud services and web applications</strong>, to <strong>game engines and simulations</strong>.
					</p>

					<p style={{ color: "#8fa0ad" }}>
						Below is a structured breakdown of my projects by domain.
					</p>
				</div>
			</section>

			{/* ===================== SYSTEMS / ROBOTICS ===================== */}
			<CategoryTitle id="Systems">
				🧩 Systems & Robotics Engineering
			</CategoryTitle>

			<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
				<Mars />
				<Kiwibot />
			</div>

			{/* ===================== BACKEND / INFRA ===================== */}
			<CategoryTitle id="Backend">
				🧠 Backend & Infrastructure
			</CategoryTitle>

			<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
				<FedeancoWebRegistry />
			</div>

			{/* ===================== SOFTWARE / ENGINES ===================== */}
			<CategoryTitle id="Game">
				🎮 Software & Game/Engine Development
			</CategoryTitle>

			<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
				<LambdaEngine />
				<SlipperyHands />
			</div>
		</>
	);
};

export default Home;
