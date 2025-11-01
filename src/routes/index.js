import { Router } from 'express'
import apiRoutes from './api/index.js'

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Hola Mundo');
})

routes.use('/api', apiRoutes);


export default routes