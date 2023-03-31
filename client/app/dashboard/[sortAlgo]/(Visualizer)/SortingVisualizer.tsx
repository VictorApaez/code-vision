import { BarGraph } from "./barGraph";
import { Controller } from "./Controller";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { bubbleSort } from "@/app/utils/sortingAlgos/bubbleSort";
import { quickSort } from "@/app/utils/sortingAlgos/quickSort";

const initialItems = [
  { key: "item1", value: 20 },
  { key: "item2", value: 15 },
  { key: "item3", value: 10 },
  { key: "item4", value: 10 },
  { key: "item5", value: 8 },
  { key: "item6", value: 3 },
  { key: "item7", value: 6 },
  { key: "item8", value: 9 },
  { key: "item9", value: 19 },
  { key: "item10", value: 9 },
];

interface SortingState {
  pivotIndex: number | null;
  leftIndex: number | null;
  rightIndex: number | null;
}
const initialState: SortingState = {
  pivotIndex: null,
  leftIndex: null,
  rightIndex: null,
};
export default function SortingVisualizer() {
  const [items, setItems] = useState(initialItems);
  const [swappingItems, setSwappingItems] = useState([-1, -1]);
  const [disableBtn, setDisableBtn] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
  const [sortingState, setSortingState] = useState<SortingState>(initialState);

  const animateSorting = async () => {
    setDisableBtn(true);
    await quickSort({
      items,
      setItems,
      animationSpeed,
      setSwappingItems,
      setSortingState,
      sortingState,
    });
    setSortingState(initialState);
    setDisableBtn(false);
  };

  // useEffect(() => console.log(sortingState), [sortingState]);

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
          pivot={sortingState.pivotIndex}
          i={sortingState.leftIndex}
          j={sortingState.rightIndex}
        />
      </AnimatePresence>
    </>
  );
}
