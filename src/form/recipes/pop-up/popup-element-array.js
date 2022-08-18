import { AddProducts } from "./popup-add-products";
export function elementArray(param) {
    const arr = [<AddProducts id = {0}/>];
    if(param){
        arr.push([<AddProducts id = {arr.length}/>])
    }
    return arr;
}