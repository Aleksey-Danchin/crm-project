;(function () {
    // const names = "Алексей Серьгей Павел Олег Максим Тимофей Родион Виталик Александр Мария Анастасия Ольга Татьяна Ирина Лариса Марина Полина Ксюша Дмитрий".split(' ')
    // const surnames = "Ока Соколенко Батонов Мельник Чечорин Каплер Соловей Марьянко Редкий Плохих Вечеренко".split(' ')
    // const goods = 'Фотоальбом, Бумага для принтера, Краски для принтера, Полимерная ванна, Карандаши, Ручка, Штриховка, Канцелярский нож'.split(', ')
    // const prices = [1400, 510, 2100, 785, 14, 20, 23, 55]
    // const statuses = "new process back archived".split(' ')

    // const startDate = Date.now() - 100 * 24 * 60 * 60 * 1000
    // const endDate = Date.now() - 3 * 24 * 60 * 60 * 1000

    // let orders = []
    // for (let i = 0; i < 100; i++) {
    //     const order = {}
    //     const n = getRandom(0, goods.length - 1)

    //     order.fullname = `${getRandomItem(names)} ${getRandomItem(surnames)}`
    //     order.status = getRandomItem(statuses)
    //     order.good = goods[n]
    //     order.price = prices[n]
    //     order.date = getRandom(startDate, endDate)

    //     orders.push(order)
    // }

    // orders = orders.sort((a, b) => a.date - b.date)
    // orders.forEach((x, i) => x.id = i + 1)

    // console.log(JSON.stringify(orders, null, 4))

    // function getRandom (min, max) {
    //     return min + Math.floor(Math.random() * (max - min + 1))
    // }

    // function getRandomItem (array) {
    //     return array[getRandom(0, array.length - 1)]
    // }
    
    const orders = [
        { fullname: "Александр Марьянко", status: "archived", good: "Полимерная ванна", price: 785, date: 1576449535403, id: 1 },
        { fullname: "Анастасия Соловей", status: "new", good: "Бумага для принтера", price: 510, date: 1576736711112, id: 2 },
        { fullname: "Павел Плохих", status: "archived", good: "Карандаши", price: 14, date: 1576833022095, id: 3 },
        { fullname: "Ксюша Марьянко", status: "process", good: "Фотоальбом", price: 1400, date: 1576875334316, id: 4 },
        { fullname: "Полина Соколенко", status: "back", good: "Карандаши", price: 14, date: 1576931499781, id: 5 },
        { fullname: "Алексей Батонов", status: "archived", good: "Штриховка", price: 23, date: 1576948405095, id: 6 },
        { fullname: "Дмитрий Соколенко", status: "process", good: "Полимерная ванна", price: 785, date: 1576984028556, id: 7 },
        { fullname: "Анастасия Соловей", status: "new", good: "Фотоальбом", price: 1400, date: 1577059505561, id: 8 },
        { fullname: "Родион Мельник", status: "process", good: "Краски для принтера", price: 2100, date: 1577067847215, id: 9 },
        { fullname: "Алексей Ока", status: "process", good: "Карандаши", price: 14, date: 1577144363115, id: 10 },
        { fullname: "Ирина Вечеренко", status: "new", good: "Полимерная ванна", price: 785, date: 1577178481864, id: 11 },
        { fullname: "Ирина Соловей", status: "archived", good: "Ручка", price: 20, date: 1577213939274, id: 12 },
        { fullname: "Полина Плохих", status: "archived", good: "Краски для принтера", price: 2100, date: 1577296193485, id: 13 },
        { fullname: "Ирина Плохих", status: "process", good: "Канцелярский нож", price: 55, date: 1577313527818, id: 14 },
        { fullname: "Татьяна Плохих", status: "new", good: "Канцелярский нож", price: 55, date: 1577323764619, id: 15 },
        { fullname: "Анастасия Батонов", status: "process", good: "Бумага для принтера", price: 510, date: 1577340210623, id: 16 },
        { fullname: "Алексей Вечеренко", status: "process", good: "Штриховка", price: 23, date: 1577372104268, id: 17 },
        { fullname: "Олег Соколенко", status: "archived", good: "Ручка", price: 20, date: 1577380196895, id: 18 },
        { fullname: "Мария Вечеренко", status: "process", good: "Ручка", price: 20, date: 1577413768435, id: 19 },
        { fullname: "Лариса Плохих", status: "back", good: "Карандаши", price: 14, date: 1577464383028, id: 20 },
        { fullname: "Мария Соловей", status: "archived", good: "Ручка", price: 20, date: 1577579184013, id: 21 },
        { fullname: "Ирина Ока", status: "process", good: "Фотоальбом", price: 1400, date: 1577660384384, id: 22 },
        { fullname: "Павел Соколенко", status: "new", good: "Карандаши", price: 14, date: 1577713764358, id: 23 },
        { fullname: "Мария Редкий", status: "archived", good: "Штриховка", price: 23, date: 1577762931527, id: 24 },
        { fullname: "Ирина Соловей", status: "process", good: "Краски для принтера", price: 2100, date: 1577805332834, id: 25 },
        { fullname: "Алексей Каплер", status: "process", good: "Карандаши", price: 14, date: 1578167848513, id: 26 },
        { fullname: "Лариса Каплер", status: "back", good: "Бумага для принтера", price: 510, date: 1578208660076, id: 27 },
        { fullname: "Ксюша Мельник", status: "back", good: "Фотоальбом", price: 1400, date: 1578341260714, id: 28 },
        { fullname: "Полина Мельник", status: "back", good: "Канцелярский нож", price: 55, date: 1578421505801, id: 29 },
        { fullname: "Максим Вечеренко", status: "process", good: "Полимерная ванна", price: 785, date: 1578431211616, id: 30 },
        { fullname: "Тимофей Соловей", status: "new", good: "Фотоальбом", price: 1400, date: 1578486199421, id: 31 },
        { fullname: "Александр Марьянко", status: "archived", good: "Бумага для принтера", price: 510, date: 1578545583428, id: 32 },
        { fullname: "Полина Соколенко", status: "new", good: "Карандаши", price: 14, date: 1578558706553, id: 33 },
        { fullname: "Алексей Мельник", status: "back", good: "Бумага для принтера", price: 510, date: 1578620146548, id: 34 },
        { fullname: "Полина Ока", status: "back", good: "Фотоальбом", price: 1400, date: 1578831142279, id: 35 },
        { fullname: "Алексей Плохих", status: "archived", good: "Штриховка", price: 23, date: 1578880442747, id: 36 },
        { fullname: "Дмитрий Батонов", status: "process", good: "Ручка", price: 20, date: 1578976951825, id: 37 },
        { fullname: "Серьгей Ока", status: "archived", good: "Ручка", price: 20, date: 1579090752992, id: 38 },
        { fullname: "Серьгей Чечорин", status: "process", good: "Бумага для принтера", price: 510, date: 1579143195088, id: 39 },
        { fullname: "Полина Ока", status: "archived", good: "Канцелярский нож", price: 55, date: 1579333807731, id: 40 },
        { fullname: "Олег Марьянко", status: "process", good: "Полимерная ванна", price: 785, date: 1579435316960, id: 41 },
        { fullname: "Максим Ока", status: "process", good: "Штриховка", price: 23, date: 1579445597912, id: 42 },
        { fullname: "Марина Плохих", status: "archived", good: "Канцелярский нож", price: 55, date: 1579491265722, id: 43 },
        { fullname: "Ксюша Вечеренко", status: "archived", good: "Фотоальбом", price: 1400, date: 1579499853665, id: 44 },
        { fullname: "Мария Ока", status: "new", good: "Бумага для принтера", price: 510, date: 1579515050538, id: 45 },
        { fullname: "Ксюша Соколенко", status: "new", good: "Фотоальбом", price: 1400, date: 1579712231926, id: 46 },
        { fullname: "Олег Соколенко", status: "process", good: "Ручка", price: 20, date: 1579813944691, id: 47 },
        { fullname: "Тимофей Батонов", status: "back", good: "Полимерная ванна", price: 785, date: 1580199572216, id: 48 },
        { fullname: "Максим Редкий", status: "process", good: "Бумага для принтера", price: 510, date: 1580435153899, id: 49 },
        { fullname: "Ирина Соловей", status: "process", good: "Ручка", price: 20, date: 1580523423351, id: 50 },
        { fullname: "Дмитрий Каплер", status: "new", good: "Карандаши", price: 14, date: 1580654305613, id: 51 },
        { fullname: "Анастасия Плохих", status: "process", good: "Бумага для принтера", price: 510, date: 1580654588643, id: 52 },
        { fullname: "Тимофей Каплер", status: "new", good: "Краски для принтера", price: 2100, date: 1580685030376, id: 53 },
        { fullname: "Ксюша Соколенко", status: "process", good: "Ручка", price: 20, date: 1580742318532, id: 54 },
        { fullname: "Тимофей Вечеренко", status: "back", good: "Канцелярский нож", price: 55, date: 1580769297500, id: 55 },
        { fullname: "Лариса Редкий", status: "back", good: "Полимерная ванна", price: 785, date: 1580833057030, id: 56 },
        { fullname: "Родион Вечеренко", status: "new", good: "Полимерная ванна", price: 785, date: 1580930355050, id: 57 },
        { fullname: "Олег Соколенко", status: "archived", good: "Полимерная ванна", price: 785, date: 1580949996659, id: 58 },
        { fullname: "Алексей Мельник", status: "back", good: "Канцелярский нож", price: 55, date: 1580975058235, id: 59 },
        { fullname: "Ирина Редкий", status: "archived", good: "Фотоальбом", price: 1400, date: 1580992258476, id: 60 },
        { fullname: "Тимофей Вечеренко", status: "process", good: "Ручка", price: 20, date: 1581125482116, id: 61 },
        { fullname: "Анастасия Вечеренко", status: "archived", good: "Ручка", price: 20, date: 1581412430065, id: 62 },
        { fullname: "Александр Каплер", status: "new", good: "Бумага для принтера", price: 510, date: 1581487163771, id: 63 },
        { fullname: "Ксюша Батонов", status: "archived", good: "Краски для принтера", price: 2100, date: 1581512980144, id: 64 },
        { fullname: "Марина Чечорин", status: "back", good: "Ручка", price: 20, date: 1581557902314, id: 65 },
        { fullname: "Александр Чечорин", status: "process", good: "Фотоальбом", price: 1400, date: 1581574956589, id: 66 },
        { fullname: "Ирина Редкий", status: "archived", good: "Штриховка", price: 23, date: 1581706447290, id: 67 },
        { fullname: "Марина Вечеренко", status: "archived", good: "Штриховка", price: 23, date: 1581888350604, id: 68 },
        { fullname: "Марина Батонов", status: "process", good: "Канцелярский нож", price: 55, date: 1581939510389, id: 69 },
        { fullname: "Виталик Марьянко", status: "back", good: "Краски для принтера", price: 2100, date: 1582091860073, id: 70 },
        { fullname: "Марина Редкий", status: "archived", good: "Ручка", price: 20, date: 1582152575618, id: 71 },
        { fullname: "Павел Каплер", status: "new", good: "Ручка", price: 20, date: 1582426890358, id: 72 },
        { fullname: "Серьгей Вечеренко", status: "process", good: "Канцелярский нож", price: 55, date: 1582578990638, id: 73 },
        { fullname: "Анастасия Плохих", status: "back", good: "Полимерная ванна", price: 785, date: 1582696537102, id: 74 },
        { fullname: "Родион Марьянко", status: "archived", good: "Карандаши", price: 14, date: 1582752390640, id: 75 },
        { fullname: "Родион Соколенко", status: "back", good: "Бумага для принтера", price: 510, date: 1582883255478, id: 76 },
        { fullname: "Александр Вечеренко", status: "back", good: "Ручка", price: 20, date: 1582892886784, id: 77 },
        { fullname: "Анастасия Вечеренко", status: "back", good: "Полимерная ванна", price: 785, date: 1583000620325, id: 78 },
        { fullname: "Ксюша Каплер", status: "back", good: "Полимерная ванна", price: 785, date: 1583045045583, id: 79 },
        { fullname: "Ирина Мельник", status: "process", good: "Бумага для принтера", price: 510, date: 1583100821260, id: 80 },
        { fullname: "Марина Каплер", status: "archived", good: "Канцелярский нож", price: 55, date: 1583207523451, id: 81 },
        { fullname: "Тимофей Соловей", status: "back", good: "Бумага для принтера", price: 510, date: 1583539120029, id: 82 },
        { fullname: "Татьяна Мельник", status: "process", good: "Фотоальбом", price: 1400, date: 1583694346454, id: 83 },
        { fullname: "Ольга Соколенко", status: "process", good: "Канцелярский нож", price: 55, date: 1583729752200, id: 84 },
        { fullname: "Серьгей Марьянко", status: "new", good: "Карандаши", price: 14, date: 1583739654717, id: 85 },
        { fullname: "Полина Плохих", status: "process", good: "Канцелярский нож", price: 55, date: 1583812255077, id: 86 },
        { fullname: "Родион Соколенко", status: "new", good: "Карандаши", price: 14, date: 1583824770902, id: 87 },
        { fullname: "Мария Соколенко", status: "new", good: "Фотоальбом", price: 1400, date: 1583854430305, id: 88 },
        { fullname: "Лариса Мельник", status: "archived", good: "Карандаши", price: 14, date: 1583875323264, id: 89 },
        { fullname: "Мария Ока", status: "new", good: "Бумага для принтера", price: 510, date: 1583969090430, id: 90 },
        { fullname: "Мария Каплер", status: "back", good: "Бумага для принтера", price: 510, date: 1584071647748, id: 91 },
        { fullname: "Полина Каплер", status: "archived", good: "Карандаши", price: 14, date: 1584170040878, id: 92 },
        { fullname: "Олег Вечеренко", status: "back", good: "Карандаши", price: 14, date: 1584204633742, id: 93 },
        { fullname: "Дмитрий Чечорин", status: "new", good: "Полимерная ванна", price: 785, date: 1584233909496, id: 94 },
        { fullname: "Серьгей Вечеренко", status: "new", good: "Полимерная ванна", price: 785, date: 1584257561865, id: 95 },
        { fullname: "Виталик Плохих", status: "process", good: "Штриховка", price: 23, date: 1584312283208, id: 96 },
        { fullname: "Павел Плохих", status: "back", good: "Краски для принтера", price: 2100, date: 1584363003103, id: 97 },
        { fullname: "Татьяна Ока", status: "process", good: "Полимерная ванна", price: 785, date: 1584453245096, id: 98 },
        { fullname: "Ксюша Соловей", status: "archived", good: "Ручка", price: 20, date: 1584673792558, id: 99 },
        { fullname: "Серьгей Мельник", status: "process", good: "Краски для принтера", price: 2100, date: 1584806500304, id: 100 }
    ]

    Database.seeding(orders)
})();