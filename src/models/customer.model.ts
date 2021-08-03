import mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
},{ collection: 'customer' });

export const Customer = mongoose.model('Customer', CustomerSchema);