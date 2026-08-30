const lessons = {
  1: [
    {
  id: 1,
  title: "Introduction to Linux",

  description:
    "Learn what Linux is and why it is important in cybersecurity.",

  content:
    "Linux is one of the most widely used operating systems in cybersecurity. Ethical hackers, penetration testers and security engineers rely on Linux because of its flexibility and powerful command line.",

  example:
    "pwd\nls\ncd Desktop",

  note:
    "Practice these commands in a Linux terminal every day."
}
    ,{
  id: 2,
  title: "Linux File System",

  description:
    "Understand folders, paths and file management.",

  content:
    "Linux stores everything as files. Understanding the file system helps you navigate and manage servers.",

  example:
    "cd /\nls\nmkdir test",

  note:
    "Always know your current directory before making changes."
},
    {
      id: 3,
      title: "Basic Linux Commands",
      description: "Practice essential terminal commands."
    },
    {
      id: 4,
      title: "Users and Permissions",
      description: "Learn Linux users, groups and permissions."
    }
  ],

  2: [
    {
      id: 1,
      title: "Introduction to Networking",
      description: "Understand networks and how devices communicate."
    },
    {
      id: 2,
      title: "TCP/IP Model",
      description: "Learn the foundation of internet communication."
    }
  ]
}

export default lessons