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
  const text = `Once upon a time, in the enchanted land of Unicorn Valley, there lived a magical unicorn named Sparkle. Sparkle was not an ordinary unicorn; she possessed a unique ability to manipulate colors with her horn. Each color had a special power, and Sparkle had to use her color-highlighting abilities to protect her beloved valley from the clutches of an evil sorcerer named Malifax.

  One sunny morning, as Sparkle pranced through the meadows, she noticed a strange aura surrounding the valley. The skies darkened, and the once vibrant colors turned dull and lifeless. Sparkle knew that something was terribly wrong. As she ventured deeper into the heart of Unicorn Valley, she stumbled upon a mysterious parchment left behind by Malifax. The parchment contained cryptic riddles that held the key to unlocking the sorcerer's dark intentions.
  
  The first riddle read:
  
  "In shades of red, find the thread,
  To dispel the darkness, be quick instead.
  A hue of courage, a color of might,
  Choose wisely, Sparkle, and reveal the light."
  
  Scratching her majestic mane, Sparkle pondered the riddle. Suddenly, a burst of inspiration struck her. She concentrated her magical powers on the parchment and highlighted the word "courage" in brilliant red. As the crimson color spread across the riddle, a blinding light engulfed the valley, and the darkness retreated.
  
  With the first challenge conquered, Sparkle knew she couldn't let her guard down. The next riddle was even trickier:
  
  "A color of the sea, so vast and blue,
  Unravel the truth with the chosen hue.
  Between the lines, a secret hides,
  Sparkle, find the answer where it resides."
  
  The unicorn circled the riddle, examining each word carefully. Suddenly, her eyes caught a subtle pattern. She highlighted every first letter of each line, spelling "A-C-Q-I-N-T." The color she chose was a mesmerizing shade of aquamarine, reminiscent of the boundless ocean. Sparkle's intuition proved right, and the hidden enchantment was unveiled, revealing the sorcerer's next move.
  
  As Sparkle continued her journey, Malifax grew more furious. He set up a formidable puzzle, believing it to be unbeatable:
  
  "In a blend of colors, you'll find the way,
  Merge the right hues and save the day.
  From blue to yellow, let them converge,
  Unlock the path, and unleash the surge."
  
  The unicorn surveyed the intricate design before her. The answer seemed elusive, but Sparkle's determination never wavered. Her eyes sparkled with a realization, and she knew the secret lay in mixing colors.
  
  With her magical horn, she combined shades of blue and yellow, creating a magnificent green hue. As she gently brushed the green light over the puzzle, the path revealed itself, leading her to the heart of the sorcerer's lair.
  
  The final confrontation with Malifax was epic, as the sorcerer summoned dark shadows to overpower Sparkle. But she was not alone; her fellow unicorn friends joined the battle, and together, they used their color-highlighting powers to combat the shadows.
  
  In the midst of the chaos, Sparkle harnessed the full spectrum of her abilities, weaving colors like an artist's brush. With a dazzling display of light, she created a prismatic shield that encapsulated Malifax's dark magic.
  
  As the shield surrounded the sorcerer, Sparkle chanted ancient incantations, channeling her magical energy to seal Malifax's powers. The evil sorcerer's grip on Unicorn Valley weakened, and he vanished into oblivion, never to return.
  
  The valley was bathed in a renewed radiance, as colors danced and swirled in harmony once more. The unicorns rejoiced, celebrating their victory over darkness. Sparkle, with her colorful spirit, had saved the day and protected Unicorn Valley from the malevolent grasp of Malifax.
  
  And so, the magical unicorn, Sparkle, became a legend, her tale passed down through generations, inspiring hope and courage in the hearts of all who heard it. Unicorn Valley flourished, forever grateful for the unicorn with the power to illuminate their world with the brilliance of her color-highlighting magic.`;

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
