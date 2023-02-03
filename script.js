const getNasa = () => {
  fetch(
    'https://api.nasa.gov/planetary/apod?api_key=6gYWbMRm24fo2nVDui7SbjcSDPEljqcTlSlxDe2f&count=40'
  )
    .then((response) => response.json())
    .then((data) => {
      data.map((item) => {
        
      })
    })
}

getNasa()
