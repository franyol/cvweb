import fedeancoImage from "../../assets/images/Logo-Fedeanco.png"

export default function FedeancoWebRegistry(){
    return (
    <>
    <section>
        <article id="Fedeanco">
            <h1>Fedeanco Web Registry</h1>

            <div style={{display: "flex", flexWrap: "wrap-reverse", gap: "5px"}}>

            <div style={{flex: 7, minWidth: "300px", paddingLeft: "20px"}}>
            <h2>Stack</h2>
            <ul style={{display: "flex", flexDirection: "column"}}>
                <li>&#8227; Full Stack</li>
                <ul style={{paddingLeft: "20px"}}>
                    <li>&#9675; Nextjs</li>
                    <li>&#9675; Typescript</li>
                </ul>
                <li>&#8227; Frontend</li>
                <ul style={{paddingLeft: "20px"}}>
                    <li>&#9675; Reactjs</li>
                    <li>&#9675; Tailwindcss</li>
                </ul>
                <li>&#8227; Relational Database</li>
                <ul style={{paddingLeft: "20px"}}>
                    <li>&#9675; Drizzle ORM</li>
                    <li>&#9675; MySql</li>
                </ul>
                <li>&#8227; Hosting</li>
                <ul style={{paddingLeft: "20px"}}>
                    <li>&#9675; Amazon Web Services</li>
                </ul>
            </ul>
            </div>

            <div style={{flex: 3, minWidth: "80px", maxWidth: "250px"}}>
                <img
                    src={fedeancoImage}
                    alt="ProfilePhoto"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "15px",
                    }}
                />
            </div>
            </div>


            <h2 style={{ paddingTop: "20px" }}>Context</h2>
                <p style={{ paddingLeft: "20px" }}>
                    This project was developed for <a href="https://fedeanco.org.co/la-federacion/quienes-somos/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Fedeanco</a>, a Colombian federation composed of regional associations that promotes the productive development, traceability, and genetic improvement of <strong>caprine and ovine livestock</strong> across the country. Fedeanco’s mission focuses on fostering innovation and best practices within the sheep and goat sectors, supporting producers, managing genealogical records, and strengthening the industry’s competitiveness.
              </p>

            <h2 style={{ paddingTop: "20px" }}>The project</h2>
                <p style={{ paddingLeft: "20px" }}>
                    This web application enhances those efforts by providing a secure, modern platform to <strong>register and track</strong> individual animals (such as sheep and deer), manage related contracts and certificates, and improve data accessibility and verification for both administrators and livestock owners.             </p>


                <p style={{ paddingLeft: "20px" }}>
                  I completed this project as a <strong>freelance developer</strong>, working closely with the client to understand their requirements and deliver a solution tailored to their needs. This included designing the <strong>database schema</strong>, implementing a <strong>responsive user interface</strong>, and building secure <strong>authentication and authorization</strong> logic, all while ensuring the project was maintainable.
                </p>

            <footer>
                Updated: 04/05/2026
            </footer>
        </article>
    </section>
    </>
    )
}
