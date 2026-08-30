import { useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import linuxGuideConfig from "../linuxGuide/config/linuxGuideConfig";

import {
    getLinuxGuideProgress,
    isModuleCompleted,
} from "../linuxGuide/utils/linuxGuideProgress";

import "../styles/linuxGuide.css";


function LinuxGuide() {

    // =========================================
    // TOTAL LESSONS
    // =========================================

    const totalLessons = useMemo(() => {

        return linuxGuideConfig.reduce(
            (total, module) =>
                total + module.lessons.length,
            0
        );

    }, []);


    // =========================================
    // TOTAL XP
    // =========================================

    const totalXP = useMemo(() => {

        return linuxGuideConfig.reduce(
            (total, module) => {

                return (
                    total +
                    module.lessons.reduce(
                        (lessonTotal, lesson) =>
                            lessonTotal +
                            Number(lesson.xp || 0),
                        0
                    )
                );

            },
            0
        );

    }, []);


    // =========================================
    // PROGRESS
    // =========================================

    const progress =
        getLinuxGuideProgress(
            totalLessons
        );


    // =========================================
    // RENDER
    // =========================================

    return (
        <>
            <Navbar />

            <main className="linux-guide-page">


                {/* =================================
                    HERO
                ================================= */}

                <section className="linux-guide-hero">

                    <div className="linux-guide-hero-content">

                        <span className="linux-guide-badge">
                            🐧 LINUX GUIDE
                        </span>


                        <h1>
                            Master Linux
                            <span>
                                {" "}for Cybersecurity
                            </span>
                        </h1>


                        <p>
                            Learn Linux from the fundamentals
                            to cybersecurity-focused skills
                            through interactive lessons,
                            terminal practice, challenges,
                            and XP.
                        </p>


                        <div className="linux-guide-hero-actions">

                            <Link
                                to="/linux-guide/lesson/1"
                                className="linux-guide-primary-btn"
                            >
                                🚀 Start Learning
                            </Link>


                            <Link
                                to="/terminal"
                                className="linux-guide-secondary-btn"
                            >
                                💻 Open Terminal
                            </Link>

                        </div>

                    </div>


                    {/* =================================
                        HERO TERMINAL
                    ================================= */}

                    <div className="linux-guide-hero-visual">

                        <div className="linux-guide-penguin">
                            🐧
                        </div>


                        <div className="linux-guide-terminal-preview">

                            <div className="terminal-preview-header">

                                <span></span>
                                <span></span>
                                <span></span>

                            </div>


                            <div className="terminal-preview-body">

                                <p>

                                    <span className="terminal-user">
                                        student@cyberverse
                                    </span>

                                    <span>
                                        :
                                    </span>

                                    <span className="terminal-path">
                                        ~
                                    </span>

                                    <span>
                                        $
                                    </span>

                                </p>


                                <p className="terminal-command">
                                    ls
                                </p>


                                <p className="terminal-output">
                                    Documents&nbsp;&nbsp;
                                    Downloads&nbsp;&nbsp;
                                    Projects
                                </p>


                                <p>

                                    <span className="terminal-user">
                                        student@cyberverse
                                    </span>

                                    <span>
                                        :
                                    </span>

                                    <span className="terminal-path">
                                        ~
                                    </span>

                                    <span>
                                        $
                                    </span>

                                    <span className="terminal-cursor">
                                        ▋
                                    </span>

                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================
                    STATS
                ================================= */}

                <section className="linux-guide-stats">


                    {/* MODULES */}

                    <div className="linux-guide-stat-card">

                        <div className="linux-guide-stat-icon">
                            📚
                        </div>


                        <div className="linux-guide-stat-info">

                            <strong>
                                {linuxGuideConfig.length}
                            </strong>

                            <span>
                                Modules
                            </span>

                        </div>

                    </div>


                    {/* LESSONS */}

                    <div className="linux-guide-stat-card">

                        <div className="linux-guide-stat-icon">
                            📖
                        </div>


                        <div className="linux-guide-stat-info">

                            <strong>
                                {totalLessons}
                            </strong>

                            <span>
                                Lessons
                            </span>

                        </div>

                    </div>


                    {/* XP */}

                    <div className="linux-guide-stat-card">

                        <div className="linux-guide-stat-icon">
                            ⚡
                        </div>


                        <div className="linux-guide-stat-info">

                            <strong>
                                {progress.xp}
                            </strong>

                            <span>
                                / {totalXP} XP
                            </span>

                        </div>

                    </div>


                    {/* PROGRESS */}

                    <div className="linux-guide-stat-card">

                        <div className="linux-guide-stat-icon">
                            🎯
                        </div>


                        <div className="linux-guide-stat-info">

                            <strong>
                                {progress.percentage}%
                            </strong>

                            <span>
                                Progress
                            </span>

                        </div>

                    </div>

                </section>


                {/* =================================
                    OVERALL PROGRESS
                ================================= */}

                <section className="linux-guide-overall-progress">

                    <div className="linux-guide-overall-header">

                        <div>

                            <span>
                                YOUR PROGRESS
                            </span>


                            <h2>
                                Linux Journey
                            </h2>

                        </div>


                        <strong>
                            {progress.completedLessons}
                            {" / "}
                            {totalLessons}
                        </strong>

                    </div>


                    <div className="linux-guide-overall-bar">

                        <div
                            style={{
                                width: `${progress.percentage}%`,
                            }}
                        />

                    </div>


                    <p>

                        {progress.percentage === 0
                            ? "Start your Linux journey and build your cybersecurity foundation."

                            : progress.percentage === 100
                                ? "🎉 You completed the Linux Guide!"

                                : `Great progress! You completed ${
                                      progress.completedLessons
                                  } lesson${
                                      progress.completedLessons === 1
                                          ? ""
                                          : "s"
                                  }.`
                        }

                    </p>

                </section>


                {/* =================================
                    LEARNING PATH
                ================================= */}

                <section className="linux-guide-learning-path">


                    <div className="linux-guide-section-heading">

                        <div>

                            <span>
                                LEARNING PATH
                            </span>


                            <h2>
                                Linux Learning Roadmap
                            </h2>

                        </div>


                        <p>
                            Explore every Linux topic at
                            your own pace.
                        </p>

                    </div>


                    {/* =================================
                        MODULES
                    ================================= */}

                    <div className="linux-guide-modules">

                        {linuxGuideConfig.map(
                            (module, index) => {

                                const moduleCompleted =
                                    isModuleCompleted(
                                        module
                                    );


                                return (

                                    <article
                                        key={module.id}
                                        className={`linux-guide-module ${
                                            moduleCompleted
                                                ? "completed"
                                                : "available"
                                        }`}
                                    >

                                        {/* MODULE NUMBER */}

                                        <div className="linux-guide-module-number">

                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}

                                        </div>


                                        {/* MODULE ICON */}

                                        <div className="linux-guide-module-icon">

                                            {module.icon}

                                        </div>


                                        {/* MODULE CONTENT */}

                                        <div className="linux-guide-module-content">

                                            <div className="linux-guide-module-title">

                                                <h3>
                                                    {module.title}
                                                </h3>


                                                {moduleCompleted ? (

                                                    <span className="module-status completed-status">
                                                        ✓ COMPLETED
                                                    </span>

                                                ) : (

                                                    <span className="module-status available-status">
                                                        🔓 AVAILABLE
                                                    </span>

                                                )}

                                            </div>


                                            <p>
                                                {module.description}
                                            </p>


                                            <div className="linux-guide-module-meta">

                                                <span>
                                                    📖{" "}
                                                    {module.lessons.length}
                                                    {" "}
                                                    Lessons
                                                </span>


                                                <span>
                                                    ⚡{" "}
                                                    {module.lessons.reduce(
                                                        (
                                                            total,
                                                            lesson
                                                        ) =>
                                                            total +
                                                            Number(
                                                                lesson.xp ||
                                                                0
                                                            ),
                                                        0
                                                    )}
                                                    {" "}
                                                    XP
                                                </span>

                                            </div>

                                        </div>


                                        {/* =================================
                                            MODULE BUTTON
                                        ================================= */}

                                        <Link
                                            to={`/linux-guide/lesson/${module.lessons[0].id}`}
                                            className="linux-guide-module-button"
                                        >

                                            {moduleCompleted
                                                ? "Review →"
                                                : "Start →"}

                                        </Link>

                                    </article>

                                );
                            }
                        )}

                    </div>

                </section>


                {/* =================================
                    TERMINAL CONNECTION
                ================================= */}

                <section className="linux-guide-terminal-section">


                    <div className="linux-guide-terminal-content">

                        <span className="linux-guide-small-label">
                            HANDS-ON LEARNING
                        </span>


                        <h2>

                            Learn it.

                            <span>
                                {" "}Run it.
                            </span>

                            <br />

                            Master it.

                        </h2>


                        <p>
                            Linux Guide is connected directly
                            to the CyberVerse Terminal. Learn
                            a command, practice it, and then
                            use it in real cybersecurity
                            challenges.
                        </p>


                        <Link
                            to="/terminal"
                            className="linux-guide-primary-btn"
                        >
                            💻 Try CyberVerse Terminal
                        </Link>

                    </div>


                    {/* TERMINAL CODE */}

                    <div className="linux-guide-terminal-code">


                        <div className="code-line">

                            <span className="code-prompt">
                                $
                            </span>

                            <span>
                                pwd
                            </span>

                        </div>


                        <div className="code-output">
                            /home/student
                        </div>


                        <div className="code-line">

                            <span className="code-prompt">
                                $
                            </span>

                            <span>
                                ls
                            </span>

                        </div>


                        <div className="code-output">
                            Documents&nbsp;&nbsp;
                            Downloads&nbsp;&nbsp;
                            Projects
                        </div>


                        <div className="code-line">

                            <span className="code-prompt">
                                $
                            </span>

                            <span>
                                cd Projects
                            </span>

                        </div>

                    </div>

                </section>


                {/* =================================
                    FINAL CTA
                ================================= */}

                <section className="linux-guide-final-cta">

                    <span>
                        🐧 KEEP LEARNING
                    </span>


                    <h2>
                        Your Linux journey starts here.
                    </h2>


                    <p>
                        Explore the lessons in any order,
                        practice inside the terminal,
                        and build your Linux foundation
                        for cybersecurity.
                    </p>


                    <Link
                        to="/linux-guide/lesson/1"
                        className="linux-guide-primary-btn"
                    >
                        Start Linux Guide →
                    </Link>

                </section>

            </main>
        </>
    );
}


export default LinuxGuide;