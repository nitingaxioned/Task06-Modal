// variable declerations
var cards = document.querySelectorAll(".card");
var modal = document.querySelector(".modal");

// event handeller 
cards.forEach(function(val){
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
    });
});


// event handeller for close modal
document.querySelector(".close").addEventListener("click", function(){
    modal.classList.add("hide-me");
})