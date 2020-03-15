  (function() {

        
        let modal = $("#my-modal");
        let image = $(".f-img");
        
        image.click(function(){
            let imageSource = $(this).attr("src"); 
            console.log(imageSource);
            $("#modal-img").attr("src", $(this).attr("src"));
            $("#my-modal").modal("show");
           
        });
    })();