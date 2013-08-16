window.addEventListener('DOMComponentsLoaded', main, false);

function main() {

    var deck = document.querySelector('x-deck');
    readURL();

    
    function saveURL(index) {
        window.location.hash = index;
    }

    
    function readURL() {
        if(window.location.hash) {
            var hash = window.location.hash;
            hash = hash.replace('#', '');
            var index = parseInt(hash, 10);
            deck.shuffleTo(index);
        }
    }

    
    function toggleFullScreen() {

        var requestFS = document.body.requestFullScreen || 
            document.body.mozRequestFullScreen ||
            document.body.webkitRequestFullScreen;

        var cancelFS = document.body.cancelFullScreen ||
            document.mozCancelFullScreen ||
            document.webkitCancelFullScreen;

        var fs = window.fullScreen ||
            document.fullscreenElement ||
            document.mozFullScreenElement || 
            document.webkitFullscreenElement;

        if(fs) {
            cancelFS.call(document);
        } else {
            requestFS.call(document.body, Element.ALLOW_KEYBOARD_INPUT);
        }

    }


    deck.addEventListener('shufflestart', function(ev) {
        var index = deck.getCardIndex(deck.getSelectedCard());
        saveURL(index);
    }, false);

    window.addEventListener('keyup', function(ev) {

        if(ev.keyCode === 37) {
            deck.shufflePrev();
        } else if(ev.keyCode === 39) {
            deck.shuffleNext();
        } else if(ev.keyCode == 70) {
            toggleFullScreen();
        }
        
    }, false);

}
