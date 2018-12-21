// Grab elements, create settings, etc.
var video = document.getElementById('video');

if (video){

        // Get access to the camera!
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({video: true}).then(function(stream) {
            video.srcObject = stream;
        })
        .catch(function(err0r) {
            console.log("Something went wrong!");
        });
    }
        setTimeout(
          function() {
            document.getElementById('div1').style.display='none';
            document.getElementById('div2').style.display='none';
          }, 100);

    
}
