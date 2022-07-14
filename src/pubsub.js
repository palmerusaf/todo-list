export const pubsub = {
  events: {},
  subscribe: function (eventName, callbackFuncToSub) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callbackFuncToSub);
  },
  publish: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callbackFunc) => {
        callbackFunc(data);
      });
    }
  },
};
