import { format } from "date-fns";

export const decrementMonth = (date) => {
  const arrayDate = date.split("/");

  arrayDate[1] = +arrayDate[1] - 1;

  if (arrayDate[1] === 0) {
    arrayDate[1] = 12;
    arrayDate[0] = +arrayDate[0] - 1;
  }

  return arrayDate.join("/");
};

export const incrementMonth = (date) => {
  const arrayDate = date.split("/");

  arrayDate[1] = +arrayDate[1] + 1;

  if (arrayDate[1] === 13) {
    arrayDate[1] = 1;
    arrayDate[0] = +arrayDate[0] + 1;
  }

  return arrayDate.join("/");
};

export const dateNow = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const strDay = day > 0 && day < 10 ? `0${day}` : `${day}`;
  const strMonth = month > 0 && month < 10 ? `0${month + 1}` : `${month + 1}`;
  const strYear = `${year}`;

  return {
    date: `${strYear}-${strMonth}-${strDay}`,
    year,
    month: month + 1,
  };
};

export const changeMonth = (num) => {
  switch (num) {
    case 1:
      return "Январь";
    case 2:
      return "Февраль";
    case 3:
      return "Март";
    case 4:
      return "Апрель";
    case 5:
      return "Май";
    case 6:
      return "Июнь";
    case 7:
      return "Июль";
    case 8:
      return "Август";
    case 9:
      return "Сентябрь";
    case 10:
      return "Октябрь";
    case 11:
      return "Ноябрь";
    case 12:
      return "Декабрь";
    default:
      return "";
  }
};

export const cutMonth = (date, symbol) => {
  const arrayDate = date.split(symbol);

  return Number(arrayDate[1]);
};

export const cutDate = (date) => date.split("/");

export const cutTasksDate = (date) => {
  const str = date.slice(0, 10);

  for (let i of str) {
    if (i === "-") i = "/";
  }

  return str;
};

export const editDate = (date) => format(date, "yyyy-MM-dd");
