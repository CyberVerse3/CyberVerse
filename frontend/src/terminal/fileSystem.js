const fileSystem = {
    type: "directory",
    name: "/",
    permissions: "755",

    children: {
        // =========================
        // HOME
        // =========================

        home: {
            type: "directory",
            name: "home",
            permissions: "755",

            children: {
                // =========================
                // CYBERUSER
                // =========================

                cyberuser: {
                    type: "directory",
                    name: "cyberuser",
                    permissions: "755",

                    children: {
                        // =========================
                        // HIDDEN FILES
                        // =========================

                        ".bashrc": {
                            type: "file",
                            name: ".bashrc",
                            permissions: "644",
                            content:
                                "# CyberVerse shell configuration\n" +
                                "export USER=cyberuser\n" +
                                "export SHELL=/bin/bash",
                        },

                        ".secret": {
                            type: "file",
                            name: ".secret",
                            permissions: "600",
                            content:
                                "CV{hidden_file_discovery}",
                        },

                        // =========================
                        // HIDDEN DIRECTORY
                        // =========================

                        ".config": {
                            type: "directory",
                            name: ".config",
                            permissions: "755",

                            children: {},
                        },

                        // =========================
                        // DESKTOP
                        // =========================

                        Desktop: {
                            type: "directory",
                            name: "Desktop",
                            permissions: "755",

                            children: {},
                        },

                        // =========================
                        // DOCUMENTS
                        // =========================

                        Documents: {
                            type: "directory",
                            name: "Documents",
                            permissions: "755",

                            children: {},
                        },

                        // =========================
                        // DOWNLOADS
                        // =========================

                        Downloads: {
                            type: "directory",
                            name: "Downloads",
                            permissions: "755",

                            children: {},
                        },

                        // =========================
                        // LABS
                        // =========================

                        Labs: {
                            type: "directory",
                            name: "Labs",
                            permissions: "755",

                            children: {
                                // =========================
                                // LINUX
                                // =========================

                                linux: {
                                    type: "directory",
                                    name: "linux",
                                    permissions: "755",

                                    children: {},
                                },

                                // =========================
                                // WEB
                                // =========================

                                web: {
                                    type: "directory",
                                    name: "web",
                                    permissions: "755",

                                    children: {},
                                },

                                // =========================
                                // NETWORKING
                                // =========================

                                networking: {
                                    type: "directory",
                                    name: "networking",
                                    permissions: "755",

                                    children: {},
                                },
                            },
                        },

                        // =========================
                        // CHALLENGES
                        // =========================

                        Challenges: {
                            type: "directory",
                            name: "Challenges",
                            permissions: "755",

                            children: {
                                // =========================
                                // CHALLENGE 1
                                // =========================

                                challenge1: {
                                    type: "directory",
                                    name: "challenge1",
                                    permissions: "755",

                                    children: {
                                        // =========================
                                        // README
                                        // =========================

                                        "README.txt": {
                                            type: "file",
                                            name: "README.txt",
                                            permissions: "644",

                                            content:
                                                "Welcome to CyberVerse Linux Terminal!\n" +
                                                "Flag: CV{linux_beginner}",
                                        },

                                        // =========================
                                        // FLAG
                                        // =========================

                                        "flag.txt": {
                                            type: "file",
                                            name: "flag.txt",
                                            permissions: "644",

                                            content:
                                                "CV{terminal_file_discovery}",
                                        },
                                    },
                                },
                            },
                        },

                        // =========================
                        // README
                        // =========================

                        "README.txt": {
                            type: "file",
                            name: "README.txt",
                            permissions: "644",

                            content:
                                "Welcome to the CyberVerse Terminal.\n" +
                                "Type 'help' to see available commands.",
                        },
                    },
                },
            },
        },
    },
};

export default fileSystem;