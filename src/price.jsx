function Price({OldPrice,NewPrice}){
    return (
        <div className="Price">
        <span className="OldPrice">{OldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span className="NewPrice">{NewPrice}</span>
        </div>
    );
}
export default Price;