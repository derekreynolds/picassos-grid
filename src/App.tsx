import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header'
import FileChooser from './components/file-chooser/FileChooser';
import { ImageFile, ImageFileContext } from './context/file/FileContext';
import Grid from './components/grid/Grid';
import ControlPanel from './components/control-panel/ControlPanel';

function App() {

  const [imageFile, setImageFile] = React.useState<ImageFile>({file: undefined, loaded: false, height: 0, width: 0});

  const [config, setConfig] = useState({grid: {
    width: imageFile.width,
    height: imageFile.height,
    pixels: 20,
    opacity: 0.5,
    color: '#ffffff'
  }});

  const updateConfig = (value: any) => {
    setConfig({...value})
  }

  return (
    <div className="App">
      <Header title="Picasso's Grid"></Header>
      <ImageFileContext.Provider value={{imageFile, setImageFile}}>
        <section>
          {imageFile.loaded && <Grid config={config}></Grid>}
          <ControlPanel config={config} updateConfig={updateConfig}></ControlPanel>
          <FileChooser config={config} setConfig={setConfig}></FileChooser>
        </section>
      </ImageFileContext.Provider>
    </div>
  );
}

export default App;
