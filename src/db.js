// users array
const users = [
  {
    id: "1",
    name: "Tonmoy",
    email: "tonmoy@example.com",
    age: 30,
    posts: [],
    comments: [],
  },
  {
    id: "2",
    name: "James",
    email: "jamesh@example.com",
  },
  {
    id: "3",
    name: "Jack",
    email: "jack.example.com",
  },
];

// posts array
const posts = [
  {
    id: "1",
    title: "Test Title 1",
    body: "This is test post body.",
    published: true,
    author: "1",
    comments: [],
  },
  {
    id: "2",
    title: "Test Title 2",
    body: "This is test post body.",
    published: true,
    author: "1",
  },
  {
    id: "3",
    title: "Test Title 3",
    body: "This is test post body.",
    published: true,
    author: "2",
  },
  {
    id: "4",
    title: "Test Title 4",
    body: "This is test post body!",
    published: true,
    author: "2",
  },
  {
    id: "5",
    title: "Test Title 5",
    body: "This is test post body.",
    published: true,
    author: "3",
  },
  {
    id: "6",
    title: "Test Title 6",
    body: "This is test post body.",
    published: true,
    author: "3",
  },
];

// comments array
const comments = [
  {
    id: "1",
    text: "Awesome",
    post: "1",
    author: "1",
  },
  {
    id: "2",
    text: "Test comment",
    post: "1",
    author: "3",
  },
  {
    id: "3",
    text: "Well done!",
    post: "1",
    author: "2",
  },
  {
    id: "4",
    text: "Kudos",
    post: "2",
    author: "3",
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
