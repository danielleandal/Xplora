import React, { useState } from 'react';
import '../components/AddStyling.css';
import { useNavigate } from 'react-router-dom';

interface EditTripProps {
    onClose: () => void; // Function to close the modal
    onSave: () => void; // Function to refresh the parent list after a successful save
    apiEndpoint: string; // API endpoint for saving the flight
    selectedEdit: any;
}

const app_name = 'xplora.fun';
function buildPath(route: string): string {
    if (process.env.NODE_ENV !== 'development') {
        return `https://${app_name}/${route}`;
    } else {
        return `http://localhost:5000/${route}`;
    }
}

const EditTrip: React.FC<EditTripProps> = ({ onClose, onSave, apiEndpoint, selectedEdit }) => {
    const navigate = useNavigate();
    const [editDetails, setEditDetails] = useState({
        tripName: selectedEdit?.title || '',
        tripLocation: selectedEdit?.location || '',
        startDate: selectedEdit?.dates?.split(' - ')[0] || '',
        endDate: selectedEdit?.dates?.split(' - ')[1] || '',
        notes: '',
    });

    const [isSaving] = useState(false); // Loading indicator
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const SuccessModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
        return (
            <div className="modal-overlay-alert" onClick={onClose}>
                <div className="modal-content-alert" onClick={(e) => e.stopPropagation()}>
                    <h2>Success</h2>
                    <p>Your changes have been saved!</p>
                    <button onClick={onClose}>OK</button>
                </div>
            </div>
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditDetails({ ...editDetails, [name]: value });
    };


    const handleSubmit = async () => {
        const payload = {
            name: editDetails.tripName,
            city: editDetails.tripLocation,
            start_date: editDetails.startDate,
            end_date: editDetails.endDate,
            notes: editDetails.notes,
        };

        try {
            const response = await fetch(buildPath(apiEndpoint), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }); 

            if (response.ok) {
                console.log('Trip editted succesfully!');
                setIsSuccessModalOpen(true); // Open the success modal
                onSave(); // Refresh the parent list
                navigate('/dashboard');
                //onClose();
                location.reload();
            } else {
                const errorData = await response.json();
                console.error('Error editting trip:', errorData.error);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
        }
    };


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>✖</button>
                <h2>Edit Trip Details</h2>
                <form>
                    <div className="form-group">
                        <label>Trip Name:</label>
                        <input
                            type="text"
                            name="tripName"
                            value={editDetails.tripName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trip Location:</label>
                        <input
                            type="text"
                            name="tripLocation"
                            value={editDetails.tripLocation}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Start Date:</label>
                        <input
                            type="date"
                            name="startDate"
                            value={editDetails.startDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>End Date:</label>
                        <input
                            type="date"
                            name="endDate"
                            value={editDetails.endDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Notes:</label>
                        <input
                            type="text"
                            name="notes"
                            value={editDetails.notes}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Change Photo:</label>
                        <input
                            type="file"
                            name="photoUrl"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if(file) {
                                    //handle pic update here
                                    console.log('File selected:', file);
                                }
                            }}
                        />
                    </div>
                    <button className='submit-flight' type="button" onClick={handleSubmit} disabled={isSaving}>
                        {isSaving ? 'Saving...' : 'Save Changes'}
                    </button>
                </form>
            </div>

            {isSuccessModalOpen && <SuccessModal onClose={() => {
                setIsSuccessModalOpen(false);
                onClose(); // Close the main modal
            }} />}
        </div>


    );
};

export default EditTrip;