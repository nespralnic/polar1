let observer = new IntersectionObserver(handleIntersect,{});

let target = document.querySelectorAll(".section-title-underline");

target.forEach((tgt)=> {
    observer.observe(tgt);
})

function handleIntersect(entries){
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("active");
            let parent = entry.target.parentElement
            parent.classList.add('active')
        }})
}

