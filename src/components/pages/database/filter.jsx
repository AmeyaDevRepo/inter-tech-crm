import React from 'react';

const FilterSlider = ({ isOpen, onClose }) => {
  return (
      <div className="overlay" onClick={onClose}>
    <div className={`filter-dropdown ${isOpen ? 'open' : ''} h-screen z-10`}>
      <div className="filter-content h-screen z-20">
        {/* Add your input fields for industry, state, city, source */}
        <input type="text" placeholder="Search..." />
        <button>Add Industry</button>
        <button>Add State</button>
        <button>Add City</button>
        <button>Add Source</button>
        <button>Reset</button>
      </div>
    </div>
    </div>
  );
};

export default FilterSlider;
