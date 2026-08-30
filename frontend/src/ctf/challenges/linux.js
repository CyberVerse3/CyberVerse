`javascript`
const challenges = [
    {
        id: 1,
        title: "Find the Hidden File",
        difficulty: "Easy",
        points: 100,
        xp: 50,
        hint: "Hidden files in Linux usually start with a dot.",
        description:
            "You are given access to a Linux directory. Find the hidden file containing the secret flag.",
        flag: "CV{hidden_linux_file}",
    },

    {
        id: 2,
        title: "Linux Permissions",
        difficulty: "Easy",
        points: 100,
        xp: 50,
        hint: "Check the permissions with ls -l.",
        description:
            "A sensitive file has incorrect permissions. Identify the file and discover the flag.",
        flag: "CV{linux_permissions}",
    },

    {
        id: 3,
        title: "Command History",
        difficulty: "Easy",
        points: 120,
        xp: 60,
        hint: "Linux keeps a history of previously executed commands.",
        description:
            "An administrator accidentally left useful information in the command history. Investigate it and find the flag.",
        flag: "CV{command_history}",
    },

    {
        id: 4,
        title: "Process Investigation",
        difficulty: "Medium",
        points: 150,
        xp: 70,
        hint: "Use ps or top to inspect running processes.",
        description:
            "A suspicious process is running on the machine. Investigate the running processes and identify the hidden flag.",
        flag: "CV{process_hunter}",
    },

    {
        id: 5,
        title: "Environment Secrets",
        difficulty: "Medium",
        points: 150,
        xp: 70,
        hint: "Environment variables can contain sensitive information.",
        description:
            "A developer accidentally stored a secret inside an environment variable. Find it and recover the flag.",
        flag: "CV{environment_secret}",
    },

    {
        id: 6,
        title: "Search the System",
        difficulty: "Medium",
        points: 180,
        xp: 80,
        hint: "The find command can search through directories.",
        description:
            "The flag is hidden somewhere in the filesystem. Use Linux file-search techniques to locate it.",
        flag: "CV{find_the_flag}",
    },

    {
        id: 7,
        title: "SUID Discovery",
        difficulty: "Medium",
        points: 200,
        xp: 90,
        hint: "SUID files execute with the permissions of their owner.",
        description:
            "A misconfigured SUID binary could expose sensitive information. Investigate the system and find the flag.",
        flag: "CV{suid_discovered}",
    },

    {
        id: 8,
        title: "Log Investigation",
        difficulty: "Hard",
        points: 220,
        xp: 100,
        hint: "System logs can reveal suspicious activity.",
        description:
            "Investigate the available Linux logs and identify the suspicious entry containing the flag.",
        flag: "CV{linux_log_hunter}",
    },

    {
        id: 9,
        title: "Privilege Escalation",
        difficulty: "Hard",
        points: 250,
        xp: 120,
        hint: "Look for misconfigured permissions and privileged programs.",
        description:
            "You have obtained a low-privileged shell. Investigate the system and discover a path to the hidden flag.",
        flag: "CV{linux_privilege}",
    },

    {
        id: 10,
        title: "Linux Root",
        difficulty: "Hard",
        points: 300,
        xp: 150,
        hint: "The final challenge requires combining the Linux techniques you learned.",
        description:
            "You have reached the final Linux challenge. Investigate the system, find the weakness, and recover the root flag.",
        flag: "CV{linux_root_master}",
    },
];

export default challenges;

