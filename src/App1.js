import "./App.css";
// import ProductItem from "./ProductItem"
import ProductItem from "./ProductItem";

function App1() {
  return (
    <div className="product-data">
      <div className="container">
        <ProductItem
          title="Xiomi Redmi Note 9 Pro"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nihil doloribus necessitatibus sapiente, a ullam libero quidem atque assumenda facere"
          price={4590}
        />
        <ProductItem
          title="Xiomi Redmi A7"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nihil doloribus necessitatibus sapiente, a ullam libero quidem atque assumenda facere"
          price={11500}
        />
        <ProductItem
          title="Mi Pad 2"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nihil doloribus necessitatibus sapiente, a ullam libero quidem atque assumenda facere"
          price={7785}
        />{" "}
      </div>
    </div>
  );
}

export default App1;
