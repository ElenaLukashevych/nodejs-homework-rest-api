const { validationPut } = require('./validation');
const { validationPost } = require('./validation');
const ctrlWrapper = require('./ctrlWrapper');

module.exports = {
    validationPut,
    validationPost,
    ctrlWrapper,
}