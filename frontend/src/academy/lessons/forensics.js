const forensicsLessons = [

{
id:1,
title:"Introduction to Digital Forensics",
xp:80,
content:"Learn the fundamentals of Digital Forensics.",
objectives:[
"Understand Digital Forensics",
"Know Investigation Process"
],
commands:[
"No Commands"
]
},

{
id:2,
title:"Evidence Collection",
xp:90,
content:"Learn how digital evidence is collected safely.",
objectives:[
"Chain of Custody",
"Evidence Handling"
],
commands:[
"dd"
]
},

{
id:3,
title:"Disk Imaging",
xp:100,
content:"Create forensic disk images.",
objectives:[
"Disk Imaging",
"Bit-by-Bit Copy"
],
commands:[
"dd if=/dev/sda of=image.dd"
]
},

{
id:4,
title:"File Systems",
xp:100,
content:"Understand NTFS, FAT32 and EXT4.",
objectives:[
"NTFS",
"EXT4",
"FAT32"
],
commands:[
"fsstat"
]
},

{
id:5,
title:"Recovering Deleted Files",
xp:110,
content:"Recover deleted files from storage media.",
objectives:[
"File Recovery"
],
commands:[
"photorec"
]
},

{
id:6,
title:"Memory Forensics",
xp:120,
content:"Analyze RAM dumps.",
objectives:[
"Memory Analysis"
],
commands:[
"volatility"
]
},

{
id:7,
title:"Log Analysis",
xp:110,
content:"Investigate logs to find attacker activity.",
objectives:[
"Windows Logs",
"Linux Logs"
],
commands:[
"journalctl"
]
},

{
id:8,
title:"Network Forensics",
xp:120,
content:"Analyze captured network traffic.",
objectives:[
"Packets",
"PCAP"
],
commands:[
"Wireshark"
]
},

{
id:9,
title:"Incident Response",
xp:130,
content:"Learn incident response process.",
objectives:[
"Containment",
"Recovery"
],
commands:[
"N/A"
]
},

{
id:10,
title:"Digital Investigation Workflow",
xp:150,
content:"Combine all forensic investigation techniques.",
objectives:[
"Reporting",
"Evidence",
"Analysis"
],
commands:[
"Autopsy"
]
}

];

export default forensicsLessons;