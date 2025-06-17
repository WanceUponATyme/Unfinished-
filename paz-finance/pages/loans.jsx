import Link from "next/link";
import "../styles/loans.css";

const loanTypes = [
    "Personal Loan: Flexible repayment plans.",
    "Business Loan: Get funding for your startup.",
    "Home Loan: Secure a mortgage at the best rates.",
    "Education Loan: Invest in your future.",
    "Auto Loan: Drive your dream car with ease."
];

const Loans = () => {
    const randomLoan = loanTypes[Math.floor(Math.random() * loanTypes.length)];

    return (
        <div className="loans-container">
            <h1>Available Loan Options</h1>
            <p>{randomLoan}</p>

            <button>
                <Link href="/loans0">Read Financial Insights</Link>
            </button>
        </div>
    );
};

export default Loans;
