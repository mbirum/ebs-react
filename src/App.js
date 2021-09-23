import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import Amplify from '@aws-amplify/core';
import SiteHeader from './components/header/SiteHeader';
import ParallaxCache from './components/parallax/ParallaxCache';
import { Parallax } from 'react-scroll-parallax';
import amplifyconfig from './amplify-config.js';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '', newAttribute: ''}

Amplify.configure(amplifyconfig);

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes, authMode: 'API_KEY' });
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ authMode: 'API_KEY', query: createNoteMutation, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ authMode: 'API_KEY', query: deleteNoteMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">

      <SiteHeader/>

      {/* <ParallaxCache/> */}

      <Parallax className="custom-class" y={[-60, 0]} tagOuter="figure">
        <img src="index-background.jpg"/>
      </Parallax>
      
      <div id="test-block">

      </div>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      

      {/* <h1>My Notes App</h1>

      <FieldSet
        formData={formData}
        setFormData={setFormData}
      />

      <button id="createNoteButton" onClick={createNote}>Create Note</button>

      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <p>{note.newAttribute}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
            </div>
          ))
        }
      </div> */}

    </div>
  );
}

export default App;