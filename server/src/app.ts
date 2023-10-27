import { app } from './api'
import { router } from './routes'

app.use('/todo', router)
