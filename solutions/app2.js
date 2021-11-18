const sorterPromise = (array) => {
  const result = new Promise((resolve,reject) => {
    if (array.every(item => typeof item === "string")){
      resolve(array.sort() 
      );
    } else {
      reject('Error: Not all elements are string type!')
    };
  });
  return result;
};

export default sorterPromise;
