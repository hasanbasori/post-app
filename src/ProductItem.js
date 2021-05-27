function ProductItem(props) {
  return (
    <p className="pruduct01">
      <strong> Titile:</strong> {props.title}
      <br />
      <strong>Description:</strong>
      {props.description}, <br /> <strong>Price:</strong> {props.price} <hr />{" "}
    </p>
  );
}

export default ProductItem;
