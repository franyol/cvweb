import fedeancoImage from "../../assets/images/SlipperyHands.png"
import GameLink from "../../components/GameLink"
import GithubLink from "../../components/GithubLink"

export default function SlipperyHands(){
    return (
    <>
    <section>
        <article id="SlipperyHands">
            <h1>Slippery Hands - Browser Game</h1>

            <GithubLink href="https://github.com/franyol/Slippery-Hands">
                <h3>View on Github</h3>
            </GithubLink>
            <GameLink href="/Slippery-Hands">
                <h3>Try it Now!</h3>
            </GameLink>
            <p>( Move: w, a, s, d Jump: Spacebar )</p>

            <div style={{display: "flex", flexWrap: "wrap-reverse", gap: "5px"}}>

            <div style={{flex: 7, minWidth: "300px", paddingLeft: "20px"}}>
            <h2>Stack</h2>
            <ul style={{display: "flex", flexDirection: "column"}}>
                <li>&#8227; Javascript</li>
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
              Ever since I learned <strong>JavaScript</strong>, I never really used it for an actual project. I always fell back (and still do) to its sexier brother, <strong>TypeScript</strong>. So I started looking for a project that would let me experiment with the <strong>raw JavaScript experience</strong> (as you may have already noticed from the stack list of this project). Around that time, I had just discovered <PokeRogue />, which was also a <strong>web-based game</strong>, so I decided to give it a shot.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              This was a <strong>two-month project</strong> I worked on during a period when I had just finished my previous job and was handling the paperwork for an <strong>internship</strong> at the <OAELab />. I built it in my free time while preparing for that. Maybe one day I will resume it, but don’t count on it—if I spend free time on <strong>game development</strong> in the future, it will most likely be on <LambdaEngine />.
            </p>

            <h2 style={{ paddingTop: "20px" }}>The Project</h2>

            <p style={{ paddingLeft: "20px" }}>
              I built the project using <strong>raw JavaScript</strong>, following a very close adaptation of what I had previously done in <LambdaEngine /> with <strong>C++</strong>. You can try the project by clicking on the link above. It is clearly in an <strong>early stage</strong>, with basic hitboxes and a single character featuring some <strong>movement</strong> and <strong>animation</strong> systems implemented.
            </p>

            <p style={{ paddingLeft: "20px" }}>
              Why <strong>Slippery Hands</strong>? The original idea for the game was to play as a <strong>hitman</strong> whose gimmick was that the gun would bounce out of his hands after every shot. Unfortunately, I didn’t get to implement that feature.
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
const PokeRogue = () => {
    return <a href="https://pokerogue.net/">PokéRogue</a>
}

const OAELab = () => {
    return <a href="https://www.eecis.udel.edu/~badiey/">Laboratory of Ocean Acoustics & Engineering</a>
}
const LambdaEngine = () => {
    return <a href="#LambdaEngine">Lambda Engine</a>
}
