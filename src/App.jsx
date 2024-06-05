import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');
  
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}> 
      <div className='fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'red'}}>RED</button>
          <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'green'}}>GREEN</button>
          <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'blue'}}>BLUE</button>
          <button onClick={() => setColor('indigo')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'indigo'}}>INDIGO</button>
          <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'orange'}}>ORANGE</button>
          <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'yellow'}}>YELLOW</button>
          <button onClick={() => setColor('violet')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'violet'}}>VIOLATE</button>
          <button onClick={() => setColor('grey')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'grey'}}>GRAY</button>
          <button onClick={() => setColor('maroon')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'maroon'}}>MAROON</button>
          <button onClick={() => setColor('cyan')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'cyan'}}>CYAN</button>
          <button onClick={() => setColor('pink')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'pink'}}>PINK</button>
          <button onClick={() => setColor('magenta')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'magenta'}}>MAGENTA</button>
          <button onClick={() => setColor('teal')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'teal'}}>TEAL</button>
          <button onClick={() => setColor('tan')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'tan'}}>TAN</button>
          <button onClick={() => setColor('white')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor: 'white'}}>WHITE</button>
        </div>
      </div>
    </div>  
  );
}

export default App;

