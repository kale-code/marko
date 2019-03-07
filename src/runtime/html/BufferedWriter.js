"use strict";

/**
 * Simple wrapper that can be used to wrap a stream
 * to reduce the number of write calls. In Node.js world,
 * each stream.write() becomes a chunk. We can avoid overhead
 * by reducing the number of chunks by buffering the output.
 */
function BufferedWriter(wrappedStream) {
    this._buffer = "";
    this._wrapped = wrappedStream;
}

BufferedWriter.prototype = {
    write: str => {
        this._buffer += str;
    },

    flush: () => {
        if (this._buffer.length !== 0) {
            this._wrapped.write(this._buffer);
            this._buffer = "";
            if (this._wrapped.flush) {
                this._wrapped.flush();
            }
        }
    },

    end: () => {
        this.flush();
        if (!this._wrapped.isTTY) {
            this._wrapped.end();
        }
    },

    clear: () => {
        this._buffer = "";
    }
};

module.exports = BufferedWriter;
