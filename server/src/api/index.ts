import express from 'express'

export const app = express()
app.use(express.json())

app.listen(3000, () => {
  console.log('server started in port 3000')
})

