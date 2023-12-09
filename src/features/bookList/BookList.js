import React, { useState, useEffect } from 'react';
import {BookService} from '../../services/BookService'
import {useNavigate} from 'react-router-dom';
import {
    Box,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    styled
  } from '@mui/material';
  
import Button from '@mui/material-next/Button';

const CustomButton = styled(Button)({
    fontSize: '18px', // Modify font size
    // fontWeight: '', // Set font weight
    fontFamily: 'Arial', // Change font family,
  });


export function BookList () {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [filteredBookTitle, setFilteredBookTitle] = useState('');
    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const booksData = await BookService.getAllBooks(); // Assuming this fetches books
            setBooks(booksData); // Set the fetched books to the state
            setDisplayBooks(booksData);
          } catch (error) {
            console.error('Error fetching books:', error);
          }
        };
    
        fetchData();
      }, []);

      const handleFilter = async () => {
        try {
          const bookData = await BookService.getBookByTitle(filteredBookTitle);
          setDisplayBooks(bookData);
          console.log('Book found:', bookData);
        } catch (error) {
          console.error('Error fetching book:', error);
        }
      };

      const redirectToOtherPage = () => {
        navigate('/addBook');
      };

      const handleInputChange = (e) => {
        setFilteredBookTitle(e.target.value);
      };

      if (!books || books.length === 0) {
        return <div>Loading...</div>;
      }

      const handleResetTable = () => {
        setDisplayBooks(books); // Reset the table data to its initial state
      };

      return (
        <div>
    <Box display="flex" justifyContent="center" gap={2} paddingBottom="30px">
      <CustomButton variant='filledTonal' size="medium" color="primary" onClick={handleResetTable}>
        Full List 
      </CustomButton>
      <CustomButton variant='filledTonal' size="medium" color="primary" onClick={redirectToOtherPage}>
        Add Book 
      </CustomButton>
      <TextField
        id="standard-basic" 
        variant="standard"
        label="Search by book title"
        value={filteredBookTitle}
        onChange={handleInputChange}
      />
      <CustomButton variant='filledTonal' size="medium" color="primary" onClick={handleFilter}>
        Search
      </CustomButton>
    </Box>
          <TableContainer component={Paper} sx={{ width: '80%', paddingTop: '30px', padding: '20px', margin: '0 auto'}}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', fontSize: '18px' }}>Title</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', fontSize: '18px' }} align="center">Author</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', fontSize: '18px' }} align="center">Price&nbsp;($ars)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayBooks.map((book) => (
                  <TableRow
                    key={book.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {book.title}
                    </TableCell>
                    <TableCell align="center">{book.author}</TableCell>
                    <TableCell align="center">{book.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
};
