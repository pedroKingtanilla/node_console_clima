const argv = require('yargs')
            .options({
                direccion:{
                    alias: 'd',
                    require: true,
                    desc: 'direccion de la ciudad, para otener el clima'
                }
            }).argv;

module.exports = {
    argv
}