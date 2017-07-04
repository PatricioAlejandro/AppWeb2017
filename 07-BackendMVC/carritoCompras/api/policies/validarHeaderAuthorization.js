/**
 * Created by patriciochavez on 7/3/17.
 */
module.exports = function(req, res, next) {
  if (req.headers.authorization) {
    return next();
  } else {
    return res.forbidden('No tiene cabecera de autorizacion');
  }
}
