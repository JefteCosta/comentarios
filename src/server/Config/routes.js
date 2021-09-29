module.exports = app => {
    app.route('/api/comment')
    .get(app.src.server.Controllers.api.v1.comentarios.show)
}