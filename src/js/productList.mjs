export default productList
import { getData } from "./productData.mjs"
import { renderListWithTemplate } from "./utils.mjs"


const tentArrayIds = ["985PR", "985RF", "880RR", "344YJ"]
function productList(category, renderElement) {
    getData(category)
    .then((products) => {  
        let filteredProducts = products.filter(function(product) {
            return tentArrayIds.includes(product.Id)
        })  
        renderListWithTemplate(productCardTemplate, renderElement, filteredProducts)
    })
}

function productCardTemplate(product)
{
    return `<li class="product-card">
                <a href="product_pages/index.html?product=${product.Id}">
                <img
                src="${product.Image}"
                alt="${product.Name}"
                />
                <h3 class="card__brand">${product.Brand.Name}</h3>
                <h2 class="card__name">${product.NameWithoutBrand}</h2>
                <p class="product-card__price">${product.FinalPrice}</p></a>
            </li>
    `
}