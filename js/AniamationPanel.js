class AnimationController {
}
let AnimationPanelMain=document.getElementById("AnimationPanelMain")
const animationpanel=document.createElement("div")
animationpanel.className="animationpanel"
animationpanel.id="animationpanel"
// animationpanel.textContent="animation panel"
animationpanel.style.color="white"
animationpanel.style.boxShadow = '1px 8px 24px 0px rgb(217, 218, 226)'
animationpanel.style.width="90%"
animationpanel.style.height='100%'
animationpanel.style.borderRadius='13px'
animationpanel.style.alignItems='top'
animationpanel.style.display='grid'
animationpanel.style.gridTemplateRows='repeat(8, 1fr )'
animationpanel.style.backgroundColor='white'
animationpanel.style.alignItems = 'start'; 
animationpanel.style.zIndex='99999'
animationpanel.style.gridRow='-1 / -7'
AnimationPanelMain.appendChild(animationpanel)
// Create the updiv
let updiv=document.createElement("div")
updiv.className="updiv"
updiv.id="updiv"
updiv.style.width='100%'
updiv.style.height='100%'
updiv.style.borderBottom='2px solid #f7f2f6'
// updiv.style.backgroundColor='black'
updiv.style.display='grid'
updiv.style.gap='7px'
updiv.style.gridTemplateColumns='1fr auto 1fr'
updiv.style.alignItems='center'
updiv.style.gridRow='-9/-8 '
updiv.style.cursor='pointer'
animationpanel.appendChild(updiv)

updiv.addEventListener("mouseenter",function(e){

    updiv.style.transform='scale(0.94)'
    updiv.style.transition='transform 0.5s ease'
    // updiv.style.border='1px solid blue'
})
updiv.addEventListener("mouseleave",function(e){
    updiv.style.transform='scale(1)'
    updiv.style.transition='transform 0.5s ease'
})

let iconUp1=document.createElement("img")
iconUp1.src="images/icon/fi-rr-caret-up.svg"
iconUp1.style.width='25px'
iconUp1.style.width='25px'
iconUp1.id='iconUp'
iconUp1.className='iconUp'
iconUp1.style.cursor='pointer'
iconUp1.style.marginLeft='3px'
iconUp1.style.alignItems='centre'
updiv.appendChild(iconUp1)

let span1=document.createElement('span')
span1.className='span1'
span1.id='span1'
span1.className='span1'
span1.innerHTML='Up'
span1.style.color='black'
span1.style.fontSize='13px'
span1.style.marginLeft='-17px'
updiv.appendChild(span1)

// Create input for updiv
let input1=document.createElement('input')
input1.className='input1'
input1.id='input1'
input1.style.border='none'
input1.type='number'
input1.style.width='39px'
input1.style.height='33px'
input1.value='0.5'
input1.min='0'
input1.max='10'
input1.step = '1'; 
input1.style.cursor='pointer'
input1.style.color='black'
input1.addEventListener('blur',function(){
    input1.style.border='none';
});
updiv.appendChild(input1)

//seccond DIV
let downdiv=document.createElement("div")
downdiv.className="downdiv"
downdiv.id="downdiv"
downdiv.style.width='100%'
downdiv.style.height='100%'
downdiv.style.borderBottom='2px solid #f7f2f6'
// downdiv.style.backgroundColor='black'
downdiv.style.display='grid'
downdiv.style.gap='7px'
downdiv.style.gridTemplateColumns='1fr auto 1fr'
downdiv.style.alignItems='center'
downdiv.style.gridRow='-8/-7a'
downdiv.style.cursor='pointer'
animationpanel.appendChild(downdiv)

downdiv.addEventListener("mouseenter",function(e){

    downdiv.style.transform='scale(0.94)'
    downdiv.style.transition='transform 0.5s ease'
    // downdiv.style.border='1px solid blue'
})

downdiv.addEventListener("mouseleave",function(e){

    downdiv.style.transform='scale(1)'
    downdiv.style.transition='transform 0.5s ease'
})

let icondown=document.createElement("img")
icondown.src="images/icon/fi-rr-caret-down.svg"
icondown.style.width='25px'
icondown.style.width='25px'
icondown.id='iconUp'
icondown.className='iconUp'
icondown.style.cursor='pointer'
icondown.style.marginLeft='3px'
icondown.style.alignItems='centre'

downdiv.appendChild(icondown)


