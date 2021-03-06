import EventManager from "./EventManager";
import Event from "./Event";

export default class EventManagerFactory {
  /**
   *  @param {Array<({second:Number, message: String, type:String})>} events Events list
   *  @param {String[]} types Event type to show
   */
  static create(events, types) {
    const validEvents = events
      .filter((event) => types.includes(event.type))
      .map((ev) => ({
        second: ev.second,
        event: new Event(ev.message, ev.type),
      }));

    return new EventManager(validEvents);
  }
}
