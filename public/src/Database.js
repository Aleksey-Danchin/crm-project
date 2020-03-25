;(function () {
    "use strict"

    const database = {
        orders: [],
        lastReviewed: {
            maxCount: 4,
            ids: [1, 2, 3]
        }
    }

    restore()

    const api = new EventEmitter

    api.getOrderById = function getOrderById (orderId) {
        for (const order of database.orders) {
            if (order.id === orderId) {
                return getCopy(order)
            }
        }

        return null
    }

    api.addReviewed = function (orderId) {
        if (database.lastReviewed.ids.includes(orderId)) {
            const index = database.lastReviewed.ids.indexOf(orderId)
            database.lastReviewed.ids.splice(index, 1)
            database.lastReviewed.ids.unshift(orderId)
        }

        else {
            database.lastReviewed.ids = [orderId, ...database.lastReviewed.ids].slice(0, database.lastReviewed.maxCount)
        }
        
        save()
        api.emit('reviewed:update')
        api.emit('database:update')
    }

    api.getReviewed = function getReviewed () {
        return database.lastReviewed.ids.map(x => api.getOrderById(x))
    }

    api.seeding = function seeding (orders) {
        Object.assign(database, {
            orders: [],
            lastReviewed: {
                maxCount: 4,
                ids: [1, 2, 3]
            }
        })

        for (const order of orders) {
            api.addOrder(order)
        }

        save()

        api.emit('database:seeding')
    }

    api.updateOrderById = function updateOrderById (orderId, newState) {
        const order = database.orders.find(x => x.id === orderId)

        order.good = newState.good
        order.price = newState.price
        order.fullname = newState.fullname
        order.date = newState.date
        order.status = newState.status

        save()

        api.emit('order:update')
        api.emit('database:update')
    }

    api.addOrder = function addOrder (originalOrders) {
        const id = Math.max(0, ...database.orders.map(x => x.id)) + 1
        const order = Object.assign({
            id: 0,
            fullname: "",
            good: "",
            price: 0,
            status: "new",
            date: Date.now()
        }, getCopy(originalOrders))

        order.id = id

        database.orders.push(order)

        save()

        api.emit("order:added", getCopy(order))
        api.emit("database:update")

        return id
    }

    api.getOrders = function getOrders (originalParams = {}) {
        const param = Object.assign({
            count: 10,
            pageNumber: 1
        }, getCopy(originalParams))

        let orders = database.orders.slice()

        if (typeof param.fullname === 'string') {
            orders = orders.filter(x => x.fullname.toLowerCase().includes(param.fullname.toLowerCase()))
        }

        if (typeof param.good === 'string') {
            orders = orders.filter(x => x.good === param.good)
        }

        if (typeof param.status === 'string' && param.status) {
            orders = orders.filter(x => x.status === param.status)
        }

        if (typeof param.minprice === 'number') {
            orders = orders.filter(x => x.price >= param.minprice)
        }

        if (typeof param.maxprice === 'number') {
            orders = orders.filter(x => x.price <= param.maxprice)
        }

        if (typeof param.mindate === 'number') {
            orders = orders.filter(x => x.date >= param.mindate)
        }

        if (typeof param.maxdate === 'number') {
            orders = orders.filter(x => x.date <= param.maxdate)
        }

        return getCopy({
            pageNumber: param.pageNumber,
            pages: Math.ceil(orders.length / param.count),
            count: param.count,
            orders: orders.slice(
                (param.pageNumber - 1) * param.count,
                param.pageNumber * param.count
            )
        })
    }

    window.Database = api

    function getCopy (obj) {
        return JSON.parse(JSON.stringify(obj))
    }

    function save () {
        localStorage.setItem('__crm__', JSON.stringify(database))
    }

    function restore () {
        if (localStorage.getItem('__crm__')) {
            Object.assign(
                database,
                JSON.parse(localStorage.getItem('__crm__'))
            )
        }
    }
})();