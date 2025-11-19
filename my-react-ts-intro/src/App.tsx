import { Code, Home } from "lucide-react";
import Container from "./components/Container";
import TextCard from "./components/TextCard";
import Button from "./components/Button";

function App() {
  return (
    <main>
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
          icon={<Home />}
        />
        <div className="flex gap-3">
          <Button>Plain</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="solid">Outline</Button>
        </div>
      </Container>
    </main>
  );
}

export default App;
