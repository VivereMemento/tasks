class Emitter {

    constructor() {
        this.events = {}
    }

    on(str, handler) {
        if (this.events.hasOwnProperty(str)) {
            this.events[str].push(handler);
        } else {
            this.events[str] = [];
            this.events[str].push(handler);
        }

    }

    emit(event, data) {
        if (!this.events[event] || !this.events[event].length) {
            return false;
        }

        for (let i = 0, len = this.events[event].length; i < len; i++) {
            this.events[event][i](data);
        }
    };
}

export default Emitter;
