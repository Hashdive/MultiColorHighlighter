
# MultiColorHighlighter

This is a single file text highlighter for React.

## How to Use

Create a MultiColorHighlighter.js file in your project and copy/ paste in the code MultiColorHighlighter code.

Import
---
        import MultiColorHighlighter from './MultiColorHighlighter';


set initial highlights if any
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

Check out the [demo](https://hashdive.github.io/MultiColorHighlighter/) for an example. Feel free to use and edit however you see fit.

Ideas for improving: mobile, more format options
