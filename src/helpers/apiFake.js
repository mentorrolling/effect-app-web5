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

export { getProducts, getProductId };
