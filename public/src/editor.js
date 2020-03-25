const state = {
    order: null
}

Router.on('hash:change', update)
Database.on('order:update', update)

update()

function update () {
    const param = JSON.parse(decodeURI(location.hash).slice(1))
    const order = Database.getOrderById(param.id)

    setState({ order })

    Database.addReviewed(order.id)

    document.querySelector('[data-order-id]').value = state.order.id
    document.querySelector('[data-order-fullname]').value = state.order.fullname
    document.querySelector('[data-order-good]').value = state.order.good
    document.querySelector('[data-order-status]').value = state.order.status
    document.querySelector('[data-order-price]').value = state.order.price

    const date = new Date(state.order.date)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    document.querySelector('[data-order-date]').value = `${year}-${month}-${day}`

    document.querySelector('[data-btn-save]').addEventListener('click', () => {
        const date = new Date(document.querySelector('[data-order-date]').value)

        const newOrderState = {
            fullname: document.querySelector('[data-order-fullname]').value,
            good: document.querySelector('[data-order-good]').value,
            status: document.querySelector('[data-order-status]').value,
            date: date.getTime(),
            price: parseInt(document.querySelector('[data-order-price]').value)
        }

        Database.updateOrderById(state.order.id, newOrderState)
        alert('Сохранено')
    })

    reviewedUpdate()
}

function setState (x) {
    if (typeof x === "object") {
        Object.assign(state, x)
    }

    else if (typeof x === "fucntion") {
        x(state)
    }
}