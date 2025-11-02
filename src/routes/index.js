import { Router } from 'express'
import apiRoutes from './api/index.js'

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Bienvenido');
})

routes.use('/api', apiRoutes);


export default routes