window.onload = async () => {
  const ul = document.querySelector('ul')

  await fetch(
    'https://api.nasa.gov/planetary/apod?api_key=6gYWbMRm24fo2nVDui7SbjcSDPEljqcTlSlxDe2f&count=10&hd=true&thumbs=true'
  )
    .then((response) => response.json())
    .then((data) => {
      data.map((item) => {
        const li = document.createElement('li')
        li.classList.add('primary')
        li.innerHTML = `
        ${item.title}
        <ul class="sub-list">
        <li>
          <img src="${item.hdurl ? item.hdurl : item.url}" alt="${
          item.explanation
        }" />
        </li>
        </ul>
        `
        ul.appendChild(li)
      })
    })

  let i = 0
  let lis = document.querySelectorAll('.primary')
  let subLists = document.querySelectorAll('.sub-list')
  lis.forEach((li) => {
    li = lis[i]
    li.addEventListener('click', () => {
      let subLists = document.querySelectorAll('.sub-list')
    })
    i += 1
  })
}
