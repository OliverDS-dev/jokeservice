exports.getConfig = function getConfig () {
    let config = {};
config.mongoDBHost = '';
config.PORT = 8080;
config.test = tester;
return config;
}; 