function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

function getUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

/*
suppose we wanna use axios instead of fetch
we have to change all the fetch calls
that's where facade pattern comes in
*/
