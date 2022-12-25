const express = require ('express')
const mongoose = require ('mongoose')
const router = require ('./router')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', router)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://Yehor:2788ks@cluster0.r1w8jnq.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log('server started on port ${PORT}'))
    } catch (e) {
        console.log(e)
      
    }
}
start()