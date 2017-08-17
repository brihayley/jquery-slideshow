$(document).ready(function() {
    var slideshow = ["url(img/brianna.jpg)", "url(img/testudo.jpg)","url(img/barre-outside.png)","url(img/madison-capitol.jpg)"];
    var slideshowIndex = 1;
    var caption = ["A photo of me, Brianna Hayley", "Hugging Testudo, University of Maryland's mascot", "Practicing barre by Lake Monona", "Me and my sister in front of Madison's Capitol Building"];
    var captionIndex = 0;
    
    $("#slideshow").css("background-image", "url(img/brianna.jpg)");
    $("#caption").html(caption[captionIndex]);

//Functions to display next and previous photos
    var nextPhoto = function(){
        return slideshow[slideshowIndex++];
    };
    var prevPhoto = function(){
        if (slideshowIndex === 0) { 
            return slideshow[slideshowIndex];
        } else {
            slideshowIndex = slideshowIndex - 1;
            return slideshow[slideshowIndex]; 
        }
    };
//Functions to display proper captions
    var nextCaption = function(){
        $("#caption").html(caption[captionIndex++]);
    };
    var prevCaption = function(){
        if (captionIndex == 0) { 
            $("#caption").html(caption[captionIndex]);
        } else {
            captionIndex = captionIndex - 1;
            $("#caption").html(caption[captionIndex]); 
        }
    };
    
//Functions to run above functions on click   
    $("#next").click(function(){
        $("#slideshow").css("background-image", nextPhoto());
        nextCaption();
    });
    $("#prev").click(function(){
        $("#slideshow").css("background-image", prevPhoto());
        prevCaption();
    });
});