const express = require("express");
const router = express.Router();
const { upload } = require("../routes/upload");
const { venueSchema, validateVenue } = require("../models/venueinfo");
const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("users");
const { ensureAuthenticated } = require("../helpers/auth");
const venueController = require("../controllers/venues");

router.post("/bodysearch", venueController.body_search);
router.get("/", venueController.get_all_venues);
router.get("/askvenue", (req, res) => {
  res.render("venues/askvenue");
});
router.get("/:id", venueController.get_single_venue);
router.put("/:id", venueController.update_venue);
router.delete("/:id", venueController.delete_venue);
router.post("/upload", venueController.add_venue);
router.get("/city/:city", venueController.get_venue_by_city);
router.get("/category/:category", venueController.get_venue_by_category);

module.exports = router;
