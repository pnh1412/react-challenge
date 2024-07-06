import React, { useState } from 'react';

const Accordion = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openSubSection, setOpenSubSection] = useState(null);

  const sections = {
    A: ['1 con gà 2 con gà 3 con gà'],
    B: ['Lorem ipsum dolor sit amet Consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'],
    C: ['gkasogksaogkaos Another text for More text for C'],
    D: ['Text for D section 1', 'Text for D section 2', 'Text for D section 3']
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
    // Reset sub-section when a new section is open
    setOpenSubSection(null); 
  };

  const toggleSubSection = (subSection) => {
    setOpenSubSection(openSubSection === subSection ? null : subSection);
  };

  return (
    <div className="space-y-4">
      {Object.keys(sections).map((section) => (
        <div key={section}>
          <button
            className="w-full text-left p-4 bg-gray-200"
            onClick={() => toggleSection(section)}
          >
            {section}
          </button>
          {openSection === section && (
            <div className="pl-4">
              {sections[section].map((subSection, index) => (
                <div key={index}>
                  <button
                    className="w-full text-left p-2 bg-gray-100"
                    onClick={() => toggleSubSection(subSection)}
                  >
                    {subSection}
                  </button>
                  {openSubSection === subSection && (
                    <div className="pl-4 pt-2">
                      <p>Nội dung chi tiết của {subSection}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
