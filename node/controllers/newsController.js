const path = require('path');
const News = require('../model/news');
const fs = require('fs');

 

const NewsController = {
    createNews: async(req, res) =>{
        try {
            const {news_id, titulo, conteudo} = req.body
            const images ={
                data: req.files.map(file =>  fs.readFileSync(path.join(__dirname, "..", "/picture/" + file.filename))),
                contentType: 'image/png'
            }
            const notice = await News.findOne({news_id})
            if(notice)
                return res.status(400).json({message: "Noticia já existe."})

                const newNotice = new News({
                    news_id, titulo: titulo.toLowerCase(), conteudo, images
                })
                await newNotice.save()
                res.json({message: "Noticia criada."})
            
        } catch(error) {
            console.log(error)
            return res.status(500).json({message: error.message})
        }
    },
    getNotice: async(req, res) => {
        try {
            const notice = await News.find();
            if(!notice) return res.status(400).json({message: "noticia não existe!"});
            res.json(notice)
        } catch (error) {
            console.log(error);
        }
    },
    deleteNews: async (req, res) => {
        try {
            await News.findByIdAndDelete(req.params.id)
            return res.json({message: "Noticia apagada."})
        }catch(error) {
            console.log(error)
            return res.status(500).json({message: error.message})
        }
    },
    updateNews: async (req, res) =>{
        try{
            const {titulo, conteudo} = req.body;
            const images ={
                data: req.files.map(file => fs.readFileSync(path.join(__dirname, "..", "/picture/" + file.filename))),
                contentType: 'image/png'
            }
            await News.findOneAndUpdate({_id: req.params.id},{
                titulo, conteudo, images
            })
            res.json({message:"Noticia alterada."});
        }catch(error){
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }
}
module.exports = NewsController;