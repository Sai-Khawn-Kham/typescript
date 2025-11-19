import type { FC, ReactElement } from "react";

type TextCardProps = {
  heading: string;
  description: string;
  icon: ReactElement;
}

const TextCard: FC<TextCardProps> = ({ heading, description, icon }) => {
  return (
    <div className="border-2 p-5">
      <h1 className="text-3xl font-semibold flex items-center gap-x-2">{icon}<span>{heading}</span></h1>
      <p>{description}</p>
    </div>
  )
}

export default TextCard