import Product from "./product.jsx";
function ProductTab(){
    return (
        <div className="ProductTab">
            <Product title = "Logitech MX Master 3S" idx={0} />
            <Product title= "Apple Pencil (2nd Gen)"idx={1}/>
            <Product title= "Zebronis Zeb-Transformer"idx={2}/>
            <Product title= "Potronics Wireless Mouse"idx={3} />
        </div>
    )
}
export default ProductTab;