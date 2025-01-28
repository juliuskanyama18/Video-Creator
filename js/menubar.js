let mainBar = document.getElementById('mainBar');

const animediv = document.createElement("div");
animediv.className = "animediv";
animediv.id = 'animediv';
animediv.style.gridColumn = '-1 / -2';
animediv.style.gap = '10px';
animediv.style.display = 'grid';
animediv.style.borderRadius = '15px';
animediv.style.gridTemplateColumns = 'auto 1fr';
animediv.style.alignItems = 'center';
animediv.style.backgroundColor = 'white';
animediv.style.cursor = 'pointer';

// Create the animation icon
let animationicon = document.createElement('img');
animationicon.id = 'animationicon';
animationicon.className = 'animationicon';
animationicon.src = 'images/icon/run.png'; // Initial image
animationicon.style.width = '25px';

// Append the icon to the animediv
animediv.appendChild(animationicon);

// Create the animation text
let animationtext = document.createElement('span');
animationtext.style.fontSize = '18px';
animationtext.style.fontWeight = 'bold';
animationtext.style.color = '#000';
animationtext.textContent = 'Animation';


// Append the text to the animediv
animediv.appendChild(animationtext);

// Add mouse enter and leave event listeners
animediv.addEventListener('mouseenter', function () {
    animediv.style.transform = 'scale(0.96)';
    animediv.style.transition = 'transform 0.3s ease';
    animediv.style.backgroundColor = 'white';
    animationtext.style.color = 'black';
//     animationicon.src = 'images/icon/animation2.png'; // Change image on mouse enter
// 
});

animediv.addEventListener('mouseleave', function () {
    animediv.style.transform = 'scale(1)';
    animediv.style.transition = 'transform 0.3s ease';
    animediv.style.backgroundColor = '#ffff';
    animationtext.style.color = 'black';
    // animationicon.src = 'images/icon/animation.png'; // Change back image on mouse leave
    animationicon.style.color='white'
});

animediv.addEventListener('click',function(){
    let AnimationPanelMain1=document.getElementById("AnimationPanelMain")
    animationpanel.style.transform = 'translateX(100%)'; // Move it out of view
animationpanel.style.transition = 'transform 0.3s ease';




    
    setTimeout(() => {
        
   



        animationpanel.style.transform = 'translateX(0)'; // Move it out of view
        animationpanel.style.transition='transform 0.6s ease-in-out'
        AnimationPanelMain1.style.transition='transform 1s ease-in-out'
 
 
     AnimationPanelMain1.style.display='block'
     
 
 
        
    }, 500);

 
})

// Append the animediv to the mainBar
mainBar.appendChild(animediv);