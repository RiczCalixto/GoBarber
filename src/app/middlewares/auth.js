// middlware para autenticar se o usuário está logado ou não

module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = req.session.user
    // res.locals é um objeto de informacoes que ficam disponiveis para todas as views do nossos sistema
    // então, ao definir que é igual ao session.user, n importa o arquivo que estiver, sempre estará os dados do usuario
    return next()
  }

  return res.redirect('/')
}
