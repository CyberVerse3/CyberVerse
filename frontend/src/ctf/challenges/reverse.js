`javascript`
const challenges = [
    {
        id: 1,
        title: "Strings",
        difficulty: "Easy",
        points: 100,
        xp: 50,
        hint: "Sometimes the easiest way to inspect a binary is to look for readable strings.",
        description:
            "A suspicious binary contains a hidden readable string. Analyze it and recover the flag.",
        flag: "CV{strings_beginner}",
    },

    {
        id: 2,
        title: "Hex Viewer",
        difficulty: "Easy",
        points: 100,
        xp: 50,
        hint: "Inspect the raw bytes of the file.",
        description:
            "Analyze the hexadecimal representation of a binary and locate the hidden flag.",
        flag: "CV{hex_reverse}",
    },

    {
        id: 3,
        title: "Program Flow",
        difficulty: "Easy",
        points: 120,
        xp: 60,
        hint: "Follow the instructions executed by the program.",
        description:
            "Analyze the basic control flow of a simple program and discover the hidden flag.",
        flag: "CV{program_flow}",
    },

    {
        id: 4,
        title: "Function Analysis",
        difficulty: "Medium",
        points: 150,
        xp: 70,
        hint: "Look closely at the functions responsible for checking the input.",
        description:
            "Reverse a small program and identify the function that validates the secret value.",
        flag: "CV{function_analysis}",
    },

    {
        id: 5,
        title: "Password Check",
        difficulty: "Medium",
        points: 150,
        xp: 70,
        hint: "Find what value the program compares against your input.",
        description:
            "A binary contains a password verification routine. Analyze it and recover the correct secret.",
        flag: "CV{password_checker}",
    },

    {
        id: 6,
        title: "Obfuscated Code",
        difficulty: "Medium",
        points: 180,
        xp: 80,
        hint: "The code was intentionally made harder to understand.",
        description:
            "Analyze an obfuscated program and recover the hidden value used to generate the flag.",
        flag: "CV{obfuscated_code}",
    },

    {
        id: 7,
        title: "Anti Debugging",
        difficulty: "Medium",
        points: 200,
        xp: 90,
        hint: "The program may behave differently when being analyzed.",
        description:
            "Investigate a binary containing anti-debugging logic and find the hidden flag.",
        flag: "CV{anti_debug}",
    },

    {
        id: 8,
        title: "Assembly Basics",
        difficulty: "Hard",
        points: 220,
        xp: 100,
        hint: "Understand the instructions executed by the processor.",
        description:
            "Analyze a small assembly routine and determine the value required to reveal the flag.",
        flag: "CV{assembly_master}",
    },

    {
        id: 9,
        title: "Binary Logic",
        difficulty: "Hard",
        points: 250,
        xp: 120,
        hint: "Trace the logical operations performed by the program.",
        description:
            "Reverse a binary that uses multiple logical operations to protect its secret.",
        flag: "CV{binary_logic}",
    },

    {
        id: 10,
        title: "Reverse Master",
        difficulty: "Hard",
        points: 300,
        xp: 150,
        hint: "Combine string analysis, control flow, debugging, and assembly knowledge.",
        description:
            "This is the final Reverse Engineering challenge. Analyze the binary and recover the final flag.",
        flag: "CV{reverse_master}",
    },
];

export default challenges;

