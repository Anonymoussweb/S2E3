const mediaQuery = window.matchMedia('(max-width: 1000px)');
var nav1 = document.querySelectorAll(".nav1 ul li");
var btn = document.querySelector(".arr1");
var dropdown = document.querySelector(".ul");

const identifier = document.querySelector(".identifier");
setTimeout(() => {
    identifier.style.display = "none"
}, 3000);
  


function togglefunc(){
    var toggle = true;
    btn.addEventListener("click", ()=>{
        if(toggle){
            btn.style.transform = "rotate(90deg)";
        }else{
            btn.style.transform = "rotate(0deg)";
        }
      
    })
   
        btn.addEventListener("click", () => {
    
            if (toggle) {
                dropdown.style.display = "initial"
                toggle = false;
            } else {
                dropdown.style.display = "none"
                toggle = true;
            }
        })
    
    let addedItems = []; // Array to keep track of added items
    
    mediaQuery.addEventListener('change', event => {
        if (event.matches) {
            // Clear only the newly added items
            addedItems.forEach(item => {
                item.remove();
            });
    
            nav1.forEach((item) => {
                const listItem = document.createElement("li");
                listItem.textContent = item.textContent; // Copy text content
                dropdown.appendChild(listItem); // Append to dropdown
                addedItems.push(listItem); // Add to addedItems array
            });
        } else {
            // Clear only the newly added items
            addedItems.forEach(item => {
                item.remove();
            });
        }
    });
}
togglefunc();

const backToTopBtn = document.querySelector('.f-btn');
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll behavior
    });
}
backToTopBtn.addEventListener('click', scrollToTop);





