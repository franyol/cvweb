import AsideBarHidable from "../components/AsideBar";
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
        <AsideBarHidable>
            {children}
            <footer>
                &copy; 2026
            </footer>
        </AsideBarHidable>
		</>
	);
};
