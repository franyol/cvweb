import fedeancoImage from "../../assets/images/kiwibot.jpg"

export default function Kiwibot(){
    return (
    <>
    <section>
        <article id="FCT">
            <h1>Fleet Control Toolkit</h1>

            <div style={{display: "flex", flexWrap: "wrap-reverse", gap: "5px"}}>

            <div style={{flex: 7, minWidth: "300px", paddingLeft: "20px"}}>
            <h2>Stack</h2>
            <ul style={{ display: "flex", flexDirection: "column" }}>

                <li>&#8227; Robotics Operations</li>
                <ul style={{ paddingLeft: "20px" }}>
                    <li>&#9675; Autonomous Systems Debugging</li>
                    <li>&#9675; Fleet Monitoring & Diagnostics</li>
                    <li>&#9675; Incident Response</li>
                    <li>&#9675; Telemetry Analysis (Logs, Heartbeats)</li>
                </ul>

                <li>&#8227; Backend & Automation</li>
                <ul style={{ paddingLeft: "20px" }}>
                    <li>&#9675; Python</li>
                    <li>&#9675; CLI Tooling (Autodebugger)</li>
                    <li>&#9675; API Design (REST)</li>
                    <li>&#9675; Automation Pipelines</li>
                    <li>&#9675; OOP & Design Patterns</li>
                </ul>

                <li>&#8227; Cloud & Infrastructure</li>
                <ul style={{ paddingLeft: "20px" }}>
                    <li>&#9675; Google Cloud (Cloud Run)</li>
                    <li>&#9675; Containerized Services</li>
                    <li>&#9675; Remote Device Management</li>
                    <li>&#9675; Balena Cloud</li>
                </ul>

                <li>&#8227; Web Development</li>
                <ul style={{ paddingLeft: "20px" }}>
                    <li>&#9675; Next.js</li>
                    <li>&#9675; TypeScript</li>
                    <li>&#9675; Plotly Dash</li>
                    <li>&#9675; tRPC</li>
                </ul>

                <li>&#8227; Systems Integration</li>
                <ul style={{ paddingLeft: "20px" }}>
                    <li>&#9675; SSH-based Device Control</li>
                    <li>&#9675; Inter-service Communication</li>
                    <li>&#9675; Hardware-Software Interaction</li>
                </ul>

                <li>&#8227; Software Engineering</li>
                <ul style={{ paddingLeft: "20px" }}>
                    <li>&#9675; Technical Debt Reduction</li>
                    <li>&#9675; Internal Tooling Development</li>
                    <li>&#9675; Monorepo Migration</li>
                    <li>&#9675; Code Reusability (Python Packages)</li>
                </ul>

            </ul>
            </div>

            <div style={{flex: 3, minWidth: "200px", maxWidth: "500px"}}>
                <img
                    src={fedeancoImage}
                    alt="Kiwibot"
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
              During my time at <strong>Kiwibot</strong> (later <strong>Robot.com</strong>), I worked as a <strong>Service Desk Robotics Engineer</strong>, supporting the operation of a large-scale <strong>autonomous delivery fleet</strong>. My role focused on diagnosing real-world failures across <strong>robotics systems</strong>, including onboard computers, sensors, networking, and autonomy software.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              While most of the work involved <strong>incident response</strong> and <strong>ticket resolution</strong>, the repetitive nature of many issues revealed opportunities for <strong>automation</strong> and <strong>tooling improvements</strong>. This led me to develop internal systems that reduced <strong>manual debugging effort</strong>, improved <strong>fleet observability</strong>, and standardized how engineers interacted with production devices.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              Over time, my contributions expanded beyond support into <strong>internal platform development</strong>, including <strong>APIs</strong>, <strong>web tools</strong>, and <strong>automation frameworks</strong> used across Service Desk, Robotics Operations, and Maintenance teams.
            </p>

            <h2 style={{ paddingTop: "20px" }}>The Autodebugger</h2>

            <p style={{ paddingLeft: "20px" }}>
              The <strong>Autodebugger</strong> was a <strong>Python-based CLI tool</strong> designed to automate repetitive debugging tasks across the robotic fleet. It originated from a simple observation: a large portion of Service Desk work consisted of <strong>predictable, repeatable fixes</strong> that could be systematically automated.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              The system was built as a modular <strong>diagnostic pipeline</strong> composed of three stages: <strong>triggering</strong> potential incidents, <strong>verifying</strong> them through targeted checks, and <strong>deploying solutions</strong> automatically. It interfaced directly with robots via <strong>SSH</strong>, leveraging telemetry such as <strong>heartbeats, logs, and system metrics</strong> to make decisions.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              Architecturally, the tool followed a <strong>decorator-based design</strong> inspired by <strong>Flask</strong>, allowing new incident types to be registered dynamically. Each issue was modeled as a combination of <strong>Trigger</strong>, <strong>Diagnose</strong>, and <strong>Solution</strong> components, enabling a highly <strong>extensible</strong> and <strong>maintainable</strong> system.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              At its peak, the Autodebugger was capable of resolving over <strong>50% of incoming tickets</strong> automatically, covering systems such as <strong>AGX</strong>, <strong>cameras</strong>, <strong>networking</strong>, <strong>GPS</strong>, and <strong>sensors</strong>. This significantly reduced manual workload and demonstrated the potential of <strong>automation in robotics operations</strong>.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              Despite its technical success, adoption was limited due to <strong>usability barriers</strong> and <strong>trust concerns</strong>, highlighting an important lesson: effective automation requires not only solving problems, but doing so in a way that users are comfortable adopting.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              Although eventually superseded by more integrated systems within the robotics stack, the Autodebugger laid the foundation for thinking about <strong>self-healing systems</strong> and <strong>automated incident response</strong> in production environments.
            </p>

               <h2 style={{ paddingTop: "20px" }}>Fleet Automation Services</h2>

            <p style={{ paddingLeft: "20px" }}>
              As part of improving fleet-level operations, I developed a <strong>cloud-based automation service</strong> using <strong>GCP Cloud Run</strong>, designed to remotely update <strong>device and fleet configurations</strong> on demand.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              The service exposed a simple interface that could be triggered programmatically or through schedulers, enabling automated workflows such as <strong>configuration updates</strong> and <strong>fleet-wide adjustments</strong> without manual intervention.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              This tool was integrated into operational processes and actively used to coordinate changes across deployed robots, improving <strong>consistency</strong> and reducing <strong>human error</strong>.
            </p>

            <h2 style={{ paddingTop: "20px" }}>Device Manager</h2>

            <p style={{ paddingLeft: "20px" }}>
              Contributed to the <strong>REMI-Pro Device Manager</strong> by implementing features for <strong>fleet-wide updates</strong> and <strong>release tracking</strong>. This included support for the new <strong>semantic versioning system</strong> and a unified interface to monitor update progress across all devices in real time.
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
