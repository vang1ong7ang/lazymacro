Object.defineProperties(Object.prototype, {
    PIPE: { value: function (f) { return f(this) } },
    WITH: { value: function (f) { f(this); return this } },
    THEN: { value: function (f) { return this.then(f) } },
    WAIT: { value: async function (f) { await this.then(f); return this } },
    XMAP: { value: function (f) { const ret = []; for (var k in this) { ret.push(f(this[k], k)); } return ret } },

    PIPETHIS: { value: function (f) { return f.apply(this) } },
    WITHTHIS: { value: function (f) { f.apply(this); return this } },
    THENTHIS: { value: function (f) { return this.then(v => f.apply(v)) } },
    WAITTHIS: { value: async function (f) { await this.then(v => f.apply(v)); return this } },
    XMAPTHIS: { value: function (f) { const ret = []; for (var k in this) { ret.push(f.apply(this[k], [k])); } return ret } },
})
