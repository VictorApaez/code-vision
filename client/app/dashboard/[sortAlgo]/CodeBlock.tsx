import { CopyBlock, dracula } from "react-code-blocks";

export default function CodeBlock() {
  const code = `
function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const less = [];
  const greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quicksort(less), pivot, ...quicksort(greater)];
}
`;
  return (
    <CopyBlock
      text={code}
      language="javascript"
      showLineNumbers="true"
      wrapLines
      theme={dracula}
      textStyles={{ fontSize: "12px" }}
    />
  );
}
