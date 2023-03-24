import { Controller } from "./Controller";
import { Bar } from "./Bar";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

const initialItems = [
  { key: "item1", value: 20 },
  { key: "item2", value: 15 },
  { key: "item3", value: 3 },
  { key: "item4", value: 10 },
  { key: "item5", value: 8 },
  { key: "item6", value: 3 },
  { key: "item7", value: 6 },
  { key: "item8", value: 9 },
  { key: "item9", value: 19 },
  { key: "item10", value: 10 },
];

export default function QuickSortVisualizer() {
  const [items, setItems] = useState(initialItems);
  const [swappingItems, setSwappingItems] = useState([-1, -1]);
  const [disableBtn, setDisableBtn] = useState(false);

  const animateSorting = async () => {
    setDisableBtn(true);
    let newItems = [...items];
    let sortedItems = false;

    while (!sortedItems) {
      sortedItems = true;
      for (let i = 0; i < newItems.length - 1; i++) {
        setSwappingItems([i, i + 1]);
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (newItems[i].value > newItems[i + 1].value) {
          sortedItems = false;
          const temp = newItems[i];
          newItems[i] = newItems[i + 1];
          newItems[i + 1] = temp;

          setItems([...newItems]);
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    }
    setSwappingItems([-1, -1]);
    setDisableBtn(false);
  };

  function addBar() {
    let array = [...items];
    let randomNum = Math.floor(Math.random() * 20);
    const newItem = {
      key: `item${array.length + 1}`,
      value: randomNum,
    };
    array.push(newItem);
    setItems(array);
  }

  function removeBar() {
    let array = [...items];
    array.pop();
    setItems(array);
  }

  function randomizeBars() {
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
  }

  return (
    <>
      <Controller
        animateSorting={animateSorting}
        randomizeBars={randomizeBars}
        disableBtn={disableBtn}
        addBar={addBar}
        removeBar={removeBar}
      />
      <AnimatePresence>
        <div className="flex flex-1 justify-evenly items-end box-border	">
          {items.map((item, index) => (
            <Bar
              key={item.key}
              item={item}
              isSwapping={swappingItems.includes(index)}
            />
          ))}
        </div>
      </AnimatePresence>
    </>
  );
}
