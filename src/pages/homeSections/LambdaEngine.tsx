import fedeancoImage from "../../assets/images/BulletHeaven.png"
import GithubLink from "../../components/GithubLink"

export default function LambdaEngine(){
    return (
    <>
    <section>
        <article id="LambdaEngine">
            <h1>Lambda Engine - Game Engine</h1>

            <GithubLink href="https://github.com/franyol/Lambda_Engine">
                <h3>View on Github</h3>
            </GithubLink>

            <div style={{display: "flex", flexWrap: "wrap-reverse", gap: "5px"}}>

            <div style={{flex: 7, minWidth: "300px", paddingLeft: "20px"}}>
            <h2>Stack</h2>
            <ul style={{display: "flex", flexDirection: "column"}}>
                <li>&#8227; C++</li>
                <li>&#8227; SDL2</li>
                <ul style={{paddingLeft: "20px"}}>
                    <li>&#9675; SDL2_mixer</li>
                    <li>&#9675; SDL2_ttf</li>
                    <li>&#9675; SDL2_image</li>
                </ul>
                <li>&#8227; Game Dev</li>
            </ul>
            </div>

            <div style={{flex: 3, minWidth: "200px", maxWidth: "500px"}}>
                <img
                    src={fedeancoImage}
                    alt="BulletHeaven"
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
                  Like many programmers, at some point in my career I became interested in <strong>game development</strong>. However, as an <strong>electrical engineer</strong> deeply interested in <strong>low-level computing</strong> and <strong>digital systems</strong>, I found myself more drawn to <strong>game engine architecture</strong> and <strong>design patterns</strong> than to actually building games.
                </p>

                <p style={{ paddingLeft: "20px" }}>
                  <strong>C#</strong>? <strong>Godot</strong>? <strong>Unity</strong>? <strong>Unreal</strong>?... Nah — I decided to build my own.
                </p>

                <p style={{ paddingLeft: "20px" }}>
                  That’s how it started, and since then I have been working on this project for several years as a <strong>solo developer</strong> in my <strong>free time</strong>.
                </p>

                <p style={{ paddingLeft: "20px" }}>
                  The engine is still in an <strong>early stage</strong>, and there is a lot of work to be done before it can support an <strong>industry-ready game</strong>. However, if you are interested in seeing its potential, you can check out this <strong>single-file test game</strong> built with it:
                </p>

                <GithubLink href="https://github.com/franyol/Bullet-Heaven/tree/lambda-simplified">
                  <h3>Bullet Heaven</h3>
                </GithubLink>

                <h2 style={{ paddingTop: "20px" }}>The Project</h2>

                <p style={{ paddingLeft: "20px" }}>
                  I chose to build this project in <strong>C++</strong> because of my strong affinity for the language. <strong>C</strong> was the first programming language I learned, and I have used it extensively throughout my career as an <strong>electronics engineer</strong>. In industry, particularly around <strong>2021</strong>, I worked heavily with <strong>Python</strong>, which is a great language, but it did not fully satisfy my need for <strong>manual memory management</strong> and <strong>low-level system control</strong> (I am weird, I know...).
                </p>

                <p style={{ paddingLeft: "20px" }}>
                  I learned that <strong>Team Fortress 2</strong> was developed in <strong>C++</strong> using <strong>SDL2</strong>, which led me to study <strong><SdlGameDevBook /></strong>. This became the foundation of the engine, which has since evolved as I continued adding functionality and deepening my understanding of <strong>software design patterns</strong>.
                </p>

            <footer>
                Updated: 04/05/2026
            </footer>
        </article>
    </section>
    </>
    )
}

const SdlGameDevBook = () => {
    return <a href="https://elhacker.info/manuales/Lenguajes%20de%20Programacion/C++/SDL.Game.Development.pdf">SDL Game Development</a>
}
