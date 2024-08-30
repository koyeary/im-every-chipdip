import { useCallback, useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import { getForexData, getStockData } from "../../../utils/API";
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

  useEffect(() => {
    getStockData(tickers, setPerformance);
    getForexData(userCurrencies, setForexData);
    //console.log(performance);
  }, []);

  const finish = () => {
    console.log("finished");
  };

  let yourDate = new Date(Date.now() - 86400000);
  let d = yourDate.toISOString().split("T")[0];
  const date = d;

  return (
    <div className="dashboard">
      <Dropdown />
      {/*       <button
        onClick={(e) => {
          e.preventDefault();
          getStockData(portfolio, setPerformanceData, finish);
        }}
      >
        Get Data
      </button> */}
      <div className="dash-row"></div>
      <div className="dash-row">
        {" "}
        {forexData.length && <ForEx forexData={forexData} />}
      </div>
      <div className="dash-row">
        {/* A "my portfolios list which allows you to cycle through sheets if you have more than one" */}

        <Portfolio performance={performance} />
      </div>
    </div>
  );
};

export default FinanceDashboard;
