const CartProductCard = ({ product, onItemCountChange }) => {
  const onStockChange = (e) => {
    const newStock = parseInt(e.target.value, 10);
    if (!isNaN(newStock) && newStock > 0) {
      // console.log("stocke changes", newStock, product._id);
      onItemCountChange(product._id, newStock);
    }
  };

  return (
    <div
      key={product.id}
      className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
    >
      <div className="flex items-center">
        <img
          src={
            product.imageUrl ||
            "https://i.ibb.co/QMdWfzX/component-image-one.png"
          }
          alt={product.name}
          className="w-16 h-16 object-cover rounded-lg mr-4"
        />
        <div>
          <h2 className="text-lg font-medium">{product.name}</h2>
          <p className="text-black">
            Price: <span className="text-orange-400">${product.price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-4">
        <p className="text-green-700">
          Stock: <span className="text-orange-400">{product.stock}</span>
        </p>
        <div>
          <input
            type="number"
            id={`stock-${product.id}`}
            value={product.buyCount}
            min="1"
            max={product.stock}
            className="border border-gray-300 rounded-lg p-2 text-center w-20"
            onChange={onStockChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;