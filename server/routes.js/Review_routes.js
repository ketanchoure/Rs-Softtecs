const express = require('express');
const { uploadFields } = require('../middleware/image-upload');
const { createReview, getallreviews, getreviewbyid, deleteReview, updateReview } = require('../controller/Review_controller');
const reviewroutes = express.Router();

reviewroutes.post("/create",uploadFields,createReview)

reviewroutes.get("/all",getallreviews)

reviewroutes.get("/byid/:id",getreviewbyid)
reviewroutes.delete("/delete/:id",deleteReview)

reviewroutes.put("/update/:id",uploadFields,updateReview)

module.exports = {reviewroutes}