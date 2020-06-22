import React, {useState} from 'react';
import Header from './components/Header';

import './App.css';
import bg from './assets/bg.png';


function App(){

  const [projects,setProjects] = useState(["React", "ReactNative"]);

  function handleAddProject(){
      setProjects([...projects, `new project ${Date.now()}`]);
  }

  return (
    <>
    <Header title="Projects" />
    <img width={300} src={bg} />

    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>
    <button type="button" onClick={handleAddProject} >Adicionar Projeto</button>
    </>
  );
}

export default App;