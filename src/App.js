import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import Amplify from '@aws-amplify/core';
import SiteHeader from './components/header/SiteHeader';
import SiteFooter from './components/footer/SiteFooter';
import { Parallax } from 'react-scroll-parallax';
import amplifyconfig from './amplify-config.js';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import Carousel from './components/body/Carousel'

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
      
      <Carousel/>

      <div id="home-button-section">
        <div id="home-shop-button" className="ebs-button">Shop</div>
        <div id="button-section-header">Orginal Artwork</div>
      </div>

      <SiteFooter/>

    </div>
  );
}

export default App;