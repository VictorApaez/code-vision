interface SortingAlgo {
  items: Array<{ key: string; value: number }>;
  setItems: (items: Array<{ key: string; value: number }>) => void;
  animationSpeed: number;
  setSwappingItems: (swappingItems: Array<number>) => void;
}

export const bubbleSort = async ({
  items,
  setItems,
  animationSpeed,
  setSwappingItems,
}: SortingAlgo) => {
  let newItems = [...items];
  let sortedItems = false;

  while (!sortedItems) {
    sortedItems = true;
    for (let i = 0; i < newItems.length - 1; i++) {
      setSwappingItems([i, i + 1]);
      await new Promise((resolve) => setTimeout(resolve, animationSpeed));

      if (newItems[i].value > newItems[i + 1].value) {
        sortedItems = false;
        const temp = newItems[i];
        newItems[i] = newItems[i + 1];
        newItems[i + 1] = temp;

        setItems([...newItems]);
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      }
    }
  }

  setSwappingItems([-1, -1]);
};
