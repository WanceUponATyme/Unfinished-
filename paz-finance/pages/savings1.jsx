import Link from "next/link";
import "../styles/savings1.css";

const Savings1 = () => {
    return (
        <div className="savings-container">
            <h1>Savings Options</h1>
            <p>Choose your savings method:</p>

            <ul>
                <li>Thrift Savings</li>
                <li>Target Savings</li>
                <li>General Savings</li>
                <li>Locked Savings</li>
            </ul>

            <button>
                <Link href="/">Go Back Home</Link>
            </button>
        </div>
    );
};

export default Savings1;
