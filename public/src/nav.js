function reviewedUpdate () {
    const reviewedOrders = Database.getReviewed()
    const reviewedTemplate = document.querySelector('[data-reviewed]').content.querySelector('li')
    const mounteElement = document.querySelector('[data-reviewed-list]')
    const liElements = []

    for (const reviewedOrder of reviewedOrders) {
        const liElement = reviewedTemplate.cloneNode(true)

        liElement.innerHTML = liElement.innerHTML
            .replace(/%FULLNAME%/g, reviewedOrder.fullname)
            .replace(/%ID%/g, reviewedOrder.id)

        liElements.push(liElement)
    }

    mounteElement.innerHTML = ''
    mounteElement.append(...liElements)
}