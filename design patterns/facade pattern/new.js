/*
The facade pattern is a structural pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.
We use it when we want to simplify the interface of a complex system.
*/
function getFetch(url, params = {}) {
  const queryString = Object.entries(params)
    .map((param) => {
      return `${param[0]}=${param[1]}`;
    })
    .join("&");
  return fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

function getUsers() {
  return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return getFetch("https://jsonplaceholder.typicode.com/posts", { userId });
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

//if wa wanna use axios instead of fetch we just have to change the getFetch function
//it would be like this
// function getFetch(url, params = {}) {
//   return axios({
//     url,
//     method: "GET",
//     params,
//   }).then((response) => response.data);
// }
