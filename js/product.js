import {
    drawProduct
} from "./constant.js";
import {
    paragram
} from "./paragram.js";
drawProduct();

const inputSearch = document.querySelector("#inputSearch");
const buttonSearch = document.querySelector("#buttonSearch");
const search = () => {
    paragram.q = inputSearch.value;
    drawProduct();
}
buttonSearch.addEventListener("click", function () {
    search();
})
inputSearch.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        search();
    }
})
const selectList = document.querySelector("#selectItem");
selectList.addEventListener("change", function (e) {
    switch (e.target.value) {
        case "mac-dinh":
            paragram.sort = "";
            paragram.order = "";
            break;
        case "gia-thap-den-cao":
            paragram.sort = "price";
            paragram.order = "asc";

            break;
        case "gia-cao-den-thap":
            paragram.sort = "price";
            paragram.order = "desc";
            break;
        default:
            break;
    }
    drawProduct();
})
const paginatePrev = document.querySelector("#paginate-prev");
const paginateNext = document.querySelector("#paginate-next");

const paginateNumber = document.querySelector("#paginate-number");
paginatePrev.addEventListener("click",()=>{
    if(paragram.page>1){
        paragram.page-=1;
        paginateNumber.innerHTML=paragram.page;
        drawProduct();
    }
    
})
paginateNext.addEventListener("click",()=>{
        paragram.page+=1;
        paginateNumber.innerHTML=paragram.page;
        drawProduct();
})