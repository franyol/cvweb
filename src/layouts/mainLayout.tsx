import MoreButton from "../components/MoreButton";
import { navitems } from "../routes/AppRoutes";
import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode; } ) => {
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
		<aside>
            <MoreButton />
			<blockquote>
				<a className="navitems" href="#About me">&raquo; About me</a>
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
