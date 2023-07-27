const EventEmiter=require('events');

const eventEmiter=new EventEmiter();

const subscribeHandeller=(str)=>{
    console.log(`Thanks For Subscribing To ${str}`);
}

eventEmiter.on('subscribe',subscribeHandeller);

eventEmiter.emit("subscribe","College Wallah");

eventEmiter.off('subscribe',subscribeHandeller);

eventEmiter.emit("subscribe","College Wallah");

// As we can see, when we call the event the first time, the event handler is triggered, and the message 
// "User has subscribed!" is displayed in the console. However, after removing the event handler using the
//  off method, the event is no longer associated with any handlers. So, when we call the event again,
//   nothing happens, and there will be no output in the console.

// It's important to note that removing an event handler does not remove the event itself from the EventEmitter.
// The event can still be triggered, but it won't have any registered handlers to respond to it.

// In real-world scenarios, removing event handlers can be useful when you dynamically subscribe and
// unsubscribe to events based on certain conditions or application states. Removing event 
// handlers can help manage memory usage and prevent unwanted side effects when they are no longer needed.