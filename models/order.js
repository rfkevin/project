import { Schema, model, models } from 'mongoose';

const CommandeSchema = new Schema({
  id: {
    type: String,
    unique: [true, 'Commande already exists'],
  },
  userId: {
    type: String,
    required: [true, "User ID is required"],
  },
  products: [{
    productId: {
      type: String,
      required: [true, "Product ID is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },
  }],
  total: {
    type: Number,
    required: [true, "Total is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Commande = models.Commande || model("Commande", CommandeSchema);

export default Commande;
