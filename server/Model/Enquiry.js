const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone_number: {
        type: String,
        required: true
    },
    course_interested: {
        type: String,
        required: true
    },
    enquiry_mode: {
        type: String,
        enum: ['Online', 'Walk-in', 'Call'],
        default: 'Online'
    },
    follow_up_status: {
        type: String,
        enum: ['Pending', 'Contacted', 'Enrolled', 'Not Interested'],
        default: 'Pending'
    },
    comments: {
        type: String
    },
    agree: {
        type: Boolean
    }
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', enquirySchema);
