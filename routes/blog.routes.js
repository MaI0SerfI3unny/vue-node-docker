const { xmlParser } = require('config/parser')
const {Router} = require('express')
const Blog = require('../models/Blog')
const router = Router()

router.post(
  '/blog',async (req, res) => {
  try {
    const blog_arr = await Blog.find()

    res.status(200).json({ blog: blog_arr })
  } catch (e) {
    console.log(e)
    res.status(500).json({ 
        message: 'Что-то пошло не так, попробуйте снова' 
    })
  }
})

router.post(
    '/del_blog',async (req, res) => {
    try{
        const {id} = req.body
        const findById = await Blog.findOne({_id: id})
        if(findById){
            await findById.deleteOne({ _id: id });
        }
        res.status(200).json({mess:"Ok"})
    }catch(e){
        console.log(e)
      res.status(500).json({ 
        message: 'Что-то пошло не так, попробуйте снова' 
      })
    }

})

router.post(
    '/create_blog', async (req,res) => {
        try{
            const {title,description,content,path_img} = req.body
            
            const createNewBlog = new Blog({
                title: title,
                description: description,
                content: content,
                path_img: path_img
            })
            await createNewBlog.save()

            res.status(201).json({ message: 'OK' })
        }catch(e){
            console.log(e)
            res.status(500).json({ 
              message: 'Что-то пошло не так, попробуйте снова' 
            })
        }
    }
)

router.post(
    '/find_by_id', async (req,res) => {
        try{
            const {id} = req.body
            const search = await Blog.findOne({_id: id})
            if(search){
                res.status(200).json({ result: [search] })
            }else{
                res.status(200).json({ result: [] })
            }
        }catch(e){
           // console.log(e)
            res.status(500).json({ 
              message: 'Что-то пошло не так, попробуйте снова' 
            })
        }
    }
)

router.post(
    '/edit_blog', async (req,res) => {
        try{
            const {id,title,description,content} = req.body
            const search = await Blog.findOne({_id: id})
            if(search){
                search.overwrite({ 
                    _id: search.id,
                    title: title,
                    description: description,
                    content: content,
                    date: search.date,
                    path_img: search.path_img
                 });
                 await search.save()
                res.status(200).json({ result: "OK" })
            }else{
                res.status(200).json({ result: "not found" })
            }
        }catch(e){
            //console.log(e)
            res.status(500).json({ 
              message: 'Что-то пошло не так, попробуйте снова' 
            })
        }
    }
)

module.exports = router