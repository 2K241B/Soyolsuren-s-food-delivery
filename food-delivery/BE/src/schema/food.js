import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  image: {
    type: String,
  },
  ingeredient: {
    type: String,
  },
  price: {
    type: String,
    required: [true, "Price is required"]
  },
  discount: {
    type: Number,
    default: 0,
  },
  categoryId: {
    type: ''
  }
})

export const FoodModel = model("food", foodSchema);