let span2=document.createElement('span')
span2.className='span2'
span2.id='span2'
span2.className='span2'
span2.innerHTML='Down'
span2.style.color='black'
span2.style.fontSize='13px'

// span2.style.fontSize='18px'
span2.style.marginLeft='-14px'
downdiv.appendChild(span2)


// Create input for downdiv
let input2=document.createElement('input')
input2.className='input2'
input2.id='input2'
input2.style.border='none'
input2.type='number'
input2.style.width='39px'
input2.style.height='33px'
input2.value='0.5'
input2.min='0'
input2.max='10'
input2.step = '1'; 
input2.style.cursor='pointer'
input2.style.color='black'
input2.addEventListener('blur',function(){
    input2.style.border='none';
});
downdiv.appendChild(input2)



//Right
let rightdiv=document.createElement("div")
rightdiv.className="rightdiv"
rightdiv.id="rightdiv"

rightdiv.style.width='100%'
rightdiv.style.height='100%'
rightdiv.style.borderBottom='2px solid #f7f2f6'
// rightdiv.style.backgroundColor='black'
rightdiv.style.display='grid'
rightdiv.style.gap='7px'
rightdiv.style.gridTemplateColumns='1fr auto 1fr'
rightdiv.style.alignItems='center'
rightdiv.style.gridRow='-8/-7a'
rightdiv.style.cursor='pointer'
animationpanel.appendChild(rightdiv)

rightdiv.addEventListener("mouseenter",function(e){

    rightdiv.style.transform='scale(0.94)'
    rightdiv.style.transition='transform 0.5s ease'
    // rightdiv.style.border='1px solid blue'

})

rightdiv.addEventListener("mouseleave",function(e){
    rightdiv.style.transform='scale(1)'
    rightdiv.style.transition='transform 0.5s ease'
})

let iconright=document.createElement("img")
iconright.src="images/icon/fi-rr-caret-right.svg"
iconright.style.width='25px'
iconright.style.width='25px'
iconright.id='iconUp'
iconright.className='iconUp'
iconright.style.cursor='pointer'
iconright.style.marginLeft='3px'
iconright.style.alignItems='centre'
rightdiv.appendChild(iconright)


let span3=document.createElement('span')
span3.className='span3'
span3.id='span3'
span3.className='span3'
span3.innerHTML='Right'
span3.style.color='black'

span3.style.fontSize='13px'

span3.style.marginLeft='-17px'


rightdiv.appendChild(span3)



let input3=document.createElement('input')
input3.className='input3'
input3.id='input3'
input3.style.border='none'
input3.type='number'
input3.style.width='39px'
input3.style.height='33px'
input3.value='0.5'
input3.min='0'
input3.max='10'
input3.step = '1'; 
input3.style.cursor='pointer'

input3.style.color='black'

input3.addEventListener('blur',function(){

    input3.style.border='none'
})

rightdiv.appendChild(input3)


//Left

let rightleft=document.createElement("div")
rightleft.className="rightleft"
rightleft.id="rightleft"

rightleft.style.width='100%'
rightleft.style.height='100%'
rightleft.style.borderBottom='2px solid #f7f2f6'
// rightleft.style.backgroundColor='black'
rightleft.style.display='grid'
rightleft.style.gap='7px'
rightleft.style.gridTemplateColumns='1fr auto 1fr'
rightleft.style.alignItems='center'
rightleft.style.gridRow='-8/-7a'
rightleft.style.cursor='pointer'
animationpanel.appendChild(rightleft)

rightleft.addEventListener("mouseenter",function(e){

    rightleft.style.transform='scale(0.94)'
    rightleft.style.transition='transform 0.5s ease'
    // rightleft.style.border='1px solid blue'
    
})

rightleft.addEventListener("mouseleave",function(e){

    rightleft.style.transform='scale(1)'
    rightleft.style.transition='transform 0.5s ease'
    


})

let iconLeft=document.createElement("img")
iconLeft.src="images/icon/fi-rr-caret-left.svg"
iconLeft.style.width='25px'
iconLeft.style.width='25px'

iconLeft.id='iconUp'
iconLeft.className='iconUp'
iconLeft.style.cursor='pointer'
iconLeft.style.marginLeft='3px'
iconLeft.style.alignItems='centre'

rightleft.appendChild(iconLeft)


let span4=document.createElement('span')
span4.className='span4'
span4.id='span4'
span4.className='span4'
span4.innerHTML='Left'
span4.style.color='black'

span4.style.fontSize='13px'

span4.style.marginLeft='-17px'


