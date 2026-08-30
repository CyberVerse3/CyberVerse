const linuxLessons = [

  {
    id: 1,

    title: "Introduction to Linux",

    completed: true,

    xp: 50,

    duration: "10 min",

    content:
      "Linux is an open-source operating system widely used in cybersecurity, servers, cloud computing and ethical hacking.",

    objectives: [

      "Understand Linux",

      "Know Linux distributions",

      "Open Terminal",

      "Understand why Linux is important"

    ],

    commands: [

      "pwd",

      "ls",

      "whoami",

      "clear"

    ]

  },

  {

    id: 2,

    title: "Linux File System",

    completed: false,

    xp: 75,

    duration: "15 min",

    content:
      "Linux organizes everything as files. The root directory (/) is the starting point of the entire filesystem.",

    objectives: [

      "Understand /",

      "Understand /home",

      "Understand /etc",

      "Understand /var"

    ],

    commands: [

      "cd /",

      "pwd",

      "ls",

      "tree"

    ]

  },

  {

    id: 3,

    title: "Linux Commands",

    completed: false,

    xp: 100,

    duration: "20 min",

    content:
      "Linux commands are used to interact with the operating system using the terminal.",

    objectives: [

      "Navigate folders",

      "Create files",

      "Delete files",

      "Copy files"

    ],

    commands: [

      "mkdir",

      "touch",

      "cp",

      "mv",

      "rm"

    ]

  }

];

export default linuxLessons;