import { ethers } from "ethers";
import MulticallWrapper from "ethers-multicall-provider/lib/multicall-provider";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);

const wrapper = MulticallWrapper.wrap(provider);
console.log(wrapper);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
