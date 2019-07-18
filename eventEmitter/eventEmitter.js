const emitter = require('events').EventEmitter();

class EventEmitter {
    constructor() {

    }
    
    /**
     * Fire a listener.
     * @param {string} name 
     */
    emit(name) {
        emitter.emit(name);
    }

    /**
     * Fire a listener based on a number of arguments needed for the function.
     * @param {string} name 
     * @param {*Any} parm1 
     * @param {*Any} parm2 
     * @param {*Any} parm3 
     */
    emitWithParms(name, parm1, parm2, parm3) {
        if(parm3) {
            emitter.emit(name, parm1, parm2, parm3);
        } else if(parm2) {
            emitter.emit(name, parm1, parm2);
        } else if(parm1) {
            emitter.emit(name, parm1);
        } else {
            emitter.emit(name);
        }
    }

    /**
     * Fire a listener only once.
     * @param {string} name 
     */
    emitOnce(name) {
        emitter.once(name);
    }

    /**
     * Register a listener to the event emitter.
     * @param {string} name 
     * @param {*function} cb 
     */
    register(name, cb) {
        emitter.on(name, cb);
    }

    /**
     * Remove a listener from the event emitter in order to release from memory.
     * @param {string} name 
     * @param {*function} cb 
     */
    unregister(name, cb) {
        emitter.off(name, cb);
    }

    /**
     * Return a number of listeners assigned by the same name.
     * @param {string} name 
     */
    GetListenerCount(name) {
        return emitter.listenerCount(name);
    }
}

module.exports = EventEmitter;
