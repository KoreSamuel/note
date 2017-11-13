'use strict';

class EventEmitter {
    constructor() {
        this.VERSION = '0.0.1';
        this._events = {};
    }

    isValidListener(listener) {
        if (typeof listener === 'function') {
            return true;
        } else if (listener && typeof listener === 'object') {
            return isValidListener(listener.listener);
        } else {
            return false;
        }
    }

    on(evnetName, listener) {
        if (!evnetName || !listener) return;

        if (!this.isValidListener) {
            throw new TypeError('listener must be a function');
        }

        let events = this._events;
        let listeners = events[evnetName] = events[evnetName] || [];
        let listenerIsWrapped = typeof listener === 'object';

        if (listeners.indexOf(listener) === -1) {
            listeners.push(listenerIsWrapped ? listener : {
                listener: listener,
                once: false
            });
        }

        return this;
    }

    once(eventName, listener) {
        return this.on(eventName, {
            listener: listener,
            once: true
        });
    }

    off(eventName, listener) {
        let listeners = this._events[eventName];
        if (!listeners) return;

        let ps;
        listeners.forEach((item, index) => {
            if (item && item.listener === listener) {
                ps = index;
                return;
            }
        });

        if (typeof ps !== 'undefined') {
            listeners.splice(ps, 1, null);
        }

        return this;
    }

    emit(eventName, argvs) {
        let listeners = this._events[eventName];
        if (!listeners) return;

        listeners.forEach((item, index) => {
            if (item) {
                item.listener.apply(this, argvs || []);
                if (item.once) {
                    this.off(eventName, item.listener);
                }
            }
        });

        return this;
    }

    allOff(eventName) {
        if (eventName && this._events[eventName]) {
            this._events[eventName] = [];
        } else {
            this._events = {};
        }
    }
}
module.exports = EventEmitter;