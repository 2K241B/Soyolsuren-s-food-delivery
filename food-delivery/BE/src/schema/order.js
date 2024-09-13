import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  orderNumber: {
    type: Number,
  },
  foods: {
    type: Array,
  },
  totalPrice: {
    type: String
},
process: {
    type: String,
    enum: ["In cooking process", "Out for delivery"]
},
createdDate: {
    type: Date,
},
district: {
    type: String,
},
khoroo: {
    type: String,
},
apartment: {
    type: String,
},
descriptionOfAddress: {
    type: String,
},
phoneNumber: {
  type: String,
  required: [true, "Phone number is required"]
},
methodOfPay: {
    type: String,
    enum: ["Card", "Cash"]
}
});


export const orderModel = model("order", orderSchema);
