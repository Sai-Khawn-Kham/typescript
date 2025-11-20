import { Book, Code, HomeIcon } from "lucide-react";
import Container from "./Container";
import TextCard from "./TextCard";
import Button from "./Button";
import type { MouseEvent } from "react";

const Preview = () => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("u click", e.target);
  };
  return (
    <Container className="p-5 space-y-5">
      <TextCard
        heading="React"
        description="A JavaScript library for building user interfaces, especially reusable UI components."
        icon={<Code />}
      />
      <TextCard
        heading="TypeScript"
        description="A typed superset of JavaScript that adds static types, enabling better tooling, catching errors early, and improving code readability."
        icon={<Code />}
      />
      <TextCard
        heading="React + TypeScript"
        description="Using React’s component model together with TypeScript’s type system to build safer, more maintainable front-end applications."
        icon={<Code />}
      />
      <TextCard
        heading="Hello React & TS"
        description="Using React + TypeScript means writing React components where props, state, and functions have types, giving you better tooling and fewer bugs."
        icon={<HomeIcon />}
      />
      <TextCard
        icon={<Book />}
        heading="Hello Par"
        description="San kyi tar par byar"
      />
      <div className="space-x-5">
        <Button variant="solid" onClick={handleClick}>
          Click Me
        </Button>
        <Button variant="outline">Click Me</Button>
        <Button>Click Me</Button>
      </div>
    </Container>
  );
};

export default Preview;
