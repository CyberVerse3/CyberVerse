function StatsCards({
  level,
  completedCourses,
  totalCourses,
  ctfPoints,
  linuxCompleted,
  badge,
}) {
  return (
    <div className="dashboard-cards">

      <div className="dash-card">
        <h2>Level</h2>
        <p>{level}</p>
      </div>

      <div className="dash-card">
        <h2>Courses</h2>
        <p>
          {completedCourses} / {totalCourses} Completed
        </p>
      </div>

      <div className="dash-card">
        <h2>CTF Points</h2>
        <p>⭐ {ctfPoints}</p>
      </div>

      <div className="dash-card">
        <h2>Labs Completed</h2>
        <p>
          {linuxCompleted ? "1 / 20 ✅" : "0 / 20"}
        </p>
      </div>

      <div className="dash-card">
        <h2>Badge</h2>
        <p>
          {badge ? `🏅 ${badge}` : "No Badge Yet"}
        </p>
      </div>

    </div>
  );
}

export default StatsCards;