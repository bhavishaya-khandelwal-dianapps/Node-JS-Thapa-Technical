//*=======================================
//* Event Module - Node JS :- 
//*=======================================

//! Event Emitter :-
//? EventEmitter is a core module in Node.js used to create and handle custom events. 
//? It is part of the events module and is often used for building event-driven systems in Node.js






//todo --- Key Methods :- 
//! 1. emit(eventName, [args])
//* Purpose : 
    //? Emits (or triggers) an event with the specified eventName. You can also pass arguments that will be consumed by the listeners.

    //? It's like calling a function, but instead, it triggers all listeners (functions) attatched to the specified event.


//! 2. on(eventName, listener) 
//* Purpose : 
    //? Attaches a listener (a function) to a specified eventName. This listener will execute when the event is emitted. 
    
    