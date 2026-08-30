const webLessons = [

{
id:1,
title:"Introduction to Web Security",
xp:80,
content:"Introduction to Web Security...",
objectives:["Understand Web Security"],
commands:["Open Browser Developer Tools"]
},

{
id:2,
title:"HTTP & HTTPS",
xp:80,
content:"HTTP Protocol...",
objectives:["Difference between HTTP & HTTPS"],
commands:["curl https://google.com"]
},

{
id:3,
title:"Cookies & Sessions",
xp:80,
content:"Cookies...",
objectives:["Understand Cookies"],
commands:["Inspect Browser Cookies"]
},

{
id:4,
title:"Same Origin Policy",
xp:90,
content:"Same Origin Policy...",
objectives:["Understand SOP"],
commands:["Browser DevTools"]
},

{
id:5,
title:"Cross Site Scripting (XSS)",
xp:120,
content:"XSS...",
objectives:["Stored XSS","Reflected XSS"],
commands:["alert('XSS')"]
},

{
id:6,
title:"SQL Injection",
xp:120,
content:"SQL Injection...",
objectives:["Basic SQLi"],
commands:["' OR 1=1 --"]
},

{
id:7,
title:"CSRF",
xp:90,
content:"Cross Site Request Forgery...",
objectives:["Understand CSRF"],
commands:["Token Validation"]
},

{
id:8,
title:"File Upload Vulnerabilities",
xp:100,
content:"File Upload...",
objectives:["Dangerous Uploads"],
commands:["shell.php"]
},

{
id:9,
title:"Authentication & Authorization",
xp:100,
content:"Authentication...",
objectives:["Login Security"],
commands:["JWT"]
},

{
id:10,
title:"OWASP Top 10",
xp:150,
content:"OWASP...",
objectives:["Top 10 Risks"],
commands:["OWASP Cheat Sheet"]
}

];

export default webLessons;