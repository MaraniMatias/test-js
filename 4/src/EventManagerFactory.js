import EventManager from "./EventManager";
import Event from "./Event";

export default class EventManagerFactory {
  /**
   *  @param {Array<({second:Number, message: String, type:String})>} events Events list
   *  @param {String[]} types Event type to show
   */
  static create(events, types) {
    // console.log(events, types);

    const validEventTypes = new Set(types);
    const validEvents = events
      .filter((event) => validEventTypes.has(event.type))
      .map((ev) => new Event(ev.message, ev.type, ev.second));

    // events.forEach((event) => {
    //   if (typeEventValid.has(event.type)) {
    //     const ev = new Event(event.message, event.type);
    //     console.log(`> At second ${event.second}:`, ev);
    //     console.log(`> At second ${event.second}: ${JSON.stringify(ev)}`);
    //   } else {
    //     console.info("Skip event type:", event.type);
    //   }
    // });

    return new EventManager(validEvents);
  }
}

