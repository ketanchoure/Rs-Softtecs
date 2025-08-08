const express = require('express');
const enquiryroutes = express.Router();
const { createEnquiry, updateEnquiry, getAllEnquiries, getEnquiryById, deleteEnquiry } = require('../controller/Enquiry_controller');

// Route for students (website)
enquiryroutes.post('/create', createEnquiry);

// Route for admins (admin panel)
enquiryroutes.put('/update/:id', updateEnquiry);

// Admin routes
enquiryroutes.get('/enquiries', getAllEnquiries);
enquiryroutes.get('/get/:id', getEnquiryById);


enquiryroutes.delete('/delete/:id', deleteEnquiry);


module.exports = enquiryroutes;
