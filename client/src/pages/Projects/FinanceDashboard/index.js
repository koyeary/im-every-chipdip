import { useCallback, useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import {
  getForexData,
  getStockData,
  getAllTickers,
  getUserForex,
} from "../../../utils/API";
import Dropdown from "./Dropdown";
import "./dashboard.css";
import ForEx from "./ForEx";

//toggle between dark and light mode - switch button
//individual components toggle from expanded to collapsed

const FinanceDashboard = () => {
  //const [currencies, setCurrencies] = useState([]);
  const [forexData, setForexData] = useState([]);
  const userCurrencies = [
    "USD",
    "EUR",
    "JPY",
    "GBP",
    "AUD",
    "CAD",
    "CHF",
    "CNY",
  ]; //USD is included by default
  const tickers = ["AAPL", "GOOGL", "AMZN", "MSFT", "PSNY", "OPEN", "SQNS"];
  const [performance, setPerformance] = useState([
    {
      symbol: "",
      change: "",
      percent_change: "",
      open: "",
      high: "",
      low: "",
      close: "",
      volume: "",
    },
  ]);

  const finishForex = useCallback((data) => {
    const forexArray = Object.keys(data).map((key) => ({
      currency: key,
      rate: data[key],
      ...data[key],
    }));
    setForexData(forexArray);
  });

  useEffect(() => {
    getStockData(tickers, setPerformance);
    getForexData(userCurrencies, finishForex);
    getAllTickers();
    //getUserForex(userCurrencies);
    //console.log(performance);
  }, []);

  let yourDate = new Date(Date.now() - 86400000);
  let d = yourDate.toISOString().split("T")[0];
  const date = d;

  return (
    <div className="dashboard">
      {/*    <Dropdown /> */}

      <div className="dash-row"></div>
      <div className="dash-row">
        {" "}
        <ForEx forexData={forexData} currencies={userCurrencies} />
      </div>
      <div className="dash-row">
        {/* A "my portfolios list which allows you to cycle through sheets if you have more than one" */}

        <Portfolio performance={performance} />
      </div>
    </div>
  );
};

export default FinanceDashboard;
