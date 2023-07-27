const Eventlistener=require('events');

const eventListner= new Eventlistener();

const maxEventListner=eventListner.getMaxListeners();
console.log(`The Default Number Of Maximum Event Listner is ${maxEventListner}`);

eventListner.setMaxListeners(5);
console.log("Updated Number Of Maximum Event Listner: ",eventListner.getMaxListeners());

const subscribeHandler = () => {
    console.log('User has subscribed!');
  };

  for(let i=0; i<15;i++){
    eventListner.on('subscribe',subscribeHandler)
  }

  eventListner.emit('subscribe');