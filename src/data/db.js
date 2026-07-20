const learningData = {
  owner: {
    name: "Atryee Chatterjee",
    course: "BCA (2023-2027)",
    university: "MAKAUT",
    program: "NEP",
    links: {
      linkedin: "https://linkedin.com/in/atryee-chatterjee/",
      github: "https://github.com/Atryee-Chatterjee",
      email: "atryeechatterjee31@gmail.com"
    }
  },
  semesters: [
    {
      semester: 1,
      subjects: [
        {
          name: "Programming in C",
          videos: [
            {
              title: "C Full Course",
              url: "https://www.youtube.com/watch?v=irqbmMNs2Bo",
              channel: "Apna College",
              hours: 10
            },
            {
              title: "C Language Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=aZb0iu4uGwA&t=20913s",
              channel: "CodeWithHarry",
              hours: 10
            }
          ]
        },
        {
          name: "Digital Electronics",
          videos: [
            {
              title: "Digital Electronics",
              url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe",
              channel: "Gate Smashers",
              hours: 20
            },
            {
              title: "Digital Electronics",
              url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm",
              channel: "Neso Academy",
              hours: 30
            }
          ]
        }
      ]
    },
    {
      semester: 2,
      subjects: [
        {
          name: "Computer Architecture",
          videos: [
            {
              title: "Computer Organization and Architecture",
              url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX",
              channel: "Gate Smashers",
              hours: 30
            },
            {
              title: "Computer Organization & Architecture(COA)",
              url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q",
              channel: "Neso Academy",
              hours: 30
            }
          ]
        },
        {
          name: "Basics of Web Design Using Html, CSS, Java Script",
          videos: [
            {
              title: "Sigma Web Development Course - Web Development Tutorials",
              url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
              channel: "Code with Harry",
              hours: 30
            },
            {
              title: "HTML,CSS,JavaScript, Project, Git & GitHub",
              url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0PY9xunOzsP5kmYIz2Hu7i",
              channel: "Apna College",
              hours: 30
            }
          ]
        }
      ]
    }
  ]
};

module.exports = learningData;