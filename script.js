// let p=fetch("https://goweather.herokuapp.com/weather/Ny");
// p.then((val1)=>{
//   console.log(val1.status);
//   console.log(val1.ok);
//   console.log(val1.headers);
//   return val1.json;
// }).then((val2)=>{
//   console.log(val2);
// })

// fetch('https://api.github.com/users/Anshul-Sharma01')
// .then((response)=>{
//   return response.json();
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((error)=>console.log(error));

// let d = document.getElementById("my-form");
// d.addEventListener("submit", (eve) => {
//   eve.preventDefault();

//   // Get the GitHub username input value when the form is submitted
//   let un = document.getElementById("uname").value;

//   fetch("https://api.github.com/users/" + un + "/repos")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       // Assuming you have an element with id "repositories" to display the results
//       let repositoriesElement = document.getElementById("repositories");
//       repositoriesElement.innerHTML = ""; // Clear previous results

//       if (data && data.length > 0) {
//         // Create an unordered list to display the repositories
//         let ul = document.createElement("ul");

//         data.forEach((repo) => {
//           let li = document.createElement("li");
//           let a = document.createElement("a");
//           a.href = repo.html_url;
//           a.textContent = repo.name;
//           a.target = "_blank";
//           li.appendChild(a);
//           ul.appendChild(li);
//         });

//         repositoriesElement.appendChild(ul);
//       } else {
//         repositoriesElement.textContent =
//           "No repositories found for the given GitHub username.";
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// });


let d=document.getElementById("my-form");
d.addEventListener('submit',(eve)=>{
  eve.preventDefault();
  let uname=document.getElementById("uname").value;
  fetch('https://api.github.com/users/'+ uname +'/repos')
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    let repository=document.getElementById("repositories");
    repository.innerHTML="";
    if(data && data.length>0){
      let ul=document.createElement('ul');
      data.forEach((repo)=>{
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.href=repo.html_url;
        a.target="_blank";
        a.textContent=repo.name;
        li.appendChild(a);
        ul.appendChild(li);
      })
      repository.appendChild(ul);
    }else{
      repository.innerHTML="No repository found!!";
    }
  })
  .catch((error)=>{
    console.log("Error:",error);
  })
})