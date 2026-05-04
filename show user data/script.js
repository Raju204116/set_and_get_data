const userContainer = document.getElementById("user-container");
const postContainer = document.getElementById("post-container");

// Fetch users
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    displayUsers(users);
  });

// Fetch posts
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(posts => {
    displayPosts(posts);
  });

// Users UI
function displayUsers(users) {
  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
    `;

    userContainer.appendChild(card);
  });
}

// Posts UI
function displayPosts(posts) {
  posts.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;

    postContainer.appendChild(card);
  });
}