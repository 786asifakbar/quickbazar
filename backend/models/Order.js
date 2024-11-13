const orderSchema = new mongoose.Schema({
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: Array,
    totalAmount: Number,
    commission: Number,
    status: { type: String, default: 'Pending' },
  });
  
  orderSchema.pre('save', function (next) {
    this.commission = this.totalAmount * 0.05; // 5% commission
    next();
  });
  
  export default mongoose.model('Order', orderSchema);  