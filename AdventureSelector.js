import React, { useState } from "react";
import "./AdventureSelector.css"; // Import the CSS file for styling

const AdventureSelector = () => {
  // State to track user selections
  const [destination, setDestination] = useState("Nepal");
  const [activity, setActivity] = useState("Trekking");
  const [duration, setDuration] = useState("7 Days");

  // Handle change for destination, activity, and duration
  const handleSelectionChange = (e) => {
    const { name, value } = e.target;
    if (name === "destination") setDestination(value);
    if (name === "activity") setActivity(value);
    if (name === "duration") setDuration(value);
  };

  return (
    <div className="container">
      <h1>Find Your Adventure</h1>

      {/* Destination Dropdown */}
      <div className="select-box">
        <label htmlFor="destination">Choose Destination</label>
        <select
          id="destination"
          name="destination"
          value={destination}
          onChange={handleSelectionChange}
        >
          <option value="Nepal">Nepal</option>
          <option value="Bhutan">Bhutan</option>
          <option value="India and Bhutan">India and Bhutan</option>
          <option value="Nepal and Bhutan">Nepal and Bhutan</option>
          <option value="Nepal, Tibet and Bhutan">Nepal, Tibet and Bhutan</option>
          <option value="Nepal and India">Nepal and India</option>
          <option value="Nepal and Tibet">Nepal and Tibet</option>
          <option value="Tibet">Tibet</option>
          <option value="India">India</option>
        </select>
      </div>

      {/* Activity Dropdown */}
      <div className="select-box">
        <label htmlFor="activity">Choose Activity</label>
        <select
          id="activity"
          name="activity"
          value={activity}
          onChange={handleSelectionChange}
        >
          <option value="Trekking">Trekking</option>
          <option value="Climbing">Climbing</option>
          <option value="Cycling">Cycling</option>
        </select>
      </div>

      {/* Duration Dropdown */}
      <div className="select-box">
        <label htmlFor="duration">Choose Duration</label>
        <select
          id="duration"
          name="duration"
          value={duration}
          onChange={handleSelectionChange}
        >
          <option value="7 Days">7 Days</option>
          <option value="14 Days">14 Days</option>
          <option value="21 Days">21 Days</option>
        </select>
      </div>

      {/* Adventure Details Preview */}
      <div className="preview">
        <h3>Your Adventure Details</h3>
        <p><strong>Destination:</strong> {destination}</p>
        <p><strong>Activity:</strong> {activity}</p>
        <p><strong>Duration:</strong> {duration}</p>
        
        {/* Insert Link to TripNepal */}
        <p>
          For more details or to book your adventure, visit 
          <a href="https://tripnepal.com/" target="_blank">Trip Nepal</a>.
        </p>
      </div>

      {/* Book Adventure Button */}
      <button id="submitBtn">Book Your Adventure</button>
    </div>
  );
};

export default AdventureSelector;
