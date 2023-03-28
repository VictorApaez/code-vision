interface SortingAlgo {
  items: Array<{ key: string; value: number }>;
  setItems: (items: Array<{ key: string; value: number }>) => void;
  animationSpeed: number;
  setSwappingItems: (swappingItems: Array<number>) => void;
}

export const quickSort = async ({
  items,
  setItems,
  animationSpeed,
  setSwappingItems,
}: SortingAlgo) => {
  const newItems = [...items];

  const swap = async (
    items: Array<{ key: string; value: number }>,
    leftIndex: number,
    rightIndex: number
  ) => {
    const temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    setSwappingItems([leftIndex, rightIndex]);
    await new Promise((resolve) => setTimeout(resolve, animationSpeed));
  };

  const partition = async (
    items: Array<{ key: string; value: number }>,
    left: number,
    right: number
  ) => {
    const pivot = items[Math.floor((right + left) / 2)].value;
    let i = left;
    let j = right;

    while (i <= j) {
      while (items[i].value < pivot) {
        i++;
      }
      while (items[j].value > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j);
        setSwappingItems([i, j]);
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
        setItems([...items]);
        i++;
        j--;
      }
    }
    return i;
  };

  const quickSortRecursive = async (
    items: Array<{ key: string; value: number }>,
    left: number,
    right: number
  ) => {
    let index;

    if (items.length > 1) {
      index = await partition(items, left, right);
      if (left < index - 1) {
        await quickSortRecursive(items, left, index - 1);
      }
      if (index < right) {
        await quickSortRecursive(items, index, right);
      }
    }
  };

  await quickSortRecursive(newItems, 0, newItems.length - 1);

  setSwappingItems([-1, -1]);
};
