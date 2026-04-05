import fedeancoImage from "../../assets/images/MARS.png"

export default function Mars(){
    return (
    <>
    <section>
        <article id="MARS">
            <h1>Marine Acoustic Recording System</h1>

            <div style={{display: "flex", flexWrap: "wrap-reverse", gap: "5px"}}>

            <div style={{flex: 7, minWidth: "300px", paddingLeft: "20px"}}>
            <h2>Stack</h2>
            <ul style={{display: "flex", flexDirection: "column"}}>
                <li>&#8227; Embedded Systems</li>
                <ul style={{paddingLeft: "20px"}}>
                    <li>&#9675; ESP32</li>
                    <li>&#9675; FreeRTOS</li>
                    <li>&#9675; ESP idf</li>
                    <li>&#9675; C</li>
                    <li>&#9675; Concurrent Programming</li>
                    <li>&#9675; Inter Process Communication</li>
                </ul>
                <li>&#8227; Circuit Design</li>
                <ul style={{paddingLeft: "20px"}}>
                    <li>&#9675; KiCAD</li>
                    <li>&#9675; ltSpice</li>
                    <li>&#9675; Audio Conditioning</li>
                </ul>
                <li>&#8227; Signal Processing</li>
                <ul style={{paddingLeft: "20px"}}>
                    <li>&#9675; Python</li>
                    <li>&#9675; Matlab</li>
                    <li>&#9675; Digital Filtering</li>
                    <li>&#9675; Match Filtering</li>
                    <li>&#9675; Spectrum Analysis</li>
                </ul>
                <li>&#8227; Manufacturing and Testing</li>
                <ul style={{ paddingLeft: "20px" }}>
                    <li>&#9675; Underwater circuit packaging</li>
                    <li>&#9675; Guided research experiments</li>
                    <li>&#9675; Data collection</li>
                </ul>
            </ul>
            </div>

            <div style={{flex: 3, minWidth: "200px", maxWidth: "500px"}}>
                <img
                    src={fedeancoImage}
                    alt="MARS"
                    style={{
                        background: "#e9f0f3",
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "15px",
                    }}
                />
            </div>
            </div>

            <h2 style={{ paddingTop: "20px" }}>Context</h2>

            <p style={{ paddingLeft: "20px" }}>
                The <OAELab /> (Ocean Acoustics & Engineering Laboratory) focuses on applying <strong>signal processing</strong> and <strong>machine learning</strong> to analyze <strong>underwater acoustic data</strong>. Its research includes <strong>ocean sensing</strong>, <strong>seabed classification</strong>, and the study of <strong>environmental phenomena</strong> such as internal waves, using both experimental and computational methods.
            </p>

            <h2 style={{ paddingTop: "20px" }}>The Project</h2>

            <p style={{ paddingLeft: "20px" }}>
              The <strong>Marine Acoustic Recording System (MARS)</strong> is a <strong>low-cost data acquisition platform</strong> designed to record and reproduce <strong>underwater acoustic signals</strong> using <strong>ESP32 microcontrollers</strong>. The system captures analog data from <strong>hydrophones</strong>, processes it through a custom <strong>signal conditioning circuit</strong>, and stores it on an <strong>SD card</strong> for later analysis.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              The architecture is divided into two modules: a <strong>Receiver</strong>, responsible for <strong>multi-channel acquisition</strong> and logging, and a <strong>Source</strong>, which handles <strong>audio playback</strong> through the ESP32’s <strong>DAC</strong>. Both systems communicate through a lightweight interface, enabling synchronized <strong>recording and playback experiments</strong>.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              A key challenge in the design was adapting <strong>hydrophone signals</strong> to the ESP32 ADC. Since these signals include <strong>negative voltage swings</strong>, a custom <strong>analog front-end</strong> was developed using <strong>operational amplifiers</strong> to apply a DC offset and prevent <strong>clipping and distortion</strong>. Additional considerations such as <strong>anti-aliasing filtering</strong>, <strong>noise reduction</strong>, and <strong>power isolation</strong> were critical to ensure signal integrity.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              The system evolved from <strong>perfboard prototypes</strong> to fully designed <strong>custom PCBs</strong> in <strong>KiCad</strong>, supporting up to <strong>seven input channels</strong>. The final design emphasizes <strong>low-noise analog layout</strong>, proper <strong>grounding strategies</strong>, and modularity for field deployment, including <strong>portable enclosures</strong> and a <strong>drone-mounted payload</strong> for experimental data collection.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              Overall, MARS integrates <strong>embedded systems</strong>, <strong>analog circuit design</strong>, and <strong>signal processing</strong> into a complete pipeline for <strong>marine acoustic experimentation</strong>.
            </p>

            <footer>
                Updated: 04/05/2026
            </footer>
        </article>
    </section>
    </>
    )
}

const OAELab = () => {
    return <a href="https://www.eecis.udel.edu/~badiey/">Laboratory of Ocean Acoustics & Engineering</a>
}
const LambdaEngine = () => {
    return <a href="#LambdaEngine">Lambda Engine</a>
}
