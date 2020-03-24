;(function () {
    Router.on('hash:change', update)
    Database.on('database:change', update)

    const state = {
        pageNumber: 1,
        fullname: null,
        good: null,
        status: null,
        minprice: null,
        maxprice: null,
        mindate: null,
        maxdate: null
    }

    init()
    update()

    function init () {
        const hash = decodeURI(location.hash).substr(1)

        try {
            const startState = JSON.parse(hash)
            Object.assign(state, startState)
        }
        catch (err) {
            if (location.hash !== '') {
                location.hash = ''
            }
        }

        byFilters(f => {
            if (state[f]) {
                document.querySelector(`[data-filter-${f}]`).value = state[f]
            }
        })

        document
            .querySelector('[data-pagenumbers]')
            .addEventListener('click', element => {
                const pageNumber = parseInt(element.target.closest('li').dataset.page)
                setState({ pageNumber })
            })
        
        byFilters(setFilterHandler)
    }

    function update () {
        const { pages, count, orders, pageNumber } = Database.getOrders(state)

        updateTable(orders)
        updatePageNumbers(pages, pageNumber)
    }

    function setState (x) {
        if (typeof x === "object") {
            Object.assign(state, x)
        }

        else if (typeof x === "fucntion") {
            x(state)
        }

        const copyState = {}

        if (state.pageNumber > 1) copyState.pageNumber = state.pageNumber

        byFilters(f => { if (state[f]) copyState[f] = state[f]})

        if (!Object.keys(copyState).length) {
            location.hash = ''
        } else {
            location.hash = JSON.stringify(copyState)
        }

        update()
    }

    function updatePageNumbers (pages, pageNumber) {
        const mountElement = document.querySelector('[data-pagenumbers]')
        mountElement.innerHTML = ''

        for (let i = 0; i < pages; i++) {
            const liElement = document.createElement('li')
            liElement.classList.add('page-item')
            liElement.dataset.page = i + 1

            if (i + 1 === pageNumber) {
                liElement.classList.add('active')
            }

            const aElement = document.createElement('a')
            aElement.classList.add('page-link')
            aElement.textContent = i + 1

            liElement.append(aElement)
            mountElement.append(liElement)
        }
    }

    function updateTable (orders) {
        const tbodyElement = document.querySelector('[data-orders]')
        const trTemplate = document.querySelector('[data-orderrow]').content.querySelector('tr')

        const priceFormator = new Intl.NumberFormat('ru-RU', {
            style: "currency",
            currency: "RUB"
        })

        const dateFormator = new Intl.DateTimeFormat('ru-RU', {
            hour12: false,
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })

        const getStatusColor = x => {
            if (x === 'new') return 'primary'
            if (x === 'process') return 'warning'
            if (x === 'back') return 'danger'
            if (x === 'archived') return 'dark'
        }

        tbodyElement.innerHTML = ''

        for (const order of orders) {
            const trElement = trTemplate.cloneNode(true)

            trElement.innerHTML = trElement.innerHTML
                .replace(/%ID%/g, order.id)
                .replace(/%FULLNAME%/g, order.fullname)
                .replace(/%GOOD%/g, order.good)
                .replace(/%STATUS_TEXT%/g, order.status)
                .replace(/%STATUS_COLOR%/g, getStatusColor(order.status))
                .replace(/%PRICE%/g, priceFormator.format(order.price))
                .replace(/%DATE%/g, dateFormator.format(order.date))
            
            tbodyElement.append(trElement)
        }
    }

    function setFilterHandler (filterName) {
        const handler = x => {
            let value = x.target.value || null

            if (Number(value)) {
                value = Number(value)
            }

            setState({
                pageNumber: 1,
                [filterName]: value
            })
        }

        const element = document.querySelector(`[data-filter-${filterName}]`)
        element.addEventListener('keyup', handler)
        element.addEventListener('change', handler)
    }

    function byFilters (handler) {
        "fullname good status minprice maxprice mindate maxdate".split(' ').forEach(handler)
    }
})();