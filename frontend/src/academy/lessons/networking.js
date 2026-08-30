const networkingLessons = [
{
id:1,
title:"Introduction to Networking",
xp:60,
content:"Introduction...",
objectives:["What is a network"],
commands:["ipconfig"],

quiz:[
    {
        question:"What does LAN stand for?",
        options:[
            "Local Area Network",
            "Large Access Network",
            "Logical Area Network",
            "Long Area Node"
        ],
        answer:"Local Area Network"
    }
]

},

{
id:2,
title:"Network Types",
xp:60,
content:"...",
objectives:["LAN","WAN","MAN"],
commands:["ipconfig /all"],
quiz:[

    {
        question:"What does WAN stand for?",
        options:[
            "Wide Area Network",
            "Wireless Area Network",
            "Web Access Network",
            "World Area Node"
        ],
        answer:"Wide Area Network"
    },

    {
        question:"Which network covers a small geographical area like a building?",
        options:[
            "LAN",
            "WAN",
            "MAN",
            "Internet"
        ],
        answer:"LAN"
    },

    {
        question:"Which network connects cities or large regions?",
        options:[
            "WAN",
            "LAN",
            "PAN",
            "Bluetooth"
        ],
        answer:"WAN"
    }

]
},

{
id:3,
title:"OSI Model",
xp:60,
content:"...",
objectives:["Understand OSI"],
commands:["ping google.com"],
quiz:[

    {
        question:"How many layers does the OSI model have?",
        options:[
            "7",
            "5",
            "4",
            "10"
        ],
        answer:"7"
    },

    {
        question:"Which OSI layer is responsible for routing?",
        options:[
            "Network Layer",
            "Physical Layer",
            "Application Layer",
            "Data Link Layer"
        ],
        answer:"Network Layer"
    },

    {
        question:"Which layer handles user applications?",
        options:[
            "Application Layer",
            "Transport Layer",
            "Network Layer",
            "Physical Layer"
        ],
        answer:"Application Layer"
    }

]
},

{
id:4,
title:"TCP/IP Model",
xp:60,
content:"...",
objectives:["Understand TCP/IP"],
commands:["tracert google.com"],
quiz:[

    {
        question:"What does TCP provide?",
        options:[
            "Reliable communication",
            "Fast graphics",
            "File storage",
            "Password encryption"
        ],
        answer:"Reliable communication"
    },

    {
        question:"Which protocol is connectionless?",
        options:[
            "UDP",
            "TCP",
            "HTTPS",
            "SSH"
        ],
        answer:"UDP"
    },

    {
        question:"TCP/IP is mainly used for?",
        options:[
            "Network communication",
            "Image editing",
            "Operating systems",
            "Database design"
        ],
        answer:"Network communication"
    }

]
},

{
id:5,
title:"IP Addressing",
xp:60,
content:"...",
objectives:["IPv4","IPv6"],
commands:["ipconfig"],
quiz:[

    {
        question:"What is an IP address used for?",
        options:[
            "Identify a device on a network",
            "Create passwords",
            "Edit files",
            "Run programs"
        ],
        answer:"Identify a device on a network"
    },

    {
        question:"Which IP version uses 32-bit addresses?",
        options:[
            "IPv4",
            "IPv6",
            "IPv8",
            "MAC"
        ],
        answer:"IPv4"
    },

    {
        question:"Which address identifies a network interface physically?",
        options:[
            "MAC Address",
            "IP Address",
            "DNS",
            "Port"
        ],
        answer:"MAC Address"
    }

]
},

{
id:6,
title:"Subnetting",
xp:70,
content:"...",
objectives:["Subnet Masks"],
commands:["ipcalc"],
quiz:[

    {
        question:"What is a subnet mask used for?",
        options:[
            "Separate network and host portions",
            "Encrypt traffic",
            "Create usernames",
            "Install software"
        ],
        answer:"Separate network and host portions"
    },

    {
        question:"Which device uses subnet information to route traffic?",
        options:[
            "Router",
            "Keyboard",
            "Monitor",
            "Printer"
        ],
        answer:"Router"
    },

    {
        question:"Subnetting helps to?",
        options:[
            "Divide networks into smaller networks",
            "Increase screen resolution",
            "Delete files",
            "Create websites"
        ],
        answer:"Divide networks into smaller networks"
    }

]
},

{
id:7,
title:"DNS",
xp:60,
content:"...",
objectives:["DNS Resolution"],
commands:["nslookup google.com"],
quiz:[

    {
        question:"What does DNS stand for?",
        options:[
            "Domain Name System",
            "Data Network Service",
            "Digital Name Server",
            "Domain Network Security"
        ],
        answer:"Domain Name System"
    },

    {
        question:"What does DNS translate?",
        options:[
            "Domain names to IP addresses",
            "Passwords to usernames",
            "Files to folders",
            "Images to text"
        ],
        answer:"Domain names to IP addresses"
    },

    {
        question:"Which command checks DNS information?",
        options:[
            "nslookup",
            "mkdir",
            "ping",
            "cd"
        ],
        answer:"nslookup"
    }

]
},

{
id:8,
title:"DHCP",
xp:60,
content:"...",
objectives:["DHCP"],
commands:["ipconfig /renew"],
quiz:[

    {
        question:"What does DHCP provide to devices?",
        options:[
            "Automatic IP addresses",
            "Website files",
            "Encryption keys",
            "User accounts"
        ],
        answer:"Automatic IP addresses"
    },

    {
        question:"What does DHCP stand for?",
        options:[
            "Dynamic Host Configuration Protocol",
            "Digital Host Control Program",
            "Domain Host Connection Protocol",
            "Data Hardware Configuration Process"
        ],
        answer:"Dynamic Host Configuration Protocol"
    },

    {
        question:"Which device usually provides DHCP service in a home network?",
        options:[
            "Router",
            "Monitor",
            "Keyboard",
            "Printer"
        ],
        answer:"Router"
    }

]
},

{
id:9,
title:"Routing",
xp:70,
content:"...",
objectives:["Routing"],
commands:["route print"],
quiz:[

    {
        question:"What is routing?",
        options:[
            "Sending data between different networks",
            "Creating passwords",
            "Editing documents",
            "Installing applications"
        ],
        answer:"Sending data between different networks"
    },

    {
        question:"Which device performs routing?",
        options:[
            "Router",
            "Switch",
            "Keyboard",
            "Scanner"
        ],
        answer:"Router"
    },

    {
        question:"Which command displays the routing table in Windows?",
        options:[
            "route print",
            "ipconfig",
            "mkdir",
            "ping"
        ],
        answer:"route print"
    }

]
},

{
id:10,
title:"Switches & Routers",
xp:70,
content:"...",
objectives:["Network Devices"],
commands:["arp -a"],
quiz:[

    {
        question:"What does a network switch connect?",
        options:[
            "Devices inside a local network",
            "Only websites",
            "Passwords",
            "Operating systems"
        ],
        answer:"Devices inside a local network"
    },

    {
        question:"Which device connects different networks?",
        options:[
            "Router",
            "Switch",
            "Hub",
            "Cable"
        ],
        answer:"Router"
    },

    {
        question:"Which command shows ARP table entries?",
        options:[
            "arp -a",
            "ping",
            "tracert",
            "nslookup"
        ],
        answer:"arp -a"
    }

]
}

];

export default networkingLessons;