import fedeancoImage from "../../assets/images/kiwibot.jpg";

import {
	FaRobot,
	FaCode,
	FaCloud,
	FaLaptopCode,
	FaNetworkWired,
	FaTools,
	FaServer,
	FaCogs
} from "react-icons/fa";

export default function Kiwibot() {
	return (
		<section>
			<article id="Kiwibot">

				<h1>Fleet Control Toolkit</h1>

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
							gap: "16px"
						}}>

							{/* Robotics */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaRobot /> Robotics Operations
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>Autonomous Debugging</li>
								<li>Fleet Monitoring</li>
								<li>Incident Response</li>
								<li>Telemetry Analysis</li>
							</ul>

							{/* Backend */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaCode /> Backend & Automation
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>Python</li>
								<li>CLI Tooling</li>
								<li>REST APIs</li>
								<li>Automation Pipelines</li>
							</ul>

							{/* Cloud */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaCloud /> Cloud Infrastructure
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>GCP Cloud Run</li>
								<li>Containers</li>
								<li>Balena Cloud</li>
								<li>Device Management</li>
							</ul>

							{/* Web */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaLaptopCode /> Web Development
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
								<li>tRPC</li>
								<li>Dash</li>
							</ul>

							{/* Systems */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaNetworkWired /> Systems Integration
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>SSH Control</li>
								<li>Service Communication</li>
								<li>Hardware Integration</li>
							</ul>

							{/* Engineering */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaCogs /> Software Engineering
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>Internal Tools</li>
								<li>Monorepos</li>
								<li>Python Packages</li>
								<li>Refactoring</li>
							</ul>

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
							alt="Kiwibot"
							style={{
								width: "100%",
								height: "auto",
								borderRadius: "15px",
								background: "#e9f0f3"
							}}
						/>
					</div>

				</div>

				{/* TEXT */}
				<h2 style={{ paddingTop: "20px" }}>Context</h2>

				<p style={{ paddingLeft: "20px" }}>
					Worked at <strong>Kiwibot</strong> as a Service Desk Robotics Engineer supporting an autonomous fleet.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					Focused on debugging robotics systems and building automation tools to reduce operational load.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					Evolved into internal platform development including APIs and automation systems.
				</p>

				<h2 style={{ paddingTop: "20px" }}>Autodebugger</h2>

				<p style={{ paddingLeft: "20px" }}>
					A Python CLI tool that automated repetitive debugging workflows across the fleet.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					Designed as a Trigger → Diagnose → Solution pipeline using SSH and telemetry.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					Reduced over 50% of incoming tickets through automation.
				</p>

				<h2 style={{ paddingTop: "20px" }}>Fleet Automation</h2>

				<p style={{ paddingLeft: "20px" }}>
					Built GCP Cloud Run services for fleet configuration and automation workflows.
				</p>

				<h2 style={{ paddingTop: "20px" }}>Device Manager</h2>

				<p style={{ paddingLeft: "20px" }}>
					Contributed to REMI-Pro Device Manager with versioning and fleet tracking systems.
				</p>

				<footer>
					Updated: 04/05/2026
				</footer>

			</article>
		</section>
	);
}
