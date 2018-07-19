const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {type: String, required: [true, "A name is required"], unique: [true, "The username must be unique"]},
  email:    {type: String, required: [true, "An email is required"],unique: [true, "The email must be unique"]},
  pictureUrl: {type: String, default: "https://res.cloudinary.com/dazh9innn/image/upload/v1531253139/anonymous.png"},
  github: {type: String, required: [true, "A link to your github-Profile is required"],unique: [true, "This github-Profile already exists as a user"]},
  _listHost:   [{type:[Schema.Types.ObjectId], ref: 'List'}],
  _listBookmark: [{type:[Schema.Types.ObjectId], ref: 'List'}],
  confirmationCode: String,
  //password: {type: String, default:"password"},
  hashed: String, // Defined with passportLocalMongoose
  salt: String, // Defined with passportLocalMongoose
  status: {type: Boolean, default: false},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }

});

// Add "email" (instead of "username"), "hash" and "salt" field to store the email (as username), the hashed password and the salt value
// Documentation: https://github.com/saintedlama/passport-local-mongoose
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = mongoose.model('User', userSchema);