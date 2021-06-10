export function cutZeroInNum(date) {
  const dateArray = date.split("-");
  const day = dateArray[2];

  return Number(day) ;
}
