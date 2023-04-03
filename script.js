const ul = document.querySelector("ul");
const searched = document.querySelector("#search");
const main = document.querySelector("main");

const search = async () => {
  main.innerHTML = "";
  console.log(searched.value);
  await fetch(
    `https://images-api.nasa.gov/search?q=${searched.value}&media_type=image`
  )
    .then((response) => response.json())
    .then((data) => {
      const items = [];
      items.push(data.collection.items);
      var item = items[0];
      item.map((item) => {
        const links = item.links;
        links.map((link) => {
          const div = document.createElement("div");
          div.classList.add("image-wrapper");
          let title = item.data[0].title;
          div.innerHTML = `
          <h4 class="image-title">${title}</h4>
          <img src=${link.href} alt="" class="image" onclick="showOrHide(this)" />
          <p class="description" onclick="showOrHide(this)" >${item.data[0].description}</p>
          `;
          main.appendChild(div);
        });
      });
    });
};
