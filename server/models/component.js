const mongoose = require('mongoose');
const { Schema } = mongoose;


const componentSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'A name is required'] },
  _owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  //_collaborators: [{ type: [Schema.Types.ObjectId], ref: 'User' }],
  githubRepo: { type: String, required: [true, 'A github-Repository is required'] },
  npmLink: { type: String, default: "" }, //I can change this to an embedded NPM-Info field anytime
  docLink: { type: String, default: "" }, //I can change this to an embedded NPM-Info field anytime
  hashtags: { type: [String], required: [true, 'Please give us at least one #hashtag'] },
  //tutorial:{
  //   type: String,
  //   default: []
  //},
  description: {
    type: String,
    default: []
  },
  //hierarchicalStructure: String,
  //numberOfLevels: {
  //  type: Number,
  //  default: 0
  //},
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }

  });

const Component = mongoose.model('Component', componentSchema);

module.exports = Component;