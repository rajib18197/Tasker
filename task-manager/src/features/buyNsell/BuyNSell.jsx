import { useState } from "react";

const products = [
  { id: 1, name: "Product 1", prices: [7, 1, 5, 3, 6, 4], maxProfit: 5 },
  { id: 2, name: "Product 2", prices: [7, 6, 4, 3, 1], maxProfit: 0 },
];

export default function BuyNSell() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleSelect(id) {
    const productToSelect = products.find((product) => product.id === id);
    console.log(productToSelect);
    setSelectedProduct(productToSelect);
  }

  return (
    <div className="flex gap-8 outline-4 outline-offset-[20px] outline-cyan-400 outline-dashed max-w-[800px] mx-auto my-8 p-2 bg-gray-100">
      <ProductList
        products={products}
        selectedProduct={selectedProduct}
        onSelect={handleSelect}
      />

      {selectedProduct && <BestDay selectedProduct={selectedProduct} />}
    </div>
  );
}

function BestDay({ selectedProduct }) {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(1);
  const profit = selectedProduct.prices[right] - selectedProduct.prices[left];

  const [buyingDate, setBuyingDate] = useState(null);
  const [sellingDate, setSellingDate] = useState(null);
  const currentProfit = sellingDate ? sellingDate - buyingDate : 0;
  const [gameOver, setGameOver] = useState(false);

  function handleBuyNSell(buyingPrice, sellingPrice) {
    setBuyingDate(buyingPrice);
    setSellingDate(sellingPrice);

    if (right === selectedProduct.prices.length - 1) {
      setGameOver(true);
      return;
    }

    setRight((cur) => cur + 1);
  }

  function handleSell(price) {
    setSellingDate(price);
    setRight((cur) => cur + 1);
  }

  function handleNextDay() {
    if (right === selectedProduct.prices.length - 1) {
      setGameOver(true);
      return;
    }

    if (buyingDate) {
      setRight((cur) => cur + 1);
    } else {
      setLeft((cur) => cur + 1);
      setRight((cur) => cur + 1);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h3>Price for the next 6 days</h3>
        <div className="grid grid-cols-3 gap-2">
          {selectedProduct.prices.map((price) => (
            <p
              key={price}
              className={`${
                selectedProduct.prices[left] == price
                  ? "bg-rose-400"
                  : selectedProduct.prices[right] === price
                  ? "bg-orange-400"
                  : "bg-gray-200"
              } p-2 rounded-full text-center`}
            >
              {price}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-3 font-medium items-center shadow-md p-2 border-l-2 border-stone-900">
        <p>Buy it on {selectedProduct.prices[left]}</p>

        <p>Sell it on {selectedProduct.prices[right]}</p>

        <p>Profit: {profit}</p>

        <Button
          onClick={() =>
            handleBuyNSell(
              selectedProduct.prices[left],
              selectedProduct.prices[right]
            )
          }
        >
          Yes
        </Button>
        <Button onClick={handleNextDay}>No</Button>
      </div>

      {buyingDate && sellingDate && (
        <div className="flex font-medium gap-3 items-center shadow-md p-2 border-l-2 border-stone-900">
          {buyingDate && <h2>You Buy it on {buyingDate}</h2>} |
          {sellingDate && <h2>You sell it on {sellingDate}</h2>} |
          {buyingDate && sellingDate && (
            <h2>Your current Profit is {currentProfit}</h2>
          )}
        </div>
      )}

      {gameOver && (
        <p className="flex font-medium gap-3 items-center shadow-md p-2 border-l-2 border-stone-900">
          {selectedProduct.maxProfit === currentProfit
            ? "Great You have gained maximum profit possible"
            : `Maximum profit ${selectedProduct.maxProfit}, Your Profit ${currentProfit}`}
        </p>
      )}
    </div>
  );
}

function ProductList({ products, selectedProduct, onSelect }) {
  return (
    <ul className="flex flex-col gap-2">
      {products.map((product) => (
        <li
          key={product.id}
          className={`${
            selectedProduct?.id === product.id ? "bg-orange-200" : "bg-gray-200"
          } p-2 flex gap-2 items-center`}
        >
          <span>{product.name}</span>
          <button
            className="p-2 bg-pink-600"
            onClick={() => onSelect(product.id)}
          >
            Buy N Sell
          </button>
        </li>
      ))}
    </ul>
  );
}

function Button({ onClick, children }) {
  return (
    <button
      className="bg-pink-600 px-[8px] py-[4px] leading-none uppercase text-stone-50"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
