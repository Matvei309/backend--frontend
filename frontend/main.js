async function getCatalog() {
  const button = document.getElementById('button')
  let data = [];
  await new Promise((resolve) => {
    button.addEventListener('click', async () => {
      data = await fetch('http://192.168.1.67:3001/api/catalog/')
        .then((response) => {
          return response.json();
        })
      resolve(data)
    })
  })
  return data
}
function createCard(container, titel, description) {
  const card = document.createElement("div")
  card.classList.add('card')
  card.append(titel, description)
  container.append(card)
}

function createTitel(content) {
  const h1 = document.createElement('h1')
  h1.textContent = content
  return h1
}

function createDescription(content) {
  const p = document.createElement('p')
  p.textContent = content
  return p
}

(async () => {
  const data = await getCatalog();
  for (let i in data) {
    createCard(document.getElementById("container"), createTitel(data[i].name), createDescription(data[i].description))
  }
})()




