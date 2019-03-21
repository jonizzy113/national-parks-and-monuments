const apiBaseUrl = "http://localhost:8088"

const getAllParks = () => fetch(`${apiBaseUrl}/parks`).then(response => response.json())

const deletePark = (parkId) => fetch(`${apiBaseUrl}/parks/${parkId}`, {
  method: "DELETE"
})

const getAllMonuments = () => fetch(`${apiBaseUrl}/monuments`).then(response => response.json())

const deleteMonument = (monumentId) => fetch(`${apiBaseUrl}/monuments/${monumentId}`, {
  method: "DELETE"
})