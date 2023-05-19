const { default: mongoose } = require("mongoose");



const userSchema = new mongoose.Schema(
  {
    file:{type:Object},
    title: { type: String },
    descricption: { type: String },
    quantity:{type:Number},
    price:{type:String}
  },
  { timestamps: true }
);
const UserSchema = mongoose.model("user", userSchema);

module.exports = { UserSchema };
