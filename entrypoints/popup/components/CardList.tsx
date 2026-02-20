import CardItem from "./CardItem";
import AppleCardIcon from "./icons/AppleCardIcon";
import BankOfAmericardIcon from "./icons/BankOfAmericardIcon";
import ChaseSapphireIcon from "./icons/ChaseSapphireIcon";

const fakeCards = [
  {
    id: 1,
    name: "Apple Card",
    Icon: AppleCardIcon,
  },
  {
    id: 2,
    name: "Chase Sapphire",
    Icon: ChaseSapphireIcon,
  },
];

const CardList = () => {
  return (
    <div>
      <ul className="w-full max-w-md space-y-3">
        {fakeCards.map(({ id, name, Icon }) => (
          <CardItem key={id} name={name} Icon={Icon} />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
