import React, { useState, useEffect } from 'react';
import './css/Homepage.css';
import { API } from 'aws-amplify';
import { listNotes } from '../../graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from '../../graphql/mutations';
import Carousel from './Carousel'
import ShopButtonSection from './ShopButtonSection';

const initialFormState = { name: '', description: '', newAttribute: ''}

function Homepage() {
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
    <div className="Homepage">
      
      <img id="homepage-image" src="homepage.png" />

      <ShopButtonSection/>

      <Carousel/>

    </div>
  );
}

export default Homepage;