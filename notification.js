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
            if(Game.goldenCookie.notification!=null)Game.goldenCookie.notification.close();
            Game.goldenCookie.notification = new window.Notification(Game.goldenCookie.wrath?"Wrath cookie spawned":"Golden cookie spawned",{icon:"http://orteil.dashnet.org/cookieclicker/img/goldCookie.png"});
        }
        
        
        // edit goldenCookie.update so it hides notification when golden cookie hides
        var oldGCUpdate = Game.goldenCookie.update;
        Game.goldenCookie.update = function() {
            if(Game.goldenCookie.lastLife==undefined)Game.goldenCookie.lastLife=0;
                oldGCUpdate.apply(this);
            if(Game.goldenCookie.lastLife!=0&&Game.goldenCookie.life==0){
                Game.goldenCookie.notification.close();
            }
            Game.goldenCookie.lastLife=Game.goldenCookie.life;
        }
    };
    script.src = 'https://rawgit.com/auchenberg/WebNotification.js/master/WebNotification.js';
    d.getElementsByTagName('head')[0].appendChild(script);
}(document));

Game.Win('Third-party');

