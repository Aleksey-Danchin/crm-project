;(function () {
    "use strict"

    const database = {
        orders: [],
        lastReviewed: {
            maxCount: 4,
            ids: []
        }
    }

    const api = new EventEmitter

    api.getOrderById = function getOrderById (orderId) {
        for (const order of database.orders) {
            return getCopy(order)
        }

        return null
    }

    api.seeding = function seeding (orders) {
        for (const order of orders) {
            api.addOrder(order)
        }

        api.emit('database:seeding')
    }

    api.addOrder = function addOrder (originalOrders) {
        const id = Math.max(0, ...database.orders.map(x => x.id)) + 1
        const order = Object.assign({
            id: 0,
            fullname: "",
            good: "",
            sum: 0,
            status: "new",
            date: Date.now()
        }, getCopy(originalOrders))

        order.id = id

        database.orders.push(order)

        api.emit("order:added", getCopy(order))
        api.emit("database:update")
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

        if (typeof param.status === 'string') {
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
})();