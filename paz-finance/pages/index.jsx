import Link from "next/link";
import "../styles/globals.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to PAZ Finance</h1>
            <p>Explore our financial services:</p>

            <nav>
                <ul>
                    <li><Link href="/savings1">Savings</Link></li>
                    <li><Link href="/loans0">Loans</Link></li>
                    <li><Link href="/investments">Investments</Link></li>
                    <li><Link href="/resources">Resources</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>  {/* ✅ FIXED LINK */}
                </ul>
            </nav>

            <footer>
                <p>Have questions? <Link href="/contact">Contact us here</Link>.</p> {/* ✅ FIXED FOOTER LINK */}
            </footer>
        </div>
    );
};

export default Home;
