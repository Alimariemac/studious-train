  (function() {

        
        let modal = $("#my-modal");
        let image = $(".f-img");
        
        image.click(function(){
            let imageSource = $(this).attr("src"); 
            console.log(imageSource);
            $("#modal-img").attr("src", $(this).attr("src"));
            $("#my-modal").modal("show");
           
        });

        function animateCSS(element, animationName, callback) {
            const node = document.querySelector(element)
            node.classList.add('animated', animationName)
        
            function handleAnimationEnd() {
                node.classList.remove('animated', animationName)
                node.removeEventListener('animationend', handleAnimationEnd)
        
                if (typeof callback === 'function') callback()
            }
        
            node.addEventListener('animationend', handleAnimationEnd)
        }

        let win = $(window)

        win.scroll(function(event){
            image.each(function(i,el){
                var el = $(el);
                if($(this).visible(true)){
                    $(this).addClass("animated slideInUp fadeIn")
                }
            })
        })
        
    })();