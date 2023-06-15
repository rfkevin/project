"use client"
import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './productForm.module.css';
import { addProduct } from "../../../endPoints/apiEndpoints";


export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    address: '',
    phone: '',
    birth: '',
    password: '',
    email: '',
  });
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        const result = await addUser(formData);
        console.log(result);
      };
      
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <form>
    <div>
    <TextField

  label="Title"
  id="filled-size-small"
  defaultValue=""
  variant="filled"
  size="small"
  onChange={handleChange}
  value={formData.title}
  name="title"
/>
<TextField

  label="Subtitle"
  id="filled-size-small"
  defaultValue=""
  variant="filled"
  size="small"
  onChange={handleChange}
  value={formData.subtitle}
  name="subtitle"
/>
<TextField

  label="Quantity"
  id="filled-size-small"
  defaultValue=""
  variant="filled"
  size="small"
  onChange={handleChange}
  value={formData.quantity}
  name="quantity"
/>
      </div>
      <div>
        <TextField
        
          label="Categories"
          id="filled-size-small"
          defaultValue=""
          variant="filled"
          size="small"
          onChange={handleChange}
          value={formData.categories}
          name="categories"
        />
        <TextField
        
          label="Type"
          id="filled-size-small"
          defaultValue=""
          variant="filled"
          size="small"
          onChange={handleChange}
          value={formData.type}
          name="type"
        />
      </div>
      <div>
        <TextField
        
          label="Marque"
          id="filled-size-small"
          defaultValue=""
          variant="filled"
          size="small"
          onChange={handleChange}
          value={formData.marque}
          name="marque"
        />
        <TextField
        
          label="Years"
          id="filled-size-small"
          defaultValue=""
          variant="filled"
          size="small"
          onChange={handleChange}
          value={formData.years}
          name="years"
        />
      </div>
      <div>
        <TextField
        
          label="Raters"
          id="filled-size-small"
          defaultValue=""
          variant="filled"
          size="small"
          onChange={handleChange}
          value={formData.raters}
          name="raters"
        />
        <TextField
        
          label="Price"
          id="filled-size-small"
          defaultValue=""
          variant="filled"
          size="small"
          onChange={handleChange}
          value={formData.price}
          name="price"
        />
        
      </div>
      
    <ul className={`${styles.ul}`}>
      
      <Button onClick={handleSubmit} variant="contained" color="success">
        Ajouter
    </Button>
    <Button onClick={() => setShowForm(false)} variant="contained" color="error">
        Annuler
    </Button>
    </ul>
    </form>
    </Box>
  );
};