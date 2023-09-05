import { NavLink, Outlet } from 'react-router-dom';
import BreadCrumbs from '../components/Breadcrumbs';

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Jobarouter</h1>
                    <h2>RootLayout Here</h2>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink> {/* NavLink has class (active) so you can style, opposed to Link */}
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="careers">Careers</NavLink>
                </nav>
                <BreadCrumbs />
            </header>
            <main>
                <Outlet /> {/* When we go to a path, renders the components here, with header above */}
            </main>
        </div>
    )
}