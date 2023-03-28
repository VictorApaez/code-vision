import { Bar } from "./Bar";
interface barGraphProps {
  animationSpeed: number;
  items: Array<{ key: string; value: number }>;
  swappingItems: Array<number>;
}
export function BarGraph({
  animationSpeed,
  items,
  swappingItems,
}: barGraphProps) {
  return (
    <div className="flex flex-1 justify-evenly items-end box-border	">
      {items.map((item, index) => (
        <Bar
          key={item.key}
          item={item}
          isSwapping={swappingItems.includes(index)}
          animationSpeed={animationSpeed}
        />
      ))}
    </div>
  );
}
