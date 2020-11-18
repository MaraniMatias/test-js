/// <reference path="Event.js" />

export default class EventManager {
  /**
   *  @param {MyEvent[]} events Events list
   */
  constructor(events) {
    this.events = events;
  }

  run() {
    // implement your code here...
    console.log("RUNNING");
    this.events.forEach((ev) => {
      console.log(`> At second ${ev.second}:`, ev);
      console.log(`> At second ${ev.second}: ${JSON.stringify(ev)}`);
    });
  }
}
