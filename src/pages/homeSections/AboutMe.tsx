import profileImage from "../../assets/images/profile.jpg";

export default function AboutMe(){
    return (
    <>
    <section>
        <article id="About me">
            <h1>About me</h1>

            <div style={{display: "flex", flexWrap: "wrap-reverse", gap: "5px"}}>

            <div style={{flex: 7, minWidth: "300px", paddingLeft: "20px"}}>
            <h2 id="Profession">Profession</h2>
            <ul style={{display: "flex", flexDirection: "column"}}>
                <li>&#8227; Electrical Engineer</li>
                <ul style={{paddingLeft: "20px"}}>
                    <li>&#9675; P. Universidad Javeriana</li>
                    <li>&#9675; Colombia</li>
                </ul>
                <li>&#8227; Full Stack Web Developer</li>
                <ul style={{paddingLeft: "20px"}}>
                    <li>&#9675; Nextjs</li>
                    <li>&#9675; Flask</li>
                    <li>&#9675; Django</li>
                    <li>&#9675; Laravel</li>
                    <li>&#9675; Amazon Web Services</li>
                </ul>
                <li>&#8227; Back end Developer</li>
                <ul style={{paddingLeft: "20px"}}>
                    <li>&#9675; FastAPI</li>
                    <li>&#9675; Expressjs</li>
                </ul>
                <li>&#8227; Researcher</li>
                <ul style={{paddingLeft: "20px"}}>
                    <li>&#9675; Signal Processing</li>
                    <li>&#9675; Acoustics</li>
                    <li>&#9675; Adquisition Circuits</li>
                    <li>&#9675; Micro Controllers</li>
                    <li>&#9675; AI</li>
                </ul>
            </ul>

            <h2 id="Hobbies">Hobbies</h2>
            <div style={{paddingLeft: "20px"}}>
            <ul style={{display: "flex", flexDirection: "column"}}>
                <li>&#8227; NVim Enjoyer</li>
                <li>&#8227; Linux Kernel</li>
                <li>&#8227; Game Dev in C++</li>
                <li>&#8227; Cyber Security</li>
                <li>&#8227; Robotics</li>
            </ul>
            </div>

            </div>
            <div style={{flex: 3, minWidth: "200px", maxWidth: "300px"}}>
                <img
                    src={profileImage}
                    alt="ProfilePhoto"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "15px",
                    }}
                />
            </div>
            </div>


            <footer>
                Updated: 04/04/2026
            </footer>
        </article>
    </section>
    </>
    )
}
