const networkingGuideConfig = [

    // =========================================================
    // MODULE 1 — NETWORKING FUNDAMENTALS
    // =========================================================

    {
        id: 1,
        title: "Networking Fundamentals",
        description:
            "Learn the basic concepts of computer networks and how devices communicate.",
        icon: "🌐",

        lessons: [

            {
                id: 1,
                title: "What is a Computer Network?",
                xp: 20
            },

            {
                id: 2,
                title: "Why Networks Are Important",
                xp: 20
            },

            {
                id: 3,
                title: "Network Types: LAN, WAN and MAN",
                xp: 20
            },

            {
                id: 4,
                title: "Clients and Servers",
                xp: 20
            },

            {
                id: 5,
                title: "How Devices Communicate",
                xp: 30
            }
        ]
    },


    // =========================================================
    // MODULE 2 — OSI MODEL
    // =========================================================

    {
        id: 2,
        title: "OSI Model",
        description:
            "Understand the seven layers of the OSI model and how network communication is organized.",
        icon: "🏗️",

        lessons: [

            {
                id: 6,
                title: "What is the OSI Model?",
                xp: 20
            },

            {
                id: 7,
                title: "Layer 1: Physical Layer",
                xp: 20
            },

            {
                id: 8,
                title: "Layer 2: Data Link Layer",
                xp: 20
            },

            {
                id: 9,
                title: "Layer 3: Network Layer",
                xp: 20
            },

            {
                id: 10,
                title: "Layer 4: Transport Layer",
                xp: 20
            },

            {
                id: 11,
                title: "Layers 5–7: Session, Presentation and Application",
                xp: 30
            }
        ]
    },


    // =========================================================
    // MODULE 3 — TCP/IP MODEL
    // =========================================================

    {
        id: 3,
        title: "TCP/IP Model",
        description:
            "Learn the practical networking model used by modern Internet communication.",
        icon: "🔗",

        lessons: [

            {
                id: 12,
                title: "What is the TCP/IP Model?",
                xp: 20
            },

            {
                id: 13,
                title: "Network Access Layer",
                xp: 20
            },

            {
                id: 14,
                title: "Internet Layer",
                xp: 20
            },

            {
                id: 15,
                title: "Transport Layer",
                xp: 20
            },

            {
                id: 16,
                title: "Application Layer",
                xp: 20
            },

            {
                id: 17,
                title: "OSI vs TCP/IP",
                xp: 30
            }
        ]
    },


    // =========================================================
    // MODULE 4 — IP ADDRESSING
    // =========================================================

    {
        id: 4,
        title: "IP Addressing",
        description:
            "Understand IPv4, IPv6, private addresses, public addresses, and how devices are identified.",
        icon: "📍",

        lessons: [

            {
                id: 18,
                title: "What is an IP Address?",
                xp: 20
            },

            {
                id: 19,
                title: "IPv4 Addressing",
                xp: 20
            },

            {
                id: 20,
                title: "IPv6 Addressing",
                xp: 20
            },

            {
                id: 21,
                title: "Public vs Private IP Addresses",
                xp: 20
            },

            {
                id: 22,
                title: "Loopback and Special Addresses",
                xp: 20
            },

            {
                id: 23,
                title: "MAC Addresses",
                xp: 30
            }
        ]
    },


    // =========================================================
    // MODULE 5 — SUBNETTING
    // =========================================================

    {
        id: 5,
        title: "Subnetting",
        description:
            "Learn subnet masks, CIDR notation, network ranges, and the fundamentals of subnetting.",
        icon: "🧩",

        lessons: [

            {
                id: 24,
                title: "What is a Subnet?",
                xp: 20
            },

            {
                id: 25,
                title: "Subnet Masks",
                xp: 20
            },

            {
                id: 26,
                title: "CIDR Notation",
                xp: 20
            },

            {
                id: 27,
                title: "Network and Broadcast Addresses",
                xp: 20
            },

            {
                id: 28,
                title: "Calculating Hosts",
                xp: 20
            },

            {
                id: 29,
                title: "Basic Subnetting Practice",
                xp: 30
            }
        ]
    },


    // =========================================================
    // MODULE 6 — NETWORK PROTOCOLS
    // =========================================================

    {
        id: 6,
        title: "Network Protocols",
        description:
            "Explore the protocols that allow computers and services to communicate across networks.",
        icon: "📡",

        lessons: [

            {
                id: 30,
                title: "What is a Network Protocol?",
                xp: 20
            },

            {
                id: 31,
                title: "HTTP and HTTPS",
                xp: 20
            },

            {
                id: 32,
                title: "DNS",
                xp: 20
            },

            {
                id: 33,
                title: "DHCP",
                xp: 20
            },

            {
                id: 34,
                title: "FTP and SFTP",
                xp: 20
            },

            {
                id: 35,
                title: "SSH",
                xp: 30
            }
        ]
    },


    // =========================================================
    // MODULE 7 — PORTS & SERVICES
    // =========================================================

    {
        id: 7,
        title: "Ports & Services",
        description:
            "Understand ports, services, sockets, and how applications communicate over networks.",
        icon: "🚪",

        lessons: [

            {
                id: 36,
                title: "What is a Network Port?",
                xp: 20
            },

            {
                id: 37,
                title: "TCP Ports",
                xp: 20
            },

            {
                id: 38,
                title: "UDP Ports",
                xp: 20
            },

            {
                id: 39,
                title: "Common Network Ports",
                xp: 20
            },

            {
                id: 40,
                title: "Sockets and Connections",
                xp: 20
            },

            {
                id: 41,
                title: "Services and Listening Ports",
                xp: 30
            }
        ]
    },


    // =========================================================
    // MODULE 8 — NETWORK DEVICES
    // =========================================================

    {
        id: 8,
        title: "Network Devices",
        description:
            "Learn how routers, switches, firewalls, access points, and other devices build networks.",
        icon: "🖧",

        lessons: [

            {
                id: 42,
                title: "Network Interface Cards",
                xp: 20
            },

            {
                id: 43,
                title: "Switches",
                xp: 20
            },

            {
                id: 44,
                title: "Routers",
                xp: 20
            },

            {
                id: 45,
                title: "Firewalls",
                xp: 20
            },

            {
                id: 46,
                title: "Wireless Access Points",
                xp: 20
            },

            {
                id: 47,
                title: "How Network Devices Work Together",
                xp: 30
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
            "Learn essential Linux networking commands and how to inspect network activity.",
        icon: "🐧",

        lessons: [

            {
                id: 48,
                title: "Linux Network Interfaces",
                xp: 20
            },

            {
                id: 49,
                title: "The ip Command",
                xp: 20
            },

            {
                id: 50,
                title: "ping",
                xp: 20
            },

            {
                id: 51,
                title: "traceroute",
                xp: 20
            },

            {
                id: 52,
                title: "ss and Network Connections",
                xp: 20
            },

            {
                id: 53,
                title: "DNS Tools in Linux",
                xp: 30
            }
        ]
    },


    // =========================================================
    // MODULE 10 — NETWORKING IN CYBERSECURITY
    // =========================================================

    {
        id: 10,
        title: "Networking in Cybersecurity",
        description:
            "Discover how networking knowledge is used for security analysis, monitoring, attacks, and defense.",
        icon: "🛡️",

        lessons: [

            {
                id: 54,
                title: "Why Networking Matters in Cybersecurity",
                xp: 30
            },

            {
                id: 55,
                title: "Packets and Network Traffic",
                xp: 30
            },

            {
                id: 56,
                title: "Network Scanning",
                xp: 30
            },

            {
                id: 57,
                title: "Packet Analysis",
                xp: 30
            },

            {
                id: 58,
                title: "Common Network Attacks",
                xp: 30
            },

            {
                id: 59,
                title: "Network Defense and Monitoring",
                xp: 30
            },

            {
                id: 60,
                title: "Networking in the CyberVerse Labs",
                xp: 50
            }
        ]
    }

];

export default networkingGuideConfig;