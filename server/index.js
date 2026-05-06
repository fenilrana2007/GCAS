const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const app = express();
app.use(cors());
app.use(express.json());

// 1. MongoDB Atlas Connection (Added)
const mongoURI = "mongodb://rfenil77_db_user:c0k3DFzx6goCWYnY@ac-h4ncz7a-shard-00-00.aypqvt0.mongodb.net:27017,ac-h4ncz7a-shard-00-01.aypqvt0.mongodb.net:27017,ac-h4ncz7a-shard-00-02.aypqvt0.mongodb.net:27017/?ssl=true&replicaSet=atlas-dhoxfw-shard-0&authSource=admin&appName=GCAS";

mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB Atlas Connected Successfully"))
    .catch(err => console.error("MongoDB Connection Error:", err));

// 2. Configure Cloudinary with your data
cloudinary.config({
  cloud_name: 'djlm6cbra',
  api_key: '262687152821922',
  api_secret: 'g5ZeI8Kd8WZPfyboVsx4bFOlYYk' 
});

// 3. Setup Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'GCAS_Applications', 
    allowed_formats: ['jpg', 'png', 'pdf', 'jpeg'],
  },
});
const upload = multer({ storage: storage });

// 4. Mongoose Schema
const applicationSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    adhar: String,
    files: Object, 
    gcasusername: { type: String, default: null },
    gcaspassword: { type: String, default: null },
    gcasfilelast: { type: Object, default: null }
});
const Application = mongoose.model('Application', applicationSchema);

// 5. Global API Endpoint
app.post('/api/apply', upload.fields([
    { name: 'marksheet10' }, { name: 'marksheet12' }, 
    { name: 'casteCert' }, { name: 'nclCert' },    
    { name: 'leavingCert' }, { name: 'incomeCert' }, 
    { name: 'photo' }
]), async (req, res) => {
    try {
        const newApp = new Application({
            ...req.body,
            files: req.files, 
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

// 6. DYNAMIC PORT FOR RENDER (Crucial for fixing "Status 1" error)
const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});