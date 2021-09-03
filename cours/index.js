// Fetch

// fetch("monlien", "object d'option")
//   .then((reponse) => {
//     console.log(reponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch("test.txt")
//   .then((res) => res.text())
//   .then((data) => (document.body.innerHTML += `<h2>${data}</h2>`));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

//CRUD => C = Create (POST), R = Read(GET), U = Update(PUT), D = Delete(DELETE)

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Satya",
    message: "Yo les gens :)",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("test positif!")
  );
});

//-------------------
// ASYNCHRONE
//----------------

setTimeout(() => {
  console.log(`j'apparais 2 secondes après`);
}, 2000);

//-----------------
// Promise
//-----------------

fetch("monLien").then((res) => res);

//async/await

async function fetchData() {
  await fetch("monLien"); // j'attend d'avoir fetché "monLien" avant de passer à la suite du code

  console.log("c'est bon !");
}
