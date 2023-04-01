import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  //Navigate back to the homepage
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  //While we make contact with API and wait for images
  const [generatingimg, setGeneratingimg] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <section className='max-w-7xl mx-auto'>
      <div></div>
    </section>
  )
}

export default CreatePost