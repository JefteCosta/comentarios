module.exports = app => {
    const show = (req, res) =>{
        res.json({message:'sucesso hello word'})
    }
    return {
        show
    }
}