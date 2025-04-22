import React, { useState, useEffect } from "react";
import "../../assets/css/MyAccount.css";
import accountIcon from '../../assets/images/myAccount.png';
import settingsIcon from '../../assets/images/account.png';
import axios from 'axios';

function MyAccount() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        gender: ""
    });

    const [originalData, setOriginalData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Commenting API call for development/testing
                // const response = await axios.get('/api/user-profile');
                // const userData = response.data;
    
                // Dummy user data
                const userData = {
                    firstName: "John",
                    lastName: "Doe",
                    email: "john.doe@example.com",
                    mobile: "9876543210",
                    gender: "Male"
                };
    
                setFormData(userData);
                setOriginalData(userData);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch user data:", error);
                setIsLoading(false);
            }
        };
    
        fetchUserData();
    }, []);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'mobile' ? value.replace(/\s/g, '') : value
        }));
    };

    const handleEditToggle = () => {
        if (isEditing) {
            setFormData(originalData);
            setSuccessMessage('');
        }
        setIsEditing(!isEditing);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
    
        const hasChanges = Object.keys(formData).some(
            key => formData[key] !== originalData[key]
        );
    
        if (!hasChanges) {
            setIsEditing(false);
            setSuccessMessage('No changes detected.');
            return;
        }
    
        setIsSubmitting(true);
    
        try {
            const changedData = {};
            Object.keys(formData).forEach(key => {
                if (formData[key] !== originalData[key]) {
                    changedData[key] = formData[key];
                }
            });   
    
            // Commenting actual API call for development/testing
            // const config = {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     }
            // };
    
            // await axios.put('/api/change-profile', changedData, config);
    
            // Simulate success response
            setTimeout(() => {
                setOriginalData(formData);
                setIsEditing(false);
                setSuccessMessage('Profile updated successfully!');
                setIsSubmitting(false);
            }, 1000);
        } catch (error) {
            console.error("Failed to update profile:", error);
            setSuccessMessage("Failed to update profile. Please try again.");
            setIsSubmitting(false);
        }
    };
    
    

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <section className="account-page">
            <div className="container p-0">
                <h1 className="page-title">My Account</h1>

                <div className="account-container">
                    <div className="account-sidebar">
                        <div className="greeting-section">
                            <img src={accountIcon} alt="Account" className="account-image" />
                            <span className="greeting-text">Hello, {formData.firstName}</span>
                        </div>

                        <div className="settings-section">
                            <img src={settingsIcon} alt="Settings" className="settings-image" />
                            <div className="settings-text">
                                <h4>ACCOUNT SETTINGS</h4>
                                <p>profile information</p>
                            </div>
                        </div>
                    </div>

                    <div className="account-content">
                        <form onSubmit={handleSubmit} className="account-form">
                            <div className="form-header">
                                <h2>Personal Information</h2>
                                <button
                                    type="button"
                                    className={`edit-btn ${isEditing ? 'cancel' : ''}`}
                                    onClick={handleEditToggle}
                                    disabled={isSubmitting}
                                >
                                    {isEditing ? 'CANCEL' : 'EDIT'}
                                </button>
                            </div>

                            {successMessage && (
                                <div className={`alert-message ${successMessage.includes('Failed') ? 'error' : 'success'}`}>
                                    {successMessage}
                                </div>
                            )}

                            <div className="form-section">
                                <div className="name-fields">
                                    <div className="input-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="form-input"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            disabled={!isEditing || isSubmitting}
                                        />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="form-input"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            disabled={!isEditing || isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div className="gender-section">
                                    <h3>Your Gender</h3>
                                    <div className="radio-group">
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Male"
                                                checked={formData.gender === "Male"}
                                                onChange={handleChange}
                                                disabled={!isEditing || isSubmitting}
                                            />
                                            Male
                                        </label>

                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Female"
                                                checked={formData.gender === "Female"}
                                                onChange={handleChange}
                                                disabled={!isEditing || isSubmitting}
                                            />
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <div className="input-row">
                                    <div className="input-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-input"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={!isEditing || isSubmitting}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <div className="input-row">
                                    <div className="input-group">
                                        <label htmlFor="mobile">Mobile Number</label>
                                        <input
                                            type="tel"
                                            id="mobile"
                                            className="form-input"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            disabled={!isEditing || isSubmitting}
                                        />
                                    </div>
                                </div>
                            </div>

                            {isEditing && (
                                <div className="form-actions">
                                    <button
                                        type="submit"
                                        className="save-btn"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'SAVING...' : 'SAVE CHANGES'}
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyAccount;
