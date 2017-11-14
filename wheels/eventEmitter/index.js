/**
 * @description 一个简单的eventEmitter，实现时间订阅和发布，原生JavaScript实现
 * @author xiaojie6170@gmail.com
 */
'use strict';

class EventEmitter {
    constructor() {
        this.VERSION = '0.0.2';
        this._events = {};
    }

    /**
     * 监听函数校验
     * @param {Function} listener 监听函数
     */
    isValidListener(listener) {
        if (typeof listener === 'function') {
            return true;
        } else if (listener && typeof listener === 'object') {
            return this.isValidListener(listener.listener);
        } else {
            return false;
        }
    }

    /**
     * 注册事件
     * @param {String} evnetName 自定义时间名称
     * @param {Function} listener 监听函数
     * @return {Object} this 实体，方便链式调用
     */
    on(evnetName, listener) {
        if (!evnetName || !listener) return;

        if (!this.isValidListener(listener)) {
            throw new TypeError('listener must be a function');
        }

        let events = this._events;
        let listeners = events[evnetName] = events[evnetName] || [];
        let listenerIsWrapped = typeof listener === 'object';

        // 判重
        if (listeners.indexOf(listener) === -1) {
            listeners.push(listenerIsWrapped ? listener : {
                listener: listener,
                once: false
            });
        }

        return this;
    }

    /**
     * 注册只执行一次的事件
     * @param {String} eventName 自定义事件名称
     * @param {Function} listener 监听函数
     * @return {Object} this
     */
    once(eventName, listener) {
        return this.on(eventName, {
            listener: listener,
            once: true
        });
    }

    /**
     * 销毁某个正在被监听的事件的某个函数
     * @param {String} eventName 自定义事件名称
     * @param {Function} listener 监听函数
     * @return {Object} this
     */
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
            listeners.splice(ps, 1);
        }

        return this;
    }

    /**
     * 触发事件
     * @param {String} eventName 自定义事件名称
     * @param {Array} argvs 参数数组
     * @return {Object} this
     */
    emit(eventName, argvs) {
        if (!eventName) return;
        
        let listeners = this._events[eventName] || [];
        if (!listeners.length) {
            console.warn('there is no event named : ' + eventName);
            return;
        }
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

    /**
     * 销毁某个事件的所有函数
     * @param {String} eventName 需要销毁的事件名称
     */
    allOff(eventName) {
        if (eventName && this._events[eventName]) {
            this._events[eventName] = [];
        } else {
            this._events = {};
        }
    }
}
module.exports = EventEmitter;