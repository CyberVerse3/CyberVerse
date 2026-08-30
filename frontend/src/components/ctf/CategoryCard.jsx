import { Link } from "react-router-dom";

function CategoryCard({ category }) {
    return (
        <Link
            to={`/ctf/${category.id}`}
            className="category-card"
        >
            <div
                className="category-icon"
                style={{ color: category.color }}
            >
                {category.icon}
            </div>

            <h2>{category.name}</h2>

            <p>{category.description}</p>

            <div className="category-footer">
                <span>
                    {category.totalChallenges} Challenges
                </span>

                <span>→</span>
            </div>
        </Link>
    );
}

export default CategoryCard;