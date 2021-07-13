export const filteredByName = (array, value) => {
  return array.filter((user) => {
    const searchName = user.firstName.toLowerCase().includes(value);
    const searchFamily = user.lastName.toLowerCase().includes(value);

    return searchName || searchFamily;
  });
};

export const filteredBySelect = (array, selectList, key) => {
  return array.filter((user) => {
    let flag = false;

    for (let i = 0; i < selectList.length; i++) {
      const usersItem = user[key].name.toLowerCase();
      const selectItem = selectList[i].name.toLowerCase();

      if (usersItem === selectItem) {
        flag = true;
        break;
      }
    }

    return flag;
  });
};

export const filteredByValue = (arr, val) =>
  arr.filter((el) => el.phase.name.toLowerCase().includes(val) || el.name.toLowerCase().includes(val));

export const filteredByProject = (arr, val) =>
  arr.filter((el) => el.phase.name.toLowerCase().includes(val));

export const findIndexArray = (arr, val) => arr.findIndex((elem) => elem.id === val);
