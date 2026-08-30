import linuxLessons from "../lessons/linux";
import networkingLessons from "../lessons/networking";
import webLessons from "../lessons/web";
import pythonLessons from "../lessons/python";
import cryptographyLessons from "../lessons/cryptography";
import reverseLessons from "../lessons/reverse";
import forensicsLessons from "../lessons/forensics";

import linuxQuiz from "../quizzes/linuxQuiz";
import networkingQuiz from "../quizzes/networkingQuiz";
import webQuiz from "../quizzes/webQuiz";
import pythonQuiz from "../quizzes/pythonQuiz";
import cryptographyQuiz from "../quizzes/cryptographyQuiz";
import reverseQuiz from "../quizzes/reverseQuiz";
import forensicsQuiz from "../quizzes/forensicsQuiz";

import linuxFinalExam from "../quizzes/linuxFinalExam";
import networkingFinalExam from "../quizzes/networkingFinalExam";
import webFinalExam from "../quizzes/webFinalExam";
import pythonFinalExam from "../quizzes/pythonFinalExam";
import cryptographyFinalExam from "../quizzes/cryptographyFinalExam";
import reverseFinalExam from "../quizzes/reverseFinalExam";
import forensicsFinalExam from "../quizzes/forensicsFinalExam";

const courses = {

    linux:{

        title:"Linux Fundamentals",

          description:
    "Learn Linux commands, permissions, shell scripting and system administration.",

        icon:"🐧",

        difficulty:"Beginner",

        xp:1200,

        lessons:linuxLessons,

        quiz:linuxQuiz,

        finalExam:linuxFinalExam,

        certificateKey:"linuxCertificate"

    },



    networking:{

        title:"Networking Fundamentals",


        icon:"🌐",

        description:
"Learn networking fundamentals, protocols, IP addressing, routing and network security.",

        difficulty:"Intermediate",

        xp:1500,

        lessons:networkingLessons,

        quiz:networkingQuiz,

        finalExam:networkingFinalExam,

        certificateKey:"networkingCertificate"

    },



    web:{

        title:"Web Security",

        description:
"Learn web vulnerabilities, OWASP Top 10, authentication and secure web applications.",

        icon:"🌍",

        difficulty:"Intermediate",

        xp:1400,

        lessons:webLessons,

        quiz:webQuiz,

        finalExam:webFinalExam,

        certificateKey:"webCertificate"

    },



    python:{

        title:"Python for Cybersecurity",

        description:
"Learn Python programming for cybersecurity, automation and penetration testing.",

        icon:"🐍",

        difficulty:"Intermediate",

        xp:1300,

        lessons:pythonLessons,

        quiz:pythonQuiz,

        finalExam:pythonFinalExam,

        certificateKey:"pythonCertificate"

    },



    crypto:{

        title:"Cryptography",

        description:
"Learn encryption, hashing, digital signatures and modern cryptographic algorithms.",

        icon:"🔐",

        difficulty:"Advanced",

        xp:1500,

        lessons:cryptographyLessons,

        quiz:cryptographyQuiz,

        finalExam:cryptographyFinalExam,

        certificateKey:"cryptographyCertificate"

    },



    reverse:{

        title:"Reverse Engineering",

        description:
"Learn binary analysis, debugging, assembly language and malware reverse engineering.",

        icon:"🔧",

        difficulty:"Advanced",

        xp:1600,

        lessons:reverseLessons,

        quiz:reverseQuiz,

        finalExam:reverseFinalExam,

        certificateKey:"reverseCertificate"

    },



    forensics:{

        title:"Digital Forensics",

        description:
"Learn digital investigations, evidence collection, disk forensics, memory analysis and incident response.",

        icon:"🕵️",

        difficulty:"Advanced",

        xp:1110,

        lessons:forensicsLessons,

        quiz:forensicsQuiz,

        finalExam:forensicsFinalExam,

        certificateKey:"forensicsCertificate"

    }

};

export default courses;