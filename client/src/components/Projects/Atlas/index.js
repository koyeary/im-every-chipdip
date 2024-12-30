import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { queryLOC } from "../../../utils/API";
import { ResponsiveNetwork } from "@nivo/network";
//import AtlasDataset from "nomic";

const Atlas = () => {
  const [formData, setFormData] = useState({ search: "" });
  const [results, setResults] = useState([]);

  const { search } = formData;

  const handleClick = (e) => {
    e.preventDefault();

    const formattedSearch = search
      .replace(/[^\w\s]|_/g, "-") // Replace punctuation or special characters with hyphen
      .replace(/\s+/g, "-") // Replace spaces with hyphen
      .replace(/-+/g, "-"); // Reduce multiple hyphens to a single hyphen
    queryLOC(formattedSearch, setResults);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Click Me
        </Button>
        <div>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={handleChange}
          />
        </div>
      </form>
      <div>
        <h2>Results</h2>
        <ul>
          {results.map((result, index) => (
            <li key={index} style={{ display: "flex", flexDirection: "row" }}>
              <div>{result.contributors}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Atlas;
