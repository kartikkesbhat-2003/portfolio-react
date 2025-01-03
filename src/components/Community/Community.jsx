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
    duration: '2022 - Present',
    description: 'A non-profit empowering underprivileged communities through impactful initiatives.'
  },
  {
    logo: gdsc_logo,
    communityName: 'Google Developer Student Clubs SCOE',
    role: 'Graphics Designer',
    duration: '2023 - 2024',
    description: 'A platform fostering innovation and problem-solving using technology.'
  },
  {
    logo: ecell_logo,
    communityName: 'E-Cell SCOE',
    role: 'Member',
    duration: '2023 - Present',
    description: 'An entrepreneurial cell promoting startup culture among students.'
  }
];



export const Community = () => {
    return (
        <div className="community-section">
          <h2 className="community-section-heading">🌍 Communities I Am Part Of</h2>
          <div className="community-cards">
            {communityData.map((community, index) => (
              <CommunityCard key={index} {...community} />
            ))}
          </div>
        </div>
      );
};
