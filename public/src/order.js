document.querySelector('[data-send]').addEventListener('click', () => {
    const newOrder = {
        fullname: document.querySelector('[data-fullname]').value,
        good: document.querySelector('[data-good]').value,
        price: parseInt(document.querySelector('[data-price]').value)
    }

    const id = Database.addOrder(newOrder)
    location.href = `/public/editor.html#{"id":${id}}`
})