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
    }
  ]
};

module.exports = learningData;