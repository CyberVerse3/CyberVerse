`javascript`
const challenges = [
    {
        id: 1,
        title: "Hidden Metadata",
        difficulty: "Easy",
        points: 100,
        xp: 50,
        hint: "Files can contain information that is not visible at first glance.",
        description:
            "Investigate the metadata of a suspicious file and discover the hidden flag.",
        flag: "CV{metadata_detective}",
    },

    {
        id: 2,
        title: "Log Hunter",
        difficulty: "Easy",
        points: 100,
        xp: 50,
        hint: "Look carefully through the system logs.",
        description:
            "A server log contains a suspicious entry. Analyze the log and recover the hidden flag.",
        flag: "CV{log_hunter}",
    },

    {
        id: 3,
        title: "Deleted Evidence",
        difficulty: "Easy",
        points: 120,
        xp: 60,
        hint: "Deleted files may still leave traces behind.",
        description:
            "Investigate a digital disk image and recover evidence from a deleted file.",
        flag: "CV{deleted_evidence}",
    },

    {
        id: 4,
        title: "File Signature",
        difficulty: "Medium",
        points: 150,
        xp: 70,
        hint: "The extension does not always tell you what a file really is.",
        description:
            "Analyze the file signature and identify the real file type to uncover the hidden flag.",
        flag: "CV{file_signature}",
    },

    {
        id: 5,
        title: "Timeline Investigation",
        difficulty: "Medium",
        points: 150,
        xp: 70,
        hint: "Events become easier to understand when placed in chronological order.",
        description:
            "Analyze a sequence of filesystem events and determine what happened before the flag was hidden.",
        flag: "CV{timeline_investigator}",
    },

    {
        id: 6,
        title: "USB Investigation",
        difficulty: "Medium",
        points: 180,
        xp: 80,
        hint: "Removable devices can leave useful forensic artifacts.",
        description:
            "Investigate evidence from a USB device and identify the suspicious file containing the flag.",
        flag: "CV{usb_forensics}",
    },

    {
        id: 7,
        title: "Memory Artifact",
        difficulty: "Medium",
        points: 200,
        xp: 90,
        hint: "Volatile memory can contain information that never reaches the disk.",
        description:
            "Analyze a memory artifact and recover a hidden piece of evidence.",
        flag: "CV{memory_artifact}",
    },

    {
        id: 8,
        title: "Browser Evidence",
        difficulty: "Hard",
        points: 220,
        xp: 100,
        hint: "Browsers store history, cache, cookies, and other artifacts.",
        description:
            "Investigate browser artifacts left behind by a suspicious user and recover the hidden flag.",
        flag: "CV{browser_forensics}",
    },

    {
        id: 9,
        title: "Forensic File Carving",
        difficulty: "Hard",
        points: 250,
        xp: 120,
        hint: "A file may still be recoverable even when its directory entry is gone.",
        description:
            "Recover a fragmented file from raw forensic data and discover the flag.",
        flag: "CV{file_carving}",
    },

    {
        id: 10,
        title: "Forensics Master",
        difficulty: "Hard",
        points: 300,
        xp: 150,
        hint: "Combine metadata, logs, timelines, and file analysis techniques.",
        description:
            "This is the final Digital Forensics challenge. Investigate the evidence and recover the final flag.",
        flag: "CV{forensics_master}",
    },
];

export default challenges;

