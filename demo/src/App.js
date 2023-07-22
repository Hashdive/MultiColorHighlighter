import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MultiColorHighlighter from './MultiColorHighlighter';
import './App.css';

const App = () => {
  // Add in highlights from the get-go if you want
  const [highlights, setHighlights] = useState([
    { start: 43, end: 49, color: '#FF69B4' }, // Highlight "magical unicorn"
    { start: 51, end: 56, color: '#7FFF00' }, // Highlight "color highlighting powers"
    // Add more highlights for other magical moments if needed
  ]);

  // Completed story in a single paragraph
  const text = `Once upon a time, in the enchanted land of Unicorn Valley, 
  there lived a magical unicorn named Sparkle. She possessed a unique 
  ability to manipulate colors with her horn, and each color had a special 
  power. Sparkle used her color-highlighting abilities to protect her 
  beloved valley from the clutches of an evil sorcerer named Malifax. One 
  sunny morning, as Sparkle pranced through the meadows, she noticed a 
  strange aura surrounding the valley. The skies darkened, and the once 
  vibrant colors turned dull and lifeless. Sparkle knew that something was 
  terribly wrong. As she ventured deeper into the heart of Unicorn Valley, 
  she stumbled upon a mysterious parchment left behind by Malifax. The 
  parchment contained cryptic riddles that held the key to unlocking the 
  sorcerer's dark intentions. Determined to save her home, Sparkle 
  embarked on a thrilling quest to decipher the riddles and defeat the 
  wicked sorcerer. Along the way, she encountered formidable challenges 
  and forged unlikely friendships with magical creatures. With courage 
  and determination, Sparkle unraveled the riddles and harnessed the 
  true potential of her color-highlighting powers. In an epic showdown, 
  Sparkle faced Malifax, using her colorful magic to create dazzling 
  defenses and mesmerizing attacks. The valley erupted in a breathtaking 
  spectacle of colors as Sparkle and Malifax clashed in an epic magical 
  battle. Ultimately, Sparkle emerged victorious, banishing Malifax from 
  Unicorn Valley forever. The once dull and lifeless valley was restored 
  to its vibrant and enchanting glory, thanks to the brave and heroic 
  unicorn named Sparkle. From that day forward, Sparkle's legend spread 
  far and wide, and she became a symbol of hope and magic in the hearts 
  of all who heard her tale.`;

  return (
    <BrowserRouter basename="/MultiColorHighlighter">
      <div className="app-container">
        <h1 className="app-title">Sparkle Saves Unicorn Valley</h1>
        <h4 className="app-subtitle">{"("}or MultiColorHighlighter demo{")"}</h4>
        <div className="app-demo-container">
          <MultiColorHighlighter
            text={text}
            highlights={highlights}
            setHighlights={setHighlights}
            font="'Indie Flower', cursive"
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
