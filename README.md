cookieClicker
=============

Cookie Clicker addon which shows notification every time golden cookie spawns

## Usage:
Paste folowing script to browser console (CTRL+SHIFT+C or F12 in chrome) and press ENTER

    (function(d, script) {
        script = d.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.onload = function(){
            // remote script has loaded
        };
        script.src = 'https://rawgit.com/skore13/cookieClicker/master/notification.js';
        d.getElementsByTagName('head')[0].appendChild(script);
    }(document));

Click on news and confirm
