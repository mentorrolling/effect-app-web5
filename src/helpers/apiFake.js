const url = "https://fakestoreapi.com/products";

const getProducts = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

const getProductId = async (id) => {
  const resp = await fetch(url + "/" + id);
  const data = await resp.json();
  return data;
};

const postProduct = async (product) => {
  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  const data = resp.json();
  return data;
};

const deleteProduct = async (id) => {
  const resp = await fetch(url + "/" + id, {
    method: "DELETE",
  });
  const data = await resp.json();
  return data;
};

export { getProducts, getProductId, postProduct, deleteProduct };
