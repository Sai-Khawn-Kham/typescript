import type { FC } from "react";
import type { ContainerProps } from "../types/PropTypes";

// const Container = ({ children, className} : { children: ReactElement, className: string}) => {
//   return (
//     <div className={` ${className}`}>{children}</div>
//   )
// }

// type ContainerProps = {
//   className?: string;
//   children: ReactElement;
// };
// const Container = ({ children, className }: ContainerProps) => {
//   return <div className={` ${className}`}>{children}</div>;
// };

const Container: FC<ContainerProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <div className={`container mx-auto ${className}`} {...rest}>
      {children}
    </div>
  )
}

export default Container;
