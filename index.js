var i=1;
$(".btn-mobile-nav").click(()=>{
    i++;
    if(i%2===0){
    $(".header").addClass('nav-open');
    $('nav-open').slideToggle();
    }else{
        $(".header").removeClass("nav-open");

    }
})

//////////////////////////////////////////////////////////////
//Smooth scrolling animation
const allLinks= document.querySelectorAll('a:link');
allLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
        const href = link.getAttribute('href');
        //Scroll back to top
        if(href==='#'){
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
        }        else if(href !=='#' && href.startsWith("#")){
                const sectionEl = document.querySelector(href);
                sectionEl.scrollIntoView({behavior: 'smooth'});
                $(".header").removeClass("nav-open");

        }


    })
})

///////////////////////////////////////////////////////////////
const sectionHeroEl = $(".section-hero");
const obs = new IntersectionObserver(
    function(entries){
    const ent = entries[0];

    if(ent.isIntersecting===false){
        $("body").addClass("sticky");
    }else{
        $("body").removeClass("sticky");

    }
},
{
    root:null,
    threshold:0,
    rootMargin: '-80px'
    
});
obs.observe(sectionHeroEl[0]);



/////////////////////////////////////////////////////////////// 


