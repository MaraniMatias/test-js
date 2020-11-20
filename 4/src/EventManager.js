/// <reference path="Event.js" />

export default class EventManager {
  /**
   *  @param {Array<{second:string,event:MyEvent}>} events Events list
   */
  constructor(events) {
    this.events = events;
  }

  run() {
    // implement your code here...
    console.log("RUNNING");
    this.events.forEach(({ second, event }) => {
      console.log(`> At second ${second}: ${JSON.stringify(event)}`);
    });
  }
}
