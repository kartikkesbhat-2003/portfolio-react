import React from 'react';
import {CommunityCard} from './CommunityCard';
import './Community.css';
import gdsc_logo from '../../assets/Community/gdsc_logo.svg';
import pyf_logo from '../../assets/Community/pyf_logo.svg';
import ecell_logo from '../../assets/Community/ecell_logo.svg'

const communityData = [
  {
    logo: pyf_logo,
    communityName: 'Prayas Youth Forum & Social Awareness Foundation, Pune',
    role: 'Social Media Head',
    duration: '2015 - Present',
    description: 'A non-profit organization working for the upliftment of the underprivileged.'
  },
  {
    logo: gdsc_logo,
    communityName: 'Google Developer Student Clubs SCOE',
    role: 'Graphics Designer',
    duration: '2019 - Present',
    description: 'A platform for innovation and technology-driven solutions for the community.'
  },
  {
    logo: ecell_logo,
    communityName: 'E-Cell SCOE',
    role: 'Member',
    duration: '2018 - Present',
    description: 'A professional organization for computing and technology students.'
  }
];

export const Community = () => {
    return (
        <div className="community-section">
          <h2 className="community-section-heading">Communities I Am Part Of 🌍</h2>
          <div className="community-cards">
            {communityData.map((community, index) => (
              <CommunityCard key={index} {...community} />
            ))}
          </div>
        </div>
      );
};
