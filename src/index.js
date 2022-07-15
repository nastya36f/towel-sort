


module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix === undefined){
    return [];
  }else {
    if (Array.isArray(matrix[0])){
      for (let i = 0; i < matrix.length; i++){
        if (i % 2 === 0){
          arr = arr.concat(matrix[i]);
        }else{
          arr = arr.concat(matrix[i].reverse());
        }
      }   
    }else{
      arr = arr.concat(matrix);
    }
  }
  return arr;
}
