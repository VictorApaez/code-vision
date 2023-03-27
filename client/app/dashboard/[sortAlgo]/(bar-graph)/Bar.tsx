import { motion, useAnimation } from "framer-motion";

interface Props {
  item: {
    value: number;
    key: string;
  };
  isSwapping: boolean;
}

export const Bar = ({ item, isSwapping }: Props) => {
  const controls = useAnimation();
  const height = item.value * 5 + "%";

  const swappingStyles = {
    height,
    backgroundColor: "#e4c517",
  };
  const regularStyles = {
    height,
    background: `linear-gradient(0deg, rgba(255,0,0,1) 0%, #6b0505 ${height})`,
    boxShadow: "none",
  };
  return (
    <motion.div
      layout
      id={item.key}
      className="cursor-move transition-colors duration-200 rounded-md w-full mx-1"
      animate={controls}
      style={isSwapping ? swappingStyles : regularStyles}
    />
  );
};
