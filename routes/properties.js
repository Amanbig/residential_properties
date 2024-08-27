const express = require('express');
const router = express.Router();
const Property = require('../models/Property');
const axios = require('axios');  // Add this for making HTTP requests

// Get all properties
router.get('/properties', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error });
  }
});

// Get a property by ID
router.get('/properties/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new property
router.post('/properties', async (req, res) => {
  const { area_type, availability, location, size, society, total_sqft, bath, balcony, price } = req.body;
  
  try {
    const newProperty = new Property({
      area_type,
      availability,
      location,
      size,
      society,
      total_sqft,
      bath,
      balcony,
      price
    });

    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: 'Error creating property', error });
  }
});

// Update an existing property
router.put('/properties/:id', async (req, res) => {
  const { area_type, availability, location, size, society, total_sqft, bath, balcony, price } = req.body;
  
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      { area_type, availability, location, size, society, total_sqft, bath, balcony, price },
      { new: true }
    );

    if (updatedProperty) {
      res.json(updatedProperty);
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating property', error });
  }
});

// Delete a property
router.delete('/properties/:id', async (req, res) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.params.id);
    
    if (deletedProperty) {
      res.json({ message: 'Property deleted successfully' });
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting property', error });
  }
});


module.exports = router;
