$( document ).on('turbolinks:load', function() {

    !(function($_x, _s, id) {
        var fjs, js;
        fjs = $_x.getElementsByTagName(_s)[0];
        js = $_x.createElement(_s);
        js.id = id;
        js.src = '//platform.docplanner.com/js/widget.js';
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'zl-widget-s');

});
