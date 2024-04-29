import React from 'react';

const FilterSlider = ({ isOpen, onClose }) => {
  return (
    <div className={`filter-dropdown ${isOpen ? 'open' : ''}`}>
      <div className="filter-content">
        {/* Add your input fields for industry, state, city, source */}
        <input type="text" placeholder="Search..." />
        <button>Add Industry</button>
        <button>Add State</button>
        <button>Add City</button>
        <button>Add Source</button>
        <button>Reset</button>
      </div>
      <div className="overlay" onClick={onClose}></div>
    </div>
  );
};

export default FilterSlider;
