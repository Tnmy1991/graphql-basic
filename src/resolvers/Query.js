const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) return db.users;

    return db.users.filter((user) =>
      user.name.toLowerCase().includes(args.query.toLowerCase())
    );
  },
  posts(parent, args, { db }, info) {
    if (!args.query) return db.posts;

    return db.posts.filter((post) => {
      const isTitleMatch = post.title
        .toLowerCase()
        .includes(args.query.toLowerCase());
      const isBodyMatch = post.body
        .toLowerCase()
        .includes(args.query.toLowerCase());
      return isTitleMatch || isBodyMatch;
    });
  },
  comments(parent, args, { db }, info) {
    if (!args.query) return db.comments;

    return db.comments.filter((comment) =>
      comment.text.toLowerCase().includes(args.query.toLowerCase())
    );
  },
  greeting(parent, args, { db }, info) {
    if (args.name) {
      return `Hello, ${args.name}!`;
    } else {
      return "Hello";
    }
  },
  grades(parent, args, { db }, info) {
    return [95, 96, 99];
  },
  add(parent, args, { db }, info) {
    if (args.numbers.length === 0) {
      return 0;
    }

    return args.numbers.reduce((acc, val) => acc + val);
  },
  me() {
    return {
      id: "12345",
      name: "Tonmoy Malik",
      email: "tonmoy.malik@mindtree.com",
      age: 29,
    };
  },
  post() {
    return {
      id: "1",
      title: "GraphQL Course",
      body: "Learn how to build GraphQL applications using Node.js. Includes Prisma v1, authentication, Apollo Client, and more!",
      published: true,
    };
  },
};

export { Query as default };
