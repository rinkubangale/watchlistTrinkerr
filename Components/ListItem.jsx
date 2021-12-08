import React, { useContext } from "react";
import { StoreContext } from "../Context/Context";

import Styles from "./ListItem.module.css";

export default function ListItem() {
  const { removeStocks, watchlist } = useContext(StoreContext);
  return (
    <div className={Styles.container1}>
      {watchlist &&
        watchlist.map((el, i) => {
          return (
            <div key={i} className={Styles.card}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h4
                  className={
                    (((el[1] - el[2]) / el[2]) * 100).toFixed(2) > 0
                      ? Styles.profit
                      : Styles.loss
                  }
                >
                  {el[0].split("::")[0]}
                </h4>
                <p>{el[0].split("::")[1]}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "right",
                }}
              >
                <h4
                  className={
                    (((el[1] - el[2]) / el[2]) * 100).toFixed(2) > 0
                      ? Styles.profit
                      : Styles.loss
                  }
                >
                  {el[1]}
                </h4>
                <p>{(((el[1] - el[2]) / el[2]) * 100).toFixed(2)}%</p>
              </div>
              <div className={Styles.AddBtn}>
                <button onClick={() => removeStocks(el)}>Remove</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
