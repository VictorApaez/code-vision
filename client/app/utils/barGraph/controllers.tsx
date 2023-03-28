import { v4 as uuidv4 } from "uuid";

interface ItemsProp {
  items: Array<{ key: string; value: number }>;
  setItems: (items: Array<{ key: string; value: number }>) => void;
}

export const addBar = ({ items, setItems }: ItemsProp) => {
  const newItem = {
    key: uuidv4().slice(0, 5),
    value: Math.floor(Math.random() * 20) + 1,
  };
  setItems([...items, newItem]);
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
