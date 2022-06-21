import React from 'react';

import '../styles/App.css';

const lowongan = [`<div className='App-content'>
  <div className='App-title'>Lowongoan Pekerjaan di Perusahaan IT</div>
  <div className='App-description'>Deskripsinya membutuhkan skill react.js atau express.js bisa membuat API atau bisa membuat tampilan website</div>
  <div className='App-salary'>Rp. 3.000.000 - Rp. 15.000.000</div>
  </div>`, `<div className='App-content'>
  <div className='App-title'>Lowongoan Pekerjaan di Perusahaan IT</div>
  <div className='App-description'>Deskripsinya membutuhkan skill react.js atau express.js bisa membuat API atau bisa membuat tampilan website</div>
  <div className='App-salary'>Rp. 3.000.000 - Rp. 15.000.000</div>
  </div>`, `<div className='App-content'>
  <div className='App-title'>Lowongoan Pekerjaan di Perusahaan IT</div>
  <div className='App-description'>Deskripsinya membutuhkan skill react.js atau express.js bisa membuat API atau bisa membuat tampilan website</div>
  <div className='App-salary'>Rp. 3.000.000 - Rp. 15.000.000</div>
  </div>` ];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-content'>
          <div className='App-title'>Lowongoan Pekerjaan di Perusahaan IT</div>
          <div className='App-description'>Deskripsinya membutuhkan skill react.js atau express.js bisa membuat API atau bisa membuat tampilan website</div>
          <div className='App-salary'>Rp. 3.000.000 - Rp. 15.000.000</div>
        </div>
        <div className='App-content'>
          <div className='App-title'>Lowongoan Pekerjaan di Perusahaan IT</div>
          <div className='App-description'>Deskripsinya membutuhkan skill react.js atau express.js bisa membuat API atau bisa membuat tampilan website</div>
          <div className='App-salary'>Rp. 3.000.000 - Rp. 15.000.000</div>
        </div>
        <div className='App-content'>
          <div className='App-title'>Lowongoan Pekerjaan di Perusahaan IT</div>
          <div className='App-description'>Deskripsinya membutuhkan skill react.js atau express.js bisa membuat API atau bisa membuat tampilan website</div>
          <div className='App-salary'>Rp. 3.000.000 - Rp. 15.000.000</div>
        </div>
      </header>
      <footer className='App-footer'>
        Page:
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Prev.)
        </a>
        1
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Next)
        </a>
      </footer>
    </div>
  );
}

export default App;
