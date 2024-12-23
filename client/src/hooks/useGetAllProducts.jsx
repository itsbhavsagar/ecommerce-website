import { useState, useEffect } from 'react';

const useGetAllProducts = () => {
  let [obj, setObj] = useState([]);

  let getData = async () => {
    let data = await fetch('https://dummyjson.com/products');
    let obj = await data.json();

    setObj(obj.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return obj;
};

export default useGetAllProducts;
