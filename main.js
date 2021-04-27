const URL = "https://official-joke-api.appspot.com/random_joke";
const button1 = document.querySelector("#our-button");
const button2 = document.querySelector("#punchline")

button1.addEventListener("click", () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.setup);
      console.log(data.punchline);
      document.querySelector("#joke").innerHTML = data.setup;
      button2.addEventListener("click", () => {
        document.querySelector("#answer").innerHTML = data.punchline
      })
    });
});


// const btn = document.createElement("Button");

// btn.innerHTML = "Click Me";
// document.body.appendChild(btn);

// const p = document.createElement("P");
// p.innerHTML = 
// document.body.appendChild(p);
