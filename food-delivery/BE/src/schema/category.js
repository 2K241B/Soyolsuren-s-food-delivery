import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  foodId: {
    type: Schema.ObjectId,
    ref: "food",
  },
});

export const CategoryModel = model("category", categorySchema);
