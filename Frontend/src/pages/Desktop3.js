import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Menu, MenuItem } from "@mui/material";
import { Form } from "react-bootstrap";
import "./Desktop3.css";

const Desktop3 = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [selectedRating, setRatingCase] = useState(null);
  const apiUrl = 'http://localhost:5000/analyze_feedback'; 

  const handleTextareaChange = (event) => {
    // Update the state with the input value from the textarea
    setTextareaValue(event.target.value);
  };

  const handlePrintTextareaValue = () => {
    // Create a JSON object with the feedback and selected rating
    const data = {
      feedback: textareaValue,
      
      user_rating: selectedRating,
    };
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback: textareaValue, user_rating: selectedRating }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server');
        }
        return response.json();
      })
      .then((result) => {
        console.log('API Response:', data);

        console.log('Sentiment Analysis Rating:', result.sentiment_rating);
        console.log('User Rating:', result.user_rating);
        console.log('Average Rating:', result.average_rating);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  const [
    dropdownButtonSimpleTextOAnchorEl,
    setDropdownButtonSimpleTextOAnchorEl,
  ] = useState(null);
  const [
    dropdownButtonSimpleTextOSelectedIndex,
    setDropdownButtonSimpleTextOSelectedIndex,
  ] = useState(-1);
  const dropdownButtonSimpleTextOOpen = Boolean(
    dropdownButtonSimpleTextOAnchorEl
  );
  const handleDropdownButtonSimpleTextOClick = (event) => {
    setDropdownButtonSimpleTextOAnchorEl(event.currentTarget);
  };
  const handleDropdownButtonSimpleTextOMenuItemClick = (index) => {
    setDropdownButtonSimpleTextOSelectedIndex(index);
    setDropdownButtonSimpleTextOAnchorEl(null);
  };
  const handleDropdownButtonSimpleTextOClose = () => {
    setDropdownButtonSimpleTextOAnchorEl(null);
  };
  const handleRatingSelect = (rating) => {
    setRatingCase(rating);
    setDropdownButtonSimpleTextOAnchorEl(null); // Close the menu
  };
  
  return (
    <div className="desktop-3-">
      <div className="rectangle-parent2-">
        <div className="group-child2-" />
        <img className="image-1-icon1-" alt="" src="/image-1@2x.png" />
        <div className="home-group-">
          <div className="home1-">Home</div>
          <b className="find-lawyer2-">Find Lawyer</b>
          <div className="home1-">History</div>
          <div className="home1-">Settings</div>
          <div className="home1-">Help</div>
        </div>
      </div>
      <div className="mahika-agrawal-">Mahika Agrawal</div>
      <div className="kashish-gandhi-parent-">
        <div className="kashish-gandhi1-">Kashish Gandhi</div>
        <img className="group-child3-" alt="" src="/ellipse-1@2x.png" />
      </div>
      <div className="rectangle-parent3-">
        <div className="group-child4-" />
        <div className="ask-ai1-">Ask AI</div>
        <img className="vector-icon1-" alt="" src="/vector.svg" />
      </div>
      <div className="parent-">
        <div className="div-">3.0</div>
        <img className="vector-icon2-" alt="" src="/vector1.svg" />
        <div className="rating-">{`Rating: `}</div>
        <div className="real-estate-law-">Real Estate Law</div>
        <div className="experience-13-years-">Experience: 13 years</div>
        <div className="avg-charge-21606-">Avg Charge: 216.06 USD/hour</div>
      </div>
      <div className="your-feedback-">
        <span>Your</span>
        <span className="feedback-"> Feedback</span>
      </div>
      <div className="please-provide-detailed-descri-wrapper-">
        <div className="please-provide-detailed-">
          Please provide detailed description of your experience
        </div>
      </div>
      <div className="rating-parent-">
        <div className="rating1-">Rating</div>
        <div className="group-child5-" />
        <img className="vector-icon3-" alt="" src="/vector2.svg" />
        <div className="dropdown-buttonsimple-text-o-">
          <Button
            id="button-Out of 5 Rating"
            aria-controls="menu-Out of 5 Rating"
            aria-haspopup="true"
            aria-expanded={dropdownButtonSimpleTextOOpen ? "true" : undefined}
            onClick={handleDropdownButtonSimpleTextOClick}
            color="primary"
          >
            {selectedRating || "Out of 5 Rating"}
          </Button>
          <Menu
            anchorEl={dropdownButtonSimpleTextOAnchorEl}
            open={dropdownButtonSimpleTextOOpen}
            onClose={handleDropdownButtonSimpleTextOClose}
          >
            <MenuItem
              selected={dropdownButtonSimpleTextOSelectedIndex === 0}
              onClick={() => handleRatingSelect("1")}
            >
              1
            </MenuItem>
            <MenuItem
              selected={dropdownButtonSimpleTextOSelectedIndex === 1}
              onClick={() => handleRatingSelect("2")}
            >
              2
            </MenuItem>
            <MenuItem
              selected={dropdownButtonSimpleTextOSelectedIndex === 2}
              onClick={() => handleRatingSelect("3")}
            >
              3
            </MenuItem>
            <MenuItem
              selected={dropdownButtonSimpleTextOSelectedIndex === 3}
              onClick={() => handleRatingSelect("4")}
            >
              4
            </MenuItem>
            <MenuItem
              selected={dropdownButtonSimpleTextOSelectedIndex === 4}
              onClick={() => handleRatingSelect("5")}
            >
              5
            </MenuItem>
          </Menu>
        </div>
      </div>
      <Form.Group className="wrapper-">
        <Form.Control as="textarea" value={textareaValue}
          onChange={handleTextareaChange} />
      </Form.Group>
      <button className="group-button" style={{width:"5px"}} onClick={handlePrintTextareaValue}>
        <div className="group-child4" style={{width:"140px"}} />
        <div className="find-lawyer3">Submit</div>
      </button>
    </div>
  );
};

export default Desktop3;
