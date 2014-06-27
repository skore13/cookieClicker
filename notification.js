(function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function(){
        // when clicked on news ask for permissions
        document.getElementById("commentsText").addEventListener("click", function() {
            window.Notification.requestPermission(function() {
                alert('Permissions state: ' + window.Notification.permission);
            });
        });
        
        // edit goldenCookie.spawn function so it shows notification
        var cached_function = Game.goldenCookie.spawn;
        Game.goldenCookie.spawn=function() {
            cached_function.apply(this);
            new window.Notification("Golden cookie spawned",{icon:"http://orteil.dashnet.org/cookieclicker/img/goldCookie.png"});
        }
    };
    script.src = 'https://rawgit.com/auchenberg/WebNotification.js/master/WebNotification.js';
    d.getElementsByTagName('head')[0].appendChild(script);
}(document));

Game.Win('Third-party');
