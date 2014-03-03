seajs.config({
    "preload": [
        "jquery",
        "bootstrap",
        "seajs-text",
        "seajs-style"
    ],
    "debug": true,
    "base": "/sea-modules/",
    "alias": {
        "jquery": "jquery/1.8.2/jquery-debug",
        "bootstrap": "bootstrap/2.2.2/js/bootstrap-debug",
        "underscore": "underscore/1.4.4/underscore-debug",
        "backbone": "backbone/1.0.0/backbone-debug",
        "handlebars": "handlebars/1.0.1/handlebars-debug",
        "transport": "iframe-transport/1.6.1/iframe-transport-debug",
        "fileupload": "fileupload/5.2.1/fileupload-debug",
        "uiwidget": "jquery-ui-widget/1.10.0/jquery-ui-widget-debug",
        "observer": "observer/1.0.0/observer-debug",
        "wookmark": "wookmark/0.5.0/jquery-wookmark-debug",
        "imagesloaded": "imagesloaded/2.0.1/imagesloaded-debug",
        "axzoomer": "jquery-axzoomer/1.5.0/jquery-axzoomer-debug",
        "json": "json/2.0/json2-debug",
        "fancybox": "jquery-fancybox/2.1.4/jquery-fancybox-debug",
        "moment": "moment/2.0.0/moment-debug",
        "jquery-mousewheel": "jquery-mousewheel/3.0.6/jquery-mousewheel-debug"
    }
});