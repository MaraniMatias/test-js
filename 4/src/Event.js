/**
 * @typedef {Object} MyEvent
 * @property {string} message Event message
 * @property {string} type Event type
 */

/**
 * Simple event class implement
 * @class Event
 */
export default class Event {
  /**
   * constructor description
   * @param  {string} message Event message
   * @param  {string} type Event type
   */
  constructor(message, type) {
    this.type = type;
    this.message = message;
  }
}
