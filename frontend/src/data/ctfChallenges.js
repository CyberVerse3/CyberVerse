const ctfChallenges = [
  {
    id: 1,
    title: "Web Login Bypass",
    description:
      "Bypass the login page using SQL Injection.",
    difficulty: "Easy",
    xp: 150,
    category: "Web Security",
    unlocked: true
  },

  {
    id: 2,
    title: "Decode Secret Message",
    description:
      "Decode a Base64 encoded message.",
    difficulty: "Easy",
    xp: 200,
    category: "Cryptography",
    unlocked: true
  },

  {
    id: 3,
    title: "Find Hidden Flag",
    description:
      "Search a compromised system and find the hidden flag.",
    difficulty: "Medium",
    xp: 300,
    category: "Digital Forensics",
    unlocked: true
  },

  {
    id: 4,
    title: "Scan Open Ports",
    description:
      "Identify open ports on the target machine.",
    difficulty: "Medium",
    xp: 350,
    category: "Networking",
    unlocked: false
  },

  {
    id: 5,
    title: "Privilege Escalation",
    description:
      "Gain administrator access on a Linux server.",
    difficulty: "Hard",
    xp: 500,
    category: "Linux",
    unlocked: false
  },

  {
    id: 6,
    title: "Reverse Engineering",
    description:
      "Analyze a binary file and recover the hidden secret.",
    difficulty: "Hard",
    xp: 650,
    category: "Reverse Engineering",
    unlocked: false
  }
];

export default ctfChallenges;