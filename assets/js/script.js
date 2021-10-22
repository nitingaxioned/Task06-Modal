// variable declerations
var modal = document.querySelector(".modal");

// event handeller 
document.querySelectorAll(".card").forEach(function(val){
    val.addEventListener("click",function(){
        if(modal.querySelector("div") == null)
            modal.appendChild(document.createElement("div"));
        else
            modal.querySelector("div").innerHTML = "";
        var node = modal.querySelector("div");
        val.querySelectorAll("*").forEach(function(value){
            node.appendChild(value.cloneNode(true));
        });
        node.classList.add("card","modal-card");
        modal.classList.remove("hide-me");
        node.addEventListener("click", function(e){ e.stopPropagation() })
    });
});

// event handeller for close modal
modal.addEventListener("click", function(){
    modal.classList.add("hide-me");
})