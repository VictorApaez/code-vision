import { BarGraph } from "./barGraph";
import { Controller } from "./Controller";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { bubbleSort } from "@/app/utils/sortingAlgos/bubbleSort";

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
  const [animationSpeed, setAnimationSpeed] = useState(120);

  const animateSorting = async () => {
    setDisableBtn(true);
    await bubbleSort({ items, setItems, animationSpeed, setSwappingItems });
    setDisableBtn(false);
  };

  return (
    <>
      <Controller
        items={items}
        setItems={setItems}
        animateSorting={animateSorting}
        disableBtn={disableBtn}
        length={items.length}
        setAnimationSpeed={setAnimationSpeed}
      />
      <AnimatePresence>
        <BarGraph
          animationSpeed={animationSpeed}
          items={items}
          swappingItems={swappingItems}
        />
      </AnimatePresence>
    </>
  );
}
