import fedeancoImage from "../../assets/images/MARS.png";

import {
	FaMicrochip,
	FaTools,
	FaWaveSquare,
	FaFlask
} from "react-icons/fa";

export default function Mars() {
	return (
		<section>
			<article id="MARS">

				<h1>Marine Acoustic Recording System</h1>

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
							gap: "14px"
						}}>

							{/* Embedded */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaMicrochip /> Embedded Systems
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>ESP32</li>
								<li>FreeRTOS</li>
								<li>ESP-IDF</li>
								<li>C</li>
								<li>Concurrency</li>
								<li>IPC</li>
							</ul>

							{/* Circuit */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaTools /> Circuit Design
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>KiCad</li>
								<li>LTspice</li>
								<li>Signal Conditioning</li>
							</ul>

							{/* Signal Processing */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaWaveSquare /> Signal Processing
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>Python</li>
								<li>MATLAB</li>
								<li>Filtering</li>
								<li>Matched Filtering</li>
								<li>Spectral Analysis</li>
							</ul>

							{/* Experimental */}
							<li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
								<FaFlask /> Experimental Systems
							</li>

							<ul style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "6px 10px",
								paddingLeft: "20px",
								listStyle: "none"
							}}>
								<li>PCB Design</li>
								<li>Hydrophone Systems</li>
								<li>Field Testing</li>
								<li>Data Acquisition</li>
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
							alt="MARS"
							style={{
								width: "100%",
								height: "auto",
								borderRadius: "15px",
								background: "#e9f0f3"
							}}
						/>
					</div>

				</div>

				{/* CONTEXT */}
				<h2 style={{ paddingTop: "20px" }}>Context</h2>

				<p style={{ paddingLeft: "20px" }}>
					The <OAELab /> focuses on underwater acoustics, signal processing, and ocean sensing research.
				</p>

				{/* PROJECT */}
				<h2 style={{ paddingTop: "20px" }}>The Project</h2>

				<p style={{ paddingLeft: "20px" }}>
					MARS is a low-cost embedded system for underwater acoustic data acquisition using ESP32.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					It combines analog front-end design, signal conditioning, and digital acquisition pipelines.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					Two modules handle recording and playback for controlled acoustic experiments.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					A key challenge was adapting hydrophone signals using op-amp based biasing and filtering circuits.
				</p>

				<p style={{ paddingLeft: "20px" }}>
					The system evolved from prototypes to full PCB designs supporting multi-channel acquisition.
				</p>

				<footer>
					Updated: 04/05/2026
				</footer>

			</article>
		</section>
	);
}

const OAELab = () => {
	return <a href="https://www.eecis.udel.edu/~badiey/">Laboratory of Ocean Acoustics & Engineering</a>;
};
