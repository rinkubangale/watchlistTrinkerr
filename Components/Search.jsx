import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/Context";
import TextField from "@mui/material/TextField";

import data from "../data.json";
import Styles from "./Search.module.css";

export default function Search() {
  const { handleStore } = useContext(StoreContext);
  const [query, setQuery] = useState("");
  const [res, setRes] = useState([]);

  const handleChange = (e) => {
    let q = e.target.value;
    setQuery(q);
    let newData = data.filter((el) => el[0].includes(q.toUpperCase()));
    setRes(newData);
  };

  // console.log(res.length);
  return (
    <div>
      <TextField
        fullWidth
        placeholder="Search stocks..."
        onChange={(e) => {
          handleChange(e);
        }}
      />

      <div className={query.length > 2 ? Styles.container1 : Styles.container2}>
        {res &&
          res.map((el, i) => {
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
                  <button
                    onClick={() => {
                      handleStore(el);
                    }}
                  >
                    Add to Watchlist
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
