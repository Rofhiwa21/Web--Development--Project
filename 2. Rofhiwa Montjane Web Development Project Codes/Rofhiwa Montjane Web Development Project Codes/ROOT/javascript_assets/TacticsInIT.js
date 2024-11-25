    //1.1Functionality: Below is the lightbox function that allows pictures to be highlighted
    document.addEventListener('DOMContentLoaded', function () {
        const lightboxTriggers = document.querySelectorAll('.lightboxTrigger');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const closeBtn = document.getElementById('closeBtn');

        lightboxTriggers.forEach(function (trigger) {
            trigger.addEventListener('click', function () {
                openLightbox(trigger.src);
            });
        });

        closeBtn.addEventListener('click', closeLightbox);

        function openLightbox(imageSrc) {
            lightboxImage.src = imageSrc;
            lightbox.style.display = 'block';
        }

        function closeLightbox() {
            lightbox.style.display = 'none';
        }
    });


    //1.2 FunctionalityTaking User Back To The Top
    const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});


    //2.1 Validation: Below is the function that runs when Submit is clicked

    function validateForm(){

    //Check that someone has actually entered something besides the default message or nothing
        var validateName = document.getElementById("myName").value;
        if (validateName == "Your name here" || validateName == ""){
        alert("Please enter your name");
    }

    var validateName = document.getElementById("mySubject").value;
    if (validateName == "Your subject here" || validateName == ""){
    alert("Please enter your subject");
    }
    
    //Check that the email address includes a @ and . in it
        var validateEmail = document.getElementById("myEmail").value;
        if (validateEmail.includes("@") && validateEmail.includes(".")){}
        else{alert("Not a valid email format")}
    }





