window.onload = loadRandom();

const ul = document.querySelector("ul");

async function loadRandom() {
  await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=6gYWbMRm24fo2nVDui7SbjcSDPEljqcTlSlxDe2f&count=10&hd=true&thumbs=true"
  )
    .then((response) => response.json())
    .then((data) => {
      data.map((item) => {
        console.log(item);
        const li = document.createElement("li");
        item.media_type == "image"
          ? (li.innerHTML = `
        <h6>${item.title}</h6>
        <img src="${item.url}" />
        `)
          : (li.innerHTML = `
        <h3>${item.title}</h3>
        <video src="${item.url} autoplay controls" />
        `);
        ul.appendChild(li);
      });
    });
}
