// Step 1: Display function
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  posts.forEach(post => {
    const li = document.createElement("li");
    const title = document.createElement("h1");
    const body = document.createElement("p");

    title.textContent = post.title;
    body.textContent = post.body;

    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

// Step 2: Async fetch
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    displayPosts(data);

    return data; // required for tests
  } catch (error) {
    console.error(error);
  }
}


getPosts();


if (typeof module !== "undefined") {
  module.exports = { getPosts };
}