import './App.css';

function App() {
  return (
    <>
  
    <div className='w-full p-30 header'>
      <img className='w-1/5' src='/assets/imgs/Beacon Logo.png' alt='beacon' />
    </div>

    <div className='embeddedvid'>
      <h1>We are not just safer; we're stronger, together.</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/p7TALupVBh0?si=1GhwF6ObCwc8I024" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <br/><button onClick={() => {window.location = "mailto:allen.bridi.23@ucl.ac.uk"}}>
      Contact Us
    </button>
    </div>
    
  
  </>
  );
}

export default App;
