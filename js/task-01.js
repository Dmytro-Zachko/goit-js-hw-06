const Categories = document.querySelectorAll(".item")
console.log('Number of categories:', Categories.length)
for (const category of Categories) {
    const categoryTitle = category.querySelector('h2');
    const categoryEl = category.querySelectorAll('li')
    console.log('Category:',categoryTitle.textContent);
    console.log('Elements:', categoryEl.length)
 
}