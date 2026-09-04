import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Academy from "./pages/Academy.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Lesson from "./pages/Lesson.jsx";

import Labs from "./pages/Labs.jsx";
import LinuxLab from "./pages/LinuxLab.jsx";
import WebSecurityLab from "./pages/WebSecurityLab.jsx";
import NetworkLab from "./pages/NetworkLab.jsx";
import CryptographyLab from "./pages/CryptographyLab.jsx";
import ReverseEngineeringLab from "./pages/ReverseEngineeringLab.jsx";
import DigitalForensicsLab from "./pages/DigitalForensicsLab.jsx";
import PasswordSecurityLab from "./pages/PasswordSecurityLab.jsx";
import LabChallenge from "./pages/LabChallenge.jsx";

import CTF from "./pages/CTF.jsx";


import Tools from "./pages/Tools.jsx";
import News from "./pages/News.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/profile.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import FinalExam from "./pages/FinalExam";
import LinuxFinalExam from "./pages/LinuxFinalExam.jsx";
import Certificate from "./pages/Certificate";
import NetworkingCourse from "./pages/NetworkingCourse";
import NetworkingLesson from "./pages/NetworkingLesson";
import NetworkingFinalExam from "./pages/NetworkingFinalExam";
import NetworkingCertificate from "./pages/NetworkingCertificate";

import WebCourse from "./pages/WebCourse";
import WebLesson from "./pages/WebLesson";
import WebFinalExam from "./pages/WebFinalExam";
import WebCertificate from "./pages/WebCertificate";

import PythonCourse from "./pages/PythonCourse";
import PythonLesson from "./pages/PythonLesson";
import PythonFinalExam from "./pages/PythonFinalExam";
import PythonCertificate from "./pages/PythonCertificate";

import CryptographyCourse from "./pages/CryptographyCourse";
import CryptographyLesson from "./pages/CryptographyLesson";
import CryptographyFinalExam from "./pages/CryptographyFinalExam";
import CryptographyCertificate from "./pages/CryptographyCertificate";

import ReverseCourse from "./pages/ReverseCourse";
import ReverseLesson from "./pages/ReverseLesson";
import ReverseFinalExam from "./pages/ReverseFinalExam";
import ReverseCertificate from "./pages/ReverseCertificate";

import ForensicsCourse from "./pages/ForensicsCourse";
import ForensicsLesson from "./pages/ForensicsLesson";
import ForensicsFinalExam from "./pages/ForensicsFinalExam";
import ForensicsCertificate from "./pages/ForensicsCertificate";
import AcademyFinalExam from "./pages/AcademyFinalExam";

import AcademyCertificate from "./pages/AcademyCertificate";
import CTFDashboard from "./pages/CTFDashboard";
import CTFCategory from "./pages/CTFCategory";
import CTFChallenge from "./pages/CTFChallenge";

import CTFLeaderboard from "./pages/CTFLeaderboard";

import CTFChampionship from "./pages/CTFChampionship";
import CTFChampionshipArena from "./pages/CTFChampionshipArena";

import Terminal from "./pages/Terminal";

import LinuxGuide from "./pages/LinuxGuide";
import LinuxGuideLesson from "./pages/LinuxGuideLesson";

import NetworkingGuide from "./pages/NetworkingGuide";
import NetworkingGuideLesson from "./pages/NetworkingGuideLesson";
import CyberMission from "./pages/CyberMission";
import CyberMissionMap from "./pages/CyberMissionMap";

import CyberMissionGame from "./pages/CyberMissionGame";
import CyberMissionHowToPlay from "./pages/CyberMissionHowToPlay";
import CyberMissionAchievements from "./pages/CyberMissionAchievements";
import NewsDetails from "./pages/NewsDetails.jsx";
import Settings from "./pages/Settings/Settings.jsx";



function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Academy */}
        <Route path="/academy" element={<Academy />} />

        <Route
          path="/academy/linux"
          element={<CourseDetails />}
        />

        <Route
          path="/academy/linux/lesson/:id"
          element={<Lesson />}
        />

        {/* Labs */}

        <Route path="/labs" element={<Labs />} />

        <Route
          path="/labs/linux"
          element={<LinuxLab />}
        />

        <Route
          path="/labs/linux/challenge/:id"
          element={<LabChallenge />}
        />

        <Route
          path="/labs/web-security"
          element={<WebSecurityLab />}
        />

        <Route
          path="/labs/network"
          element={<NetworkLab />}
        />

        <Route
          path="/labs/cryptography"
          element={<CryptographyLab />}
        />

        <Route
          path="/labs/reverse"
          element={<ReverseEngineeringLab />}
        />

        <Route
          path="/labs/forensics"
          element={<DigitalForensicsLab />}
        />

        <Route
          path="/labs/password"
          element={<PasswordSecurityLab />}
        />

        {/* CTF */}

      

        {/* Tools */}

        <Route
          path="/tools"
          element={<Tools />}
        />
   


