import {Router} from 'express'
import { createProduct } from '../controllers/productController'
import authenticate from '../middleware/authenticate.js'

const router = Router()

router.get('/', (req,res) => {
    res.send('All products')
})
router.post('/', authenticate,createProduct)
router.get('/:id', (req,res) =>{
    res.send('Single Product')
})

export default router