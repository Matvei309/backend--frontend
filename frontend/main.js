async function getCatalog() {
  const button = document.getElementById('button')
  let data = [];
  await new Promise((resolve) => {
    button.addEventListener('click', async () => {
      data = await fetch('http://localhost:3001/api/catalog/')
        .then((response) => {
          return response.json();
        })
      resolve(data)
    })
  })
  return data
}

function createTitel(container, content) {
  const h1 = document.createElement('h1')
  h1.textContent = content
  container.append(h1)
}

function createDescription(container, content) {
  const p = document.createElement('p')
  p.textContent = content
  container.append(p)
}

(async () => {
  const data = await getCatalog();
  for (let i in data) {
    createTitel(document.getElementById('container'), data[i].name)
    createDescription(document.getElementById('container'), data[i].description)
  }
})()




