const EventEmiter=require('events');

const eventEmiter=new EventEmiter();

eventEmiter.on('subscribe',(str)=>{
    console.log(`Thanks For Subscribing To ${str}`);
});

eventEmiter.emit("subscribe","College Wallah");