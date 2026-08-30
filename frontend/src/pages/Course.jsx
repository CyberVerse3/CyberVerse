import Navbar from "../components/Navbar";
import "../styles/Course.css";
import linuxCourse from "../academy/courses/linuxCourse";

import { getCurrentLesson } from "../utils/lessonProgress";
import { Link } from "react-router-dom";


import {
    getCourseProgress,
    getCompletedLessons
} from "../utils/courseProgress";

function Course() {

  const course = linuxCourse;

const lessons = course.lessons;
const completedLessons = getCompletedLessons();

const progress = getCourseProgress(
    lessons.length
);



const currentLesson = getCurrentLesson();
const totalLessons = lessons.length;

const progress = getCourseProgress(totalLessons);

const completed = getCompletedLessons(totalLessons);
  return (
    <>
      <Navbar />

      <div className="course-page">

        <aside className="course-sidebar">

          <h1>{course.icon} {course.title}</h1>

          <p>Progress {progress}%</p>

<div className="academy-progress">

    <div

        className="academy-progress-fill"

        style={{

            width: `${progress}%`

        }}

    ></div>

</div>

<p>

{completedLessons.length} / {lessons.length}

Lessons Completed

</p>


          {lessons.map((lesson) => (

            <div
              key={lesson.id}
              className="lesson-item"
            >

              <span>

               {completedLessons.includes(lesson.id)

? "✅"

: "📖"} 

              </span>

              <div>

                <h4>{lesson.title}</h4>

                <small>{lesson.duration}</small>

              </div>

            </div>

          ))}

        </aside>
<div className="course-banner">

  <div>
<h2>{course.icon} {course.title}</h2>
    <p>

      Master Linux from beginner to professional
      with practical lessons and hands-on exercises.

    </p>

  </div>

  <div className="course-info">

    <div>

  <h2>

{completed} / {totalLessons}

</h2>

<span>Completed</span>

    </div>

    <div>

      <h2>{course.xp}</h2>

      <span>XP</span>

    </div>

    <div>

      <h2>{course.level}</h2>

      <span>Level</span>

    </div>

  </div>

</div>
        <main className="course-content">

          <h1>Introduction to Linux</h1>

          <p>

            Linux is one of the most important operating systems
            in cybersecurity. It powers servers, cloud systems,
            embedded devices and is widely used by security
            professionals.

          </p>

          <div className="info-box">

            <h3>📌 Learning Objectives</h3>

            <ul>

              <li>Understand Linux basics</li>

              <li>Learn the Linux file system</li>

              <li>Navigate using the terminal</li>

              <li>Prepare for practical labs</li>

            </ul>

          </div>

          <div className="terminal-box">

            <h3>💻 Example Command</h3>

            <pre>

{`pwd
ls
cd /home
mkdir cyberverse`}

            </pre>

          </div>

          <Link
    to={`/academy/linux/lesson/${currentLesson}`}
>

    <button className="next-btn">

        ▶ Continue Learning

    </button>

</Link>

        </main>
<Link

    to="/academy/linux/final"

    style={{ textDecoration: "none" }}

>

    <button className="next-btn">

        📝 Final Exam

    </button>

</Link>
      </div>

    </>
  );

}

export default Course;