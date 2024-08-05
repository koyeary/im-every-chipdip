import { useState } from "react";
import { useAcceptJs } from "react-acceptjs";
import { createTransaction } from "../../actions/AuthNet";
import CreditForm from "./CreditForm";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

const invoiceId = "123456";
const clientId = "client@theircompany.com";
const Payment = (/* { clientId } */) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.down("sm"));

  // Your code here
  const authData = {
    apiLoginID: "3ryK9Qy6kT9",
    clientKey: "2v3R3Wxg6BZL56UF",
  };

  const environment = "SANDBOX";

  const { dispatchData, loading, error } = useAcceptJs({
    environment,
    authData,
  });

  const handlePay = (formData) => {
    console.log("Payment submitted");
    createTransaction(formData, authData, invoiceId, clientId);
  };

  return (
    <>
      <Button varient="outlined" onClick={handleClickOpen}>
        Pay
      </Button>
      <Dialog
        open={open}
        fullScreen={screenSize}
        fullWidth="true"
        maxWidth="sm"
        onClose={handleClose}
      >
        <DialogTitle>Payment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter payment information for {clientId}
            <br />
            Invoice #{invoiceId}
            <br />
          </DialogContentText>
          <CreditForm handleClose={handleClose} handlePay={handlePay} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Payment;
