const user = require("../model/User.js");

const getAllUserData = async (req, res) => {
  try {
    const getAllUser = await user.UserSchema.find();
    //  console.log(getAllUser)
    if (getAllUser) {
      res.status(200).json({
        message: "User created successfully",
        data: getAllUser.reverse(),
      });
    } else {
      throw new Error("User not created");
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const createNew = async (req, res) => {
  try {
    const { file, title, descricption, price, quantity } = req.body;

    const createNewFile = new user.UserSchema({
      file,
      title,
      descricption,
      price,
      quantity,
    });
    await createNewFile.save();
    if (createNewFile) {
      res.status(200).json({
        message: "Data stored successfully",
        data: createNewFile,
      });
    } else {
      throw new Error("User not created");
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.body;
    const deleteData = await user.UserSchema.deleteOne({ _id: id });
    if (deleteData) {
      res.status(200).json({
        message: "Data deleted successfully",
        data: deleteData,
      });
    } else {
      throw new Error("User not created");
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { getAllUserData, createNew,deleteData };
