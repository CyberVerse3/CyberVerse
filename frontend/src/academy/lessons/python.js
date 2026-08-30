const pythonLessons = [

{
id:1,
title:"Introduction to Python",
xp:80,
content:"Learn what Python is and why it is widely used in cybersecurity and automation.",
objectives:[
"Understand Python",
"Install Python",
"Run your first program"
],
commands:[
'print("Hello CyberVerse")'
]
},

{
id:2,
title:"Variables & Data Types",
xp:80,
content:"Learn variables, integers, strings, floats and booleans.",
objectives:[
"Create variables",
"Understand data types"
],
commands:[
'username = "admin"',
'age = 20'
]
},

{
id:3,
title:"Conditions",
xp:90,
content:"Learn how decision making works using if, elif and else.",
objectives:[
"Use if statements",
"Compare values"
],
commands:[
'if x == 10:',
'    print("Access Granted")'
]
},

{
id:4,
title:"Loops",
xp:90,
content:"Learn for loops and while loops.",
objectives:[
"Repeat code",
"Iterate over data"
],
commands:[
'for i in range(5):',
'    print(i)'
]
},

{
id:5,
title:"Functions",
xp:100,
content:"Create reusable code using functions.",
objectives:[
"Define functions",
"Pass parameters"
],
commands:[
'def hello(name):',
'    print(name)'
]
},

{
id:6,
title:"Lists & Dictionaries",
xp:100,
content:"Store multiple values efficiently.",
objectives:[
"Use Lists",
"Use Dictionaries"
],
commands:[
'users=["root","admin"]',
'user={"name":"Ali"}'
]
},

{
id:7,
title:"Working with Files",
xp:110,
content:"Read and write files using Python.",
objectives:[
"Open files",
"Read files",
"Write files"
],
commands:[
'file=open("data.txt","r")'
]
},

{
id:8,
title:"Modules",
xp:110,
content:"Import external Python modules.",
objectives:[
"Import modules",
"Use pip"
],
commands:[
'import os',
'import socket'
]
},

{
id:9,
title:"Python for Networking",
xp:120,
content:"Use Python for network automation.",
objectives:[
"Use socket module",
"Understand networking scripts"
],
commands:[
'import socket'
]
},

{
id:10,
title:"Python for Security Automation",
xp:150,
content:"Automate security tasks using Python.",
objectives:[
"Automation",
"Security scripting"
],
commands:[
'print("Scanning...")'
]
}

];

export default pythonLessons;