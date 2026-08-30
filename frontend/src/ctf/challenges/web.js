`javascript`
const challenges = [
    {
        id: 1,
        title: "Hidden Parameter",
        difficulty: "Easy",
        points: 100,
        xp: 50,
        hint: "Inspect the URL and look for parameters.",
        description:
            "A web application contains a hidden parameter that reveals sensitive information. Find the parameter and discover the flag.",
        flag: "CV{hidden_parameter}",
    },

    {
        id: 2,
        title: "Login Bypass",
        difficulty: "Easy",
        points: 150,
        xp: 70,
        hint: "Think about how login queries process user input.",
        description:
            "A poorly protected login form may be vulnerable to SQL injection. Bypass the authentication and recover the flag.",
        flag: "CV{sql_bypass_success}",
    },

    {
        id: 3,
        title: "Stored XSS",
        difficulty: "Medium",
        points: 250,
        xp: 120,
        hint: "Try injecting JavaScript.",
        description:
            "A comment system may be vulnerable to Stored XSS. Investigate the application and discover the hidden flag.",
        flag: "CV{xss_master}",
    },

    {
        id: 4,
        title: "IDOR",
        difficulty: "Medium",
        points: 180,
        xp: 80,
        hint: "Try changing the object ID.",
        description:
            "A web application exposes user resources through predictable IDs. Find another user's resource and recover the hidden flag.",
        flag: "CV{idor_discovered}",
    },

    {
        id: 5,
        title: "Directory Discovery",
        difficulty: "Medium",
        points: 180,
        xp: 80,
        hint: "Not every directory is linked from the main page.",
        description:
            "A hidden directory contains sensitive information. Discover the unlisted path and recover the flag.",
        flag: "CV{hidden_directory}",
    },

    {
        id: 6,
        title: "Cookie Manipulation",
        difficulty: "Medium",
        points: 200,
        xp: 90,
        hint: "Inspect the cookies stored by the browser.",
        description:
            "The application trusts a client-side cookie to determine privileges. Analyze and manipulate the cookie to discover the flag.",
        flag: "CV{cookie_manipulation}",
    },

    {
        id: 7,
        title: "Path Traversal",
        difficulty: "Hard",
        points: 220,
        xp: 100,
        hint: "The application reads files based on user input.",
        description:
            "A vulnerable file viewer allows users to specify which file should be displayed. Investigate the vulnerability and recover the hidden flag.",
        flag: "CV{path_traversal}",
    },

    {
        id: 8,
        title: "Command Injection",
        difficulty: "Hard",
        points: 250,
        xp: 120,
        hint: "User input may be passed directly to a system command.",
        description:
            "A diagnostic web application executes user-controlled input. Identify the vulnerability and recover the flag.",
        flag: "CV{command_injection}",
    },

    {
        id: 9,
        title: "JWT Secrets",
        difficulty: "Hard",
        points: 280,
        xp: 130,
        hint: "Inspect the structure of the authentication token.",
        description:
            "An application uses JSON Web Tokens for authentication. Analyze the token implementation and discover the hidden flag.",
        flag: "CV{jwt_master}",
    },

    {
        id: 10,
        title: "Web Security Master",
        difficulty: "Hard",
        points: 300,
        xp: 150,
        hint: "Combine the web security techniques you learned throughout the previous challenges.",
        description:
            "This is the final Web Exploitation challenge. Analyze the application, identify the vulnerability, and recover the final flag.",
        flag: "CV{web_security_master}",
    },
];

export default challenges;

