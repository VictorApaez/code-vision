interface SortingState {
  pivotIndex: number | null;
  leftIndex: number | null;
  rightIndex: number | null;
}

interface SortingAlgo {
  items: Array<{ key: string; value: number }>;
  setItems: (items: Array<{ key: string; value: number }>) => void;
  animationSpeed: number;
  setSwappingItems: (swappingItems: Array<number>) => void;
  setSortingState: (sortingState: SortingState) => void;
}

export const quickSort = async ({
  items,
  setItems,
  animationSpeed,
  setSwappingItems,
  setSortingState,
}: SortingAlgo) => {
  let arrCopy = [...items];

  async function swapByIdx(arr, left, right) {
    [arr[left], arr[left]] = [arr[left], arr[left]];
    setItems(arr);
    setSortingState({ pivotIndex: right, leftIndex: left, rightIndex: right });
    await new Promise((resolve) => setTimeout(resolve, animationSpeed));
  }

  async function partition(arr, left, right) {
    let pivotIndex = Math.floor((left + right) / 2);
    let pivot = arr[pivotIndex].value; //middle element
    let i = left;
    let j = right;

    setSortingState({ pivotIndex, leftIndex: left, rightIndex: right });
    await new Promise((resolve) => setTimeout(resolve, animationSpeed));

    while (i <= j) {
      while (arr[i].value < pivot) {
        i++;
        setSortingState({ pivotIndex, leftIndex: i, rightIndex: j });
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      }
      while (arr[j].value > pivot) {
        j--;
        setSortingState({ pivotIndex, leftIndex: i, rightIndex: j });
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      }
      if (i <= j) {
        await swapByIdx(arr, i, j);
        i++;
        j--;
        setSortingState({ pivotIndex, leftIndex: i, rightIndex: j });
        await new Promise((resolve) => setTimeout(resolve, animationSpeed));
      }
    }
    return i;
  }

  async function sort(arr, left, right) {
    if (arr.length <= 1) return arr;
    if (left < right) {
      let index = await partition(arr, left, right);
      await sort(arr, left, index - 1);
      await sort(arr, index, right);
    }
    return arr;
  }

  const test = await sort(arrCopy, 0, arrCopy.length - 1);
  console.log(test);
  setItems(test);
  setSwappingItems([-1, -1]);
};
