(function() 
{
    var isDrawing = false;
    var canvas = document.getElementById('myCanvas');
    canvas.addEventListener("touchstart", onmousedown ); 
    canvas.addEventListener("touchend", onmouseup ); 
    canvas.addEventListener("touchmove", onmousemove ); 
    
    var ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth - 20 ;
    canvas.height = window.innerHeight - 20 ;
        
    var socket = io.connect('http://10.0.11.45:8080');
    socket.on('news', function (data) 
    {        
        var x = ( data.hello.x * ( window.innerWidth - 20 ) )/( data.hello.width );
        var y = ( data.hello.y * ( window.innerHeight - 20 ) )/( data.hello.height );
        
        ctx.fillCircle( x , y , 10 , "#ff0000" );
    });

    function sendData( x , y )
    {
        var textVal = { "x" : x , "y" : y , "height" : (window.innerHeight - 20) , "width" : (window.innerWidth - 20) };
        socket.emit('send_mesg', { valueSend : textVal });

        return false;
    }
    
    // define a custom fillCircle method
    ctx.fillCircle = function(x, y, radius, fillColor) {
        this.fillStyle = fillColor;
        this.beginPath();
        this.moveTo(x, y);
        this.arc(x, y, radius, 0, Math.PI * 2, false);
        this.fill();
    };
    ctx.clearTo = function(fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fillRect(0, 0, window.innerWidth - 20 , window.innerHeight - 20);
    };
    ctx.clearTo("#ddd");

    // bind mouse events
    function onmousemove(e) {
        
        e.preventDefault();
        if (!isDrawing) {
           return;
        }
        
        var touches = e.changedTouches;
        
        for (var i=0; i < touches.length; i++) 
        {
            var x = touches[i].pageX;
            var y = touches[i].pageY;
            var radius = 10; // or whatever
            var fillColor = '#ff0000';
            ctx.fillCircle(x, y, radius, fillColor);

            sendData( x , y );
        }
        
    };
    function onmousedown(e) {
        e.preventDefault();
        isDrawing = true;
    };
    function onmouseup(e) {
        e.preventDefault();
        isDrawing = false;
    };
})();    