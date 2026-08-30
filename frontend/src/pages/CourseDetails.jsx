import "./CourseDetails.css";
import { Link } from "react-router-dom";
import linuxCourse from "../data/linuxCourse";

function CourseDetails() {

  return (
<>
    <div className="course-page">

      <div className="course-hero">

        <span className="course-tag">
          {linuxCourse.level}
        </span>

        <h1>
          🐧 {linuxCourse.title}
        </h1>

        <p>
          {linuxCourse.description}
        </p>

        <div className="course-meta">

          <span>⭐ {linuxCourse.rating}</span>

          <span>📚 {linuxCourse.lessons.length} Lessons</span>

          <span>👨‍🎓 {linuxCourse.students}</span>

          <span>🎓 Certificate</span>

        </div>

        <Link to="/academy/linux/lesson/1">

          <button className="start-btn">

            🚀 Start Course

          </button>

        </Link>

      </div>

      <div className="course-grid"></div>
              <div className="course-card">

          <h2>📖 What You'll Learn</h2>

          <ul>

            <li>Linux Commands</li>

            <li>Linux File System</li>

            <li>Permissions</li>

            <li>Users & Groups</li>

            <li>Processes</li>

            <li>Networking</li>

            <li>Bash Scripting</li>

          </ul>

        </div>

        <div className="course-card">

          <h2>💻 Requirements</h2>

          <ul>

            <li>No previous experience required</li>

            <li>Windows or Linux PC</li>

            <li>Internet Connection</li>

            <li>Motivation to Learn</li>

          </ul>

        </div>

        <div className="course-card">

          <h2>🛠 Skills You'll Gain</h2>

          <div className="skills">

            <span>🐧 Linux</span>

            <span>⚡ Bash</span>

            <span>🌐 Networking</span>

            <span>🔐 Security</span>

            <span>📂 File System</span>

            <span>🛡 Permissions</span>

          </div>

        </div>

        <div className="course-card">

          <h2>📊 Course Statistics</h2>

          <p>👨‍🎓 Students : {linuxCourse.students}</p>

          <p>⭐ Rating : {linuxCourse.rating}</p>

          <p>⏱ Duration : {linuxCourse.duration}</p>

          <p>🎓 Certificate Included</p>

        </div>      </div>

      <div className="curriculum">

        <h2>📚 Curriculum</h2>

        {linuxCourse.lessons.map((lesson) => (

          <Link
            key={lesson.id}
            to={`/academy/linux/lesson/${lesson.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >

            <div
              className={`lesson ${
                lesson.completed
                  ? "completed"
                  : lesson.id === 3
                  ? "current"
                  : "locked"
              }`}
            >

              <span>

                {lesson.completed
                  ? "✅"
                  : lesson.id === 3
                  ? "🔥"
                  : "🔒"}

                {" "}

                Lesson {lesson.id} — {lesson.title}

              </span>

              <span>

                ⏱ {lesson.time}

                {" | "}

                ⭐ {lesson.xp} XP

              </span>

            </div>

          </Link>

        ))}

      </div>
          </>

  );

}

export default CourseDetails;
