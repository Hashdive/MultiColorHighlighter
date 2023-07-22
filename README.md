<<<<<<< HEAD
# MultiColorHighlighter

This is a single file text highlighter for React.

## How to Use

Create a MultiColorHighlighter.js file in your project and copy/ paste in the code MultiColorHighlighter code.

Then, import
---
        import MultiColorHighlighter from './MultiColorHighlighter';


set initial highlights (if any)
---
        const [highlights, setHighlights] = useState([
            { start: 43, end: 49, color: '#FF69B4' }, // Highlight "magical unicorn"
            { start: 51, end: 56, color: '#7FFF00' },
        ])


return the component and you're good to go!
---
        <MultiColorHighlighter
            text={text}
            highlights={highlights}
            setHighlights={setHighlights}
            font="'Indie Flower', cursive"
        />

Check out the [demo](www.hashidve.github.io/MultiColorHighlighter) for an example. Feel free to use and edit however you see fit.



=======
# MultiColorHighlighter
>>>>>>> 9cb75208284e74fbbb83a7f0db2d22fb8676b788