rightleft.appendChild(span4)



let input4=document.createElement('input')
input4.className='input4'
input4.id='input4'
input4.style.border='none'
input4.type='number'
input4.style.width='39px'
input4.style.height='33px'
input4.value='0.5'
input4.min='0'
input4.max='10'
input4.step = '1'; 
input4.style.cursor='pointer'
input4.style.color='black'
input4.addEventListener('blur',function(){
    input4.style.border='none'
});
rightleft.appendChild(input4);


document.addEventListener('click',function(e){
    animationpanel.style.transition='transform 0.6s ease-in-out'
    let previewbutton=document.getElementById("previewbutton")

    if(!AnimationPanelMain.contains(e.target) &&( !animediv.contains(e.target) &&(!AnimationPanelMain.contains(e.target)) && (!preview.contains(e.target))  )){

        animationpanel.style.transition='transform 0.6s ease-in-out'
        animationpanel.style.transform = 'translateX(100%)'; // Move it out of view


        // Use a timeout to hide the panel after the transition ends
        setTimeout(() => {
            AnimationPanelMain.style.display = 'none'; // Hide the panel after the transition
            mainBar.style.display='none'
        }, 400); // Match the timeout duration with the transition duration
    }
});



//up

let input11=document.getElementById("input1")

// Object to store animation settings for each element
const animationSettings = {};

// Function to handle element selection
function selectElement(element) {
    IsselectedElement = element;
    // Get the stored timer for the selected element or default to 0.5 seconds
    const timer = animationSettings[element.id]?.timer || 0.5;
    // Update the timer input to show the stored value
    input11.value = timer;
}

// Handle the "Up" button click
updiv.addEventListener('click', function () {
    updiv.style.border = '2px solid rgb(232, 211, 228)';
    rightleft.style.border = 'none';
    downdiv.style.border = 'none';
    rightdiv.style.border = 'none';

    if (IsselectedElement) {
        // Get the value from input1 to determine the transition duration
        let transitionDuration = parseFloat(input11.value);
        transitionDuration = isNaN(transitionDuration) ? 0.5 : transitionDuration;

        // Save the timer value to the animationSettings object for the selected element
        animationSettings[IsselectedElement.id] = {
            element: IsselectedElement,
            timer: transitionDuration,
            direction: "up", // Add direction here
        };

        

        // Reset the element's transform and transition before applying the animation
        IsselectedElement.style.transition = "none";
        IsselectedElement.style.transform = "translateY(50px)"; // Set to below position

        // Trigger reflow to ensure the browser applies the reset styles
        void IsselectedElement.offsetHeight;

        IsselectedElement.style.opacity = '0.4';

        // Apply the upward animation to the original position
        IsselectedElement.style.transition = `transform ${transitionDuration}s ease`;
        IsselectedElement.style.transform = "translateY(0)";

        setTimeout(() => {
            IsselectedElement.style.opacity = '1';
            IsselectedElement.style.transition = `opacity ${transitionDuration}s ease, visibility ${transitionDuration}s ease`;
        }, transitionDuration * 1000);
    } else {
        console.log("No element selected for animation.");
    }
});

// Update timer value dynamically when an element is selected
input11.addEventListener('input', function () {
    if (IsselectedElement) {
        // Save the new timer value for the selected element
        const newTimer = parseFloat(input11.value) || 0.5;
        animationSettings[IsselectedElement.id].timer = newTimer;
    }
});



//down
let input22 = document.getElementById("input2");

// Handle the "Down" button click
downdiv.addEventListener("click", function () {
    downdiv.style.border = '2px solid rgb(232, 211, 228)';
    updiv.style.border = 'none';
    rightleft.style.border = 'none';
    rightdiv.style.border = 'none';

    if (IsselectedElement) {
        // Get the value from input22 to determine the transition duration
        let transitionDuration = parseFloat(input22.value);
        transitionDuration = isNaN(transitionDuration) ? 0.5 : transitionDuration;

        // Save the timer value to the animationSettings object for the selected element
        animationSettings[IsselectedElement.id] = {
            element: IsselectedElement,
            timer: transitionDuration,
            direction: "down", // Add direction here
        };

        // Reset the element's transform and transition before applying the animation
        IsselectedElement.style.transition = "none";
        IsselectedElement.style.transform = "translateY(-50px)"; // Set to above position

        // Trigger reflow to ensure the browser applies the reset styles
        void IsselectedElement.offsetHeight;

        IsselectedElement.style.opacity = '0.4';

        // Apply the downward animation to the original position
        IsselectedElement.style.transition = `transform ${transitionDuration}s ease`;
        IsselectedElement.style.transform = "translateY(0)";

        setTimeout(() => {
            IsselectedElement.style.opacity = '1';
            IsselectedElement.style.transition = `opacity ${transitionDuration}s ease, visibility ${transitionDuration}s ease`;
        }, transitionDuration * 1000);
    } else {
        console.log("No element selected for animation.");
    }
});

