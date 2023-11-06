const courseModels = [
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress',
    thumbnail: "your.image.here",
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 2,
    name: "Machine Learning Foundations",
    instructor: "Alex Johnson",
    description:
      "Learn the fundamentals of machine learning and artificial intelligence.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Overview of machine learning and its applications.",
      },
      {
        week: 2,
        topic: "Supervised Learning",
        content: "Understanding supervised learning algorithms.",
      },
    ],
    students: [
      {
        id: 103,
        name: "Emily Davis",
        email: "emily@example.com",
      },
      {
        id: 104,
        name: "James Wilson",
        email: "james@example.com",
      },
    ],
  },
  {
    id: 3,
    name: "Full-Stack Web Development",
    instructor: "Sophia Brown",
    description:
      "Become a full-stack developer and build web applications from scratch.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "16 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic HTML, CSS, and JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Web Development",
        content: "Overview of web technologies and the development stack.",
      },
      {
        week: 2,
        topic: "Front-End Development",
        content:
          "Creating responsive web interfaces with HTML, CSS, and JavaScript.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 105,
        name: "Liam Smith",
        email: "liam@example.com",
      },
    ],
  },
  {
    id: 4,
    name: "Digital Marketing Essentials",
    instructor: "Ella Lee",
    description:
      "Master the art of digital marketing and grow your online presence.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "12 weeks",
    schedule: "Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["No prior experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Digital Marketing",
        content: "Understanding digital marketing channels and strategies.",
      },
      {
        week: 2,
        topic: "SEO and Content Marketing",
        content: "Optimizing websites for search engines and content creation.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 104,
        name: "James Wilson",
        email: "james@example.com",
      },
      {
        id: 103,
        name: "Emily Davis",
        email: "emily@example.com",
      },
    ],
  },
  {
    id: 5,
    name: "Mobile App Development with Flutter",
    instructor: "William Smith",
    description:
      "Build cross-platform mobile apps using the Flutter framework.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "14 weeks",
    schedule: "Saturdays, 10:00 AM - 12:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Flutter",
        content: "Getting started with Flutter and Dart programming.",
      },
      {
        week: 2,
        topic: "Widgets and UI Design",
        content: "Creating user interfaces with Flutter widgets.",
      },
    ],
    students: [],
  },
  {
    id: 6,
    name: "Data Analysis with Python",
    instructor: "Charlotte Johnson",
    description:
      "Learn data analysis techniques using Python and data visualization libraries.",
    enrollmentStatus: "Closed",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 7:30 PM - 9:30 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Data Cleaning and Preprocessing",
        content: "Preparing data for analysis by cleaning and preprocessing.",
      },
      {
        week: 2,
        topic: "Exploratory Data Analysis",
        content: "Exploring and summarizing data using Python tools.",
      },
    ],
    students: [],
  },
  {
    id: 7,
    name: "Introduction to Python Programming",
    instructor: "Daniel Wilson",
    description: "Get started with Python programming from scratch.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["No prior programming experience required"],
    syllabus: [],
    students: [
      {
        id: 701,
        name: "Olivia Smith",
        email: "olivia@example.com",
      },
      {
        id: 702,
        name: "Mason Davis",
        email: "mason@example.com",
      },
    ],
  },
  {
    id: 8,
    name: "Artificial Intelligence in Healthcare",
    instructor: "Aiden Johnson",
    description:
      "Explore the application of AI in healthcare and medical data analysis.",
    enrollmentStatus: "Closed",
    thumbnail: "your.image.here",
    duration: "12 weeks",
    schedule: "Fridays, 5:30 PM - 7:30 PM",
    location: "Online",
    prerequisites: ["Basic machine learning knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to AI in Healthcare",
        content: "Overview of AI applications in the medical field.",
      },
      {
        week: 2,
        topic: "Medical Data Analysis",
        content: "Analyzing medical data using AI techniques.",
      },
    ],
    students: [],
  },
  {
    id: 9,
    name: "Digital Art and Graphic Design",
    instructor: "Ava Johnson",
    description:
      "Learn digital art and graphic design using industry-standard tools.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "10 weeks",
    schedule: "Saturdays, 2:00 PM - 4:00 PM",
    location: "Online",
    prerequisites: ["No prior experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Graphic Design",
        content: "Basic design principles and tools.",
      },
      {
        week: 2,
        topic: "Adobe Photoshop Basics",
        content: "Getting started with Photoshop for graphic design.",
      },
    ],
    students: [],
  },
  {
    id: 10,
    name: "Cybersecurity Fundamentals",
    instructor: "Jackson Johnson",
    description:
      "Learn the basics of cybersecurity and how to protect digital assets.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Basic computer knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content: "Overview of cybersecurity principles and threats.",
      },
      {
        week: 2,
        topic: "Network Security",
        content: "Securing computer networks from cyberattacks.",
      },
    ],
    students: [],
  },
];

export { courseModels };
