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
            $(".beforeclue").toggleClass("hidden");
          }, 5000);

          $(".clue").click(function(e){
            e.preventDefault();

            $(".beforeclue").toggleClass("hidden");
            $(".afterclue").toggleClass("hidden");

        });
}
