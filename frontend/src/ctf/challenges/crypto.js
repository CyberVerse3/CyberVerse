`javascript`
const challenges = [
    {
        id: 1,
        title: "Caesar's Secret",
        difficulty: "Easy",
        points: 100,
        xp: 50,
        hint: "The message was shifted by a small number of letters.",
        description:
            "A secret message was encrypted using the Caesar cipher. Decode the message and recover the flag.",
        flag: "CV{caesar_beginner}",
    },

    {
        id: 2,
        title: "Base64 Mystery",
        difficulty: "Easy",
        points: 100,
        xp: 50,
        hint: "It contains letters, numbers, +, / and sometimes =.",
        description:
            "A suspicious string has been encoded using Base64. Decode it to reveal the hidden flag.",
        flag: "CV{base64_decoded}",
    },

    {
        id: 3,
        title: "Hexadecimal Message",
        difficulty: "Easy",
        points: 120,
        xp: 60,
        hint: "Hexadecimal uses characters from 0-9 and A-F.",
        description:
            "A hexadecimal string contains a hidden message. Convert it back to text and find the flag.",
        flag: "CV{hex_decoder}",
    },

    {
        id: 4,
        title: "Hash Identification",
        difficulty: "Medium",
        points: 150,
        xp: 70,
        hint: "Look at the length and format of the hash.",
        description:
            "You discovered a password hash. Identify the hashing algorithm and recover the hidden flag.",
        flag: "CV{hash_identifier}",
    },

    {
        id: 5,
        title: "ROT13",
        difficulty: "Medium",
        points: 150,
        xp: 70,
        hint: "Every letter is rotated by 13 positions.",
        description:
            "A strange message was encoded using ROT13. Decode the message to discover the flag.",
        flag: "CV{rot13_master}",
    },

    {
        id: 6,
        title: "XOR Encryption",
        difficulty: "Medium",
        points: 180,
        xp: 80,
        hint: "XOR encryption uses the same operation for encryption and decryption.",
        description:
            "A message was encrypted using a simple XOR key. Recover the plaintext and find the flag.",
        flag: "CV{xor_cracker}",
    },

    {
        id: 7,
        title: "Weak Password",
        difficulty: "Medium",
        points: 200,
        xp: 90,
        hint: "Not every password is strong enough to resist guessing.",
        description:
            "A weak password was used to protect an encrypted message. Identify the password and recover the flag.",
        flag: "CV{weak_crypto}",
    },

    {
        id: 8,
        title: "AES Basics",
        difficulty: "Hard",
        points: 220,
        xp: 100,
        hint: "AES is a symmetric encryption algorithm.",
        description:
            "You are given encrypted data and the required parameters. Use your cryptography knowledge to recover the hidden flag.",
        flag: "CV{aes_basics}",
    },

    {
        id: 9,
        title: "Multi Encoding",
        difficulty: "Hard",
        points: 250,
        xp: 120,
        hint: "The data may have been encoded more than once.",
        description:
            "A suspicious string has passed through multiple encoding techniques. Decode each layer to reveal the flag.",
        flag: "CV{multi_layer_crypto}",
    },

    {
        id: 10,
        title: "Crypto Master",
        difficulty: "Hard",
        points: 300,
        xp: 150,
        hint: "Combine the techniques you learned in the previous challenges.",
        description:
            "This is the final Cryptography challenge. Analyze the encryption scheme, decode the message, and recover the final flag.",
        flag: "CV{crypto_master}",
    },
];

export default challenges;

