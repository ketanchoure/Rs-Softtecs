const Review = require("../Model/Review");
const fs = require('fs');
const path = require('path');

exports.createReview = async (req, res) => {
  try {
    const { personName, timeline, flag, category,rating, reviewText, reviewCount, likeCount
    } = req.body;

    if(!personName, !timeline, !category, !rating, !reviewText, !reviewCount){
      return res.status(400).json({ message: 'personName, timeline, category, reviewText, reviewCount is required.' });
    }

    const profile = req.files?.profile?.[0]?.filename || '';
    const profileUrl = `${req.protocol}://${req.get('host')}/profile/${profile}`;


    const images = req.files?.images;
    console.log("images", images)
    const files = []
    if (images && images.length > 0) {
      req.files.images.forEach(data => {

        const fileurl = `${req.protocol}://${req.get('host')}/images/${data.filename}`
        files.push(fileurl)

      });
    }


    const newReview = new Review({
      personName,
      timeline,
      flag,
      image: profileUrl,
      category,
      reviewText,
      reviewCount,
      imageList: files,
      likeCount,
      rating
    });

      const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create review', error: err.message });
  }
};

exports.getallreviews = async (req, res) => {
  try {
    const enquiries = await Review.find().sort({ enquiry_date: -1 });
    res.status(200).json(enquiries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while fetching reviews.' });
  }
};

exports.getreviewbyid= async (req, res) => {
  try {
    const { id } = req.params;
    const enquiry = await Review.findById(id);

    if (!enquiry) {
      return res.status(404).json({ message: 'Review not found.' });
    }

    res.status(200).json(enquiry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while fetching Review.' });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    // console.log("BODY:",req.body);
    const {
      personName, timeline, flag, category,
      rating, reviewText, reviewCount, likeCount
    } = req.body;
   


    const updateData = {
      personName,
      timeline,
      flag,
      category,
      rating,
      reviewText,
      reviewCount,
      likeCount
    };

    // Handle new profile image
    if (req.files?.profile?.[0]) {
      // Delete old profile image
      const oldProfile = review.image?.split('/profile/')[1];
      if (oldProfile) {
        const profilePath = path.join(__dirname, '..', 'uploads', 'profile', oldProfile);
        if (fs.existsSync(profilePath)) {
          try {
            fs.unlinkSync(profilePath);
          } catch (err) {
            console.error('Error deleting old profile image:', err.message);
          }
        }
      }

      // Set new profile image URL
      const newProfile = req.files.profile[0].filename;
      updateData.image = `${req.protocol}://${req.get('host')}/profile/${newProfile}`;
    }

    // Handle new imageList
    if (Array.isArray(req.files?.images) && req.files.images.length > 0) {
      // Delete old images
      if (Array.isArray(review.imageList)) {
        for (const imgUrl of review.imageList) {
          const imgFile = imgUrl?.split('/images/')[1];
          if (imgFile) {
            const imgPath = path.join(__dirname, '..', 'uploads', 'images', imgFile);
            if (fs.existsSync(imgPath)) {
              try {
                fs.unlinkSync(imgPath);
              } catch (err) {
                console.error(`Error deleting image ${imgFile}:`, err.message);
              }
            }
          }
        }
      }

      // Add new images
      const newImageList = req.files.images.map(file =>
        `${req.protocol}://${req.get('host')}/images/${file.filename}`
      );
      updateData.imageList = newImageList;
    }

    const updatedReview = await Review.findByIdAndUpdate(id, updateData, { new: true });

    res.status(200).json(updatedReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update review' });
  }
};


exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Delete profile image
    const profileFilename = review.image?.split('/profile/')[1];
    if (profileFilename) {
      const profilePath = path.join(__dirname, '..', 'uploads', 'profile', profileFilename);
      try {
        if (fs.existsSync(profilePath)) {
          fs.unlinkSync(profilePath);
        }
      } catch (err) {
        console.error('Error deleting profile image:', err.message);
      }
    }

    // Delete images from imageList
    if (Array.isArray(review.imageList)) {
      for (const imgUrl of review.imageList) {
        const imageFilename = imgUrl?.split('/images/')[1];
        if (imageFilename) {
          const imagePath = path.join(__dirname, '..', 'uploads', 'images', imageFilename);
          try {
            if (fs.existsSync(imagePath)) {
              fs.unlinkSync(imagePath);
            }
          } catch (err) {
            console.error(`Error deleting image ${imageFilename}:`, err.message);
          }
        }
      }
    }

    // Delete the review from the database
    await Review.findByIdAndDelete(id);

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
