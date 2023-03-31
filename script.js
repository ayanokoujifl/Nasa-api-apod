window.onload = async () => {
  const ul = document.querySelector("ul");

  await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=6gYWbMRm24fo2nVDui7SbjcSDPEljqcTlSlxDe2f&count=10&hd=true&thumbs=true"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
