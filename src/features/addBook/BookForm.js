import React, { useState } from 'react';
import { TextField, Box, styled } from '@mui/material';
import { BookService } from '../../services/BookService';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material-next/Button';

const CustomButton = styled(Button)({
    fontSize: '18px', // Modify font size
    // fontWeight: '', // Set font weight
    fontFamily: 'Arial', // Change font family,
  });

export function BookForm () {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    const fetchData = async () => {
          try {
            const response = await BookService.createBook({title, author, price}) // Assuming this fetches books
            console.log('Book added:', response.data);
        } catch (error) {
            console.error('Error adding book', error);
          }
        };
    
    fetchData();

    // Clear form fields after submission
    setTitle('');
    setAuthor('');
    setPrice('');
  };

  const redirectToOtherPage = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
        <TextField
          label="Title"
          variant="outlined"
          required={true}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Author"
          variant="outlined"
          required={true}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TextField
          label="Price"
          variant="outlined"
          required={true}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Box>
      <Box display="flex" justifyContent="center" gap={2} paddingBottom="30px" paddingTop="30px">
      <CustomButton variant='filledTonal' size="medium" color="primary" type="submit">
        Add Book
      </CustomButton>
      <CustomButton variant='filledTonal' size="medium" color="primary" onClick={redirectToOtherPage}>
        Full List 
      </CustomButton>
      </Box>
    </form>
  );
};
