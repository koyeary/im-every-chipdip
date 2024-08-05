const APIURL = "https://apitest.authorize.net/xml/v1/request.api";

let d = new Date();
const start = d.toISOString().split("T")[0];
const ONE_DAY = 1000 * 60 * 60 * 24;

export const createTransaction = async (formData) => {
  const month = formData.expDate.match(/^\d{2}/)?.[0];
  const year = formData.expDate.match(/\d{4}$/)?.[0];

  try {
    console.log(month, year);
    //some code
  } catch (error) {
    console.log(error);
  }
  /* const cardData = {
    cardNumber: formData.cardNumber,
    cardCode: formData.cvv,
    month: month,
    year: year,
  }; */
};
//Req PROFILE
