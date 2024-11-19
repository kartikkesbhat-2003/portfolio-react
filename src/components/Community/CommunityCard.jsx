import React from 'react';
import './CommunityCard.css';

export const CommunityCard = ({ logo, communityName, role, duration, description }) => {
    // Split description into points based on line breaks or commas
    const descriptionPoints = description.split("\n");

    return (
        <div className="community-card">
            <div className="community-logo">
                <img src={logo} alt={`${communityName} logo`} className="community-logo-img" />
            </div>
            <div className="community-info">
                <h3 className="community-name">{communityName}</h3>
                <p className="community-role">{role}</p>
                <p className="community-duration">{duration}</p>
                <ul className="community-description">
                    {descriptionPoints.map((point, index) => (
                        <p key={index}>{point}</p>
                    ))}
                </ul>
            </div>
        </div>
    );
};
