const cryptographyLessons = [

{
id:1,
title:"Introduction to Cryptography",
xp:80,
content:"Learn the basics of cryptography and why encryption is essential in cybersecurity.",
objectives:[
"Understand Cryptography",
"Know the CIA Triad"
],
commands:[
"No Commands"
]
},

{
id:2,
title:"Encoding vs Encryption vs Hashing",
xp:80,
content:"Learn the difference between Encoding, Encryption and Hashing.",
objectives:[
"Encoding",
"Encryption",
"Hashing"
],
commands:[
"Base64",
"SHA256"
]
},

{
id:3,
title:"Symmetric Encryption",
xp:90,
content:"Understand symmetric encryption algorithms.",
objectives:[
"AES",
"DES",
"3DES"
],
commands:[
"openssl enc"
]
},

{
id:4,
title:"Asymmetric Encryption",
xp:90,
content:"Learn how public and private keys work.",
objectives:[
"RSA",
"Public Key",
"Private Key"
],
commands:[
"ssh-keygen"
]
},

{
id:5,
title:"Hash Functions",
xp:100,
content:"Understand hashing algorithms.",
objectives:[
"MD5",
"SHA1",
"SHA256"
],
commands:[
"sha256sum file.txt"
]
},

{
id:6,
title:"Digital Signatures",
xp:100,
content:"Learn how digital signatures verify authenticity.",
objectives:[
"Integrity",
"Authentication"
],
commands:[
"gpg --sign"
]
},

{
id:7,
title:"Certificates & PKI",
xp:110,
content:"Understand SSL/TLS Certificates and PKI.",
objectives:[
"Certificates",
"CA",
"PKI"
],
commands:[
"openssl x509"
]
},

{
id:8,
title:"TLS & HTTPS",
xp:110,
content:"Understand secure communication.",
objectives:[
"TLS",
"HTTPS"
],
commands:[
"openssl s_client"
]
},

{
id:9,
title:"Password Security",
xp:120,
content:"Learn password hashing and salting.",
objectives:[
"bcrypt",
"Argon2"
],
commands:[
"hashcat"
]
},

{
id:10,
title:"Cryptography in Cybersecurity",
xp:150,
content:"Apply cryptography in penetration testing and security.",
objectives:[
"Encryption",
"Authentication",
"Secure Communication"
],
commands:[
"gpg"
]
}

];

export default cryptographyLessons;