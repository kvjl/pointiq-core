import type { ComponentType } from "react";

type CardItemProps = {
  name: string;
  Icon: ComponentType;
};

const CardItem = ({ name, Icon }: CardItemProps) => {
  return (
    <li className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-50 transition">
      <Icon />
      <span className="font-medium">{name}</span>
    </li>
  );
};

export default CardItem;
