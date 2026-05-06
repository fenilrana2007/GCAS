import React, { useState } from 'react';

const InsertPage = () => {
    const [formData, setFormData] = useState({ name: '', mobile: '', email: '', adhar: '' });
    const [files, setFiles] = useState({});

    const handleText = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleFile = (e) => setFiles({ ...files, [e.target.name]: e.target.files[0] });

    // This function must be inside the InsertPage component
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        
        // Append text fields
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        // Append all file fields
        Object.keys(files).forEach(key => data.append(key, files[key]));

        try {
            // const res = await fetch('http://localhost:5000/api/apply', { method: 'POST', body: data });
            const res = await fetch('https://your-backend-service.onrender.com/api/apply', { 
                        method: 'POST', 
                        body: data 
       });
            if (res.ok) {
                alert("Data & Documents saved to MongoDB!");
            } else {
                alert("Failed to save data. Check server console.");
            }
        } catch (err) {
            console.error("Connection Error:", err);
            alert("Could not connect to backend server on port 5000.");
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">GCAS Application Form</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Text Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Full Name" onChange={handleText} required className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-primary" />
                    <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleText} required className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-primary" />
                    <input type="email" name="email" placeholder="Email ID" onChange={handleText} required className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-primary" />
                    <input type="text" name="adhar" placeholder="Aadhar Card Number" onChange={handleText} required className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-primary" />
                </div>

                {/* File Uploads Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-semibold text-slate-600">
                    <label className="flex flex-col gap-1">10th Marksheet <input type="file" name="marksheet10" onChange={handleFile} required /></label>
                    <label className="flex flex-col gap-1">12th Marksheet <input type="file" name="marksheet12" onChange={handleFile} required /></label>
                    <label className="flex flex-col gap-1">Caste Certificate <input type="file" name="casteCert" onChange={handleFile} /></label>
                    
                    {/* NEW: Non-Creamy Layer */}
                    <label className="flex flex-col gap-1 text-blue-700">Non-Creamy Layer Cert <input type="file" name="nclCert" onChange={handleFile} required /></label>
                    
                    <label className="flex flex-col gap-1">School Leaving Cert <input type="file" name="leavingCert" onChange={handleFile} required /></label>
                    
                    {/* NEW: Income Certificate */}
                    <label className="flex flex-col gap-1 text-blue-700">Income Certificate <input type="file" name="incomeCert" onChange={handleFile} required /></label>
                    
                    <label className="flex flex-col gap-1">Passport Photo <input type="file" name="photo" onChange={handleFile} required /></label>
                </div>

                <button type="submit" className="mt-4 bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all">
                    Submit Application to Database
                </button>
            </form>
        </div>
    );
};

export default InsertPage;