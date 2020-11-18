/**
 * @typedef {Object} MyEvent
 * @property {string} message Event message
 * @property {string} type Event type
 * @property {number} second Event second
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
   * @param  {number} second Event second
   */
  constructor(message, type, second) {
    this.type = type;
    this.message = message;
    this.second = second;
  }
}
