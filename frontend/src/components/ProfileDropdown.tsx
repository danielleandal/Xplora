import React, { useState } from 'react';
import '../pages/Dashboard.css'
import defaultprofile from '../images/default_profile.png';

interface ProfileDropdownProps {
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    onEditProfile: () => void;
    // onSaveProfile: () => void;
    onSaveProfile: (newFirstName: string, newLastName: string, newEmail: string, newPassword: string) => void;
    onCancelProfile: () => void;

    isEditing: boolean;
    isMenuOpen: boolean;
}



const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ firstName, lastName, email, password, onEditProfile, onSaveProfile, onCancelProfile, isEditing, isMenuOpen }) => {
    const [newFirstName, setNewFirstName] = useState<string>(firstName);
    const [newLastName, setNewLastName] = useState<string>(lastName);
    const [newEmail, setNewEmail] = useState<string>(email);
    const [newPassword, setNewPassword] = useState<string>('');

    const handleSaveChange = () => {
        onSaveProfile(newFirstName, newLastName, newEmail, newPassword);
    };
    
    return(
        <div className={`profile-menu-container ${isMenuOpen ? 'open-menu' : ''}`} id="profile-menu">
            
            {/* Conditional classNames based on isEditing status */}
            <div className={`profile-info ${isEditing ? "editing" : ""}`}>
                                                
                {isEditing ? (
                    <>
                        <img src={defaultprofile} alt="Profile Icon" id="profile-icon" />   
                        <div id="edit-name">
                            <input className="edit-info"
                                type="text"
                                value={newFirstName}
                                onChange={
                                    (e) => setNewFirstName(e.target.value)
                                }
                                placeholder="First Name"
                            />
                            <input className="edit-info"
                                type="text"
                                value={newLastName}
                                onChange={
                                    (e) => setNewLastName(e.target.value)
                                }
                                placeholder="Last Name"
                            />
                        </div>
                    </>
                ) : (
                    <>
                    <img src={defaultprofile} alt="Profile Icon" id="profile-icon" />
                    <div id="name"><h2 id="profile-menu">{firstName} {lastName}</h2></div>
                    </> 
                )}
            </div>
            <div className={`profile-info ${isEditing ? "editing" : ""}`}>
                <div id="email">
                    {isEditing ? (
                        <input className="edit-info"
                            type="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            placeholder="Email"
                        />
                    ) : (
                        email
                    )}
                </div>
            </div>
            <div className={`profile-info ${isEditing ? "editing" : ""}`}>
                <div id="password">
                    {isEditing ? (
                        <input className="edit-info"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Password"
                        />
                    ) : (
                        password
                    )}
                </div>
            </div>
            <div className={`profile-info ${isEditing ? "editing" : ""}`}>
                {isEditing ? (
                    <>
                        <i id="profile-cancel-icon" className='fa fa-times-circle' onClick={onCancelProfile}></i>
                        <i id="profile-save-icon" className='fa fa-save' onClick={handleSaveChange}></i>
                    </>
                ) : (
                    <>
                        <i id="profile-cancel-icon" className='fa fa-times-circle' onClick={onCancelProfile}></i>
                        <i id="trip-item-edit-icon" className='fa fa-pen-alt' onClick={onEditProfile}></i>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfileDropdown;