const Enquiry = require("../Model/Enquiry");

// Create a new enquiry (from website form)
exports.createEnquiry = async (req, res) => {
  try {
    const { full_name, email, phone_number, course_interested, agree } = req.body;

    // Simple validation
    if (!full_name || !email || !phone_number || !course_interested || !agree) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Save new enquiry
    const newEnquiry = new Enquiry({
      full_name,
      email,
      phone_number,
      course_interested,
      agree
    });

    await newEnquiry.save();

    res.status(201).json({ message: 'Enquiry submitted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Update enquiry details by admin
exports.updateEnquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const allowedFields = [
        "enquiry_mode",
      'follow_up_status',
      'counselor_assigned',
      'preferred_timing',
      'comments'
    ];

    // Only allow specific fields to be updated
    const filteredUpdates = {};
    for (let key of allowedFields) {
      if (updates[key] !== undefined) {
        filteredUpdates[key] = updates[key];
      }
    }

    const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, filteredUpdates, { new: true });

    if (!updatedEnquiry) {
      return res.status(404).json({ message: 'Enquiry not found.' });
    }

    res.status(200).json({ message: 'Enquiry updated successfully.', data: updatedEnquiry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Get all enquiries
exports.getAllEnquiries = async (req, res) => {
    try {
      const enquiries = await Enquiry.find().sort({ enquiry_date: -1 });
      res.status(200).json(enquiries);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error while fetching enquiries.' });
    }
  };

// Get enquiry by ID
exports.getEnquiryById = async (req, res) => {
    try {
      const { id } = req.params;
      const enquiry = await Enquiry.findById(id);
  
      if (!enquiry) {
        return res.status(404).json({ message: 'Enquiry not found.' });
      }
  
      res.status(200).json(enquiry);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error while fetching enquiry.' });
    }
  };

// Delete enquiry by ID
exports.deleteEnquiry = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedEnquiry = await Enquiry.findByIdAndDelete(id);
  
      if (!deletedEnquiry) {
        return res.status(404).json({ message: 'Enquiry not found.' });
      }
  
      res.status(200).json({ message: 'Enquiry deleted successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error while deleting enquiry.' });
    }
  };
  
  