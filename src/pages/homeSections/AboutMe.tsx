import profileImage from "../../assets/images/profile.jpg";
import GithubLink from "../../components/GithubLink";
import LinkedinLink from "../../components/LinkedinLink";
import MailLink from "../../components/MailLink";

import {
	FaUserTie,
	FaCode,
	FaDatabase,
	FaMicrochip,
	FaRobot,
	FaTools,
	FaGamepad,
	FaLinux,
	FaShieldAlt
} from "react-icons/fa";

export default function AboutMe() {
	return (
		<section>
			<article id="About-me">

				<h1>About me</h1>

				<div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "10px" }}>

					{/* LEFT SIDE */}
					<div style={{ flex: 7, minWidth: "300px", paddingLeft: "20px" }}>

						<h2 id="Profession">Profession</h2>

						<ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

							{/* ENGINEER */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaUserTie /> Electrical Engineer
							</li>

							<ul style={{
								paddingLeft: "20px",
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 12px",
								listStyle: "none"
							}}>
								<li>P. Universidad Javeriana</li>
								<li>Colombia</li>
							</ul>

							{/* WEB DEV */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaCode /> Full Stack Web Developer
							</li>

							<ul style={{
								paddingLeft: "20px",
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 12px",
								listStyle: "none"
							}}>
								<li>Next.js</li>
								<li>Docker</li>
								<li>Flask</li>
								<li>Django</li>
								<li>Laravel</li>
								<li>AWS</li>
							</ul>

							{/* BACKEND */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaDatabase /> Backend Developer
							</li>

							<ul style={{
								paddingLeft: "20px",
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 12px",
								listStyle: "none"
							}}>
								<li>FastAPI</li>
								<li>Express.js</li>
							</ul>

							{/* RESEARCH */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaMicrochip /> Researcher
							</li>

							<ul style={{
								paddingLeft: "20px",
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 12px",
								listStyle: "none"
							}}>
								<li>Signal Processing</li>
								<li>Acoustics</li>
								<li>Acquisition Circuits</li>
								<li>Microcontrollers</li>
								<li>AI</li>
							</ul>

							{/* EMBEDDED */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaMicrochip /> Embedded Systems
							</li>

							<ul style={{
								paddingLeft: "20px",
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 12px",
								listStyle: "none"
							}}>
								<li>C</li>
								<li>C++</li>
								<li>ESP-IDF</li>
								<li>FreeRTOS</li>
							</ul>

							{/* ROBOTICS */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaRobot /> Robotics
							</li>

							<ul style={{
								paddingLeft: "20px",
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 12px",
								listStyle: "none"
							}}>
								<li>ROS2</li>
								<li>Python</li>
								<li>C++</li>
								<li>Docker</li>
							</ul>

							{/* CIRCUITS */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaTools /> Circuit Design
							</li>

							<ul style={{
								paddingLeft: "20px",
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 12px",
								listStyle: "none"
							}}>
								<li>KiCad</li>
								<li>LTspice</li>
								<li>Altium</li>
								<li>OrCAD</li>
							</ul>

						</ul>

						<h2 id="Hobbies">Hobbies</h2>

						<ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
							<li><FaLinux /> Neovim enjoyer</li>
							<li><FaLinux /> Linux kernel exploration</li>
							<li><FaGamepad /> Game dev in C++</li>
							<li><FaShieldAlt /> Cybersecurity</li>
						</ul>

					</div>

					{/* RIGHT SIDE IMAGE */}
					<div style={{
						flex: 3,
						minWidth: "200px",
						maxWidth: "300px"
					}}>
						<img
							src={profileImage}
							alt="ProfilePhoto"
							style={{
								width: "100%",
								height: "auto",
								borderRadius: "15px"
							}}
						/>
					</div>

				</div>

				{/* LINKS */}
				<div style={{ display: "flex", flexWrap: "wrap", marginTop: "15px" }}>

					<div style={{ flex: "1" }}>
						<h2 id="Media">Media</h2>
						<GithubLink href="https://github.com/franyol"><h3>Github</h3></GithubLink>
						<LinkedinLink href="https://www.linkedin.com/in/francisco-valbuena-ortega-90a56922b/"><h3>Linkedin</h3></LinkedinLink>
					</div>

					<div style={{ flex: "1" }}>
						<h2 id="ContactMe">Contact Me</h2>
						<MailLink href="mailto:f.valbuenao64@gmail.com"><h3>f.valbuenao64@gmail.com</h3></MailLink>
					</div>

				</div>

				<footer>
					Updated: 04/04/2026
				</footer>

			</article>
		</section>
	);
}
