const converterPromise = (array) => {
  const result = new Promise((resolve,reject) => {
    if (array.every(item => typeof item === "string")){
      resolve(array.map(
        (item) => item.toUpperCase()
        ) 
      );
    } else {
      reject('Error: Not all elements are string type!')
    };
  });
  return result;
};

export default converterPromise;