// Update timer value dynamically when an element is selected
input22.addEventListener('input', function () {
    if (IsselectedElement) {
        // Save the new timer value for the selected element
        const newTimer = parseFloat(input22.value) || 0.5;
        animationSettings[IsselectedElement.id].timer = newTimer;
    }
});

// Handle "mouseenter" for down animation
downdiv.addEventListener("mouseenter", function () {
    if (IsselectedElement) {
        let transitionDuration = parseFloat(input22.value);
        transitionDuration = isNaN(transitionDuration) ? 0.5 : transitionDuration;

        IsselectedElement.style.transition = "none";
        IsselectedElement.style.transform = "translateY(-50px)";

        void IsselectedElement.offsetHeight;

        IsselectedElement.style.opacity = '0.4';
        IsselectedElement.style.transition = `transform ${transitionDuration}s ease`;
        IsselectedElement.style.transform = "translateY(0)";

        setTimeout(() => {
            IsselectedElement.style.opacity = '1';
            IsselectedElement.style.transition = `opacity ${transitionDuration}s ease, visibility ${transitionDuration}s ease`;
        }, transitionDuration * 1000);
    }
});

// Handle "mouseleave" for down animation
downdiv.addEventListener("mouseleave", function () {
    if (IsselectedElement) {
        IsselectedElement.style.transition = "transform 0.5s ease";
        IsselectedElement.style.transform = "translateY(0)";
    }
});




// TransitionX
let input33 = document.getElementById("input3");

rightdiv.addEventListener("click", function () {
    // Highlight the "right" button
    rightdiv.style.border = '2px solid rgb(232, 211, 228)';
    updiv.style.border = 'none';
    downdiv.style.border = 'none';
    rightleft.style.border = 'none';

    if (IsselectedElement) {
        // Get the value from input33 to determine the transition duration
        let transitionDuration = parseFloat(input33.value);
        transitionDuration = isNaN(transitionDuration) ? 0.5 : transitionDuration; // Default to 0.5s if invalid

        // Save settings to animationSettings for the selected element
        animationSettings[IsselectedElement.id] = {
            element: IsselectedElement,
            timer: transitionDuration,
            direction: 'right', // Use correct property name
        };

        // Reset the element's transform and transition before applying the animation
        IsselectedElement.style.transition = "none"; // Disable transition temporarily
        IsselectedElement.style.transform = "translateX(-50px)"; // Move to left position

        // Trigger reflow to ensure the browser applies the reset styles
        void IsselectedElement.offsetHeight;

        IsselectedElement.style.opacity = '0.4';

        // Apply the rightward animation to the original position
        IsselectedElement.style.transition = `transform ${transitionDuration}s ease`; // Apply dynamic transition
        IsselectedElement.style.transform = "translateX(0)"; // Move back to original position

        setTimeout(() => {
            IsselectedElement.style.opacity = '1';
            IsselectedElement.style.transition = `opacity ${transitionDuration}s ease, visibility ${transitionDuration}s ease`; // Dynamic opacity transition
        }, transitionDuration * 1000); // Convert to milliseconds
    } else {
        console.log("No element selected for animation.");
    }
});


rightdiv.addEventListener("mouseenter", function () {
    if (IsselectedElement) {
        // Get the value from input33 to determine the transition duration
        let transitionDuration = parseFloat(input33.value); // Get the value as a float
        transitionDuration = isNaN(transitionDuration) ? 0.5 : transitionDuration; // Default to 0.5s if not valid

        // Reset the element's transform and transition before applying the animation
        IsselectedElement.style.transition = "none"; // Disable transition to reset
        IsselectedElement.style.transform = "translateX(-50px)"; // Set to left position

        // Trigger reflow to ensure the browser applies the reset styles
        void IsselectedElement.offsetHeight;

        IsselectedElement.style.opacity = '0.4';

        // Apply the rightward animation to the original position
        IsselectedElement.style.transition = `transform ${transitionDuration}s ease`; // Set dynamic transition time
        IsselectedElement.style.transform = "translateX(0)"; // Move to original position

        setTimeout(() => {
            IsselectedElement.style.opacity = '1';
            IsselectedElement.style.transition = `opacity ${transitionDuration}s ease, visibility ${transitionDuration}s ease`; // Set dynamic opacity transition time
        }, transitionDuration * 1000); // Convert to milliseconds
    }
});


