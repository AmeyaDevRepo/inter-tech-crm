import React, { useState } from 'react';
import '../../../style/custom.css';

const FilterSlider = ({ isOpen, onClose }) => {
  const [locations, setLocations] = useState({});
  const [currentCompany, setCurrentCompany] = useState({});
  const [pastCompany, setPastCompany] = useState({});
  const [school, setSchool] = useState({});

  const handleCheckboxChange = (category, value) => {
    const setCategory = {
      'locations': setLocations,
      'currentCompany': setCurrentCompany,
      'pastCompany': setPastCompany,
      'school': setSchool
    }[category];

    setCategory(prev => ({ ...prev, [value]: !prev[value] }));
  };

  const isCheckboxChecked = (category, value) => {
    const stateCategory = {
      'locations': locations,
      'currentCompany': currentCompany,
      'pastCompany': pastCompany,
      'school': school
    }[category];

    return !!stateCategory[value];
  };

  const renderCheckboxSection = (title, items, category) => (
    <div>
      <h4>{title}</h4>
      {items.map(item => (
        <label key={item}>
          <input
            type="checkbox"
            checked={isCheckboxChecked(category, item)}
            onChange={() => handleCheckboxChange(category, item)}
          />
          {item}
        </label>
      ))}
    </div>
  );

  const resetFilters = () => {
    setLocations({});
    setCurrentCompany({});
    setPastCompany({});
    setSchool({});
  };

  return (
    <div className="overlay" style={{ display: isOpen ? 'block' : 'none' }} onClick={onClose}>
      <div className="filter-dropdown" onClick={e => e.stopPropagation()}>
        <div className="filter-content">
          {renderCheckboxSection('Locations', ['India', 'United States', 'Greater Delhi Area', 'Maharashtra, India', 'Delhi, India'], 'locations')}
          {renderCheckboxSection('Current Company', ['Microsoft', 'LinkedIn', 'Google', 'YouTube', 'Tata Consultancy Services'], 'currentCompany')}
          {renderCheckboxSection('Past Company', ['IBM', 'Microsoft', 'Accenture', 'Tata Consultancy Services', 'Google'], 'pastCompany')}
          {renderCheckboxSection('School', ['Delhi University', 'Harvard Business School', 'Kendriya Vidyalaya', 'University of Mumbai'], 'school')}
          <button className="filter-button reset-button" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSlider;
