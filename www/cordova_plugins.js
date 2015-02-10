cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/plugin.socket.io/www/socketio.js",
        "id": "plugin.socket.io.SocketIO",
        "clobbers": [
            "plugin.socket.io"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "plugin.socket.io": "1.0.0",
    "org.apache.cordova.splashscreen": "0.3.5",
    "org.apache.cordova.console": "0.2.12"
}
// BOTTOM OF METADATA
});