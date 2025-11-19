// Union type for different event types
type ClickEvent = {
  type: 'click';
  x: number;
  y: number;
  button: 'left' | 'right' | 'middle';
};

type KeyboardEvent = {
  type: 'keydown' | 'keyup';
  key: string;
  ctrlKey: boolean;
  shiftKey: boolean;
};

type CustomEvent = {
  type: 'custom';
  data: any;
  source: string;
};

type AppEvent = ClickEvent | KeyboardEvent | CustomEvent;

// Intersection type for event handler with metadata
// type EventHandler = {
//   priority: number;
//   once?: boolean;
// } & (
//   | { event: ClickEvent; handler: (e: ClickEvent) => void }
//   | { event: KeyboardEvent; handler: (e: KeyboardEvent) => void }
//   | { event: CustomEvent; handler: (e: CustomEvent) => void }
// );

// Usage
// function handleEvent(handlerConfig: EventHandler): void {
//   const { event, handler } = handlerConfig;
//   handler(event); // ✅ Type-safe - handler and event types match perfectly
// }



type EventHandler<E extends AppEvent> = {
  priority: number;
  once?: boolean;
  event: E;
  handler: (e: E) => void;
}

function handleEvent<E extends AppEvent>(handlerConfig: EventHandler<E>) {
  handlerConfig.handler(handlerConfig.event);
}