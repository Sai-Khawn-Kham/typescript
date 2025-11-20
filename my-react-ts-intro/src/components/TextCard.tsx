import type { ReactElement } from "react";

type TextCardProps = {
  heading: string;
  description: string;
  icon: ReactElement;
};

// const TextCard: FC<TextCardProps> = ({ heading, description, icon }) => {
//   return (
//     <div className="border-2 p-5">
//       <h1 className="text-3xl font-semibold flex items-center gap-x-2">{icon}<span>{heading}</span></h1>
//       <p>{description}</p>
//     </div>
//   )
// }

function TextCard({ heading, description, icon }: TextCardProps) {
  return (
    <div className={`border-2 border-stone-600 p-5`}>
      {icon}
      <h1 className="text-stone-600 font-bold text-2xl">{heading}</h1>
      <p className="text-stone-500">{description}</p>
    </div>
  );
}

export default TextCard;
