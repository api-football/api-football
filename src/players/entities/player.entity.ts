import mongoose from 'mongoose';

export const PlayerEntity = new mongoose.Schema(
  {
    phoneNumber: { type: String, unique: true },
    email: { type: String, unique: true },
    name: String,
    rankings: String,
    positions: Number,
    urlImage: String,
  },
  { timestamps: true, collection: 'players' },
);
