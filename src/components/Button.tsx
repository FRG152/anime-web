import { Button } from "./ui/button";

interface Props {
  icon?: React.ReactElement;
  text: string;
  styles?: string;
}

const ButtonComponent = ({ icon, text, styles }: Props) => {
  return (
    <Button className={`${styles} flex items-center rounded-full p-6`}>
      <span>{icon && icon}</span>
      <p className="text-md font-semibold">{text}</p>
    </Button>
  );
};

export default ButtonComponent;
