const express = require("express");
const path = require("path");
const router = express.Router();

/*
  The diagnostic endpoint for the deployment system to probe after deployment
*/
router.get("/ping", (_, res) => {
  res.status(200).send("pong");
});

/*
  Main route + catch-all (except for js/css files) to serve React app
*/
router.get(/^[^\.]+$/, async (req, res) => {
  try {
      appPath = path.join(__dirname, "../../webclient/build", "index.html");
      res.sendFile(appPath);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
});
module.exports = router;
