async function fetchArticles() {
  return await fetch(`http://0.0.0.0:7000/articles`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

async function fetchCart() {
  return await fetch(`http://0.0.0.0:7000/panier`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

async function PatchCart(quantity, id) {
  return await fetch(`http://0.0.0.0:7000/panier/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      quantity: quantity,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

async function DeleteCart(id) {
  return await fetch(`http://0.0.0.0:7000/panier/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

async function Addcart(id, prix, quantity) {
  return await fetch(`http://0.0.0.0:7000/panier`, {
    method: "POST",
    body: JSON.stringify({
      id: id,
      quantity: quantity,
      prix: prix,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
export { fetchArticles, fetchCart, PatchCart, DeleteCart, Addcart };
