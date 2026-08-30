const linuxGuideConfig = [

    // =========================================================
    // MODULE 1 — LINUX FUNDAMENTALS
    // =========================================================

    {
        id: 1,
        title: "Linux Fundamentals",
        description:
            "Understand what Linux is, how it works, and why it is important in cybersecurity.",
        icon: "🐧",

        lessons: [

            {
                id: 1,
                title: "What is Linux?",
                xp: 20,

                content: {
                    introduction:
                        "Linux is an open-source operating system used to run computers, servers, cloud systems, networking devices, embedded systems, and many cybersecurity environments.",

                    sections: [
                        {
                            title: "Linux in simple terms",
                            text:
                                "Linux is software that manages the computer's hardware and provides an environment where applications can run. It controls resources such as memory, CPU, storage, and devices."
                        },
                        {
                            title: "Why Linux is popular",
                            text:
                                "Linux is popular because it is open-source, flexible, highly customizable, stable, and provides powerful command-line tools."
                        },
                        {
                            title: "Linux and Cybersecurity",
                            text:
                                "Cybersecurity professionals frequently use Linux for security testing, network analysis, server administration, automation, log analysis, and security research."
                        }
                    ],

                    keyPoints: [
                        "Linux is an operating system.",
                        "Linux is open-source.",
                        "Linux is widely used on servers.",
                        "Linux is heavily used in cybersecurity.",
                        "The terminal is one of Linux's most powerful interfaces."
                    ]
                }
            },

            {
                id: 2,
                title: "What is the Kernel?",
                xp: 20,

                content: {
                    introduction:
                        "The kernel is the core component of an operating system. It acts as a bridge between software and computer hardware.",

                    sections: [
                        {
                            title: "What does the kernel do?",
                            text:
                                "The kernel manages CPU time, memory, processes, devices, storage, networking, and communication between applications and hardware."
                        },
                        {
                            title: "Kernel and applications",
                            text:
                                "Applications normally cannot communicate directly with hardware. They request services from the kernel, and the kernel communicates with the hardware."
                        },
                        {
                            title: "Why the kernel matters",
                            text:
                                "Understanding the kernel helps security professionals understand processes, permissions, memory, devices, and system behavior."
                        }
                    ],

                    keyPoints: [
                        "The kernel is the core of Linux.",
                        "It manages hardware resources.",
                        "It manages processes and memory.",
                        "Applications communicate with the kernel."
                    ]
                }
            },

            {
                id: 3,
                title: "What is an Operating System?",
                xp: 20,

                content: {
                    introduction:
                        "An operating system is the main software layer that manages computer hardware and provides services for applications.",

                    sections: [
                        {
                            title: "Main responsibilities",
                            text:
                                "An operating system manages hardware resources, files, memory, processes, users, devices, networking, and applications."
                        },
                        {
                            title: "Examples",
                            text:
                                "Common operating systems include Linux, Windows, macOS, Android, and iOS."
                        },
                        {
                            title: "Linux as an operating system",
                            text:
                                "Linux provides the core operating-system functionality while different distributions package Linux with additional software and tools."
                        }
                    ],

                    keyPoints: [
                        "An OS manages computer resources.",
                        "Linux is an operating-system family based around the Linux kernel.",
                        "Applications depend on the operating system."
                    ]
                }
            },

            {
                id: 4,
                title: "Why Linux Matters in Cybersecurity",
                xp: 30,

                content: {
                    introduction:
                        "Linux is extremely important in cybersecurity because it provides powerful system administration, networking, scripting, and security tools.",

                    sections: [
                        {
                            title: "Security testing",
                            text:
                                "Many security-testing environments use Linux because security tools and networking utilities are readily available."
                        },
                        {
                            title: "Servers",
                            text:
                                "Linux powers a large number of web servers, cloud systems, databases, and infrastructure environments."
                        },
                        {
                            title: "Command-line control",
                            text:
                                "The Linux command line allows security professionals to inspect systems, automate tasks, analyze logs, and investigate problems."
                        }
                    ],

                    keyPoints: [
                        "Linux is common in security labs.",
                        "Linux is widely used on servers.",
                        "Linux provides powerful command-line tools.",
                        "Linux is useful for automation and investigation."
                    ]
                }
            }
        ]
    },


    // =========================================================
    // MODULE 2 — LINUX DISTRIBUTIONS
    // =========================================================

    {
        id: 2,
        title: "Linux Distributions",
        description:
            "Explore popular Linux distributions and understand their differences.",
        icon: "💿",

        lessons: [

            {
                id: 5,
                title: "What is a Linux Distribution?",
                xp: 20,

                content: {
                    introduction:
                        "A Linux distribution, often called a distro, is a complete operating-system package built around the Linux kernel.",

                    sections: [
                        {
                            title: "What does a distribution contain?",
                            text:
                                "A distribution usually includes the Linux kernel, package manager, system utilities, libraries, desktop environment, applications, and configuration tools."
                        },
                        {
                            title: "Why are there many distributions?",
                            text:
                                "Different distributions are designed for different goals such as desktop computing, servers, privacy, security testing, education, or minimal systems."
                        }
                    ],

                    keyPoints: [
                        "A distribution packages Linux with additional software.",
                        "Different distributions have different goals.",
                        "Ubuntu, Debian, Fedora, and Kali are examples."
                    ]
                }
            },

            {
                id: 6,
                title: "Ubuntu",
                xp: 20,

                content: {
                    introduction:
                        "Ubuntu is one of the most popular Linux distributions and is widely used for desktop computers, servers, cloud systems, and education.",

                    sections: [
                        {
                            title: "Why Ubuntu is popular",
                            text:
                                "Ubuntu is beginner-friendly and provides a large software ecosystem, extensive documentation, and strong community support."
                        },
                        {
                            title: "Ubuntu in cybersecurity",
                            text:
                                "Ubuntu is frequently used for security laboratories, development environments, servers, scripting, and learning Linux."
                        }
                    ],

                    keyPoints: [
                        "Ubuntu is beginner-friendly.",
                        "Ubuntu can be used on desktops and servers.",
                        "Ubuntu is useful for learning Linux."
                    ]
                }
            },

            {
                id: 7,
                title: "Debian",
                xp: 20,

                content: {
                    introduction:
                        "Debian is a long-established Linux distribution known for stability, reliability, and a large software repository.",

                    sections: [
                        {
                            title: "Stability",
                            text:
                                "Debian focuses heavily on stability and careful software maintenance."
                        },
                        {
                            title: "Debian family",
                            text:
                                "Many Linux distributions are based on Debian, including Ubuntu."
                        }
                    ],

                    keyPoints: [
                        "Debian is known for stability.",
                        "Ubuntu is based on Debian.",
                        "Debian is widely used on servers."
                    ]
                }
            },

            {
                id: 8,
                title: "Fedora",
                xp: 20,

                content: {
                    introduction:
                        "Fedora is a modern Linux distribution sponsored by Red Hat and is known for adopting newer technologies.",

                    sections: [
                        {
                            title: "Modern technologies",
                            text:
                                "Fedora often provides recent versions of software, development technologies, and Linux features."
                        },
                        {
                            title: "Learning environment",
                            text:
                                "Fedora is useful for users who want to learn modern Linux administration and system technologies."
                        }
                    ],

                    keyPoints: [
                        "Fedora is a modern Linux distribution.",
                        "Fedora is connected to the Red Hat ecosystem.",
                        "Fedora is commonly used by developers and Linux enthusiasts."
                    ]
                }
            },

            {
                id: 9,
                title: "Kali Linux",
                xp: 30,

                content: {
                    introduction:
                        "Kali Linux is a Debian-based distribution designed primarily for penetration testing, security research, digital forensics, and cybersecurity training.",

                    sections: [
                        {
                            title: "Security tools",
                            text:
                                "Kali includes many tools used for security testing, network analysis, vulnerability assessment, digital forensics, and investigation."
                        },
                        {
                            title: "Important warning",
                            text:
                                "Security tools should only be used on systems where you have permission to test."
                        },
                        {
                            title: "Kali is not required to learn Linux",
                            text:
                                "You can learn Linux fundamentals using many distributions. Kali becomes especially useful when studying cybersecurity workflows."
                        }
                    ],

                    keyPoints: [
                        "Kali is Debian-based.",
                        "Kali focuses on cybersecurity.",
                        "Kali contains many security tools.",
                        "Always test systems legally and with permission."
                    ]
                }
            },

            {
                id: 10,
                title: "Other Popular Distributions",
                xp: 20,

                content: {
                    introduction:
                        "Linux has many distributions, each designed for specific users and environments.",

                    sections: [
                        {
                            title: "Examples",
                            text:
                                "Other popular distributions include Arch Linux, Linux Mint, openSUSE, Rocky Linux, AlmaLinux, and many others."
                        },
                        {
                            title: "Choosing a distribution",
                            text:
                                "The best distribution depends on the user's goals. Beginners may prefer user-friendly distributions, while administrators may select distributions based on stability, support, or infrastructure requirements."
                        }
                    ],

                    keyPoints: [
                        "There is no single Linux distribution for everyone.",
                        "Different distributions have different goals.",
                        "Learning Linux fundamentals is more important than memorizing distributions."
                    ]
                }
            }
        ]
    },


    // =========================================================
    // MODULE 3 — LINUX VS WINDOWS
    // =========================================================

    {
        id: 3,
        title: "Linux vs Windows",
        description:
            "Learn the main differences between Linux and Windows in a simple way.",
        icon: "⚔️",

        lessons: [

            {
                id: 11,
                title: "Linux vs Windows",
                xp: 20,

                content: {
                    introduction:
                        "Linux and Windows are both operating systems, but they differ in design, administration, software management, and system structure.",

                    sections: [
                        {
                            title: "User experience",
                            text:
                                "Windows traditionally emphasizes a graphical user interface, while Linux provides both graphical interfaces and powerful command-line environments."
                        },
                        {
                            title: "Customization",
                            text:
                                "Linux generally provides more freedom to customize system components and workflows."
                        },
                        {
                            title: "Cybersecurity",
                            text:
                                "Linux is particularly common in cybersecurity because of its command-line tools, networking utilities, scripting capabilities, and server presence."
                        }
                    ],

                    keyPoints: [
                        "Both are operating systems.",
                        "Linux provides extensive command-line control.",
                        "Windows is widely used for desktop computing.",
                        "Linux is heavily used in servers and cybersecurity."
                    ]
                }
            },

            {
                id: 12,
                title: "File Systems",
                xp: 20,

                content: {
                    introduction:
                        "Linux and Windows organize files differently. Understanding these differences is important when moving between operating systems.",

                    sections: [
                        {
                            title: "Linux paths",
                            text:
                                "Linux uses a single directory hierarchy beginning at the root directory, represented by /."
                        },
                        {
                            title: "Windows paths",
                            text:
                                "Windows commonly organizes storage using drive letters such as C: and D:."
                        },
                        {
                            title: "Why this matters",
                            text:
                                "Security professionals frequently work across different operating systems, so understanding path structures helps avoid mistakes during investigations and administration."
                        }
                    ],

                    keyPoints: [
                        "Linux uses / as the root.",
                        "Windows commonly uses drive letters.",
                        "Linux paths use / between directories."
                    ]
                }
            },

            {
                id: 13,
                title: "Security Differences",
                xp: 30,

                content: {
                    introduction:
                        "Linux and Windows use different security models and administration mechanisms.",

                    sections: [
                        {
                            title: "Permissions",
                            text:
                                "Linux uses a traditional user/group/other permission model with read, write, and execute permissions."
                        },
                        {
                            title: "Privilege",
                            text:
                                "Linux separates normal user activity from privileged administration, commonly using root or controlled privilege escalation."
                        },
                        {
                            title: "Security administration",
                            text:
                                "Both systems provide strong security capabilities, but administrators interact with their security models differently."
                        }
                    ],

                    keyPoints: [
                        "Linux uses users and groups.",
                        "Linux permissions include read, write, and execute.",
                        "Administrative privileges should be used carefully."
                    ]
                }
            }
        ]
    },


    // =========================================================
    // MODULE 4 — TERMINAL BASICS
    // =========================================================

    {
        id: 4,
        title: "Terminal Basics",
        description:
            "Learn what the terminal is and how CLI differs from GUI.",
        icon: "💻",

        lessons: [

            {
                id: 14,
                title: "What is the Terminal?",
                xp: 20,

                content: {
                    introduction:
                        "The terminal is an interface that allows users to interact with an operating system by entering commands.",

                    sections: [
                        {
                            title: "Why use a terminal?",
                            text:
                                "A terminal can be faster and more precise than a graphical interface for many administration, networking, scripting, and security tasks."
                        },
                        {
                            title: "Terminal commands",
                            text:
                                "Commands such as pwd, ls, cd, mkdir, cat, and grep allow users to interact with files and the system."
                        }
                    ],

                    keyPoints: [
                        "The terminal accepts commands.",
                        "The terminal provides direct system interaction.",
                        "Cybersecurity professionals use terminals extensively."
                    ],

                    commands: [
                        "pwd",
                        "ls",
                        "cd"
                    ]
                }
            },

            {
                id: 15,
                title: "CLI vs GUI",
                xp: 20,

                content: {
                    introduction:
                        "CLI means Command-Line Interface, while GUI means Graphical User Interface.",

                    sections: [
                        {
                            title: "CLI",
                            text:
                                "CLI allows users to interact with a system by typing commands. It is highly useful for automation and remote administration."
                        },
                        {
                            title: "GUI",
                            text:
                                "GUI provides visual elements such as windows, buttons, menus, and icons."
                        },
                        {
                            title: "Cybersecurity",
                            text:
                                "Security professionals often combine CLI and GUI tools depending on the task."
                        }
                    ],

                    keyPoints: [
                        "CLI uses commands.",
                        "GUI uses visual controls.",
                        "Both interfaces are useful."
                    ]
                }
            },

            {
                id: 16,
                title: "Understanding the Shell",
                xp: 20,

                content: {
                    introduction:
                        "A shell is a program that interprets commands and communicates with the operating system.",

                    sections: [
                        {
                            title: "Examples of shells",
                            text:
                                "Common Linux shells include Bash, Zsh, Fish, and others."
                        },
                        {
                            title: "Shell vs terminal",
                            text:
                                "The terminal is the interface through which you interact, while the shell interprets the commands you enter."
                        }
                    ],

                    keyPoints: [
                        "The shell interprets commands.",
                        "Bash is a common Linux shell.",
                        "Terminal and shell are related but not identical."
                    ]
                }
            },

            {
                id: 17,
                title: "Using the CyberVerse Terminal",
                xp: 30,

                content: {
                    introduction:
                        "The CyberVerse Terminal provides a safe practice environment where you can experiment with Linux commands while learning the guide.",

                    sections: [
                        {
                            title: "Practice environment",
                            text:
                                "Use the terminal to practice commands introduced throughout the Linux Guide."
                        },
                        {
                            title: "Learning approach",
                            text:
                                "Read the lesson, understand the command, then open the CyberVerse Terminal and try it yourself."
                        },
                        {
                            title: "Safety",
                            text:
                                "The CyberVerse environment is designed for learning, so use it to experiment with commands before applying your knowledge to real systems."
                        }
                    ],

                    keyPoints: [
                        "Read first.",
                        "Practice second.",
                        "Experiment inside the CyberVerse Terminal.",
                        "Use real systems only with permission."
                    ]
                }
            }
        ]
    },


    // =========================================================
    // MODULE 5 — ESSENTIAL COMMANDS
    // =========================================================

    {
        id: 5,
        title: "Essential Commands",
        description:
            "Master the most important Linux commands used every day.",
        icon: "⌨️",

        lessons: [

            {
                id: 18,
                title: "pwd",
                xp: 20,

                content: {
                    introduction:
                        "The pwd command displays the current working directory.",

                    sections: [
                        {
                            title: "Why pwd is useful",
                            text:
                                "Knowing your current location is important before creating, moving, copying, or deleting files."
                        },
                        {
                            title: "Example",
                            text:
                                "Running pwd may return a path such as /home/student."
                        }
                    ],

                    keyPoints: [
                        "pwd means print working directory.",
                        "It shows your current location."
                    ],

                    commands: [
                        "pwd"
                    ]
                }
            },

            {
                id: 19,
                title: "ls",
                xp: 20,

                content: {
                    introduction:
                        "The ls command lists files and directories.",

                    sections: [
                        {
                            title: "Basic usage",
                            text:
                                "Running ls shows the contents of the current directory."
                        },
                        {
                            title: "Useful options",
                            text:
                                "Options such as -l provide detailed information, while -a includes hidden files."
                        }
                    ],

                    keyPoints: [
                        "ls lists directory contents.",
                        "ls -l shows detailed information.",
                        "ls -a shows hidden files."
                    ],

                    commands: [
                        "ls",
                        "ls -l",
                        "ls -a"
                    ]
                }
            },

            {
                id: 20,
                title: "cd",
                xp: 20,

                content: {
                    introduction:
                        "The cd command changes the current working directory.",

                    sections: [
                        {
                            title: "Changing directories",
                            text:
                                "You can use cd followed by a directory name to move into that directory."
                        },
                        {
                            title: "Moving back",
                            text:
                                "The command cd .. moves to the parent directory."
                        }
                    ],

                    keyPoints: [
                        "cd changes directories.",
                        "cd .. moves to the parent directory.",
                        "cd ~ moves to the home directory."
                    ],

                    commands: [
                        "cd directory",
                        "cd ..",
                        "cd ~"
                    ]
                }
            },

            {
                id: 21,
                title: "mkdir",
                xp: 20,

                content: {
                    introduction:
                        "The mkdir command creates directories.",

                    sections: [
                        {
                            title: "Creating a directory",
                            text:
                                "Use mkdir followed by the directory name to create a new directory."
                        },
                        {
                            title: "Why it matters",
                            text:
                                "Directories help organize files and are fundamental to working with Linux systems."
                        }
                    ],

                    keyPoints: [
                        "mkdir creates directories.",
                        "Directories organize files."
                    ],

                    commands: [
                        "mkdir test"
                    ]
                }
            },

            {
                id: 22,
                title: "touch",
                xp: 20,

                content: {
                    introduction:
                        "The touch command can create an empty file or update a file's timestamps.",

                    sections: [
                        {
                            title: "Creating files",
                            text:
                                "Running touch followed by a filename creates an empty file if it does not already exist."
                        }
                    ],

                    keyPoints: [
                        "touch can create empty files.",
                        "touch can update timestamps."
                    ],

                    commands: [
                        "touch file.txt"
                    ]
                }
            },

            {
                id: 23,
                title: "cp",
                xp: 20,

                content: {
                    introduction:
                        "The cp command copies files and directories.",

                    sections: [
                        {
                            title: "Copying a file",
                            text:
                                "You provide a source and destination. The original file remains in place."
                        },
                        {
                            title: "Why it matters",
                            text:
                                "Copying files is useful for backups, organization, and creating working copies."
                        }
                    ],

                    keyPoints: [
                        "cp copies files.",
                        "The original remains unchanged."
                    ],

                    commands: [
                        "cp file.txt backup.txt"
                    ]
                }
            },

            {
                id: 24,
                title: "mv",
                xp: 20,

                content: {
                    introduction:
                        "The mv command moves or renames files and directories.",

                    sections: [
                        {
                            title: "Renaming",
                            text:
                                "Moving a file to a new filename effectively renames it."
                        },
                        {
                            title: "Moving",
                            text:
                                "mv can move files between directories."
                        }
                    ],

                    keyPoints: [
                        "mv moves files.",
                        "mv can rename files."
                    ],

                    commands: [
                        "mv old.txt new.txt"
                    ]
                }
            },

            {
                id: 25,
                title: "rm",
                xp: 20,

                content: {
                    introduction:
                        "The rm command removes files and, with appropriate options, directories.",

                    sections: [
                        {
                            title: "Important warning",
                            text:
                                "Removing files from the command line can be permanent. Always verify the target before running destructive commands."
                        }
                    ],

                    keyPoints: [
                        "rm removes files.",
                        "Be careful with destructive commands.",
                        "Always verify the path before deletion."
                    ],

                    commands: [
                        "rm file.txt"
                    ]
                }
            },

            {
                id: 26,
                title: "cat",
                xp: 20,

                content: {
                    introduction:
                        "The cat command displays the contents of files in the terminal.",

                    sections: [
                        {
                            title: "Reading files",
                            text:
                                "cat is useful for quickly viewing small text files such as configuration files and notes."
                        },
                        {
                            title: "Cybersecurity usage",
                            text:
                                "Security professionals frequently use cat to inspect configuration files, logs, and other text-based data."
                        }
                    ],

                    keyPoints: [
                        "cat displays file contents.",
                        "cat is useful for text files.",
                        "cat is commonly used during investigations."
                    ],

                    commands: [
                        "cat file.txt"
                    ]
                }
            },

            {
                id: 27,
                title: "grep",
                xp: 30,

                content: {
                    introduction:
                        "grep searches text for patterns or specific words.",

                    sections: [
                        {
                            title: "Searching files",
                            text:
                                "grep is useful when you need to find specific information inside a large text file."
                        },
                        {
                            title: "Cybersecurity usage",
                            text:
                                "Security professionals can use grep to search logs for usernames, IP addresses, errors, suspicious strings, or other indicators."
                        }
                    ],

                    keyPoints: [
                        "grep searches text.",
                        "grep is extremely useful for log analysis.",
                        "grep can search for patterns."
                    ],

                    commands: [
                        "grep password file.txt",
                        "grep error log.txt"
                    ]
                }
            }
        ]
    },


    // =========================================================
    // MODULE 6 — FILES & DIRECTORIES
    // =========================================================

    {
        id: 6,
        title: "Files & Directories",
        description:
            "Understand the Linux file system, paths, directories, and navigation.",
        icon: "📁",

        lessons: [

            {
                id: 28,
                title: "Linux File System",
                xp: 20,

                content: {
                    introduction:
                        "Linux organizes files and directories into a hierarchical structure.",

                    sections: [
                        {
                            title: "Hierarchy",
                            text:
                                "Everything starts from the root directory and branches into directories and files."
                        },
                        {
                            title: "Common directories",
                            text:
                                "Important directories include /home, /etc, /var, /tmp, /usr, and /bin or related system locations."
                        }
                    ],

                    keyPoints: [
                        "Linux uses a hierarchical file system.",
                        "The root directory is /.",
                        "Directories have specific purposes."
                    ]
                }
            },

            {
                id: 29,
                title: "The Root Directory",
                xp: 20,

                content: {
                    introduction:
                        "The root directory, represented by /, is the starting point of the Linux file system.",

                    sections: [
                        {
                            title: "Root is not the same as root user",
                            text:
                                "The root directory / is a location in the file system. The root user is a privileged account. These are different concepts."
                        },
                        {
                            title: "Important locations",
                            text:
                                "Directories such as /etc, /home, /var, and /tmp are located under the root directory."
                        }
                    ],

                    keyPoints: [
                        "/ is the root directory.",
                        "The root directory is not the root user.",
                        "Many important system directories exist under /."
                    ]
                }
            },

            {
                id: 30,
                title: "Absolute Paths",
                xp: 20,

                content: {
                    introduction:
                        "An absolute path describes a file or directory starting from the root directory.",

                    sections: [
                        {
                            title: "Example",
                            text:
                                "A path such as /home/student/file.txt identifies a location independently of your current directory."
                        }
                    ],

                    keyPoints: [
                        "Absolute paths start from /.",
                        "They describe a complete location."
                    ],

                    commands: [
                        "cd /home",
                        "cat /home/student/file.txt"
                    ]
                }
            },

            {
                id: 31,
                title: "Relative Paths",
                xp: 20,

                content: {
                    introduction:
                        "A relative path describes a location based on your current working directory.",

                    sections: [
                        {
                            title: "Example",
                            text:
                                "If you are inside /home/student, referring to notes.txt means the file is relative to your current location."
                        }
                    ],

                    keyPoints: [
                        "Relative paths depend on your current directory.",
                        "They are shorter than absolute paths."
                    ],

                    commands: [
                        "cat notes.txt"
                    ]
                }
            },

            {
                id: 32,
                title: "Special Paths: . .. ~",
                xp: 30,

                content: {
                    introduction:
                        "Linux provides special path symbols that make navigation easier.",

                    sections: [
                        {
                            title: ".",
                            text:
                                "A single dot represents the current directory."
                        },
                        {
                            title: "..",
                            text:
                                "Two dots represent the parent directory."
                        },
                        {
                            title: "~",
                            text:
                                "The tilde normally represents the current user's home directory."
                        }
                    ],

                    keyPoints: [
                        ". means current directory.",
                        ".. means parent directory.",
                        "~ represents the home directory."
                    ],

                    commands: [
                        "cd .",
                        "cd ..",
                        "cd ~"
                    ]
                }
            }
        ]
    },


    // =========================================================
    // MODULE 7 — PERMISSIONS
    // =========================================================

    {
        id: 7,
        title: "Permissions",
        description:
            "Learn Linux users, groups, permissions, and chmod.",
        icon: "🔐",

        lessons: [

            {
                id: 33,
                title: "Users",
                xp: 20,

                content: {
                    introduction:
                        "Linux uses user accounts to identify people and processes interacting with the system.",

                    sections: [
                        {
                            title: "Why users matter",
                            text:
                                "User accounts help Linux determine who owns files and what actions users are allowed to perform."
                        }
                    ],

                    keyPoints: [
                        "Linux supports multiple users.",
                        "Files can have owners.",
                        "Permissions control access."
                    ]
                }
            },

            {
                id: 34,
                title: "Groups",
                xp: 20,

                content: {
                    introduction:
                        "Groups allow Linux administrators to manage permissions for multiple users efficiently.",

                    sections: [
                        {
                            title: "Why groups exist",
                            text:
                                "Instead of assigning access individually to every user, administrators can place users into groups and assign permissions to the group."
                        }
                    ],

                    keyPoints: [
                        "Groups contain users.",
                        "Groups simplify permission management."
                    ]
                }
            },

            {
                id: 35,
                title: "Read, Write & Execute",
                xp: 20,

                content: {
                    introduction:
                        "Linux commonly represents permissions using read, write, and execute.",

                    sections: [
                        {
                            title: "Read",
                            text:
                                "Read permission allows viewing the contents of a file or listing directory contents depending on the object."
                        },
                        {
                            title: "Write",
                            text:
                                "Write permission allows modifying a file or changing directory contents."
                        },
                        {
                            title: "Execute",
                            text:
                                "Execute permission allows executing a file as a program or accessing a directory in relevant contexts."
                        }
                    ],

                    keyPoints: [
                        "r = read",
                        "w = write",
                        "x = execute"
                    ]
                }
            },

            {
                id: 36,
                title: "Understanding Permission Strings",
                xp: 20,

                content: {
                    introduction:
                        "Linux permission strings provide a compact representation of file access.",

                    sections: [
                        {
                            title: "Example",
                            text:
                                "A permission string such as -rwxr-xr-- describes the file type and permissions for owner, group, and others."
                        },
                        {
                            title: "Three groups",
                            text:
                                "Permissions are normally shown for the owner, group, and others."
                        }
                    ],

                    keyPoints: [
                        "Permissions are grouped into owner, group, and others.",
                        "r means read.",
                        "w means write.",
                        "x means execute."
                    ],

                    commands: [
                        "ls -l"
                    ]
                }
            },

            {
                id: 37,
                title: "chmod",
                xp: 30,

                content: {
                    introduction:
                        "chmod changes file and directory permissions.",

                    sections: [
                        {
                            title: "Why chmod matters",
                            text:
                                "Correct permissions help prevent unauthorized access and protect sensitive files."
                        },
                        {
                            title: "Symbolic permissions",
                            text:
                                "Permissions can be modified using symbolic notation such as u, g, o, r, w, and x."
                        },
                        {
                            title: "Numeric permissions",
                            text:
                                "Linux also supports numeric permission values such as 755 and 644."
                        }
                    ],

                    keyPoints: [
                        "chmod changes permissions.",
                        "Permissions protect files and directories.",
                        "Use chmod carefully."
                    ],

                    commands: [
                        "chmod 644 file.txt",
                        "chmod 755 script.sh"
                    ]
                }
            }
        ]
    },


    // =========================================================
    // MODULE 8 — PROCESSES & SERVICES
    // =========================================================

    {
        id: 8,
        title: "Processes & Services",
        description:
            "Understand processes, PIDs, services, and how Linux manages them.",
        icon: "⚙️",

        lessons: [

            {
                id: 38,
                title: "What is a Process?",
                xp: 20,

                content: {
                    introduction:
                        "A process is a running instance of a program.",

                    sections: [
                        {
                            title: "Example",
                            text:
                                "When you start a program, Linux creates a process that receives memory, CPU time, and other resources."
                        },
                        {
                            title: "Security importance",
                            text:
                                "Security professionals inspect processes to understand what is running on a system and identify unexpected activity."
                        }
                    ],

                    keyPoints: [
                        "A process is a running program.",
                        "Processes consume system resources.",
                        "Processes are important during security investigations."
                    ]
                }
            },

            {
                id: 39,
                title: "Process IDs (PID)",
                xp: 20,

                content: {
                    introduction:
                        "Every running process in Linux is normally assigned a Process ID, or PID.",

                    sections: [
                        {
                            title: "Why PIDs matter",
                            text:
                                "PIDs allow administrators and security professionals to identify and manage individual processes."
                        }
                    ],

                    keyPoints: [
                        "PID means Process ID.",
                        "Each process normally has a unique PID while running."
                    ]
                }
            },

            {
                id: 40,
                title: "Viewing Processes",
                xp: 20,

                content: {
                    introduction:
                        "Linux provides several commands for viewing running processes.",

                    sections: [
                        {
                            title: "ps",
                            text:
                                "The ps command provides a snapshot of running processes."
                        },
                        {
                            title: "top",
                            text:
                                "The top command provides a continuously updating view of system processes and resource usage."
                        }
                    ],

                    keyPoints: [
                        "ps shows processes.",
                        "top provides a live process view."
                    ],

                    commands: [
                        "ps",
                        "ps aux",
                        "top"
                    ]
                }
            },

            {
                id: 41,
                title: "What is a Service?",
                xp: 20,

                content: {
                    introduction:
                        "A service is a background program that provides functionality to the system or other applications.",

                    sections: [
                        {
                            title: "Examples",
                            text:
                                "Web servers, SSH servers, database servers, and networking components can run as services."
                        },
                        {
                            title: "Why services matter",
                            text:
                                "Security professionals need to know which services are running because services can expose network functionality."
                        }
                    ],

                    keyPoints: [
                        "Services usually run in the background.",
                        "Services provide functionality.",
                        "Unnecessary services can increase attack surface."
                    ]
                }
            },

            {
                id: 42,
                title: "Processes vs Services",
                xp: 30,

                content: {
                    introduction:
                        "Processes and services are related concepts, but they are not exactly the same thing.",

                    sections: [
                        {
                            title: "Process",
                            text:
                                "A process is a running instance of a program."
                        },
                        {
                            title: "Service",
                            text:
                                "A service is generally a background component designed to provide functionality, often managed by the operating system's service manager."
                        },
                        {
                            title: "Security perspective",
                            text:
                                "Understanding both helps you identify what is running and what functionality is exposed by a Linux system."
                        }
                    ],

                    keyPoints: [
                        "A service usually runs as one or more processes.",
                        "Processes represent running programs.",
                        "Services provide background functionality."
                    ]
                }
            }
        ]
    },


    // =========================================================
    // MODULE 9 — LINUX NETWORKING
    // =========================================================

    {
        id: 9,
        title: "Linux Networking",
        description:
            "Learn the basics of networking from inside Linux.",
        icon: "🌐",

        lessons: [

            {
                id: 43,
                title: "IP Addresses",
                xp: 20,

                content: {
                    introduction:
                        "An IP address identifies a network interface on an IP network.",

                    sections: [
                        {
                            title: "IPv4",
                            text:
                                "IPv4 addresses are commonly written as four decimal numbers separated by dots, such as 192.168.1.10."
                        },
                        {
                            title: "Why IP addresses matter",
                            text:
                                "Security professionals work with IP addresses when analyzing network traffic, logs, connections, and hosts."
                        }
                    ],

                    keyPoints: [
                        "IP addresses identify network endpoints.",
                        "IPv4 uses four numerical sections.",
                        "IP addresses are important in network security."
                    ]
                }
            },

            {
                id: 44,
                title: "Network Interfaces",
                xp: 20,

                content: {
                    introduction:
                        "A network interface provides a system with a connection to a network.",

                    sections: [
                        {
                            title: "Examples",
                            text:
                                "Common interfaces include Ethernet, Wi-Fi, and virtual network interfaces."
                        },
                        {
                            title: "Security importance",
                            text:
                                "Inspecting interfaces helps administrators understand how a system connects to networks."
                        }
                    ],

                    keyPoints: [
                        "Network interfaces connect systems to networks.",
                        "Linux can have physical and virtual interfaces."
                    ]
                }
            },

            {
                id: 45,
                title: "Ports",
                xp: 20,

                content: {
                    introduction:
                        "Network ports help identify specific services or applications communicating over a network.",

                    sections: [
                        {
                            title: "Port numbers",
                            text:
                                "TCP and UDP use port numbers to distinguish different network services."
                        },
                        {
                            title: "Security importance",
                            text:
                                "Open ports can indicate services that are listening for network connections."
                        }
                    ],

                    keyPoints: [
                        "Ports identify network services.",
                        "TCP and UDP use ports.",
                        "Security professionals inspect open ports."
                    ]
                }
            },

            {
                id: 46,
                title: "ip Command",
                xp: 20,

                content: {
                    introduction:
                        "The ip command is a modern Linux utility for viewing and managing networking information.",

                    sections: [
                        {
                            title: "Viewing interfaces",
                            text:
                                "The ip command can display network interfaces and their addresses."
                        },
                        {
                            title: "Why it matters",
                            text:
                                "The command is useful for troubleshooting and network reconnaissance on systems you are authorized to inspect."
                        }
                    ],

                    keyPoints: [
                        "ip is a powerful networking command.",
                        "It can display interfaces and addresses."
                    ],

                    commands: [
                        "ip addr",
                        "ip link"
                    ]
                }
            },

            {
                id: 47,
                title: "ping",
                xp: 20,

                content: {
                    introduction:
                        "The ping command tests network reachability by sending ICMP echo requests.",

                    sections: [
                        {
                            title: "Basic usage",
                            text:
                                "ping can help determine whether a host responds to network connectivity tests."
                        },
                        {
                            title: "Troubleshooting",
                            text:
                                "Administrators can use ping to troubleshoot basic connectivity problems."
                        }
                    ],

                    keyPoints: [
                        "ping tests network reachability.",
                        "ping commonly uses ICMP.",
                        "A failed ping does not always mean a host is offline because ICMP may be blocked."
                    ],

                    commands: [
                        "ping 127.0.0.1"
                    ]
                }
            },

            {
                id: 48,
                title: "ss",
                xp: 30,

                content: {
                    introduction:
                        "The ss command displays socket and network connection information.",

                    sections: [
                        {
                            title: "Why ss is useful",
                            text:
                                "Security professionals can use ss to inspect listening ports and active network connections."
                        },
                        {
                            title: "Security investigation",
                            text:
                                "Unexpected listening ports or connections can be useful indicators during system analysis."
                        }
                    ],

                    keyPoints: [
                        "ss displays socket information.",
                        "ss can show listening ports.",
                        "ss can help investigate network connections."
                    ],

                    commands: [
                        "ss",
                        "ss -tuln"
                    ]
                }
            }
        ]
    },


    // =========================================================
    // MODULE 10 — LINUX IN CYBERSECURITY
    // =========================================================

    {
        id: 10,
        title: "Linux in Cybersecurity",
        description:
            "Discover how Linux is used in cybersecurity, servers, tools, and security labs.",
        icon: "🛡️",

        lessons: [

            {
                id: 49,
                title: "Why Cybersecurity Uses Linux",
                xp: 30,

                content: {
                    introduction:
                        "Linux is one of the most important operating-system environments for cybersecurity professionals.",

                    sections: [
                        {
                            title: "Security tools",
                            text:
                                "Linux provides access to a large ecosystem of networking, analysis, scripting, monitoring, and security tools."
                        },
                        {
                            title: "Automation",
                            text:
                                "Command-line tools and scripting allow repetitive security tasks to be automated."
                        },
                        {
                            title: "Servers",
                            text:
                                "Many security investigations involve Linux servers because Linux is widely deployed in infrastructure."
                        }
                    ],

                    keyPoints: [
                        "Linux is widely used in cybersecurity.",
                        "Linux provides powerful command-line tools.",
                        "Linux supports automation.",
                        "Linux is common on servers."
                    ]
                }
            },

            {
                id: 50,
                title: "Kali Linux & Security Tools",
                xp: 30,

                content: {
                    introduction:
                        "Kali Linux provides a specialized environment containing many cybersecurity tools.",

                    sections: [
                        {
                            title: "Tool categories",
                            text:
                                "Security tools can be used for network analysis, vulnerability assessment, web security testing, password auditing, digital forensics, and other authorized security tasks."
                        },
                        {
                            title: "Learning responsibly",
                            text:
                                "Security tools should be practiced in labs, CTF environments, or systems where you have explicit authorization."
                        }
                    ],

                    keyPoints: [
                        "Kali is designed for security work.",
                        "It contains many cybersecurity tools.",
                        "Practice only in authorized environments."
                    ]
                }
            },

            {
                id: 51,
                title: "Linux Servers",
                xp: 30,

                content: {
                    introduction:
                        "Linux is widely used to operate servers that provide services over networks.",

                    sections: [
                        {
                            title: "Common server roles",
                            text:
                                "Linux servers can host websites, databases, applications, file services, DNS, SSH, and many other services."
                        },
                        {
                            title: "Cybersecurity importance",
                            text:
                                "Security professionals need to understand how services run on servers, how they are configured, and how logs and permissions are managed."
                        }
                    ],

                    keyPoints: [
                        "Linux is widely used on servers.",
                        "Servers provide network services.",
                        "Server security requires proper configuration and monitoring."
                    ]
                }
            },

            {
                id: 52,
                title: "Logs & Security",
                xp: 30,

                content: {
                    introduction:
                        "Logs record events that occur on a Linux system and are extremely valuable during troubleshooting and security investigations.",

                    sections: [
                        {
                            title: "What logs contain",
                            text:
                                "Logs can contain information about authentication attempts, services, errors, system events, and application activity."
                        },
                        {
                            title: "Security investigations",
                            text:
                                "Investigators can search logs for suspicious login attempts, unexpected errors, unusual activity, or indicators of compromise."
                        },
                        {
                            title: "Useful commands",
                            text:
                                "Commands such as cat and grep can help inspect and search text-based logs."
                        }
                    ],

                    keyPoints: [
                        "Logs record system events.",
                        "Logs are important for security investigations.",
                        "grep can help search logs."
                    ],

                    commands: [
                        "cat log.txt",
                        "grep failed log.txt"
                    ]
                }
            },

            {
                id: 53,
                title: "Linux in the CyberVerse Labs",
                xp: 50,

                content: {
                    introduction:
                        "The CyberVerse Linux Guide prepares you to use Linux concepts inside practical cybersecurity labs.",

                    sections: [
                        {
                            title: "From theory to practice",
                            text:
                                "You have learned Linux fundamentals, navigation, commands, permissions, processes, services, networking, and security concepts. The next step is applying that knowledge."
                        },
                        {
                            title: "CyberVerse Terminal",
                            text:
                                "Use the CyberVerse Terminal to practice commands and become comfortable working from the command line."
                        },
                        {
                            title: "Cybersecurity labs",
                            text:
                                "Linux knowledge will help you understand security labs involving web security, networking, forensics, cryptography, reverse engineering, and other cybersecurity topics."
                        },
                        {
                            title: "Your Linux foundation",
                            text:
                                "You do not need to memorize every Linux command. The important skill is knowing how to explore the system, understand what commands do, read their output, and safely investigate problems."
                        }
                    ],

                    keyPoints: [
                        "Linux knowledge is a foundation for cybersecurity.",
                        "Practice commands inside the CyberVerse Terminal.",
                        "Use your Linux skills in practical labs.",
                        "Always understand a command before using it.",
                        "Congratulations on completing the Linux Guide."
                    ]
                }
            }
        ]
    }
];

export default linuxGuideConfig;