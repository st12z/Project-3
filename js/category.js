import { drawProduct } from "./constant.js";
import {
    fetchAPI
} from "./fetchAPI.js";
import { paragram } from "./paragram.js";
import { categoryAPI } from "./variable.js";
const category = document.querySelector("#category_list");
fetchAPI(categoryAPI)
    .then(data => {
        
        let html =data.map(item => {
            return `
                <div class="category_item">${item.slug}</div>
            `
        })
        category.innerHTML=html.join("");
        const categoryList = document.querySelectorAll("#category_list .category_item");
        categoryList.forEach(item=>{
            item.addEventListener("click",()=>{
                paragram.category=item.innerHTML;
                console.log(paragram.category);
                drawProduct();
            })
        })
    })


