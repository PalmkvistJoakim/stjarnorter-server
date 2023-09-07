import express from "express";
import { v4 as uuidv4 } from "uuid";
import { swishClient } from "../swishConfig";

const router = express.Router();

router.post("/", async (req, res) => {
  const { amount, message, payerAlias } = req.body;
  console.log(req.body);

  const paymentData = {
    callbackUrl:
      "https://localhost:8000/api/stjarnorter/swishpayment/swishcallback",
    payeeAlias: "1234679304",
    currency: "SEK",
    payerAlias: payerAlias,
    amount: amount.toString(),
    message: message,
  };

  const _id = uuidv4().replace(/-/g, "").toUpperCase();
  try {
    const response = await swishClient.put(
      `https://mss.cpc.getswish.net/swish-cpcapi/api/v2/paymentrequests/${_id}`,
      paymentData
    );
    if (response.status === 201) {
      console.log("Payment request created");

      return { id: _id };
    }
  } catch (error) {
    console.error(error);
  }
});

router.post("/swishcallback", (req, res) => {
  const swishCallbackData = req.body;
  console.log(swishCallbackData);
  switch (swishCallbackData.status) {
    case "PAID":
      console.log("Payment succieded..", swishCallbackData);
      break;
    case "DECLINED":
      console.log("Payment denied..", swishCallbackData);
      break;
    case "ERROR":
      console.log("Something went wrong", swishCallbackData);
      break;
    case "CANCELLED":
      console.log("Payment cancelled", swishCallbackData);
      break;
    default:
      console.log("Unknown status", swishCallbackData);
  }

  res.status(200).send(swishCallbackData);
});

export default router;
