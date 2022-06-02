const express = require("express")
const expressFileUpload = require("express-fileupload")
const path = require("path")
const app = express()
const PORT = 4000

app.use(expressFileUpload())

app.post('/upload', (req, res)=> {
    const file = req.files.myfile

    const filePath = path.join(__dirname, "..", "public", "images")
    return file.mv(`${filePath}/${file.name}`, (err) =>{
        if (err) console.log("file was not uploaded")
        return res.send({ message: "File Uploaded SuccessFully" })
    })
})

app.listen(PORT, () => console.log(`App running on PORT ${PORT}`))
