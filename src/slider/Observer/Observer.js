export default class Observer {

   constructor () {
      this.observers = {};
   }

   subscribe (eventType, observer) {
      if (!Object.prototype.hasOwnProperty.call(this.observers, eventType)) {
         this.observers[eventType] = [];
      }
      this.observers[eventType].push(observer);
   }

   unsubscribe (eventType, observer) {
      this.observers[eventType] = this.observers[eventType].filter(
         (registeredObserver) => registeredObserver !== observer
      );
   }

   notify (eventType) {
      if (Object.prototype.hasOwnProperty.call(this.observers, eventType)) {
         this.observers[eventType].forEach((registeredObserver) =>
            registeredObserver.update(eventType)
         );
      }
   }

}