import { NavLink, Outlet } from 'react-router-dom';

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>HelpLayout Here</h2>
            <p>Stuff and things here</p>

            <nav>
                <NavLink to="faq">View the FAQ</NavLink> {/* Path relative to this layout / route --> references matching "to" in App.js */}
                <NavLink to="contact">Contact Us</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}