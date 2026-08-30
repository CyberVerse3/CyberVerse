import { useNavigate } from "react-router-dom";

import courses from "../academy/config/courses";

import Navbar from "../components/Navbar";

import "../styles/Course.css";

function CourseTemplate({ course }) {

    const navigate = useNavigate();

    const data = courses[course];

    if (!data) {

        return (

            <>

                <Navbar />

                <div
                    style={{
                        color: "white",
                        textAlign: "center",
                        marginTop: "100px"
                    }}
                >

                    <h1>Course Not Found</h1>

                </div>

            </>

        );

    }

    return (

        <>

            <Navbar />

            <div className="course-page">

                <div className="course-header">

                    <h1>

                        {data.icon} {data.title}

                    </h1>

                    <p>

                        {data.description}

                    </p>

                </div>

                <div className="course-info">

                    <div className="info-card">

                        <h2>📖 Lessons</h2>

                        <h1>

                            {data.lessons.length}

                        </h1>

                    </div>

                    <div className="info-card">

                        <h2>⭐ XP</h2>

                        <h1>

                            {data.xp}

                        </h1>

                    </div>

                    <div className="info-card">

                        <h2>🎯 Difficulty</h2>

                        <h1>

                            {data.difficulty}

                        </h1>

                    </div>

                </div>

                <div
                    style={{
                        textAlign: "center",
                        marginTop: "50px"
                    }}
                >

                    <button
                        className="start-course-btn"
                        onClick={() =>
                            navigate(`/academy/${course}/lesson/1`)
                        }
                    >

                        🚀 Start Course

                    </button>

                </div>

            </div>

        </>

    );

}

export default CourseTemplate;