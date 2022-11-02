import { generateToken04 } from "../../lib/zegoServerAssistant.js";
import config from "../../lib/config";

export default function generateToken(req, res) {
  const userID = req.body.userID;
  const expiration = req.body.expiration * 1;
  console.log("choui", config.appID, config.serverSecret);
  const token = generateToken04(
    config.appID,
    userID,
    config.serverSecret,
    expiration
  );
  res.status(200).json({ token });
}
