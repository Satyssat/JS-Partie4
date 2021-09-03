let userData = [];

const fetchUser = () => {
  fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));
  setTimeout(() => {
    console.log(userData);
  }, 1000);
};

fetchUser();
