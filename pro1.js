let filterButtons = document.querySelectorAll('.filter-link a')
let filterImage = document.querySelectorAll('.images .cards')

// console.log(filterButtons,filterImage)

let filtercards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // loop over each cards
    filterImage.forEach(cards => {
        //  hide calss
        cards.classList.add("hide");

        // check which item is selected
        if(cards.dataset.name == e.target.dataset.name || e.target.dataset.name === "all"){
            cards.classList.remove("hide");
            
        }

    })
}
// add click event listener to each filter link

filterButtons.forEach( a => a.addEventListener("click", filtercards));









let toggler=document.getElementById("switch")
toggler.addEventListener("click",
    function(){
        if(toggler.checked===true)
        {
            document.body.style.backgroundColor='lightgreen';
            document.body.style.color='white';
        }
        else{
            document.body.style.backgroundColor='white';
            document.body.style.color='black';
        }
        toggler.checked===true
        // ?document.body.style.backgroundColor='black'
        // :document.body.style.backgroundColor='white';
    }
)























