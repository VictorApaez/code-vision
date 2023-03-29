import { motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  item: {
    value: number;
    key: string;
  };
  isSwapping: boolean;
  animationSpeed: number;
}

export const Bar = ({ item, isSwapping, animationSpeed }: Props) => {
  const height = item.value * 5 + "%";
  const swappingStyles = {
    height,
    backgroundColor: "#050c59",
    boxShadow: "2px 2px 10px 5px #7984f5",
  };
  const regularStyles = {
    height,
    backgroundColor: `rgb(191, 25, 25)`,
    boxShadow: "none",
  };

  return (
    <motion.div
      layout
      id={item.key}
      className={`cursor-move transition-colors duration-200 rounded-md w-full`}
      style={{
        ...(isSwapping ? swappingStyles : regularStyles),
        margin: `0 ${15}px`,
      }}
      transition={{ duration: animationSpeed / 1000 }}
    />
  );
};
