import React, { useState, useEffect } from 'react';

const useGetSingleProduct = (id) => {
  const [obj, setObj] = useState(null);
  let getData = async () => {
    let data = await fetch(`https://dummyjson.com/products/${id}`);

    let Jsondata = await data.json();
    setObj(Jsondata);

    console.log(Jsondata);
  };
  useEffect(() => {
    getData();
  }, []);

  return obj;
};

export default useGetSingleProduct;
