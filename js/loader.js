var queue = new createjs.LoadQueue(false);

    /* CSS */
    queue.loadFile({src:'./scss/style.css', type: createjs.Types.CSS});
 
    queue.on("fileload", handleFileComplete);
    queue.on('progress', event => {
        let progress = Math.floor(event.progress * 100);
        $('#bar').animate({width: `${progress}%`});
        //console.log(progress);
    })

    queue.on('complete', event => {     
        setTimeout(() => {
            $('#progress').fadeOut();  
        }, 1000); 
    });

    function handleFileComplete(event) { }

    function handleFileLoad(event) {
        var item = event.item; // A reference to the item that was passed in to the LoadQueue
        var type = item.type;
   
        if (type == createjs.Types.CSS) {
            document.head.appendChild(event.result);
        }
    }