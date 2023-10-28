import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Menu, MenuItem } from "@mui/material";
import { Form } from "react-bootstrap";
import "./Desktop2.css";

const Desktop2 = () => {
  const [selectedLanguage3, setSelectedLanguage3] = useState(null);
  const [selectedLanguage2, setSelectedLanguage2] = useState(null);
  const [selectedLanguage1, setSelectedLanguage1] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [
    dropdownButtonSimpleTextOAnchorEl,
    setDropdownButtonSimpleTextOAnchorEl,
  ] = useState(null);
  const [
    dropdownButtonSimpleTextO1AnchorEl,
    setDropdownButtonSimpleTextO1AnchorEl,
  ] = useState(null);
  const [
    dropdownButtonSimpleTextO2AnchorEl,
    setDropdownButtonSimpleTextO2AnchorEl,
  ] = useState(null);
  const [
    dropdownButtonSimpleTextO3AnchorEl,
    setDropdownButtonSimpleTextO3AnchorEl,
  ] = useState(null);
  const [
    dropdownButtonSimpleTextO4AnchorEl,
    setDropdownButtonSimpleTextO4AnchorEl,
  ] = useState(null);
  const [
    dropdownButtonSimpleTextO5AnchorEl,
    setDropdownButtonSimpleTextO5AnchorEl,
  ] = useState(null);
  const [
    dropdownButtonSimpleTextO6AnchorEl,
    setDropdownButtonSimpleTextO6AnchorEl,
  ] = useState(null);
  const dropdownButtonSimpleTextOOpen = Boolean(
    dropdownButtonSimpleTextOAnchorEl
  );
  const handleDropdownButtonSimpleTextOClick = (event) => {
    setDropdownButtonSimpleTextOAnchorEl(event.currentTarget);
  };
  const handleDropdownButtonSimpleTextOClose = () => {
    setDropdownButtonSimpleTextOAnchorEl(null);
  };
  const dropdownButtonSimpleTextO1Open = Boolean(
    dropdownButtonSimpleTextO1AnchorEl
  );
  const handleDropdownButtonSimpleTextO1Click = (event) => {
    setDropdownButtonSimpleTextO1AnchorEl(event.currentTarget);
  };
  const handleDropdownButtonSimpleTextO1Close = () => {
    setDropdownButtonSimpleTextO1AnchorEl(null);
  };
  const dropdownButtonSimpleTextO2Open = Boolean(
    dropdownButtonSimpleTextO2AnchorEl
  );
  const handleDropdownButtonSimpleTextO2Click = (event) => {
    setDropdownButtonSimpleTextO2AnchorEl(event.currentTarget);
  };
  const handleDropdownButtonSimpleTextO2Close = () => {
    setDropdownButtonSimpleTextO2AnchorEl(null);
  };
  const dropdownButtonSimpleTextO3Open = Boolean(
    dropdownButtonSimpleTextO3AnchorEl
  );
  const handleDropdownButtonSimpleTextO3Click = (event) => {
    setDropdownButtonSimpleTextO3AnchorEl(event.currentTarget);
  };
  const handleDropdownButtonSimpleTextO3Close = () => {
    setDropdownButtonSimpleTextO3AnchorEl(null);
  };
  const dropdownButtonSimpleTextO4Open = Boolean(
    dropdownButtonSimpleTextO4AnchorEl
  );
  const handleDropdownButtonSimpleTextO4Click = (event) => {
    setDropdownButtonSimpleTextO4AnchorEl(event.currentTarget);
  };
  const handleDropdownButtonSimpleTextO4Close = () => {
    setDropdownButtonSimpleTextO4AnchorEl(null);
  };
  const dropdownButtonSimpleTextO5Open = Boolean(
    dropdownButtonSimpleTextO5AnchorEl
  );
  const handleDropdownButtonSimpleTextO5Click = (event) => {
    setDropdownButtonSimpleTextO5AnchorEl(event.currentTarget);
  };
  const handleDropdownButtonSimpleTextO5Close = () => {
    setDropdownButtonSimpleTextO5AnchorEl(null);
  };
  const dropdownButtonSimpleTextO6Open = Boolean(
    dropdownButtonSimpleTextO6AnchorEl
  );
  const handleDropdownButtonSimpleTextO6Click = (event) => {
    setDropdownButtonSimpleTextO6AnchorEl(event.currentTarget);
  };
  const handleDropdownButtonSimpleTextO6Close = () => {
    setDropdownButtonSimpleTextO6AnchorEl(null);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage3(language);
    setDropdownButtonSimpleTextOAnchorEl(null); // Close the menu
  };
  const handleLanguageSelect1 = (language) => {
    setSelectedLanguage2(language);
    setDropdownButtonSimpleTextOAnchorEl(null); // Close the menu
  };
  const handleLanguageSelect2 = (language) => {
    setSelectedLanguage1(language);
    setDropdownButtonSimpleTextOAnchorEl(null); // Close the menu
  };
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setDropdownButtonSimpleTextOAnchorEl(null); // Close the menu
  };
  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setDropdownButtonSimpleTextOAnchorEl(null); // Close the menu
  };
  const handleJurisdictionSelect = (jurisdiction) => {
    setSelectedJurisdiction(jurisdiction);
    setDropdownButtonSimpleTextOAnchorEl(null); // Close the menu
  };
  const handleCaseSelect = (case1) => {
    setSelectedCase(case1);
    setDropdownButtonSimpleTextOAnchorEl(null); // Close the menu
  };
  return (
    <div className="desktop-2">
      <div className="desktop-2-child">
      <img className="image-1-icon1" alt="" src="/image-1@2x.png" />
      <div className="home-group">
        <div className="home1">Home</div>
        <b className="find-lawyer2">Find Lawyer</b>
        <div className="home1">History</div>
        <div className="home1">Settings</div>
        <div className="home1">Help</div>
      </div>
      </div>
      <div className="rectangle-parent2">
        <div className="group-child2" />
        <img className="group-child3" alt="" src="/ellipse-1@2x.png" />
        <div className="mahika-agrawal">Mahika Agrawal</div>
        <div className="div">3.0</div>
        <img className="vector-icon1" alt="" src="/vector1.svg" />
        <div className="real-estate-law">Real Estate Law</div>
        <div className="experience-13-years">Experience: 13 years</div>
        <div className="avg-charge-21606">Avg Charge: 216.06 USD/hour</div>
      </div>
      <button className="group-button">
        <div className="group-child4" />
        <div className="find-lawyer3">Find Lawyer</div>
      </button>
      <div className="language-preference-3-parent">
        <div className="location">{`Language Preference 3: `}</div>
        <div className="group-child5" />
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <div className="dropdown-buttonsimple-text-o">
          <Button
            id="button-Choose Language"
            aria-controls="menu-Choose Language"
            aria-haspopup="true"
            aria-expanded={dropdownButtonSimpleTextOOpen ? "true" : undefined}
            onClick={handleDropdownButtonSimpleTextOClick}
            color="primary"
          >
            {selectedLanguage3 || "Choose Language"}
          </Button>
          <Menu
            anchorEl={dropdownButtonSimpleTextOAnchorEl}
            open={dropdownButtonSimpleTextOOpen}
            onClose={handleDropdownButtonSimpleTextOClose}
          >
            <MenuItem onClick={() => handleLanguageSelect("Odia")}>
              Odia
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("Marathi")}>
              Marathi
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("Bengali")}>
              Bengali
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("Punjabi")}>
              Punjabi
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("Gujarati")}>
              Gujarati
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("Assamese")}>
              Assamese
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("Telugu")}>
              Telugu
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("Tamil")}>
              Tamil
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("Hindi")}>
              Hindi
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("Urdu")}>
              Urdu
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("Malayalam")}>
              Malayalam
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("Kannada")}>
              Kannada
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="language-preference-1-parent">
        <div className="location">{`Language Preference 1: * `}</div>
        <div className="group-child5" />
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <div className="dropdown-buttonsimple-text-o">
          <Button
            id="button-Choose Language"
            aria-controls="menu-Choose Language"
            aria-haspopup="true"
            aria-expanded={dropdownButtonSimpleTextO1Open ? "true" : undefined}
            onClick={handleDropdownButtonSimpleTextO1Click}
            color="primary"
          >
            {selectedLanguage2 || "Choose Language"}
          </Button>
          <Menu
            anchorEl={dropdownButtonSimpleTextO1AnchorEl}
            open={dropdownButtonSimpleTextO1Open}
            onClose={handleDropdownButtonSimpleTextO1Close}
          >
            <MenuItem onClick={() => handleLanguageSelect1("Odia")}>
              Odia
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect1("Marathi")}>
              Marathi
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect1("Bengali")}>
              Bengali
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect1("Punjabi")}>
              Punjabi
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect1("Gujarati")}>
              Gujarati
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect1("Assamese")}>
              Assamese
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect1("Telugu")}>
              Telugu
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect1("Tamil")}>
              Tamil
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect1("Hindi")}>
              Hindi
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect1("Urdu")}>
              Urdu
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect1("Malayalam")}>
              Malayalam
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect1("Kannada")}>
              Kannada
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="location-parent">
        <div className="location">Location: *</div>
        <div className="group-child5" />
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <div className="dropdown-buttonsimple-text-o">
          <Button
            id="button-Choose City"
            aria-controls="menu-Choose City"
            aria-haspopup="true"
            aria-expanded={dropdownButtonSimpleTextO2Open ? "true" : undefined}
            onClick={handleDropdownButtonSimpleTextO2Click}
            color="primary"
          >
             {selectedCity || "Choose City"}
          </Button>
          <Menu
            anchorEl={dropdownButtonSimpleTextO2AnchorEl}
            open={dropdownButtonSimpleTextO2Open}
            onClose={handleDropdownButtonSimpleTextO2Close}
          >
            <MenuItem onClick={() => handleCitySelect("Mumbai")}>
              Mumbai
            </MenuItem>
            <MenuItem onClick={() => handleCitySelect("Chennai")}>
              Chennai
            </MenuItem>
            <MenuItem onClick={() => handleCitySelect("Hyderabad")}>
            Hyderabad
            </MenuItem>
            <MenuItem onClick={() => handleCitySelect("Kolkata")}>
              Kolkata
            </MenuItem>
            <MenuItem onClick={() => handleCitySelect("Bangalore")}>
              Bangalore
            </MenuItem>
            <MenuItem onClick={() => handleCitySelect("Delhi")}>
              Delhi
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="service-type-parent">
        <div className="location">Service Type:</div>
        <div className="group-child5" />
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <div className="dropdown-buttonsimple-text-o">
          <Button
            id="button-Choose Service Type"
            aria-controls="menu-Choose Service Type"
            aria-haspopup="true"
            aria-expanded={dropdownButtonSimpleTextO3Open ? "true" : undefined}
            onClick={handleDropdownButtonSimpleTextO3Click}
            color="primary"
          >
          {selectedType || "Choose Service Type"}
          </Button>
          <Menu
            anchorEl={dropdownButtonSimpleTextO3AnchorEl}
            open={dropdownButtonSimpleTextO3Open}
            onClose={handleDropdownButtonSimpleTextO3Close}
          >
            <MenuItem onClick={() => handleTypeSelect("Labor")}>
              Labor
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Environmental")}>
              Environmental
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Human Rights")}>
              Human Rights
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Real Estate")}>
              Real Estate
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Medical")}>
              Medical
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Family")}>
              Family
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Constitutional")}>
              Constitutional
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Criminal")}>
              Criminal
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Corporate")}>
              Corporate
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Consumer Protection")}>
              Consumer Protection
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Media and Entertainment")}>
              Media and Entertainment
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Banking and Finance")}>
              Banking and Finance
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Intellectual Property")}>
              Intellectual Property
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Civil")}>
              Civil
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Tax")}>
              Tax
            </MenuItem>
            <MenuItem onClick={() => handleTypeSelect("Immigration")}>
              Immigration
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="jurisdiction-level-parent">
        <div className="location">Jurisdiction Level:</div>
        <div className="group-child5" />
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <div className="dropdown-buttonsimple-text-o">
          <Button
            id="button-Choose Jurisdiction Level"
            aria-controls="menu-Choose Jurisdiction Level"
            aria-haspopup="true"
            aria-expanded={dropdownButtonSimpleTextO4Open ? "true" : undefined}
            onClick={handleDropdownButtonSimpleTextO4Click}
            color="primary"
          >
            {selectedJurisdiction || "Choose Jurisdiction Type"}
          </Button>
          <Menu
            anchorEl={dropdownButtonSimpleTextO4AnchorEl}
            open={dropdownButtonSimpleTextO4Open}
            onClose={handleDropdownButtonSimpleTextO4Close}
          >
            <MenuItem onClick={() => handleJurisdictionSelect("Supreme Court")}>
              Supreme Court
            </MenuItem>
            <MenuItem onClick={() => handleJurisdictionSelect("Specialized Court")}>
              Specialized Court
            </MenuItem>
            <MenuItem onClick={() => handleJurisdictionSelect("District Court")}>
              District Court
            </MenuItem>
            <MenuItem onClick={() => handleJurisdictionSelect("High Court")}>
              High Court
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="case-type-parent">
        <div className="location">Case Type:</div>
        <div className="group-child5" />
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <div className="dropdown-buttonsimple-text-o">
          <Button
            id="button-Choose Case Type"
            aria-controls="menu-Choose Case Type"
            aria-haspopup="true"
            aria-expanded={dropdownButtonSimpleTextO5Open ? "true" : undefined}
            onClick={handleDropdownButtonSimpleTextO5Click}
            color="primary"
          >
            {selectedCase || "Choose Case Type"}

          </Button>
          <Menu
            anchorEl={dropdownButtonSimpleTextO5AnchorEl}
            open={dropdownButtonSimpleTextO5Open}
            onClose={handleDropdownButtonSimpleTextO5Close}
          >
            <MenuItem onClick={() => handleCaseSelect("Large Corporation")}>
              Large Corporation
            </MenuItem>
            <MenuItem onClick={() => handleCaseSelect("Small Business")}>
              Small Business
            </MenuItem>
            <MenuItem onClick={() => handleCaseSelect("Individual")}>
              Individual
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="language-preference-2-parent">
        <div className="location">{`Language Preference 2: `}</div>
        <div className="group-child5" />
        <div className="dropdown-buttonsimple-text-o">
          <Button
            id="button-Choose Language"
            aria-controls="menu-Choose Language"
            aria-haspopup="true"
            aria-expanded={dropdownButtonSimpleTextO6Open ? "true" : undefined}
            onClick={handleDropdownButtonSimpleTextO6Click}
            color="primary"
          >
           {selectedLanguage1 || "Choose Language"}
          </Button>
          <Menu
            anchorEl={dropdownButtonSimpleTextO6AnchorEl}
            open={dropdownButtonSimpleTextO6Open}
            onClose={handleDropdownButtonSimpleTextO6Close}
          >
            <MenuItem onClick={() => handleLanguageSelect2("Odia")}>
              Odia
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect2("Marathi")}>
              Marathi
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect2("Bengali")}>
              Bengali
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect2("Punjabi")}>
              Punjabi
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect2("Gujarati")}>
              Gujarati
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect2("Assamese")}>
              Assamese
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect2("Telugu")}>
              Telugu
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect2("Tamil")}>
              Tamil
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect2("Hindi")}>
              Hindi
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect2("Urdu")}>
              Urdu
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect2("Malayalam")}>
              Malayalam
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect2("Kannada")}>
              Kannada
            </MenuItem>
          </Menu>
        </div>
        <img className="vector-icon2" alt="" src="/vector2.svg" />
      </div>
      <Form.Group className="give-us-a-short-description-of-parent">
        <Form.Label>{`Give us a short description of your case `}</Form.Label>
        <Form.Control as="textarea" defaultValue="" />
      </Form.Group>
      <div className="kashish-gandhi1">Kashish Gandhi</div>
      <div className="lawyer-finder">
        <span>Lawyer</span>
        <span className="finder"> Finder</span>
      </div>
      <img className="desktop-2-item" alt="" src="/ellipse-1@2x.png" />
      <div className="rectangle-parent3">
        <div className="group-child12" />
        <div className="ask-ai1">Ask AI</div>
        <img className="vector-icon9" alt="" src="/vector.svg" />
      </div>
      <div className="please-provide-details-container">
        <span>Please provide details of your case</span>
        <b>*</b>
      </div>
    </div>
  );
};

export default Desktop2;
