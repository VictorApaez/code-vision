import { motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  item: {
    value: number;
    key: string;
  };
  isSwapping: boolean;
  animationSpeed: number;
  pivot: boolean;
  i: boolean;
  j: boolean;
}

export const Bar = ({
  item,
  isSwapping,
  animationSpeed,
  pivot,
  i,
  j,
}: Props) => {
  const height = item.value * 4.5 + "%";
  const swappingStyles = {
    height,
    // backgroundColor: "#050c59",
    boxShadow: "2px 2px 10px 5px #7984f5",
  };
  const regularStyles = {
    height,
    boxShadow: "none",
  };

  let color;
  if (i) {
    color = "#2dba36";
  } else if (j) {
    color = "#ff21cf";
  } else if (pivot) {
    color = "#fff133";
  } else {
    color = "rgb(191,25,25)";
  }

  return (
    <div className="flex flex-1 h-full items-center justify-end flex-col m-[5px]">
      {i && <p className="transition-all">i</p>}
      {j && <p>j</p>}
      {pivot && <p>pivot</p>}
      <motion.div
        layout
        id={item.key}
        className={`cursor-move transition-colors duration-200 rounded-md w-full`}
        style={{
          ...(isSwapping ? swappingStyles : regularStyles),
          backgroundColor: color,
        }}
        transition={{ duration: animationSpeed / 1000 }}
      />
    </div>
  );
};
