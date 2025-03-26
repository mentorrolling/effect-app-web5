const url = "https://fakestoreapi.com/products";

const getProducts = async () => {
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};

export { getProducts };
