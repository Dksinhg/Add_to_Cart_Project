import React from "react";
import Itemcart from "./Itemcart";
import data from "./data";

const home = () => {
  return (
    <div>
      <h1 className="texxt-center mt-3"> All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <Itemcart
                img={item.img}
                title={item.title}
                dsec={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default home;
