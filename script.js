const ul = document.querySelector("ul");
const searched = document.querySelector("#search");

const search = async () => {
  console.log(searched.value);
  await fetch(`https://images-api.nasa.gov/search?q=${searched.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
