import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h2>Page not found!</h2>
            <p>Whoops, you should try another path.</p>
            <p>Go to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}