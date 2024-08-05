import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const CreditForm = ({ handleClose, handlePay }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expDate: "",
    cvv: "",
    zipCode: "",
  });
  const { cardNumber, expDate, cvv, zipCode } = formData;

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handlePay(formData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px auto 0 auto",
      }}
    >
      <TextField
        required
        name="cardNumber"
        label="Card Number"
        variant="outlined"
        placeholder="4242424242424242"
        value={cardNumber}
        onChange={handleChange}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "75%",
          minWidth: 250,
          marginTop: 10,
          gap: 20,
        }}
      >
        <TextField
          required
          name="expDate"
          label="Exp"
          placeholder="MM/YYYY"
          style={{ minWidth: 100 }}
          variant="outlined"
          value={expDate}
          onChange={handleChange}
        />
        <TextField
          required
          name="cvv"
          label="CVV"
          placeholder="123"
          variant="outlined"
          value={cvv}
          onChange={handleChange}
        />
        <TextField
          required
          name="zipCode"
          label="Zip"
          placeholder="10012"
          variant="outlined"
          value={zipCode}
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "fit-content",
          margin: "30px auto 5px auto",
          gap: "20px",
        }}
      >
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
        <Button onClick={handleClose} variant="contained" color="secondary">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CreditForm;
