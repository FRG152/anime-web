import { Button } from "./ui/button";

interface Props {
  icon?: React.ReactElement;
  text: string;
  styles?: string;
}

const ButtonComponent = ({ icon, text, styles }: Props) => {
  return (
    <Button
      variant="default"
      className={`flex items-center rounded-full p-6 hover:bg-primary hover:text-primary-foreground hover:shadow-xs ${styles}`}
    >
      {icon && <span>{icon}</span>}
      <p className="text-md font-semibold">{text}</p>
    </Button>
  );
};

export default ButtonComponent;
