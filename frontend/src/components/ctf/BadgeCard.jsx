function BadgeCard({ badge, earned }) {

    return (
        <div
            className={`badge-card ${
                earned ? "earned" : "locked"
            }`}
        >

            <div className="badge-icon">
                {earned ? badge.icon : "🔒"}
            </div>

            <div className="badge-info">

                <h3>
                    {badge.name}
                </h3>

                <p>
                    {badge.description}
                </p>

                <span>
                    {earned
                        ? "🏅 Earned"
                        : "🔒 Locked"}
                </span>

            </div>

        </div>
    );
}

export default BadgeCard;