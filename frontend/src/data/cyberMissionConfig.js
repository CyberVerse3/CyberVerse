// ============================================================
// CYBERVERSE — CYBER MISSION CONFIG
// ============================================================

const cyberMissionConfig = [

    // ========================================================
    // MISSION 01 — PHISHING ATTACK
    // ========================================================

    {
        id: 1,
        title: "Phishing Attack",
        shortTitle: "Phishing",
        icon: "🔓",

        description:
            "A suspicious email has reached a CyberVerse employee.",

        story: `
CyberVerse is under attack.

One of the employees has received a suspicious email
claiming to be an urgent security notification.

Your job is to investigate the message, identify the
warning signs, and prevent the employee from falling
for the attack.
        `,

        difficulty: "Easy",

        xp: 250,
        requiredAccuracy: 70,

        timer: {
            enabled: false,
            seconds: 0,
        },

        lives: 3,
        hints: 3,

        challenges: [

            {
                id: 1,
                type: "inspect",

                title: "Inspect the Email",

                description:
                    "Look carefully at the sender information.",

                data: {
                    sender:
                        "security-alert@cyberverse-support.com",

                    subject:
                        "URGENT: Your account will be suspended!",

                    message: `
We detected unusual activity on your account.

Your account will be permanently suspended
within 30 minutes.

Verify your account immediately using the
link below.
                    `,

                    link:
                        "http://cyberverse-security-login.com/verify",
                },

                question:
                    "What should you investigate first?",

                options: [
                    "The sender address and domain",
                    "The font used in the email",
                    "The email color",
                    "The employee's computer wallpaper",
                ],

                answer: 0,

                hint:
                    "Attackers often imitate legitimate organizations using suspicious domains.",

                xp: 50,
            },

            {
                id: 2,
                type: "identify",

                title: "Spot the Red Flags",

                description:
                    "Identify the strongest indicator of phishing.",

                question:
                    "Which combination is the strongest phishing indicator?",

                options: [
                    "Urgent language + suspicious link + unusual sender",
                    "Company logo + normal greeting",
                    "Short email + professional formatting",
                    "Email received during work hours",
                ],

                answer: 0,

                hint:
                    "Look for pressure, deception, and suspicious destinations.",

                xp: 50,
            },

            {
                id: 3,
                type: "decision",

                title: "Make the Decision",

                description:
                    "The employee asks what they should do.",

                question:
                    "What is the safest action?",

                options: [
                    "Click the link and verify the account",
                    "Reply and ask the sender for confirmation",
                    "Report the email and avoid the link",
                    "Forward the email to coworkers",
                ],

                answer: 2,

                hint:
                    "Do not interact with suspicious links or messages.",

                xp: 75,
            },

            {
                id: 4,
                type: "event",

                title: "New Alert Detected",

                description:
                    "A second employee has received the same message.",

                event:
                    "🚨 Multiple employees are receiving the same suspicious email.",

                question:
                    "What should the security team do next?",

                options: [
                    "Ignore the second report",
                    "Alert users and investigate the campaign",
                    "Tell employees to click the link",
                    "Delete all company email accounts",
                ],

                answer: 1,

                hint:
                    "Multiple victims suggest a wider phishing campaign.",

                xp: 75,
            },

        ],
    },


    // ========================================================
    // MISSION 02 — NETWORK INTRUSION
    // ========================================================

    {
        id: 2,
        title: "Network Intrusion",
        shortTitle: "Network",
        icon: "🌐",

        description:
            "Unusual network activity has been detected inside CyberVerse.",

        story: `
The CyberVerse monitoring system has detected
unusual traffic coming from an internal workstation.

Several connections are being established with an
unknown external server.

Analyze the network activity and identify the intrusion.
        `,

        difficulty: "Medium",

        xp: 350,
        requiredAccuracy: 70,

        timer: {
            enabled: true,
            seconds: 120,
        },

        lives: 3,
        hints: 3,

        challenges: [

            {
                id: 1,
                type: "network",

                title: "Analyze the Traffic",

                description:
                    "Review the captured network connections.",

                data: {
                    connections: [
                        {
                            source: "10.0.0.24",
                            destination: "10.0.0.1",
                            port: 443,
                            protocol: "HTTPS",
                        },
                        {
                            source: "10.0.0.24",
                            destination: "185.22.91.14",
                            port: 4444,
                            protocol: "TCP",
                        },
                        {
                            source: "10.0.0.24",
                            destination: "10.0.0.5",
                            port: 53,
                            protocol: "DNS",
                        },
                    ],
                },

                question:
                    "Which connection deserves the most investigation?",

                options: [
                    "10.0.0.24 → 10.0.0.1 : 443",
                    "10.0.0.24 → 185.22.91.14 : 4444",
                    "10.0.0.24 → 10.0.0.5 : 53",
                    "None of them",
                ],

                answer: 1,

                hint:
                    "Look for an unusual external destination and suspicious port.",

                xp: 75,
            },

            {
                id: 2,
                type: "identify",

                title: "Identify the Threat",

                question:
                    "What does repeated communication with an unknown external server potentially indicate?",

                options: [
                    "Normal local file access",
                    "Possible command-and-control communication",
                    "A printer connection",
                    "A software update only",
                ],

                answer: 1,

                hint:
                    "Compromised systems may communicate with attacker-controlled infrastructure.",

                xp: 75,
            },

            {
                id: 3,
                type: "decision",

                title: "Contain the Host",

                question:
                    "What is the most appropriate immediate response?",

                options: [
                    "Disconnect or isolate the suspicious host",
                    "Ignore the traffic",
                    "Publish the IP address publicly",
                    "Restart every server in the company",
                ],

                answer: 0,

                hint:
                    "Containment prevents a potentially compromised host from continuing communication.",

                xp: 100,
            },

        ],
    },


    // ========================================================
    // MISSION 03 — MALWARE INVESTIGATION
    // ========================================================

    {
        id: 3,
        title: "Malware Investigation",
        shortTitle: "Malware",
        icon: "🦠",

        description:
            "A workstation is behaving strangely after opening a downloaded file.",

        story: `
A CyberVerse employee reports that their workstation
has suddenly become unstable.

Unknown processes are running and a suspicious file
appeared in the Downloads directory.

Investigate the evidence and determine what happened.
        `,

        difficulty: "Medium",

        xp: 400,
        requiredAccuracy: 70,

        timer: {
            enabled: true,
            seconds: 150,
        },

        lives: 3,
        hints: 3,

        challenges: [

            {
                id: 1,
                type: "inspect",

                title: "Inspect the File",

                data: {
                    filename:
                        "invoice_2026.exe",

                    location:
                        "C:\\Users\\Employee\\Downloads\\",

                    size:
                        "482 KB",

                    type:
                        "Windows Executable",

                    source:
                        "Unknown email attachment",
                },

                question:
                    "Which detail is the strongest initial warning sign?",

                options: [
                    "The file is an executable received from an unknown source",
                    "The file is 482 KB",
                    "The file is inside Downloads",
                    "The filename contains numbers",
                ],

                answer: 0,

                hint:
                    "Unexpected executable files from unknown sources deserve careful investigation.",

                xp: 75,
            },

            {
                id: 2,
                type: "identify",

                title: "Suspicious Behavior",

                question:
                    "Which behavior is most suspicious for a newly opened unknown file?",

                options: [
                    "Creating an unexpected process and contacting an external server",
                    "Opening normally",
                    "Displaying a document",
                    "Closing immediately",
                ],

                answer: 0,

                hint:
                    "Unexpected process creation combined with network communication is important evidence.",

                xp: 100,
            },

            {
                id: 3,
                type: "decision",

                title: "Contain the Malware",

                question:
                    "What should the analyst prioritize?",

                options: [
                    "Isolate the affected workstation",
                    "Send the file to every employee",
                    "Disable all company computers",
                    "Ignore the incident",
                ],

                answer: 0,

                hint:
                    "Containment helps prevent further spread.",

                xp: 100,
            },

        ],
    },


    // ========================================================
    // MISSION 04 — DIGITAL FORENSICS
    // ========================================================

    {
        id: 4,
        title: "Digital Forensics",
        shortTitle: "Forensics",
        icon: "🔎",

        description:
            "Investigate digital evidence and reconstruct the incident.",

        story: `
An employee workstation has been compromised.

The security team collected several pieces of evidence.

Your task is to determine the sequence of events and
identify the most important evidence.
        `,

        difficulty: "Hard",

        xp: 500,
        requiredAccuracy: 70,

        timer: {
            enabled: true,
            seconds: 180,
        },

        lives: 3,
        hints: 3,

        challenges: [

            {
                id: 1,
                type: "evidence",

                title: "Examine the Evidence",

                data: {
                    evidence: [
                        "Suspicious email received",
                        "Executable downloaded",
                        "Unknown process started",
                        "External connection established",
                    ],
                },

                question:
                    "Which evidence should be correlated first to reconstruct the incident?",

                options: [
                    "The suspicious email and downloaded executable",
                    "The desktop wallpaper",
                    "The user's browser theme",
                    "The monitor resolution",
                ],

                answer: 0,

                hint:
                    "Start with evidence directly connected to the suspected initial access.",

                xp: 100,
            },

            {
                id: 2,
                type: "sequence",

                title: "Reconstruct the Timeline",

                question:
                    "Which sequence best represents the likely incident?",

                options: [
                    "Email → Download → Execution → Network communication",
                    "Network communication → Email → Download → Execution",
                    "Execution → Email → Network communication → Download",
                    "Download → Email → Network communication → Execution",
                ],

                answer: 0,

                hint:
                    "Think about what would logically happen after the employee receives the suspicious message.",

                xp: 125,
            },

            {
                id: 3,
                type: "analyze",

                title: "Find the Key Evidence",

                question:
                    "Which artifact would be especially useful for understanding when the suspicious file was executed?",

                options: [
                    "Execution-related system artifacts or logs",
                    "Desktop background",
                    "Keyboard layout",
                    "Screen brightness",
                ],

                answer: 0,

                hint:
                    "Look for artifacts that record program execution activity.",

                xp: 125,
            },

        ],
    },


    // ========================================================
    // FINAL MISSION — SAVE CYBERVERSE
    // ========================================================

    {
        id: 5,
        title: "Save CyberVerse",
        shortTitle: "Final Mission",
        icon: "💀",

        description:
            "CyberVerse is under coordinated attack. Stop the attackers.",

        story: `
CYBERVERSE IS UNDER ATTACK.

The security team has detected multiple indicators
of compromise across the organization.

A phishing campaign appears to have started the incident.
Suspicious network traffic followed, a potentially malicious
file was discovered, and forensic evidence suggests the
attacker gained access to an internal workstation.

You are the final analyst available.

Stop the attack and save CyberVerse.
        `,

        difficulty: "Expert",

        xp: 1000,
        requiredAccuracy: 80,

        timer: {
            enabled: true,
            seconds: 300,
        },

        lives: 3,
        hints: 3,

        challenges: [

            {
                id: 1,
                type: "inspect",

                title: "Stop the Phishing Attack",

                question:
                    "You identify the original phishing email. What should happen first?",

                options: [
                    "Report and block the malicious message",
                    "Click the link to investigate manually",
                    "Forward it to all employees",
                    "Reply to the attacker",
                ],

                answer: 0,

                hint:
                    "Prevent additional users from interacting with the malicious message.",

                xp: 150,
            },

            {
                id: 2,
                type: "network",

                title: "Find the Intrusion",

                question:
                    "Which activity is the strongest indicator of possible compromise?",

                options: [
                    "Repeated communication with an unknown external server",
                    "Normal DNS traffic",
                    "Internal HTTPS traffic",
                    "A user's normal web browsing",
                ],

                answer: 0,

                hint:
                    "Focus on unusual external communication.",

                xp: 150,
            },

            {
                id: 3,
                type: "malware",

                title: "Contain the Malware",

                question:
                    "What should happen to the suspected compromised workstation?",

                options: [
                    "Isolate it from the network",
                    "Connect it to more systems",
                    "Delete all evidence immediately",
                    "Ignore it",
                ],

                answer: 0,

                hint:
                    "Containment limits the attacker's ability to continue.",

                xp: 175,
            },

            {
                id: 4,
                type: "evidence",

                title: "Analyze the Evidence",

                question:
                    "What is the main purpose of correlating forensic evidence?",

                options: [
                    "Reconstruct what happened and understand the attack",
                    "Make the computer faster",
                    "Change the user's password only",
                    "Remove every system log",
                ],

                answer: 0,

                hint:
                    "Digital forensics helps investigators understand the timeline and actions.",

                xp: 175,
            },

            {
                id: 5,
                type: "decision",

                title: "Final Defense",

                question:
                    "What is the best overall response after containment and investigation?",

                options: [
                    "Eradicate the threat, recover safely, and monitor for further activity",
                    "Ignore the incident after isolation",
                    "Delete all forensic evidence",
                    "Immediately reconnect every affected system",
                ],

                answer: 0,

                hint:
                    "A complete incident response continues beyond containment.",

                xp: 200,
            },

        ],
    },

];

export default cyberMissionConfig;