// Define a union type 'EventType' that includes 'click', 'scroll', and 'mousemove' events
type EventType = 'click' | 'scroll' | 'mousemove';

// Use the Exclude utility type to create a new type 'ExcludeType' 
// that excludes 'scroll' from the 'EventType', resulting in 'click' | 'mousemove'
type ExcludeType = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

// Define a function 'handleEvent' that accepts an argument of type 'ExcludeType'
// This means the function can only handle 'click' or 'mousemove' events, not 'scroll'
const handleEvent = (event: ExcludeType) => {
    // Log the event type being handled
    console.log(`Handling Event: ${event}`);
}

// Call the function with 'click' event, which is a valid type for 'ExcludeType'
// The console will log: Handling Event: click
handleEvent('click'); // Handling Event: click
