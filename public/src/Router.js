;(function () {
    "use strict"

    const Router = window.Router = window.Router || new EventEmitter

    window.addEventListener('popstate', () => Router.emit('hash:update'))
})();