rightdiv.addEventListener("mousemove", function (event) {
    // Do nothing to prevent repeated actions while inside the div
    event.stopPropagation();
});



rightdiv.addEventListener("mouseleave", function () {
    if (IsselectedElement) {
  
      
      
        IsselectedElement.style.transition = "transform 0.5s ease"; // Re-enable transition
        IsselectedElement.style.transform = "translateX(0)"; // Move to original position
        
      

    } 
    
});

let input44 = document.getElementById("input4");

rightleft.addEventListener("click", function () {
    rightleft.style.border='2px solid rgb(232, 211, 228)'

    updiv.style.border='none'
    downdiv.style.border='none'
    rightdiv.style.border='none'

    if (IsselectedElement) {
        // Get the value from input44 to determine the transition duration
        let transitionDuration = parseFloat(input44.value); // Get the value as a float
        transitionDuration = isNaN(transitionDuration) ? 0.5 : transitionDuration; // Default to 0.5s if not valid


        animationSettings[IsselectedElement.id] = {
            element: IsselectedElement,
            timer: transitionDuration,
            direction: 'left', // Use correct property name
        };
        // Reset the element's transform and transition before applying the animation
        IsselectedElement.style.transition = "none"; // Disable transition to reset
        IsselectedElement.style.transform = "translateX(50px)"; // Set to right position
    
        // Trigger reflow to ensure the browser applies the reset styles
        void IsselectedElement.offsetHeight;
    
        IsselectedElement.style.opacity = '0.4';

        // Apply the leftward animation to the original position
        IsselectedElement.style.transition = `transform ${transitionDuration}s ease`; // Set dynamic transition time
        IsselectedElement.style.transform = "translateX(0)"; // Move to original position
        
        setTimeout(() => {
            IsselectedElement.style.opacity = '1';
            IsselectedElement.style.transition = `opacity ${transitionDuration}s ease, visibility ${transitionDuration}s ease`; // Set dynamic opacity transition time
        }, transitionDuration * 1000); // Convert to milliseconds
    } else {
        console.log("No element selected for animation.");
    }
});

rightleft.addEventListener("mouseenter", function () {
    if (IsselectedElement) {
        // Get the value from input44 to determine the transition duration
        let transitionDuration = parseFloat(input44.value); // Get the value as a float
        transitionDuration = isNaN(transitionDuration) ? 0.5 : transitionDuration; // Default to 0.5s if not valid

        // Reset the element's transform and transition before applying the animation
        IsselectedElement.style.transition = "none"; // Disable transition to reset
        IsselectedElement.style.transform = "translateX(50px)"; // Set to right position

        // Trigger reflow to ensure the browser applies the reset styles
        void IsselectedElement.offsetHeight;

        IsselectedElement.style.opacity = '0.4';

        // Apply the leftward animation to the original position
        IsselectedElement.style.transition = `transform ${transitionDuration}s ease`; // Set dynamic transition time
        IsselectedElement.style.transform = "translateX(0)"; // Move to original position

        setTimeout(() => {
            IsselectedElement.style.opacity = '1';
            IsselectedElement.style.transition = `opacity ${transitionDuration}s ease, visibility ${transitionDuration}s ease`; // Set dynamic opacity transition time
        }, transitionDuration * 1000); // Convert to milliseconds
    }
});


rightleft.addEventListener("mousemove", function (event) {
    // Do nothing to prevent repeated actions while inside the div
    event.stopPropagation();
});

rightleft.addEventListener("mouseleave", function () {
    if (IsselectedElement) {
        IsselectedElement.style.transition = "transform 0.5s ease"; // Re-enable transition
        IsselectedElement.style.transform = "translateX(0)"; // Move to original position
    } 
});

previewbutton.addEventListener('mouseover',function(){
    previewbutton.style.transform='scale(0.8)'
    previewbutton.style.transition='transform 0.4s ease'
  });

  previewbutton.addEventListener('mouseout',function(){
    previewbutton.style.transform='scale(1)'
    previewbutton.style.transition='transform 0.4s ease'
    });