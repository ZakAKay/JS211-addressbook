///////PRACTICE THIS, MAIN TENET///

let arrayOfRandomUsers = [];

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getuser()
window.onload = function () {
  randomUser();
};

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as user and saved into the variable, arrayOfRandomUsers
//============================================================
const randomUser = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json()) //look this up!!!
    // .then((x) => console.log("string of user", x))
    .then((users) => (arrayOfRandomUsers = users.results)); ///.notation!
};
//===============================================================
//  $.ajax({
//    url: "https://randomuser.me/api/",
//   dataType: "json",
//    success: function (data) {
//     console.log(data);
//    },
// });
//================================================================

// This function logs the results in your browser's console
//const consoleUser = () => {
console.log("hello", arrayOfRandomUsers);
//};

// this function creates elements inside the random-user ul, then appends text inside it with the user that were returned in the request.
const displayUser = () => {
  const allUser = document.getElementById("random-user");
  console.log("hey", arrayOfRandomUsers);
  arrayOfRandomUsers.map((post, index) => {
    console.log("index", index, "post", post);
    const li = document.createElement("li");
    const img = document.createElement("img") 
    img.src = post.picture.thumbnail
    const text = document.createTextNode(
      `#${index}, name: ${post.name.first} ${post.name.last}:`
    );
    li.appendChild(text);
    allUser.append(li);
    allUser.append(img);
  });
};
displayUser();

//how to spit out an image, create an image elemeint LI