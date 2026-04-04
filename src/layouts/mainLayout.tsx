import MoreButton from "../components/MoreButton";
import { navitems } from "../routes/AppRoutes";
import { ReactNode, useState } from "react";

export const MainLayout = ({ children }: { children: ReactNode; } ) => {

    const [showAside, setShowAside] = useState(
        window.innerWidth >= 768 // true on desktop, false on mobile
    );

    const toggleShowAside = () => {
        setShowAside(!showAside);
    }

	return (
		<>
		<header>
			<h1>Francisco Valbuena</h1>
		</header>
		<nav>
        <div className="navbar">
			<ul>
			{Object.entries(navitems).map(([name, path]) => (
                <li key={name}>
                    <a className="navitems" href={path}>{name}</a>
                </li>
            ))}
			</ul>
        </div>
		</nav>
        <div style={{display: "flex"}}>
        {showAside ? (
		<aside>
            <MoreButton onClick={toggleShowAside} />
			<blockquote>
				<a className="navitems" href="#About me">&raquo; About me</a>
                <blockquote>
                    <a className="navitems" href="#Professional">
                        &raquo; Profession
                    </a>
                </blockquote>
                <blockquote>
                    <a className="navitems" href="#Hobbies">&raquo; Hobbies</a>
                </blockquote>
			</blockquote>

			<blockquote>
				<a className="navitems" href="#Projects">&raquo; Projects</a>
                <blockquote>
                    <a className="navitems" href="#Ongoing">&raquo; Ongoing</a>
                </blockquote>
                <blockquote>
                    <a className="navitems" href="#Completed">&raquo; Completed</a>
                </blockquote>
            </blockquote>
		</aside>
        ) : (
            <div style={{
                position: "fixed",
                top: "151px",
                left: "-22px",
                background: "#1f2d39",
                borderRadius: "12px",
                paddingLeft: "20px",
                paddingRight: "10px"
            }}>
            <MoreButton onClick={toggleShowAside} />
            </div>
        )}
        <main>
            {children}
            <footer>
                &copy; 2026
            </footer>
        </main>
        </div>
		</>
	);
};
