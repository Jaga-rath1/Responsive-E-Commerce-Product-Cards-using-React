import "./Product.css";
import "./ProductTab.css";
import "./Price.css";
import Price from "./price.jsx";
function Product({title,idx,Description}){
    let oldprices = ["12495","11900","1599","599"];
    let newprices = ["8990","9200","900","278"];
    let Descriptions = [
        ["8000 Dpi","5 Programmable Buttons"],["Intutive Touch Surfaces","Designed for IPad Pro"], ["Intutive touch surface","Designed for IPad Pro"],["Wireless Mouse 2.4GHZ","Optical Orientation"]
    ];
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{Descriptions[idx][0]}</p>
            <p>{Descriptions[idx][1]}</p>
            <Price OldPrice = {oldprices[idx]} NewPrice = {newprices[idx]}/>
        </div>
    );
}
export default Product;