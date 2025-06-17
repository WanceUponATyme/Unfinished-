import Link from "next/link";
import "../styles/loans0.css";

const articles = [
    "Funding Your Ideas via a Loan",
    "How Small Loans Change Lives",
    "Smart Borrowing: Tips for Managing Debt",
    "The Role of Microfinance in Economic Growth",
    "Understanding Credit Scores and Loan Eligibility"
];

const Loans0 = () => {
    const randomArticle = articles[Math.floor(Math.random() * articles.length)];

    return (
        <div className="loans-container">
            <h1>Loans & Financial Insights</h1>
            <p>Featured Article: {randomArticle}</p>

            <button>
                <Link href="/loans">See Loan Options</Link>
            </button>
        </div>
    );
};

export default Loans0;
