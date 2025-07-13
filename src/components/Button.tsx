"use client";

import { Button } from "./ui/button";

interface Props {
  icon?: React.ReactElement;
  text: string;
  styles?: string;
  eventButton?: () => void;
}

const ButtonComponent = ({ icon, text, styles, eventButton }: Props) => {
  return (
    <Button
      variant="default"
      onClick={eventButton}
      className={`flex items-center rounded-full p-6 hover:bg-primary hover:text-primary-foreground hover:shadow-xs ${styles}`}
    >
      {icon && icon}
      <p className="text-md font-semibold">{text}</p>
    </Button>
  );
};

export default ButtonComponent;
