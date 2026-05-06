const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Configure Cloudinary with your data
cloudinary.config({
  cloud_name: 'djlm6cbra',
  api_key: '262687152821922',
  api_secret: 'g5ZeI8Kd8WZPfyboVsx4bFOlYYk' 
});

// 2. Setup Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'GCAS_Applications', 
    allowed_formats: ['jpg', 'png', 'pdf', 'jpeg'],
  },
});
const upload = multer({ storage: storage });

// 3. Updated Schema (gcasfilelast as Object for file data)
const applicationSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    adhar: String,
    files: Object, 
    gcasusername: { type: String, default: null },
    gcaspassword: { type: String, default: null },
    gcasfilelast: { type: Object, default: null } // Initialized as null for CRUD
});
const Application = mongoose.model('Application', applicationSchema);

// 4. Global API Endpoint
app.post('/api/apply', upload.fields([
    { name: 'marksheet10' }, { name: 'marksheet12' }, 
    { name: 'casteCert' }, { name: 'nclCert' },    
    { name: 'leavingCert' }, { name: 'incomeCert' }, 
    { name: 'photo' }
]), async (req, res) => {
    try {
        const newApp = new Application({
            ...req.body,
            files: req.files, // Stores Cloudinary URLs and IDs
            gcasusername: null, 
            gcaspassword: null, 
            gcasfilelast: null 
        });

        await newApp.save();
        res.status(200).json({ success: true, message: "Saved to Cloudinary & MongoDB!" });
    } catch (err) {
        console.error("Upload Error:", err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));