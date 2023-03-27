interface ItemsProp {
  items: Array<{ key: string; value: number }>;
  setItems: (items: Array<{ key: string; value: number }>) => void;
}

export const addBar = ({ items, setItems }: ItemsProp) => {
  let array = [...items];
  let randomNum = Math.floor(Math.random() * 20) + 1;
  const newItem = {
    key: `item${array.length + 1}`,
    value: randomNum,
  };
  array.push(newItem);
  setItems(array);
};

export const removeBar = ({ items, setItems }: ItemsProp) => {
  let array = [...items];
  array.pop();
  setItems(array);
};

export const randomizeBars = ({ items, setItems }: ItemsProp) => {
  let array = [...items];
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  setItems([...array]);
};
