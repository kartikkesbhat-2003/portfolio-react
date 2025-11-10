import React from 'react';
import './Education.css';

export const Education = () => {
    const educationData = [
        {
          degree: "Bachelor of Engineering (Information Technology)",
          institution: "Sinhgad College of Engineering, Pune",
          year: "2021 - 2025",
          score: "7.2 CGPA", // Added score/percentage
          description: "Focused on IT development and software engineering, gaining expertise in web and app development.",
        },
        {
          degree: "Higher Secondary Certificate (HSC)",
          institution: "Vimalabai Gaikwad Junior College, Gaikwad Jalgaon",
          year: "2018 - 2020",
          score: "77.38%", // Added score/percentage
          description: "Specialized in Science with Mathematics, focusing on analytical and problem-solving skills.",
        },
        {
          degree: "Secondary School Certificate (SSC)",
          institution: "Residential High School, Shevgaon",
          year: "2017 - 2018",
          score: "84.20%", // Added score/percentage
          description: "Completed SSC with a strong foundation in academics and extracurricular activities.",
        },
      ];

  return (
    <section className="education-section">
      <h2 className="section-title">🎓 Education </h2>
      <div className="education-container">
        {educationData.map((item, index) => (
          <div key={index} className="education-card">
            <h3 className="education-degree">{item.degree}</h3>
            <p className="education-institution">{item.institution}</p>
            <p className="education-year">{item.year}</p>
            <p className="education-score">Score: {item.score}</p>
            <p className="education-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

