'use strict'

const data = films
const categories = []
data.forEach(e => {
    let card = createElement('li', 'card bg-white p-px border rounded-md', `
                <img class="border rounded-md" src="${e.poster}"
                    alt="">
                <div class="flex items-start justify-center flex-col pl-4">
                    <h2 class="text-2xl	font-semibold w-full">${e.title}</h2>
                    <ul class="mt-2">
                        <li class="">${e.genres}</li>
                    </ul>
                    <button id="${e.id}"
                        class=" w-3/5 p-2 mt-2.5 mb-2.5 border border-2 rounded-2xl text-white bg-cyan-950 active:bg-cyan-800">Bookmark</button>
                </div>
            `)
    $('.list').appendChild(card)



    e.genres.forEach(item => {
        if (!categories.includes(item)) {
            categories.push(item)
        }
    })
    categories.sort()
})


categories.forEach((e) => {
    const option = createElement("option", "w-full", e)

    $('#categories').appendChild(option)
})


$("#categories").addEventListener('change', () => {
    $('.list').innerHTML = ``

    let selectValue = $('#categories').value
    let sortCategory = []

    data.forEach(e => {
        if (e.genres.includes(selectValue)) {
            sortCategory.push(e)
        }
    })
    searchRender(sortCategory)
})


// ==============================

function findMovie(search) {
    return films.filter((item) => {
        return item.title.match(search)
    })

}

$("#searchInput").addEventListener('keyup', () => {

    let inputValue = $("#searchInput").value.trim()
    const regexp = new RegExp(inputValue, 'gi')
    let result = findMovie(regexp)

    if (result.length === 0) {
        $('.count').innerHTML = "Topilmadi"
    } else {
        $('.count').innerHTML = result.length
    }

    console.log(result);
    searchRender(result)
})

function searchRender(Data) {
    $('.list').innerHTML = null
    Data.forEach(e => {
        let card = createElement('li', 'card bg-white p-px border rounded-md', `
                <img class="border rounded-md" src="${e.poster}"
                    alt="">
                <div class="flex items-start justify-center flex-col pl-4">
                    <h2 class="text-2xl	font-semibold w-full">${e.title}</h2>
                    <ul class="mt-2">
                        <li class="">${e.genres}</li>
                    </ul>
                    <button id="${e.id}"
                        class=" w-3/5 p-2 mt-2.5 mb-2.5 border border-2 rounded-2xl text-white bg-cyan-950 active:bg-cyan-800">Bookmark</button>
                </div>
            `)
        $('.list').appendChild(card)
    })

}