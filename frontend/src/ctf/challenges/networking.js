`javascript id="q3v9nk"`
const challenges = [
    {
        id: 1,
        title: "Packet Detective",
        difficulty: "Easy",
        points: 100,
        xp: 50,
        hint: "Start by examining the captured network packets.",
        description:
            "A packet capture contains a suspicious communication. Analyze the traffic and recover the hidden flag.",
        flag: "CV{packet_detective}",
    },

    {
        id: 2,
        title: "HTTP Headers",
        difficulty: "Easy",
        points: 100,
        xp: 50,
        hint: "HTTP requests and responses contain useful headers.",
        description:
            "Inspect the HTTP headers in the captured traffic and find the hidden flag.",
        flag: "CV{http_headers}",
    },

    {
        id: 3,
        title: "DNS Investigation",
        difficulty: "Easy",
        points: 120,
        xp: 60,
        hint: "DNS translates domain names into IP addresses.",
        description:
            "Analyze suspicious DNS queries and identify the domain containing the hidden flag.",
        flag: "CV{dns_investigator}",
    },

    {
        id: 4,
        title: "TCP Analysis",
        difficulty: "Medium",
        points: 150,
        xp: 70,
        hint: "Follow the TCP conversation between the hosts.",
        description:
            "Analyze a TCP communication and reconstruct the suspicious conversation to discover the flag.",
        flag: "CV{tcp_analysis}",
    },

    {
        id: 5,
        title: "ICMP Traffic",
        difficulty: "Medium",
        points: 150,
        xp: 70,
        hint: "ICMP is commonly associated with ping traffic.",
        description:
            "Investigate unusual ICMP packets and recover the hidden message.",
        flag: "CV{icmp_hunter}",
    },

    {
        id: 6,
        title: "FTP Investigation",
        difficulty: "Medium",
        points: 180,
        xp: 80,
        hint: "FTP traffic can reveal transferred files and credentials.",
        description:
            "Analyze an FTP session and identify the suspicious file containing the flag.",
        flag: "CV{ftp_investigator}",
    },

    {
        id: 7,
        title: "Suspicious Port",
        difficulty: "Medium",
        points: 200,
        xp: 90,
        hint: "Unexpected open ports can reveal suspicious services.",
        description:
            "Analyze a network scan and identify the suspicious service hiding the flag.",
        flag: "CV{port_scanner}",
    },

    {
        id: 8,
        title: "Encrypted Traffic",
        difficulty: "Hard",
        points: 220,
        xp: 100,
        hint: "Even encrypted traffic can reveal useful metadata.",
        description:
            "Analyze encrypted network traffic and use the available clues to recover the hidden flag.",
        flag: "CV{encrypted_traffic}",
    },

    {
        id: 9,
        title: "Network Intrusion",
        difficulty: "Hard",
        points: 250,
        xp: 120,
        hint: "Look for unusual connections and repeated suspicious activity.",
        description:
            "Investigate a possible network intrusion and identify the attacker's hidden flag.",
        flag: "CV{network_intrusion}",
    },

    {
        id: 10,
        title: "Network Master",
        difficulty: "Hard",
        points: 300,
        xp: 150,
        hint: "Combine packet analysis, protocols, ports, and traffic investigation.",
        description:
            "This is the final Networking challenge. Analyze the network evidence and recover the final flag.",
        flag: "CV{network_master}",
    },
];

export default challenges;

