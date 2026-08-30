const reverseLessons = [

{
id:1,
title:"Introduction to Reverse Engineering",
xp:80,
content:"Learn what Reverse Engineering is and why it is important in Cybersecurity.",
objectives:[
"Understand Reverse Engineering",
"Know its applications"
],
commands:[
"No Commands"
]
},

{
id:2,
title:"Machine Code Basics",
xp:90,
content:"Learn how CPUs execute machine instructions.",
objectives:[
"Machine Code",
"CPU Instructions"
],
commands:[
"objdump"
]
},

{
id:3,
title:"Assembly Language",
xp:100,
content:"Understand Assembly language fundamentals.",
objectives:[
"Registers",
"Instructions",
"Memory"
],
commands:[
"nasm"
]
},

{
id:4,
title:"Executable File Formats",
xp:100,
content:"Learn ELF and PE executable formats.",
objectives:[
"ELF",
"PE"
],
commands:[
"readelf"
]
},

{
id:5,
title:"Static Analysis",
xp:110,
content:"Analyze binaries without executing them.",
objectives:[
"Strings",
"Headers",
"Functions"
],
commands:[
"strings"
]
},

{
id:6,
title:"Dynamic Analysis",
xp:110,
content:"Analyze binaries while running.",
objectives:[
"Debugger",
"Execution Flow"
],
commands:[
"gdb"
]
},

{
id:7,
title:"Using Ghidra",
xp:120,
content:"Introduction to Ghidra reverse engineering tool.",
objectives:[
"Decompiler",
"Functions"
],
commands:[
"Ghidra"
]
},

{
id:8,
title:"Using IDA Free",
xp:120,
content:"Learn the basics of IDA Free.",
objectives:[
"Disassembly",
"Cross References"
],
commands:[
"IDA"
]
},

{
id:9,
title:"Malware Analysis Basics",
xp:130,
content:"Understand safe malware analysis techniques.",
objectives:[
"Sandbox",
"Indicators"
],
commands:[
"VirusTotal"
]
},

{
id:10,
title:"Reverse Engineering Workflow",
xp:150,
content:"Combine everything into a professional workflow.",
objectives:[
"Static Analysis",
"Dynamic Analysis",
"Reporting"
],
commands:[
"Ghidra",
"GDB"
]
}

];

export default reverseLessons;