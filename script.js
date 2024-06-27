document.addEventListener('DOMContentLoaded', function(){

    let body = document.querySelector('body');
    let menu = document.querySelector('.nav-mob');
    let burger = document.querySelectorAll('.burger');
    let close = document.querySelector('.close');
        
       

    document.querySelector('.mob-open-close').addEventListener('click', function(){
        
        if (menu.style.display == 'none'){
            body.style.overflow = 'hidden';
            menu.style.display = 'flex';
            for(let el of burger){
                el.style.display = 'none';
            }
            close.style.display= 'block';
           
        }

        else {
            body.style.overflow = '';
            menu.style.display = 'none';
            for(let el of burger){
                el.style.display = '';
            }
            close.style.display= 'none';
         }

    })

    window.addEventListener('resize', function(){
        if(window.innerWidth > 861){
            body.style.overflow = '';
            menu.style.display = 'none';
            for(let el of burger){
                el.style.display = '';
            }
            close.style.display= 'none';
        }
    })
   

})