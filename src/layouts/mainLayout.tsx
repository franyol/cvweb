import { navitems } from "../routes/AppRoutes";
import { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode; } ) => {
	return (
		<>
		<header>
			<h2>Francisco Valbuena</h2>
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
		<aside>
			<blockquote>
				<a href="#ch6">Chapter 6</a>
			</blockquote>
		</aside>
            {children}
		<footer>
			&copy; 2026
		</footer>
		</>
	);
};
