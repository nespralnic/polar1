let observer = new IntersectionObserver(handleIntersect,{});

let target = document.querySelectorAll(".section-title-underline");
target.forEach((tgt)=> {
    observer.observe(tgt);
})

console.log(target);

function handleIntersect(entries){
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("active");
            console.log("hey");
        }})
}



