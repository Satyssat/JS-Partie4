// Fetch

// fetch("monlien", "object d'option")
//   .then((reponse) => {
//     console.log(reponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

fetch("test.txt")
  .then((res) => res.text())
  .then((data) => (document.body.innerHTML = `<h2>${data}</h2>`));
