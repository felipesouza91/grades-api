import mongoose from 'mongoose';

const GradeShema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    default: 0,
    min: 0,
  },
  lastModified: {
    type: Date,
  },
});

export default mongoose.model('Grade', GradeShema);
