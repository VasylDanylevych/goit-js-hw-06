const categories = document.querySelectorAll('.item')
console.log(`Number of categories: ${categories.length}`)

for (const category of categories) {
    const categoryEl = category.firstElementChild.textContent
    const elements = category.lastElementChild.children.length
    console.log(`Category: ${categoryEl}`)
    console.log(`Elements: ${elements}`)
}

