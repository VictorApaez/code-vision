import { Bar } from "./Bar";
interface barGraphProps {
  animationSpeed: number;
  items: Array<{ key: string; value: number }>;
  swappingItems: Array<number>;
  pivot: number | null;
  i: number | null;
  j: number | null;
}
export function BarGraph({
  animationSpeed,
  items,
  swappingItems,
  pivot,
  i,
  j,
}: barGraphProps) {
  return (
    <div className="flex flex-1 justify-evenly items-end box-border	">
      {items.map((item, index) => (
        <Bar
          key={item.key}
          item={item}
          isSwapping={swappingItems.includes(index)}
          animationSpeed={animationSpeed}
          pivot={index === pivot}
          i={index === i}
          j={index === j}
        />
      ))}
    </div>
  );
}
