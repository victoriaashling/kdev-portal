const router = require("express").Router();
const messagesRoutes = require("./messages");
const visitsRoutes = require("./visits");
const identifyingInfoRoutes = require("./identifyinginfo");
const rxRoutes = require("./rx");
const blood = require("./bloodResult");
const drug = require("./drugResult");
const xRay = require("./xRayResult");

router.use("/messages", messagesRoutes);
router.use("/visits", visitsRoutes);
router.use("/identifyinginfo", identifyingInfoRoutes);
router.use("/rx", rxRoutes);
router.use("/blood", blood);
router.use("/drug", drug);
router.use("/xRay", xRay);



module.exports = router;