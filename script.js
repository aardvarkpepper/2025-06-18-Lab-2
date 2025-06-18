const shoppingList = [];

const addItem = (item) => {
  shoppingList.push(item);
};

const removeItem = () => {
  shoppingList.pop();
}

const displayList = () => {
  for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
  }
}

// const testTask1 = () => {
//   addItem("hamster");
//   addItem("chinchilla");
//   addItem("gerbil");
//   // removeItem();
//   displayList();
// }

// testTask1();

const addUniqueItem = (item) => {
  let unique = true;
  for (let i = 0; i < shoppingList.length; i++) {
    if (item === shoppingList[i]) {
      unique = false;
      break;
    }
  }
  if (unique) {
    shoppingList.push(item)
  }
}

// const testTask1 = () => {
//   addItem("hamster");
//   addItem("chinchilla");
//   addItem("gerbil");
//   // removeItem();
//   addUniqueItem("hamster");
//   addUniqueItem("spacehamster");
//   addUniqueItem("kangaroo");
//   addUniqueItem("gerbil");
//   displayList();
// }

// testTask1()

const filterItems = (searchTerm) => {
  const returnArray = [];
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].toLowerCase().includes(searchTerm.toLowerCase())) {
      returnArray.push(shoppingList[i]);
    }
  }
  return returnArray;
}

const printArray = (arrayInput) => {
  for (let i = 0; i < arrayInput.length; i++) {
    console.log(arrayInput[i]);
  }
}

// const testTask1 = () => {
//   addItem("hambooster");
//   addItem("chinchilla");
//   addItem("gerboOil");
//   // removeItem();
//   addUniqueItem("hamster");
//   addUniqueItem("spacehamster");
//   addUniqueItem("kangaBoo");
//   addUniqueItem("gerbOoil");
//   printArray(filterItems("Boo"));
// }

// testTask1();
