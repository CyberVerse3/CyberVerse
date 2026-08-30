const labs = {

  linux: {

    id: "linux",
    title: "Linux Lab 🐧",
    description:
      "Practice Linux commands, permissions and system security.",

    challenges: [

      {
        id: 1,
        title: "Find the hidden file",
        description:
          "Use Linux commands to locate hidden files.",
        hint:
          "Try commands that display hidden files.",
        xp: 150,
        unlocked: true
      },


      {
        id: 2,
        title: "File Permissions",
        description:
          "Analyze and modify Linux file permissions.",
        hint:
          "Check chmod and permission levels.",
        xp: 200,
        unlocked: false
      },


      {
        id: 3,
        title: "System Security",
        description:
          "Find security issues in a Linux system.",
        hint:
          "Check users and running services.",
        xp: 300,
        unlocked: false
      }

    ]

  }

}


export default labs;