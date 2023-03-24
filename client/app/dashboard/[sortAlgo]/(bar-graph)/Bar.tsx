import { motion, useAnimation } from "framer-motion";

export interface Props {
  item: {
    value: number;
    key: string;
  };
  isSwapping: boolean;
}
export const Bar = ({ item, isSwapping }: Props) => {
  const controls = useAnimation();
  const swappingStyles = {
    height: item.value * 5 + "%",
    minWidth: "50px",
    backgroundColor: "#e4c517",
  };
  const regularStyles = {
    height: item.value * 5 + "%",
    background: `linear-gradient(0deg, rgba(255,0,0,1) 0%, #6b0505 ${
      item.value * 5
    }%)`,
    minWidth: "50px",
    boxShadow: "none",
  };
  return (
    <motion.div
      layout
      id={`${item.key}`}
      className={`p-3 cursor-move transition-colors duration-200 rounded-md`}
      animate={controls}
      style={isSwapping ? swappingStyles : regularStyles}
    ></motion.div>
  );
};
