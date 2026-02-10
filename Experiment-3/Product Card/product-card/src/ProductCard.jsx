function ProductCard({ name, price, inStock }) {
  return (
    <div className="card">
      <div className="image-placeholder"></div>

      <h3>{name}</h3>
      <p className="price">${price.toFixed(2)}</p>

      {inStock ? (
        <span className="badge in-stock">In Stock</span>
      ) : (
        <span className="badge out-stock">Out of Stock</span>
      )}
    </div>
  );
}

export default ProductCard;
