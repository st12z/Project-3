import {
    productAPI
} from "./variable.js";
import {
    fetchAPI
} from "./fetchAPI.js";
import { paragram } from "./paragram.js";
const product = document.querySelector("#product_list");
export const drawProduct = () => {
    const api = `${productAPI}?q=${paragram.q}&_sort=${paragram.sort}&_order=${paragram.order}&_page=${paragram.page}&_limit=${paragram.limit}&category=${paragram.category}`;
    console.log(paragram.q);
    fetchAPI(api)
        .then(data => {
            let html = data.map(item => {
                return `
                <div class="product-item">
                    <div class="product-image">
                        <img src="${item.thumbnail}" alt="">
                        <div class="product-discount">${item.discountPercentage}</div>
                    </div>
                    <div class="product-content">
                        <div class="product-title">Tên sản phẩm: ${item.title}</div>
                        <div class="product-price">Giá cả: ${item.price}$</div>
                        <div class="product-stock">Còn lại: ${item.stock}</div>
                    </div>
                </div> 
                `
            })
            product.innerHTML =html.join("");
        })
}