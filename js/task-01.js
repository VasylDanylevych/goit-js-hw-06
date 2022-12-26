const categories = document.querySelector('#categories')
const categoryName = categories.children;
console.log("Number of categories: ", categoryName.length)

for (const category of categoryName) {
    const categoryEl = category.firstElementChild.textContent
    const elements = category.lastElementChild.children.length
    console.log("Category: ", categoryEl)
    console.log("Elements: ", elements)
}

