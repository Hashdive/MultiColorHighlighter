import React, { useState, useRef } from 'react';

const MultiColorHighlighter = ({ text, highlights, setHighlights, font }) => {
  // State to store the selected text range for highlighting
  const [selectedRange, setSelectedRange] = useState({ start: -1, end: -1 });

  // State to store the  highlight and initial color
  const [highlightColor, setHighlightColor] = useState('#FF69B4');

  // Reference to the text container for text selection
  const textContainerRef = useRef(null);

  // Function to handle the highlight button click
  const handleHighlight = () => {
    if (selectedRange.start !== -1 && selectedRange.end !== -1 && highlightColor) {
      // Create a new highlight object with start, end, and color properties
      const newHighlight = {
        start: selectedRange.start,
        end: selectedRange.end,
        color: highlightColor,
      };

      // Update the highlights state with the new highlight
      setHighlights((prevHighlights) => [...prevHighlights, newHighlight]);

      // Reset the selectedRange state after highlighting
      setSelectedRange({ start: -1, end: -1 });

      // Reset the highlight color to default pink
      setHighlightColor('#FF69B4');
    }
  };

  // Function to handle text selection for mouse events
  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const selectedRange = selection.getRangeAt(0);
      const selectedText = selectedRange.toString();
      if (selectedText) {
        const startIndex = text.indexOf(selectedText);
        if (startIndex !== -1) {
          const endIndex = startIndex + selectedText.length - 1;
          setSelectedRange({ start: startIndex, end: endIndex });
        }
      }
    }
  };

  // Function to render the highlighted text with spans for each character
  const renderHighlightedText = () => {
    return (
      <div ref={textContainerRef}>
        {text.split('').map((character, index) => {
          // Check if the current index is within any of the highlight ranges
          const highlight = highlights.find(
            (highlight) => index >= highlight.start && index <= highlight.end
          );

          // If the character is part of a highlight, apply the highlight style
          if (highlight) {
            const style = { backgroundColor: highlight.color };
            return (
              <span key={index} style={style}>
                {character}
              </span>
            );
          }

          // If the character is not part of any highlight, add event listeners for selection
          return (
            <span
              key={index}
              onMouseOver={handleTextSelection}
            >
              {character}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* Input and button for selecting highlight color */}
      <span style={{ display: 'block', textAlign: 'center' }}>
        <input
          type="color"
          value={highlightColor}
          onChange={(e) => setHighlightColor(e.target.value)}
          style={{ marginRight: '5px' }}
        />
        <button onClick={handleHighlight}>Highlight</button>
      </span>
      <br />

      {/* Render the highlighted text */}
      <span style={{ fontFamily: font }}>{renderHighlightedText()}</span>
    </>
  );
};

export default MultiColorHighlighter;
