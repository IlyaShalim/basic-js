module.exports = function countCats(matrix) {
  mas = matrix.flat(2);
  count = 0
  for(let i =0; i < mas.length; i++)
  {
    if (mas[i] == "^^")
    {
      count++;
    }
  }
  return count;
}
