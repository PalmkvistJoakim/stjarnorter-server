import fs from "fs";
import https from "https";
import axios from "axios";

const certificatePath = "./swish_certificates/";

const agent = new https.Agent({
  cert: fs.readFileSync(
    "./swish_certificates/Swish_Merchant_TestCertificate_1234679304.pem",
    { encoding: "utf8" }
  ),
  key: fs.readFileSync(
    "./swish_certificates/Swish_Merchant_TestCertificate_1234679304.key",
    { encoding: "utf8" }
  ),
  ca: fs.readFileSync("./swish_certificates/Swish_TLS_RootCA.pem", {
    encoding: "utf8",
  }),
});

const swishClient = axios.create({
  httpsAgent: agent,
});

export { swishClient };
