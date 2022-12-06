import express from 'express'
import products from './data/products'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.get('/api/products', (req, res) =>{
  res.json(products)
})
app.get('/api/product/:id', (req, res) => {
  const product = products.find((p) => (p._id) === req.params.id);
  res.json(product)
})




const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`Server is running on port ${PORT}`))