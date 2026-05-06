import React, { useState, useRef } from 'react';

const InsertPage = () => {
    const formRef = useRef(null);
    
    const [formData, setFormData] = useState({ 
        name: '', 
        mobile: '', 
        email: '', 
        adhar: '' 
    });
    const [files, setFiles] = useState({});
    const [statusMsg, setStatusMsg] = useState({ text: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploadProgress, setUploadProgress] = useState({});

    const handleText = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                setStatusMsg({ 
                    text: `${e.target.name} file size should be less than 5MB`, 
                    type: 'error' 
                });
                e.target.value = '';
                return;
            }
            
            // Validate file type
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
            if (!validTypes.includes(file.type)) {
                setStatusMsg({ 
                    text: `${e.target.name} must be JPEG, PNG, or JPG`, 
                    type: 'error' 
                });
                e.target.value = '';
                return;
            }
            
            setFiles({ ...files, [e.target.name]: file });
            setUploadProgress({ ...uploadProgress, [e.target.name]: 100 });
        }
    };

    const removeFile = (fileName) => {
        const newFiles = { ...files };
        delete newFiles[fileName];
        setFiles(newFiles);
        
        const newProgress = { ...uploadProgress };
        delete newProgress[fileName];
        setUploadProgress(newProgress);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate required files
        const requiredFiles = ['marksheet10', 'marksheet12', 'nclCert', 'leavingCert', 'incomeCert', 'photo'];
        const missingFiles = requiredFiles.filter(file => !files[file]);
        
        if (missingFiles.length > 0) {
            setStatusMsg({ 
                text: `Please upload: ${missingFiles.join(', ')}`, 
                type: 'error' 
            });
            return;
        }
        
        setIsSubmitting(true);
        const data = new FormData();
        
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        Object.keys(files).forEach(key => data.append(key, files[key]));

        try {
            const res = await fetch('https://gcas-2t9t.onrender.com/api/apply', { 
                method: 'POST', 
                body: data 
            });

            if (res.ok) {
                setStatusMsg({ 
                    text: "✓ Application submitted successfully! Your data has been saved to the cloud.", 
                    type: "success" 
                });
                
                setFormData({ name: '', mobile: '', email: '', adhar: '' });
                setFiles({});
                setUploadProgress({});
                formRef.current.reset();

                setTimeout(() => setStatusMsg({ text: '', type: '' }), 5000);
            } else {
                const error = await res.json();
                setStatusMsg({ 
                    text: error.message || "Failed to submit. Please try again.", 
                    type: "error" 
                });
            }
        } catch (err) {
            console.error("Connection Error:", err);
            setStatusMsg({ 
                text: "⚠️ Server connection error. Please check your internet and try again.", 
                type: "error" 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const fileFields = [
        { name: 'marksheet10', label: '10th Marksheet', required: true, icon: '📄' },
        { name: 'marksheet12', label: '12th Marksheet', required: true, icon: '📄' },
        { name: 'casteCert', label: 'Caste Certificate', required: false, icon: '📜' },
        { name: 'nclCert', label: 'Non-Creamy Layer Certificate', required: true, icon: '⭐', highlight: true },
        { name: 'leavingCert', label: 'School Leaving Certificate', required: true, icon: '🎓' },
        { name: 'incomeCert', label: 'Income Certificate', required: true, icon: '💰', highlight: true },
        { name: 'photo', label: 'Passport Size Photo', required: true, icon: '📸' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
            <div className="w-full max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                        GCAS Application Portal
                    </h1>
                    <p className="text-gray-600 text-lg">Please fill in all required details carefully</p>
                </div>

                {/* Main Form Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Progress Indicator */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 w-full"></div>
                    
                    <div className="p-6 md:p-8">
                        {/* Status Message */}
                        {statusMsg.text && (
                            <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                                statusMsg.type === 'success' 
                                    ? 'bg-green-50 border-l-4 border-green-500 text-green-700' 
                                    : 'bg-red-50 border-l-4 border-red-500 text-red-700'
                            }`}>
                                <span className="text-xl">
                                    {statusMsg.type === 'success' ? '✅' : '❌'}
                                </span>
                                <span className="flex-1 font-medium">{statusMsg.text}</span>
                                <button 
                                    onClick={() => setStatusMsg({ text: '', type: '' })}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    ✕
                                </button>
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                            {/* Personal Information Section */}
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-100">
                                    Personal Information
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            value={formData.name} 
                                            onChange={handleText} 
                                            required 
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Mobile Number <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="tel" 
                                            name="mobile" 
                                            value={formData.mobile} 
                                            onChange={handleText} 
                                            required 
                                            placeholder="10-digit mobile number"
                                            pattern="[0-9]{10}"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email ID <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            value={formData.email} 
                                            onChange={handleText} 
                                            required 
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Aadhar Card Number <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            name="adhar" 
                                            value={formData.adhar} 
                                            onChange={handleText} 
                                            required 
                                            placeholder="12-digit Aadhar number"
                                            pattern="[0-9]{12}"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Documents Section */}
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-blue-100">
                                    Required Documents
                                </h2>
                                <p className="text-sm text-gray-500 mb-4">Upload clear scanned copies (Max 5MB each, JPEG/PNG/JPG)</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {fileFields.map((field) => (
                                        <div key={field.name} className="space-y-2">
                                            <label className={`block text-sm font-medium ${field.highlight ? 'text-blue-600' : 'text-gray-700'} mb-2`}>
                                                {field.icon} {field.label} {field.required && <span className="text-red-500">*</span>}
                                            </label>
                                            
                                            {!files[field.name] ? (
                                                <div className={`relative border-2 border-dashed rounded-lg p-4 text-center transition ${
                                                    field.highlight 
                                                        ? 'border-blue-300 bg-blue-50 hover:bg-blue-100' 
                                                        : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                                                }`}>
                                                    <input
                                                        type="file"
                                                        name={field.name}
                                                        onChange={handleFile}
                                                        required={field.required}
                                                        accept=".jpg,.jpeg,.png,.pdf"
                                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                    />
                                                    <div className="text-gray-600">
                                                        <span className="text-2xl">📁</span>
                                                        <p className="text-sm mt-1">Click to upload</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-green-600">✓</span>
                                                        <span className="text-sm text-gray-700 truncate flex-1">
                                                            {files[field.name].name}
                                                        </span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFile(field.name)}
                                                        className="text-red-500 hover:text-red-700 text-sm"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`w-full py-4 rounded-xl font-semibold text-white transition-all transform ${
                                        isSubmitting 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-[1.02]'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : (
                                        'Submit Application to Database'
                                    )}
                                </button>
                                <p className="text-xs text-gray-500 text-center mt-4">
                                    By submitting, you confirm that all information provided is accurate and complete
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsertPage;