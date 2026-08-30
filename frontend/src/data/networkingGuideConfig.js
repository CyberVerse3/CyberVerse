// ============================================================
// CYBERVERSE — NETWORKING GUIDE CONFIG
// 10 Modules / 53 Lessons
// Every lesson has unique content
// ============================================================

const networkingGuideConfig = [

    // ========================================================
    // MODULE 1 — NETWORKING FUNDAMENTALS
    // ========================================================

    {
        id: 1,
        title: "Networking Fundamentals",
        description: "Learn the foundations of computer networking and how devices communicate.",
        lessons: [

            {
                id: 1,
                title: "What Is Computer Networking?",
                xp: 50,

                content: `
Computer networking is the process of connecting computers and other devices
so they can exchange information and share resources.

A network can be as small as two computers connected together or as large as
the global Internet.

Networking is extremely important in cybersecurity because almost every modern
attack, defense mechanism, and security investigation involves communication
between systems.

When two devices communicate, information is divided into smaller units called
packets. These packets travel through the network using different protocols.

A simple communication process can look like:

Computer A → Network → Router → Network → Computer B

Understanding this communication path is one of the first steps toward
understanding cybersecurity.
                `,

                objectives: [
                    "Understand what a computer network is",
                    "Understand why devices need networks",
                    "Understand the role of packets",
                    "Understand why networking matters in cybersecurity"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What is the primary purpose of a computer network?",
                        options: [
                            "To connect devices so they can communicate",
                            "To increase CPU speed",
                            "To replace operating systems",
                            "To encrypt every file automatically"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 2,
                title: "Network Types",
                xp: 50,

                content: `
Networks can be classified according to their size and geographical coverage.

A LAN (Local Area Network) usually connects devices within a limited area
such as a home, classroom, office, or laboratory.

A WAN (Wide Area Network) connects networks across large geographical areas.
The Internet is the most famous example of a WAN.

Other network types include:

PAN — Personal Area Network
MAN — Metropolitan Area Network
WLAN — Wireless Local Area Network

The important idea is that networks can exist at different scales.

In cybersecurity, understanding the network's scope helps analysts determine
where devices, users, and potential attackers are located.
                `,

                objectives: [
                    "Identify common network types",
                    "Understand the difference between LAN and WAN",
                    "Understand WLAN and PAN",
                    "Recognize network scope"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which network normally covers a home or small office?",
                        options: [
                            "LAN",
                            "WAN",
                            "MAN",
                            "GAN"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 3,
                title: "LAN and WAN",
                xp: 50,

                content: `
LAN and WAN are two of the most important network classifications.

A LAN provides connectivity over a relatively small physical area. Devices
inside a LAN can communicate through switches, wireless access points, and
routers.

A WAN connects separate LANs across longer distances.

For example:

Office LAN
     ↓
Router
     ↓
Internet / WAN
     ↓
Cloud Network

A cybersecurity analyst needs to understand whether traffic is staying inside
a local network or traveling across external networks.

This distinction becomes important when investigating firewalls, remote access,
VPN connections, and suspicious external communication.
                `,

                objectives: [
                    "Differentiate LAN from WAN",
                    "Understand how LANs connect to WANs",
                    "Identify common devices used in LANs",
                    "Understand why network boundaries matter"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What normally connects a local network to an external network?",
                        options: [
                            "Router",
                            "Keyboard",
                            "Monitor",
                            "CPU"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 4,
                title: "Network Topologies",
                xp: 50,

                content: `
A network topology describes how devices are arranged and connected.

Common topologies include:

Star:
All devices connect to a central device such as a switch.

Bus:
Devices share a common communication path.

Ring:
Devices are connected in a circular arrangement.

Mesh:
Devices have multiple connections to other devices.

Modern Ethernet networks commonly use a star-like topology because switches
provide a central point for connecting devices.

Topology affects reliability, performance, troubleshooting, and security.

For example, if a central switch fails in a traditional star network,
multiple devices may lose connectivity.
                `,

                objectives: [
                    "Understand network topology",
                    "Identify common topology types",
                    "Understand star topology",
                    "Understand how topology affects reliability"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which topology commonly uses a central switch?",
                        options: [
                            "Star",
                            "Ring",
                            "Bus",
                            "Linear"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 5,
                title: "Network Devices",
                xp: 50,

                content: `
Networks depend on specialized devices.

A switch connects devices inside a local network.

A router connects different networks and decides where packets should go.

An access point provides wireless network connectivity.

A firewall controls traffic according to security rules.

A modem can provide connectivity between a local network and an Internet
service provider.

Each device performs a different role.

For cybersecurity, identifying network devices is important because these
devices can enforce security policies, generate logs, or become targets for
attackers.
                `,

                objectives: [
                    "Identify common networking devices",
                    "Understand the role of switches",
                    "Understand the role of routers",
                    "Understand the security role of firewalls"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which device primarily connects different networks?",
                        options: [
                            "Router",
                            "Switch",
                            "Keyboard",
                            "Access cable"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 6,
                title: "Clients and Servers",
                xp: 50,

                content: `
A client is a device or application that requests a service.

A server provides a service.

For example, when you open a website, your browser acts as a client and the
web server provides the requested content.

The communication can be represented as:

Client → Request → Server
Client ← Response ← Server

Servers can provide many different services including:

Web
DNS
Email
File sharing
Authentication
Databases

Understanding client-server communication is essential when investigating
network traffic and security events.
                `,

                objectives: [
                    "Understand clients and servers",
                    "Understand request and response communication",
                    "Identify common server services",
                    "Relate client-server communication to cybersecurity"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which side normally provides a requested service?",
                        options: [
                            "Server",
                            "Client",
                            "Router only",
                            "Switch only"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 7,
                title: "Packets and Network Communication",
                xp: 50,

                content: `
Network communication does not normally send an entire message as one huge
block.

Data is divided into smaller units that can travel through the network.

These units are commonly called packets.

A packet can contain information such as:

Source information
Destination information
Protocol information
Payload
Error-checking information

Routers inspect addressing information to determine where packets should go.

Security tools can inspect packets and traffic patterns to identify suspicious
communication.

This is why packet-level knowledge becomes important later when studying
network monitoring and traffic analysis.
                `,

                objectives: [
                    "Understand network packets",
                    "Identify basic packet components",
                    "Understand how routers forward packets",
                    "Understand why packet analysis matters"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What is a packet?",
                        options: [
                            "A unit of network data",
                            "A CPU instruction",
                            "A type of hard drive",
                            "A programming language"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    },


    // ========================================================
    // MODULE 2 — OSI MODEL
    // ========================================================

    {
        id: 2,
        title: "OSI Model",
        description: "Understand the seven layers used to describe network communication.",
        lessons: [

            {
                id: 8,
                title: "Introduction to the OSI Model",
                xp: 50,

                content: `
The OSI model is a conceptual framework used to understand how network
communication works.

OSI stands for Open Systems Interconnection.

The model divides networking into seven layers:

7. Application
6. Presentation
5. Session
4. Transport
3. Network
2. Data Link
1. Physical

Each layer has a specific responsibility.

The OSI model is not simply a list to memorize. It gives cybersecurity
professionals a way to describe where a technology, protocol, or problem
exists within network communication.
                `,

                objectives: [
                    "Understand the purpose of the OSI model",
                    "Identify all seven layers",
                    "Understand why layered networking is useful"
                ],

                commands: [],

                quiz: [
                    {
                        question: "How many layers are in the OSI model?",
                        options: [
                            "7",
                            "4",
                            "5",
                            "10"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 9,
                title: "Physical Layer",
                xp: 50,

                content: `
The Physical Layer is Layer 1 of the OSI model.

It deals with the physical transmission of raw bits.

Examples include:

Ethernet cables
Fiber-optic cables
Radio signals
Electrical signals
Connectors

This layer does not understand IP addresses or application data.

From a security perspective, physical access matters because an attacker who
can physically access network infrastructure may be able to disconnect
equipment, connect unauthorized hardware, or intercept communication.
                `,

                objectives: [
                    "Understand Layer 1",
                    "Identify physical networking media",
                    "Understand the security importance of physical access"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which OSI layer handles physical transmission?",
                        options: [
                            "Physical",
                            "Network",
                            "Transport",
                            "Application"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 10,
                title: "Data Link Layer",
                xp: 50,

                content: `
The Data Link Layer is Layer 2.

It is responsible for communication between devices on the same local network
segment.

Ethernet operates primarily at this layer.

MAC addresses are important at Layer 2.

Switches use MAC address information to make forwarding decisions.

Security concepts associated with this layer include MAC spoofing, ARP-related
attacks, VLAN security, and switch configuration.

Understanding Layer 2 becomes especially useful when analyzing local network
traffic.
                `,

                objectives: [
                    "Understand Layer 2",
                    "Understand MAC addresses",
                    "Understand the role of switches",
                    "Recognize Layer 2 security concepts"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which address type is strongly associated with Layer 2?",
                        options: [
                            "MAC address",
                            "IP address",
                            "URL",
                            "Port number"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 11,
                title: "Network Layer",
                xp: 50,

                content: `
The Network Layer is Layer 3.

Its main responsibility is logical addressing and routing between networks.

IP addresses are central to this layer.

Routers operate primarily at Layer 3 and use routing information to determine
where packets should be forwarded.

IPv4 and IPv6 are important Layer 3 technologies.

When investigating a suspicious connection, analysts often start with source
and destination IP addresses to understand where traffic is coming from and
where it is going.
                `,

                objectives: [
                    "Understand Layer 3",
                    "Understand IP addressing",
                    "Understand the role of routers",
                    "Relate IP addresses to security investigations"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which layer is responsible for logical addressing and routing?",
                        options: [
                            "Network",
                            "Physical",
                            "Presentation",
                            "Session"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 12,
                title: "Transport Layer",
                xp: 50,

                content: `
The Transport Layer is Layer 4.

It provides communication between applications running on different systems.

Two major protocols are:

TCP
UDP

TCP provides reliable, connection-oriented communication.

UDP is connectionless and provides lower overhead.

Port numbers are also used at the Transport Layer to identify application
services.

For cybersecurity analysts, TCP connections, UDP traffic, source ports, and
destination ports are important pieces of network evidence.
                `,

                objectives: [
                    "Understand Layer 4",
                    "Differentiate TCP and UDP",
                    "Understand transport ports",
                    "Understand why Layer 4 matters in security"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which protocols operate at the Transport Layer?",
                        options: [
                            "TCP and UDP",
                            "DNS and HTTP",
                            "Ethernet and ARP",
                            "HTML and CSS"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 13,
                title: "Session, Presentation and Application Layers",
                xp: 50,

                content: `
The upper three OSI layers are:

Layer 5 — Session
Layer 6 — Presentation
Layer 7 — Application

The Session Layer manages communication sessions.

The Presentation Layer deals with data representation, encoding, and
transformation.

The Application Layer provides network services directly to applications.

Protocols and technologies such as HTTP, DNS, and SMTP are commonly discussed
at the Application Layer.

Security vulnerabilities can exist at any of these levels, especially when
applications improperly handle network input.
                `,

                objectives: [
                    "Understand Layers 5 through 7",
                    "Understand application-level networking",
                    "Identify common application protocols",
                    "Understand why upper layers matter to security"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which OSI layer is closest to the end-user application?",
                        options: [
                            "Application",
                            "Physical",
                            "Data Link",
                            "Network"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 14,
                title: "OSI Troubleshooting Approach",
                xp: 50,

                content: `
The OSI model can also be used as a troubleshooting framework.

For example, if a computer cannot communicate with another system, an analyst
can investigate from lower layers upward.

Physical:
Is the cable connected?

Data Link:
Is the interface connected to the network?

Network:
Does the system have a valid IP configuration?

Transport:
Is the destination service reachable?

Application:
Is the application responding correctly?

This layered approach prevents random troubleshooting and helps isolate the
location of a problem.
                `,

                objectives: [
                    "Use the OSI model for troubleshooting",
                    "Understand layered problem isolation",
                    "Connect networking problems to OSI layers"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which OSI layer should be investigated first for a disconnected cable?",
                        options: [
                            "Physical",
                            "Application",
                            "Transport",
                            "Session"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    },


    // ========================================================
    // MODULE 3 — TCP/IP MODEL
    // ========================================================

    {
        id: 3,
        title: "TCP/IP Model",
        description: "Learn the practical networking model used by modern networks.",
        lessons: [

            {
                id: 15,
                title: "TCP/IP Model Introduction",
                xp: 50,

                content: `
The TCP/IP model describes the protocols used by the Internet and modern
computer networks.

It is commonly divided into four layers:

Application
Transport
Internet
Network Access

Unlike the OSI model, TCP/IP is closely connected to real networking
technologies.

The model helps explain how an application message becomes network traffic
and eventually reaches another system.
                `,

                objectives: [
                    "Understand the TCP/IP model",
                    "Identify its four layers",
                    "Understand its relationship to real networks"
                ],

                commands: [],

                quiz: [
                    {
                        question: "How many major layers are commonly used in the TCP/IP model?",
                        options: [
                            "4",
                            "7",
                            "3",
                            "9"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 16,
                title: "Network Access Layer",
                xp: 50,

                content: `
The Network Access Layer handles communication over the local networking
technology.

Ethernet and Wi-Fi are examples.

This layer corresponds to responsibilities associated with the lower OSI
layers.

Network interfaces operate here and use hardware addresses such as MAC
addresses.

When a computer sends information onto a local network, the Network Access
Layer is responsible for preparing that information for transmission.
                `,

                objectives: [
                    "Understand the Network Access Layer",
                    "Identify Ethernet and Wi-Fi",
                    "Understand MAC addressing"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which technologies are associated with network access?",
                        options: [
                            "Ethernet and Wi-Fi",
                            "HTTP and DNS",
                            "TCP and UDP",
                            "SMTP only"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 17,
                title: "Internet Layer",
                xp: 50,

                content: `
The Internet Layer is responsible for logical addressing and routing.

Internet Protocol, or IP, is the main protocol here.

A source device creates packets containing source and destination IP
information.

Routers examine this information and forward packets toward their destination.

This layer is fundamental to understanding network reconnaissance, firewall
rules, routing, and traffic analysis.
                `,

                objectives: [
                    "Understand the Internet Layer",
                    "Understand IP packets",
                    "Understand routing"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which protocol is the primary protocol of the Internet Layer?",
                        options: [
                            "IP",
                            "HTTP",
                            "FTP",
                            "SMTP"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 18,
                title: "Transport Layer in TCP/IP",
                xp: 50,

                content: `
The Transport Layer provides communication between applications.

TCP and UDP are the two major protocols.

TCP establishes connections and provides reliable delivery.

UDP sends datagrams without establishing a traditional TCP connection.

Ports allow multiple applications to communicate through the same IP address.

For example:

192.168.1.10:22

The IP identifies the host while port 22 identifies the service endpoint.
                `,

                objectives: [
                    "Understand TCP/IP Transport Layer",
                    "Understand ports",
                    "Differentiate TCP and UDP"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What identifies a service endpoint together with an IP address?",
                        options: [
                            "Port number",
                            "MAC manufacturer",
                            "Subnet name",
                            "Hostname only"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 19,
                title: "Application Layer",
                xp: 50,

                content: `
The Application Layer contains protocols that applications directly use.

Examples include:

HTTP
HTTPS
DNS
SSH
FTP
SMTP

When a browser requests a webpage, HTTP or HTTPS is involved.

When a system resolves a domain name, DNS is involved.

When an administrator remotely manages a Linux server, SSH may be involved.

Cybersecurity analysts frequently inspect application-layer protocols because
they reveal what type of communication is taking place.
                `,

                objectives: [
                    "Understand the Application Layer",
                    "Identify common application protocols",
                    "Understand application-level traffic"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which protocol is commonly used to resolve domain names?",
                        options: [
                            "DNS",
                            "SSH",
                            "FTP",
                            "ARP"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 20,
                title: "OSI vs TCP/IP",
                xp: 50,

                content: `
OSI and TCP/IP are both models for understanding networking, but they serve
different purposes.

OSI has seven conceptual layers.

TCP/IP commonly uses four layers and is closely tied to real-world Internet
protocols.

A simplified relationship is:

OSI Physical + Data Link
        ↓
TCP/IP Network Access

OSI Network
        ↓
TCP/IP Internet

OSI Transport
        ↓
TCP/IP Transport

OSI Session + Presentation + Application
        ↓
TCP/IP Application

Knowing both models allows a security professional to communicate networking
concepts clearly.
                `,

                objectives: [
                    "Compare OSI and TCP/IP",
                    "Understand layer mapping",
                    "Know when each model is useful"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which model has seven layers?",
                        options: [
                            "OSI",
                            "TCP/IP",
                            "HTTP",
                            "DNS"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    },


    // ========================================================
    // MODULE 4 — IP ADDRESSING
    // ========================================================

    {
        id: 4,
        title: "IP Addressing",
        description: "Learn how devices are identified using IPv4 and IPv6.",
        lessons: [

            {
                id: 21,
                title: "IPv4 Addressing",
                xp: 50,

                content: `
IPv4 addresses identify devices using 32-bit addresses.

They are commonly written as four decimal numbers separated by dots.

Example:

192.168.1.10

Each section is called an octet.

IPv4 provides a huge number of addresses, but the available address space is
limited. This limitation contributed to the development and adoption of IPv6.

Understanding IPv4 is essential because it remains widely used in internal
networks and many Internet environments.
                `,

                objectives: [
                    "Understand IPv4",
                    "Recognize IPv4 notation",
                    "Understand the purpose of an IP address"
                ],

                commands: [],

                quiz: [
                    {
                        question: "How many bits are in an IPv4 address?",
                        options: [
                            "32",
                            "64",
                            "128",
                            "16"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 22,
                title: "IPv6 Addressing",
                xp: 50,

                content: `
IPv6 was created to provide a much larger address space than IPv4.

IPv6 uses 128-bit addresses and is written using hexadecimal notation.

An IPv6 address can look like:

2001:db8::1

IPv6 also includes improvements in addressing, autoconfiguration, and network
design.

Cybersecurity professionals must understand IPv6 because an organization may
use IPv4 and IPv6 simultaneously.

Ignoring IPv6 can create visibility and security gaps.
                `,

                objectives: [
                    "Understand IPv6",
                    "Understand why IPv6 was created",
                    "Recognize IPv6 notation",
                    "Understand dual-stack environments"
                ],

                commands: [],

                quiz: [
                    {
                        question: "How many bits are in an IPv6 address?",
                        options: [
                            "128",
                            "32",
                            "64",
                            "256"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 23,
                title: "Public and Private IP Addresses",
                xp: 50,

                content: `
Private IP addresses are used inside internal networks.

Common IPv4 private ranges include:

10.0.0.0/8
172.16.0.0/12
192.168.0.0/16

These addresses are not normally routed directly across the public Internet.

Public IP addresses identify systems or network interfaces that communicate
through the Internet.

Understanding the difference is important during incident investigations.

For example, an internal device may communicate with an external attacker
through a public IP while its actual private address remains hidden behind
NAT.
                `,

                objectives: [
                    "Understand public IP addresses",
                    "Understand private IP ranges",
                    "Recognize internal network addressing",
                    "Understand why NAT affects visibility"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which is a private IPv4 range?",
                        options: [
                            "192.168.0.0/16",
                            "8.8.8.0/24",
                            "1.1.1.0/24",
                            "100.100.100.0/24"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 24,
                title: "Static and Dynamic IP Addresses",
                xp: 50,

                content: `
An IP address can be configured manually or assigned automatically.

A static IP remains intentionally fixed unless an administrator changes it.

A dynamic IP is normally assigned automatically using DHCP.

Servers and network infrastructure often use predictable addressing because
other systems need to find them reliably.

User devices commonly use dynamic addressing.

Security teams need to understand address assignment because an IP observed in
a security log may represent different devices at different times.
                `,

                objectives: [
                    "Understand static addressing",
                    "Understand dynamic addressing",
                    "Understand DHCP-based assignment",
                    "Understand IP attribution challenges"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which protocol commonly assigns IP addresses automatically?",
                        options: [
                            "DHCP",
                            "DNS",
                            "HTTP",
                            "SSH"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 25,
                title: "Loopback and Localhost",
                xp: 50,

                content: `
The loopback interface allows a computer to communicate with itself.

In IPv4, the most commonly recognized loopback address is:

127.0.0.1

The hostname:

localhost

usually refers to the local system.

Loopback communication does not require traffic to leave the machine.

Developers use localhost to test services locally.

Security analysts should understand loopback traffic because malware and local
services may communicate internally without contacting another host.
                `,

                objectives: [
                    "Understand localhost",
                    "Understand 127.0.0.1",
                    "Understand loopback communication",
                    "Recognize local-only services"
                ],

                commands: [
                    "ping 127.0.0.1"
                ],

                quiz: [
                    {
                        question: "What does 127.0.0.1 normally represent?",
                        options: [
                            "The local system",
                            "The default gateway",
                            "A public DNS server",
                            "A broadcast address"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 26,
                title: "Subnet Masks",
                xp: 50,

                content: `
A subnet mask determines which portion of an IPv4 address represents the
network and which portion represents hosts.

For example:

192.168.1.10
255.255.255.0

The mask:

255.255.255.0

is commonly represented as:

/24

The subnet mask allows systems to determine whether another destination is
local or must be reached through a router.

Subnetting becomes extremely important when designing and securing networks.
                `,

                objectives: [
                    "Understand subnet masks",
                    "Understand network and host portions",
                    "Understand CIDR notation",
                    "Recognize /24 networks"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What CIDR notation corresponds to 255.255.255.0?",
                        options: [
                            "/24",
                            "/16",
                            "/8",
                            "/32"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 27,
                title: "Default Gateway",
                xp: 50,

                content: `
The default gateway is the device a host normally uses to reach destinations
outside its local network.

In many networks, the default gateway is the local router.

Example:

Computer:
192.168.1.20

Gateway:
192.168.1.1

If the computer wants to communicate with another device outside its local
subnet, it sends the traffic toward the gateway.

A wrong gateway configuration can prevent Internet access while local network
communication may continue to work.
                `,

                objectives: [
                    "Understand the default gateway",
                    "Understand routing outside the local subnet",
                    "Recognize gateway configuration problems"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What is the common role of a default gateway?",
                        options: [
                            "Reach networks outside the local network",
                            "Store passwords",
                            "Resolve domain names",
                            "Assign usernames"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    },


    // ========================================================
    // MODULE 5 — SUBNETTING
    // ========================================================

    {
        id: 5,
        title: "Subnetting",
        description: "Learn how networks are divided into smaller logical networks.",
        lessons: [

            {
                id: 28,
                title: "Subnetting Basics",
                xp: 50,

                content: `
Subnetting divides a larger IP network into smaller networks.

Organizations use subnetting to improve organization, performance, routing,
and security.

For example, instead of putting every device into one large network,
departments can use separate subnets.

Example:

Management
192.168.10.0/24

Development
192.168.20.0/24

Security
192.168.30.0/24

Network segmentation can reduce the impact of a compromised device.
                `,

                objectives: [
                    "Understand subnetting",
                    "Understand why organizations subnet networks",
                    "Understand the security benefit of segmentation"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Why is subnetting useful?",
                        options: [
                            "It divides networks into smaller logical networks",
                            "It increases CPU frequency",
                            "It removes IP addresses",
                            "It disables routing"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 29,
                title: "CIDR Notation",
                xp: 50,

                content: `
CIDR stands for Classless Inter-Domain Routing.

CIDR notation represents the number of network bits after an IP address.

Example:

192.168.1.0/24

The /24 means that the first 24 bits represent the network portion.

Other examples include:

/8
/16
/24
/30

The prefix length directly affects the number of addresses available in a
network.
                `,

                objectives: [
                    "Understand CIDR",
                    "Read prefix lengths",
                    "Understand network bits",
                    "Recognize common CIDR values"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What does /24 represent?",
                        options: [
                            "24 network bits",
                            "24 hosts exactly",
                            "24 routers",
                            "24 ports"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 30,
                title: "Network Address",
                xp: 50,

                content: `
The network address identifies the subnet itself.

For example:

192.168.1.0/24

The address:

192.168.1.0

represents the network.

It is not normally assigned to a regular host.

Understanding the network address is essential for calculating subnet ranges
and understanding routing tables.
                `,

                objectives: [
                    "Understand network addresses",
                    "Identify the network portion of an IPv4 subnet",
                    "Understand how network addresses are used"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What does 192.168.1.0/24 represent?",
                        options: [
                            "The network",
                            "A normal host",
                            "A DNS server",
                            "A port"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 31,
                title: "Broadcast Address",
                xp: 50,

                content: `
A broadcast address is used to communicate with all hosts within an IPv4
subnet.

For:

192.168.1.0/24

the broadcast address is:

192.168.1.255

The first address represents the network and the final address represents the
broadcast address.

Understanding broadcasts helps analysts recognize normal network behavior
and identify unusual broadcast activity.
                `,

                objectives: [
                    "Understand broadcast addresses",
                    "Identify a broadcast address in a /24 network",
                    "Understand broadcast communication"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What is the broadcast address of 192.168.1.0/24?",
                        options: [
                            "192.168.1.255",
                            "192.168.1.0",
                            "192.168.0.1",
                            "192.168.1.1"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 32,
                title: "Host Range",
                xp: 50,

                content: `
The host range contains addresses that can normally be assigned to devices.

For:

192.168.1.0/24

Network:
192.168.1.0

First usable host:
192.168.1.1

Last usable host:
192.168.1.254

Broadcast:
192.168.1.255

Therefore, the common usable host range is:

192.168.1.1 — 192.168.1.254

Calculating host ranges is an essential networking skill.
                `,

                objectives: [
                    "Calculate a basic host range",
                    "Identify network and broadcast addresses",
                    "Understand usable host addresses"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What is the last usable host in 192.168.1.0/24?",
                        options: [
                            "192.168.1.254",
                            "192.168.1.255",
                            "192.168.1.0",
                            "192.168.2.1"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    },


    // ========================================================
    // MODULE 6 — NETWORK PROTOCOLS
    // ========================================================

    {
        id: 6,
        title: "Networking Protocols",
        description: "Learn the protocols responsible for common network communication.",
        lessons: [

            {
                id: 33,
                title: "ARP",
                xp: 50,

                content: `
ARP stands for Address Resolution Protocol.

It allows a device to discover the MAC address associated with an IPv4 address
on the local network.

For example, a computer may know:

192.168.1.1

but needs the corresponding MAC address before sending Ethernet traffic.

ARP is a Layer 2/Layer 3 interaction commonly encountered on IPv4 networks.

ARP is also important in cybersecurity because attackers can abuse ARP
behavior to perform techniques such as ARP spoofing.
                `,

                objectives: [
                    "Understand ARP",
                    "Understand IP-to-MAC resolution",
                    "Understand why ARP matters to security"
                ],

                commands: [
                    "arp -a"
                ],

                quiz: [
                    {
                        question: "What does ARP help discover?",
                        options: [
                            "MAC address associated with an IPv4 address",
                            "A website password",
                            "A DNS domain",
                            "A TCP port"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 34,
                title: "ICMP",
                xp: 50,

                content: `
ICMP stands for Internet Control Message Protocol.

It is used for network diagnostics and error reporting.

The ping utility commonly uses ICMP Echo Request and Echo Reply messages.

ICMP can help determine whether a host is reachable and whether network
communication is working.

Security devices may restrict ICMP traffic, but blocking every ICMP message
can also interfere with legitimate network diagnostics and network behavior.
                `,

                objectives: [
                    "Understand ICMP",
                    "Understand ping",
                    "Understand ICMP diagnostic messages"
                ],

                commands: [
                    "ping 8.8.8.8"
                ],

                quiz: [
                    {
                        question: "Which command commonly uses ICMP Echo messages?",
                        options: [
                            "ping",
                            "cd",
                            "mkdir",
                            "chmod"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 35,
                title: "TCP",
                xp: 50,

                content: `
TCP stands for Transmission Control Protocol.

TCP provides reliable, ordered communication between applications.

Before data is exchanged, TCP normally establishes a connection using a
three-way handshake:

SYN
SYN-ACK
ACK

TCP also handles retransmission and sequencing.

Because TCP is connection-oriented, security analysts can use connection
information to understand which systems are communicating and which services
are accepting connections.
                `,

                objectives: [
                    "Understand TCP",
                    "Understand reliable communication",
                    "Understand the TCP three-way handshake"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which packet begins a normal TCP connection?",
                        options: [
                            "SYN",
                            "ACK",
                            "FIN",
                            "RST"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 36,
                title: "UDP",
                xp: 50,

                content: `
UDP stands for User Datagram Protocol.

Unlike TCP, UDP does not establish a traditional connection before sending
data.

UDP has lower overhead and is useful for applications where speed and
simplicity are important.

Examples include DNS queries and many real-time communication systems.

Because UDP does not use the same connection mechanism as TCP, analysts must
interpret UDP traffic differently when investigating network activity.
                `,

                objectives: [
                    "Understand UDP",
                    "Compare UDP with TCP",
                    "Understand why UDP is useful"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which protocol is connectionless?",
                        options: [
                            "UDP",
                            "TCP",
                            "SSH",
                            "HTTP"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 37,
                title: "DNS",
                xp: 50,

                content: `
DNS stands for Domain Name System.

DNS translates human-readable domain names into IP addresses.

For example:

example.com → IP address

Without DNS, users would have to remember numerical IP addresses for websites
and services.

DNS commonly uses UDP port 53, although TCP can also be used in specific
situations.

DNS is highly valuable during security investigations because suspicious
domain lookups can reveal malware activity, command-and-control infrastructure,
or phishing infrastructure.
                `,

                objectives: [
                    "Understand DNS",
                    "Understand domain-to-IP resolution",
                    "Understand DNS security relevance"
                ],

                commands: [
                    "nslookup example.com"
                ],

                quiz: [
                    {
                        question: "What is the primary purpose of DNS?",
                        options: [
                            "Resolve domain names to network addresses",
                            "Encrypt files",
                            "Assign MAC addresses",
                            "Manage CPU processes"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 38,
                title: "DHCP",
                xp: 50,

                content: `
DHCP stands for Dynamic Host Configuration Protocol.

DHCP can automatically provide network configuration information such as:

IP address
Subnet mask
Default gateway
DNS servers

A common DHCP process is remembered as DORA:

Discover
Offer
Request
Acknowledge

DHCP makes network configuration easier to manage.

From a security perspective, unauthorized DHCP servers can potentially provide
incorrect network configuration to clients.
                `,

                objectives: [
                    "Understand DHCP",
                    "Understand automatic network configuration",
                    "Understand the DORA process",
                    "Recognize rogue DHCP risks"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What does the D in DORA represent?",
                        options: [
                            "Discover",
                            "Domain",
                            "Data",
                            "Direct"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 39,
                title: "HTTP and HTTPS",
                xp: 50,

                content: `
HTTP is the protocol used to transfer web resources between clients and
servers.

HTTPS is HTTP protected by TLS encryption.

HTTP commonly uses port 80.

HTTPS commonly uses port 443.

When using HTTPS, network observers may still see metadata such as IP
addresses and connection timing, but the contents of the encrypted session
are protected from simple network interception.

HTTPS is therefore a fundamental part of modern web security.
                `,

                objectives: [
                    "Understand HTTP",
                    "Understand HTTPS",
                    "Know common web ports",
                    "Understand the purpose of TLS"
                ],

                commands: [
                    "curl https://example.com"
                ],

                quiz: [
                    {
                        question: "Which port is commonly associated with HTTPS?",
                        options: [
                            "443",
                            "80",
                            "21",
                            "22"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    },


    // ========================================================
    // MODULE 7 — PORTS AND SERVICES
    // ========================================================

    {
        id: 7,
        title: "Ports and Services",
        description: "Understand ports, services, and network attack surfaces.",
        lessons: [

            {
                id: 40,
                title: "What Is a Port?",
                xp: 50,

                content: `
A port is a logical communication endpoint associated with a network service.

Ports allow multiple services to operate on the same IP address.

For example:

192.168.1.10:22

The IP identifies the host.

Port 22 identifies the service endpoint.

TCP and UDP each have their own port spaces.

Ports range from 0 through 65535.

Understanding ports is fundamental to service identification and network
security.
                `,

                objectives: [
                    "Understand network ports",
                    "Understand IP plus port combinations",
                    "Understand TCP and UDP port spaces"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What does a port identify?",
                        options: [
                            "A logical service endpoint",
                            "A physical cable",
                            "A CPU core",
                            "A file"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 41,
                title: "Common TCP Ports",
                xp: 50,

                content: `
Several TCP ports are commonly associated with well-known services.

Examples:

22 — SSH
23 — Telnet
25 — SMTP
53 — DNS
80 — HTTP
110 — POP3
143 — IMAP
443 — HTTPS

Knowing common ports allows analysts to quickly interpret network logs.

However, port numbers are conventions rather than absolute guarantees.
Administrators can configure services to use different ports.
                `,

                objectives: [
                    "Recognize common TCP ports",
                    "Associate ports with services",
                    "Understand that port numbers are configurable"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which service commonly uses TCP port 22?",
                        options: [
                            "SSH",
                            "HTTP",
                            "DNS",
                            "FTP"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 42,
                title: "Common UDP Ports",
                xp: 50,

                content: `
UDP is also widely used by network services.

Common examples include:

53 — DNS
67/68 — DHCP
69 — TFTP
123 — NTP
161 — SNMP

UDP is often selected when low overhead or specific communication behavior
is more important than TCP-style reliability.

Security analysts should understand both TCP and UDP because suspicious
traffic can use either protocol.
                `,

                objectives: [
                    "Recognize common UDP ports",
                    "Understand UDP-based services",
                    "Understand why UDP traffic matters in security"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which protocol commonly uses UDP port 123?",
                        options: [
                            "NTP",
                            "SSH",
                            "HTTPS",
                            "SMTP"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 43,
                title: "Service Identification",
                xp: 50,

                content: `
A network service is a program that listens for incoming connections.

Examples include:

Web servers
SSH servers
DNS servers
Database servers

A listening port indicates that a service may be accepting network
connections.

On Linux, tools such as ss can display listening sockets.

Security teams monitor exposed services because every reachable service can
potentially become part of an attack surface.
                `,

                objectives: [
                    "Understand listening services",
                    "Understand service exposure",
                    "Learn how to inspect sockets on Linux"
                ],

                commands: [
                    "ss -tuln"
                ],

                quiz: [
                    {
                        question: "What does a listening port usually indicate?",
                        options: [
                            "A service is waiting for connections",
                            "The computer is powered off",
                            "The network cable is disconnected",
                            "The IP address is invalid"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 44,
                title: "Port Scanning Concepts",
                xp: 50,

                content: `
Port scanning is the process of checking network ports to determine which
ones are reachable or open.

Security professionals use authorized scanning to identify exposed services
and reduce attack surface.

A scanner can help answer questions such as:

Which hosts are alive?
Which ports are open?
Which services may be available?

Port scanning should always be performed only against systems you own or are
authorized to test.

Understanding scanning concepts helps defenders recognize reconnaissance
activity in their networks.
                `,

                objectives: [
                    "Understand port scanning",
                    "Understand the purpose of authorized scanning",
                    "Recognize reconnaissance behavior"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What is a primary purpose of port scanning?",
                        options: [
                            "Identify reachable services",
                            "Increase RAM",
                            "Change a password",
                            "Encrypt a hard drive"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 45,
                title: "Network Attack Surface",
                xp: 50,

                content: `
The network attack surface consists of the externally or internally reachable
services and interfaces that could potentially be targeted.

An organization may accidentally expose:

Old services
Unused ports
Administrative interfaces
Unpatched applications
Weakly configured network devices

Reducing attack surface is an important defensive strategy.

A security team should identify unnecessary services, restrict access, keep
software updated, and monitor exposed systems.
                `,

                objectives: [
                    "Understand network attack surface",
                    "Identify common sources of exposure",
                    "Understand attack-surface reduction"
                ],

                commands: [],

                quiz: [
                    {
                        question: "Which action reduces attack surface?",
                        options: [
                            "Disable unnecessary services",
                            "Expose more administrative ports",
                            "Ignore old software",
                            "Remove firewall rules"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    },


    // ========================================================
    // MODULE 8 — NETWORK SECURITY
    // ========================================================

    {
        id: 8,
        title: "Network Security",
        description: "Learn the core defensive technologies used to protect networks.",
        lessons: [

            {
                id: 46,
                title: "Firewalls",
                xp: 50,

                content: `
A firewall controls network traffic according to defined rules.

Rules can consider information such as:

Source IP
Destination IP
Port
Protocol
Network interface

Firewalls can block unwanted connections while allowing legitimate traffic.

Modern environments may use host-based firewalls as well as network
firewalls.

A properly configured firewall reduces unnecessary exposure and provides an
important defensive boundary.
                `,

                objectives: [
                    "Understand firewalls",
                    "Understand firewall rules",
                    "Understand network filtering"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What is a firewall primarily used for?",
                        options: [
                            "Control network traffic",
                            "Increase storage",
                            "Create user accounts",
                            "Compile programs"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 47,
                title: "NAT",
                xp: 50,

                content: `
NAT stands for Network Address Translation.

NAT allows private internal addresses to communicate through a public address.

For example:

192.168.1.20
        ↓
NAT Router
        ↓
Public IP

NAT is commonly used in home and enterprise networks.

NAT can reduce direct exposure of internal addresses, but it should not be
considered a replacement for a firewall or other security controls.
                `,

                objectives: [
                    "Understand NAT",
                    "Understand private-to-public translation",
                    "Understand NAT limitations"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What does NAT commonly translate?",
                        options: [
                            "Private and public IP addressing",
                            "Passwords into usernames",
                            "Files into folders",
                            "MAC addresses into CPU IDs"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 48,
                title: "VPN",
                xp: 50,

                content: `
A VPN, or Virtual Private Network, creates a protected communication path
over another network.

VPNs are commonly used for:

Remote employee access
Site-to-site connectivity
Protected communication over untrusted networks

A VPN can provide encryption and authentication depending on its technology
and configuration.

VPN security depends on strong authentication, secure protocols, correct
configuration, and updated software.
                `,

                objectives: [
                    "Understand VPNs",
                    "Understand remote access VPNs",
                    "Understand site-to-site VPNs",
                    "Understand VPN security requirements"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What is a common purpose of a VPN?",
                        options: [
                            "Create a protected network connection",
                            "Increase CPU speed",
                            "Replace DNS permanently",
                            "Remove all firewalls"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 49,
                title: "IDS and IPS",
                xp: 50,

                content: `
IDS stands for Intrusion Detection System.

IPS stands for Intrusion Prevention System.

An IDS monitors activity and generates alerts when suspicious behavior is
detected.

An IPS can actively block or prevent certain suspicious traffic.

These systems can use signatures, behavioral analysis, rules, and other
detection techniques.

Security teams use IDS and IPS technologies to detect and respond to network
threats.
                `,

                objectives: [
                    "Understand IDS",
                    "Understand IPS",
                    "Differentiate detection from prevention"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What is a key difference between IDS and IPS?",
                        options: [
                            "IPS can actively prevent or block traffic",
                            "IDS replaces routers",
                            "IPS only handles DNS",
                            "IDS cannot generate alerts"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 50,
                title: "Network Segmentation",
                xp: 50,

                content: `
Network segmentation divides a network into separate security or operational
zones.

For example:

User Network
     ↓
Firewall
     ↓
Server Network
     ↓
Database Network

Segmentation limits unnecessary communication between systems.

If one workstation becomes compromised, segmentation can make it harder for
the attacker to reach sensitive servers.

VLANs, firewalls, routing policies, and access controls can all contribute to
segmentation.
                `,

                objectives: [
                    "Understand network segmentation",
                    "Understand security zones",
                    "Understand how segmentation limits lateral movement"
                ],

                commands: [],

                quiz: [
                    {
                        question: "What is a major security benefit of segmentation?",
                        options: [
                            "Limit unnecessary communication and lateral movement",
                            "Make every device publicly accessible",
                            "Disable authentication",
                            "Remove network monitoring"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    },


    // ========================================================
    // MODULE 9 — LINUX NETWORKING
    // ========================================================

    {
        id: 9,
        title: "Linux Networking",
        description: "Use essential Linux networking commands to inspect and troubleshoot systems.",
        lessons: [

            {
                id: 51,
                title: "The ip Command",
                xp: 50,

                content: `
The ip command is one of the most important modern Linux networking tools.

It can display and modify:

Network interfaces
IP addresses
Routes
Neighbor information

For example:

ip addr

displays network interface and address information.

The command:

ip route

displays routing information.

Understanding these commands allows a security analyst to inspect a Linux
machine without relying on graphical tools.
                `,

                objectives: [
                    "Understand the ip command",
                    "View Linux network interfaces",
                    "View IP addresses",
                    "View routing information"
                ],

                commands: [
                    "ip addr",
                    "ip route"
                ],

                quiz: [
                    {
                        question: "Which command displays IP address information on Linux?",
                        options: [
                            "ip addr",
                            "ip password",
                            "network show",
                            "route-ip"
                        ],
                        answer: 0
                    }
                ]
            },

            {
                id: 52,
                title: "ping and Connectivity Testing",
                xp: 50,

                content: `
The ping command is a simple but powerful connectivity troubleshooting tool.

It sends ICMP Echo Requests and waits for Echo Replies.

Example:

ping 127.0.0.1

This tests the local TCP/IP stack.

You can also test another host:

ping 192.168.1.1

Ping results can provide information about reachability and latency.

However, a failed ping does not always mean a host is offline because
firewalls may block ICMP.
                `,

                objectives: [
                    "Use ping",
                    "Understand ICMP Echo",
                    "Interpret basic ping results",
                    "Understand limitations of ping"
                ],

                commands: [
                    "ping 127.0.0.1",
                    "ping 192.168.1.1"
                ],

                quiz: [
                    {
                        question: "What does ping commonly test?",
                        options: [
                            "Network reachability",
                            "Disk capacity",
                            "File permissions",
                            "CPU temperature"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    },


    // ========================================================
    // MODULE 10 — PRACTICAL NETWORKING & CYBERSECURITY
    // ========================================================

    {
        id: 10,
        title: "Practical Networking & Cybersecurity",
        description: "Apply networking knowledge to troubleshooting and security analysis.",
        lessons: [

            {
                id: 53,
                title: "Networking in Cybersecurity",
                xp: 100,

                content: `
Networking knowledge is one of the most important foundations of
cybersecurity.

Security professionals use networking concepts when performing:

Incident response
Threat hunting
Network monitoring
Digital forensics
Vulnerability assessment
Security architecture
Malware analysis

Consider a simple security investigation.

A workstation connects to an unfamiliar external IP.

The analyst may investigate:

Source IP
Destination IP
Destination port
Protocol
DNS requests
Connection time
Application behavior

Without networking knowledge, these events are difficult to understand.

Cybersecurity is therefore deeply connected to networking.

The more comfortable you become with IP addresses, protocols, ports,
routing, and traffic, the easier it becomes to understand real security
incidents.

This final lesson connects the entire Networking Guide together.
                `,

                objectives: [
                    "Understand the role of networking in cybersecurity",
                    "Connect IP addresses with security investigations",
                    "Understand how ports and protocols help identify activity",
                    "Recognize networking as a core cybersecurity skill"
                ],

                commands: [
                    "ip addr",
                    "ip route",
                    "ss -tuln",
                    "ping 127.0.0.1"
                ],

                quiz: [
                    {
                        question: "Why is networking knowledge important in cybersecurity?",
                        options: [
                            "Security incidents often involve network communication",
                            "Networking only matters to web developers",
                            "Cybersecurity does not use IP addresses",
                            "Networks are unrelated to security"
                        ],
                        answer: 0
                    }
                ]
            }
        ]
    }

];

export default networkingGuideConfig;