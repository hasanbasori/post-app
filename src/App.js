// import './App.css';
// import ProductItem from "./ProductItem"
import { css } from "@emotion/react";
import Counter from "./component/Counter";

function App() {
  return (
    <div className="App">
      <div
        css={css`
          border: 1px solid salmon;
        `}
      >
        <Counter />
      </div>
    </div>
  );
}

export default App;

// const element = (
//   <div className="container">
//       <ProductItem title="Xiomi Redmi Note 9 Pro" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nihil doloribus necessitatibus sapiente, a ullam libero quidem atque assumenda facere" price={4590}  />
//       <ProductItem title="Xiomi Redmi A7" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nihil doloribus necessitatibus sapiente, a ullam libero quidem atque assumenda facere" price={11500}  />
//       <ProductItem title="Mi Pad 2" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nihil doloribus necessitatibus sapiente, a ullam libero quidem atque assumenda facere" price={7785}  />   </div>
