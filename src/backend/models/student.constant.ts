const studentModels = [
  {
    id: "101",
    name: "Alice Johnson",
    email: "alice@example.com",
    courseApplied: [
      {
        id: "1",
        name: "Introduction to React Native",
        instructor: "John Doe", // Name of the course instructor
        description:
          "Learn the basics of React Native development and build your first mobile app.",
        completed: true,
        thumbnail:
          "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?size=626&ext=jpg&ga=GA1.1.686164011.1685965708&semt=ais",
        enrolledOn: "04/01/2023",
        duration: "8 weeks",
        syllabus: [
          {
            week: 1,
            topic: "Introduction to Digital Marketing",
            content: "Understanding digital marketing channels and strategies.",
            completed: true,
          },
          {
            week: 2,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: true,
          },
          {
            week: 3,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: true,
          },
        ],
      },
      {
        id: "3",
        name: "Full-Stack Web Development",
        instructor: "Sophia Brown",
        description:
          "Become a full-stack developer and build web applications from scratch.",
        completed: false,
        thumbnail:
          "https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?size=626&ext=jpg&ga=GA1.1.686164011.1685965708&semt=ais",
        enrolledOn: "06/06/2023",
        duration: "16 weeks",
        syllabus: [
          {
            week: 1,
            topic: "Introduction to Digital Marketing",
            content: "Understanding digital marketing channels and strategies.",
            completed: false,
          },
          {
            week: 2,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
        ],
      },
      {
        id: "4",
        name: "Digital Marketing Essentials",
        instructor: "Ella Lee",
        description:
          "Master the art of digital marketing and grow your online presence.",
        completed: false,
        enrolledOn: "04/08/2023",
        duration: "12 weeks",
        thumbnail:
          "https://img.freepik.com/free-psd/ee-learning-concept-banner-template_23-2148688189.jpg?size=626&ext=jpg&ga=GA1.1.686164011.1685965708&semt=ais",
        syllabus: [
          {
            week: 1,
            topic: "Introduction to Digital Marketing",
            content: "Understanding digital marketing channels and strategies.",
            completed: false,
          },
          {
            week: 2,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
          {
            week: 3,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
          {
            week: 4,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "102",
    name: "Bob Smith",
    email: "bob@example.com",
    courseApplied: [
      {
        id: "1",
        name: "Introduction to React Native",
        instructor: "John Doe", // Name of the course instructor
        description:
          "Learn the basics of React Native development and build your first mobile app.",
        completed: true,
        thumbnail:
          "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?size=626&ext=jpg&ga=GA1.1.686164011.1685965708&semt=ais",
        enrolledOn: "04/01/2023",
        duration: "8 weeks",
        syllabus: [
          {
            week: 1,
            topic: "Introduction to Digital Marketing",
            content: "Understanding digital marketing channels and strategies.",
            completed: true,
          },
          {
            week: 2,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: true,
          },
          {
            week: 3,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: true,
          },
        ],
      },

      {
        id: "4",
        name: "Digital Marketing Essentials",
        instructor: "Ella Lee",
        description:
          "Master the art of digital marketing and grow your online presence.",
        completed: false,
        enrolledOn: "04/08/2023",
        duration: "12 weeks",
        thumbnail:
          "https://img.freepik.com/free-psd/ee-learning-concept-banner-template_23-2148688189.jpg?size=626&ext=jpg&ga=GA1.1.686164011.1685965708&semt=ais",
        syllabus: [
          {
            week: 1,
            topic: "Introduction to Digital Marketing",
            content: "Understanding digital marketing channels and strategies.",
            completed: false,
          },
          {
            week: 2,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
          {
            week: 3,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
          {
            week: 4,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "103",
    name: "Emily Davis",
    email: "emily@example.com",
    courseApplied: [
      {
        id: "3",
        name: "Full-Stack Web Development",
        instructor: "Sophia Brown",
        description:
          "Become a full-stack developer and build web applications from scratch.",
        completed: false,
        thumbnail:
          "https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?size=626&ext=jpg&ga=GA1.1.686164011.1685965708&semt=ais",
        enrolledOn: "06/06/2023",
        duration: "16 weeks",
        syllabus: [
          {
            week: 1,
            topic: "Introduction to Digital Marketing",
            content: "Understanding digital marketing channels and strategies.",
            completed: false,
          },
          {
            week: 2,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
        ],
      },
      {
        id: "4",
        name: "Digital Marketing Essentials",
        instructor: "Ella Lee",
        description:
          "Master the art of digital marketing and grow your online presence.",
        completed: false,
        enrolledOn: "04/08/2023",
        duration: "12 weeks",
        thumbnail:
          "https://img.freepik.com/free-psd/ee-learning-concept-banner-template_23-2148688189.jpg?size=626&ext=jpg&ga=GA1.1.686164011.1685965708&semt=ais",
        syllabus: [
          {
            week: 1,
            topic: "Introduction to Digital Marketing",
            content: "Understanding digital marketing channels and strategies.",
            completed: false,
          },
          {
            week: 2,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
          {
            week: 3,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
          {
            week: 4,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: " 104",
    name: "James Wilson",
    email: "james@example.com",
    courseApplied: [],
  },
  {
    id: "105",
    name: "Liam Smith",
    email: "liam@example.com",
    courseApplied: [
      {
        id: "1",
        name: "Introduction to React Native",
        instructor: "John Doe", // Name of the course instructor
        description:
          "Learn the basics of React Native development and build your first mobile app.",
        completed: false,
        thumbnail:
          "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?size=626&ext=jpg&ga=GA1.1.686164011.1685965708&semt=ais",
        enrolledOn: "04/01/2023",
        duration: "8 weeks",
        syllabus: [
          {
            week: 1,
            topic: "Introduction to Digital Marketing",
            content: "Understanding digital marketing channels and strategies.",
            completed: true,
          },
          {
            week: 2,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
          {
            week: 3,
            topic: "SEO and Content Marketing",
            content:
              "Optimizing websites for search engines and content creation.",
            completed: false,
          },
        ],
      },
    ],
  },
];

export { studentModels };