<Route
    path="/academy/linux/final"
    element={<LinuxFinalExam />}
/>

<Route
    path="/academy/linux/certificate"
    element={<Certificate />}
/>
<Route
    path="/academy/networking"
    element={<NetworkingCourse />}
/>
<Route
    path="/academy/networking/lesson/:id"
    element={<NetworkingLesson />}
/>
<Route
    path="/academy/networking/final"
    element={<NetworkingFinalExam />}
/>
<Route
    path="/academy/networking/certificate"
    element={<NetworkingCertificate />}
/>

<Route
    path="/academy/web"
    element={<WebCourse />}
/>

<Route
    path="/academy/web/lesson/:id"
    element={<WebLesson />}
/>
<Route
    path="/academy/web/final"
    element={<WebFinalExam />}
/>
<Route
    path="/academy/web/certificate"
    element={<WebCertificate />}
/>

<Route
    path="/academy/python"
    element={<PythonCourse />}
/>

<Route
    path="/academy/python/lesson/:id"
    element={<PythonLesson />}
/>

<Route
    path="/academy/python/final"
    element={<PythonFinalExam />}
/>

<Route
    path="/academy/python/certificate"
    element={<PythonCertificate />}
/>

<Route
    path="/academy/crypto"
    element={<CryptographyCourse />}
/>

<Route
    path="/academy/crypto/lesson/:id"
    element={<CryptographyLesson />}
/>

<Route
    path="/academy/crypto/final"
    element={<CryptographyFinalExam />}
/>

<Route
    path="/academy/crypto/certificate"
    element={<CryptographyCertificate />}
/>

<Route
    path="/academy/reverse"
    element={<ReverseCourse />}
/>

<Route
    path="/academy/reverse/lesson/:id"
    element={<ReverseLesson />}
/>

<Route
    path="/academy/reverse/final"
    element={<ReverseFinalExam />}
/>

<Route
    path="/academy/reverse/certificate"
    element={<ReverseCertificate />}
/>
<Route
    path="/academy/forensics"
    element={<ForensicsCourse />}
/>


<Route
    path="/academy/forensics/lesson/:id"
    element={<ForensicsLesson />}
/>


<Route
    path="/academy/forensics/final"
    element={<ForensicsFinalExam />}
/>


<Route
    path="/academy/forensics/certificate"
    element={<ForensicsCertificate />}
/>

<Route
    path="/academy/final"
    element={<AcademyFinalExam />}
/>
<Route
    path="/academy/certificate"
    element={<AcademyCertificate />}
/>

<Route path="/ctf" element={<CTFDashboard />} />

<Route path="/ctf/:category" element={<CTFCategory />} />
<Route
    path="/ctf/:category/:id"
    element={<CTFChallenge />}
/>

<Route
    path="/ctf/leaderboard"
    element={<CTFLeaderboard />}
/>


<Route
    path="/ctf/championship"
    element={<CTFChampionship />}
/>
<Route
    path="/ctf/championship/arena"
    element={<CTFChampionshipArena />}
/>

<Route
    path="/terminal"
    element={<Terminal />}
/>

<Route
    path="/linux-guide"
    element={<LinuxGuide />}
/>
<Route
    path="/linux-guide/lesson/:lessonId"
    element={<LinuxGuideLesson />}
/>
<Route
    path="/networking-guide"
    element={<NetworkingGuide />}
/>

<Route
    path="/networking-guide/:lessonId"
    element={<NetworkingGuideLesson />}
/>
<Route
    path="/cyber-mission"
    element={<CyberMission />}
/>

<Route
    path="/cyber-mission/map"
    element={<CyberMissionMap />}
/>



<Route
    path="/cyber-mission/play/:missionId"
    element={<CyberMissionGame />}
/>
<Route
    path="/cyber-mission/how-to-play"
    element={<CyberMissionHowToPlay />}
/>
<Route
    path="/cyber-mission/achievements"
    element={<CyberMissionAchievements />}
/>
{/* Settings */}

<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>

{/* Dashboard */}

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>










        {/* News */}

        <Route
          path="/news"
          element={<News />}
        />

<Route
  path="/news/:id"
  element={<NewsDetails />}
/>


        {/* Authentication */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Profile */}

        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;