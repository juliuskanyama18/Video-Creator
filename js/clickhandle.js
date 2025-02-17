let IsselectedElement = null;
thebackground=document.getElementById("background")
let textBox1 = document.getElementById('text-box');
// let mainBar=document.getElementById("mainBar")
let textBoxhandle = textBox1.querySelectorAll('.resize-handle'); // Use class selector\
let boxclass=document.querySelector(".box")
let thisdiv = box.querySelectorAll('[data-resize]');
let boxclone=document.querySelector("clone")
// Function to show resize handles
function showdivresizehandle(event) {
    boxclass.style.border = '1px solid #081b2d';
    thisdiv.forEach(function(div) {
        div.style.opacity = '1'; // Set opacity for each element
        mainBar.style.display = 'grid';
        ScriptDiv.style.display='none'
        Scriptplay.style.display='none'
    });
    IsselectedElement = event.currentTarget; // Assign the current element
    console.log("Selected Element:", IsselectedElement);
    if (!animationSettings[IsselectedElement.id]) {
        // Element has not been saved yet, clear borders and set default value in inputs
        updiv.style.border = 'none';
        rightleft.style.border = 'none';
        downdiv.style.border = 'none';
        rightdiv.style.border = 'none';
        input11.value = "0.5"; // Default timer for "up"
        input22.value = "0.5"; // Default timer for "down"
        input33.value = "0.5"; // Default timer for "right"
        input44.value = "0.5"; // Default timer for "down"
    } else {
        // Element has been saved, retrieve its settings
        const savedSettings = animationSettings[IsselectedElement.id];
        const savedTimer = savedSettings.timer;
        const savedDirection = savedSettings.direction || null; // Default to null if direction isn't set
        // Set the input value based on the saved direction
        if (savedDirection === "up") {
            input11.value = savedTimer; // Up direction uses input11
            input22.value = "0.5"; // Default timer for "down"
            input33.value = "0.5"; // Default timer for "right"
            input44.value = "0.5"; // Default timer for "down"
        } else if (savedDirection === "down") {
            input22.value = savedTimer; // Down direction uses input22
            input11.value = "0.5"; // Default timer for "up"
            input44.value = "0.5"; // Default timer for "down"
            input33.value = "0.5"; // Default timer for "up"
            // input33.value = "0.5"; // Default timer for "right"
        } else if (savedDirection === "right") {
            input33.value = savedTimer; // Right direction uses input33
            input11.value = "0.5"; // Default timer for "down"
            input44.value = "0.5"; // Default timer for "up"
            input22.value = "0.5"; // Default timer for "down"
        } 
        else if (savedDirection === "left") {
            input44.value = savedTimer; // Right direction uses input33
            input11.value = "0.5"; // Default timer for "down"
            input33.value = "0.5"; // Default timer for "up"
            input22.value = "0.5"; // Default timer for "down"
        }
        else {
            // Default behavior: apply savedTimer to all inputs if no direction is set
            input11.value = savedTimer;
            input22.value = savedTimer;
            input33.value = savedTimer;
            input44.value = savedTimer;
        }
        // Highlight the direction if it exists
        updiv.style.border = savedDirection === "up" ? '2px solid rgb(232, 211, 228)' : 'none';
        downdiv.style.border = savedDirection === "down" ? '2px solid rgb(232, 211, 228)' : 'none';
        rightdiv.style.border = savedDirection === "right" ? '2px solid rgb(232, 211, 228)' : 'none';
        rightleft.style.border = savedDirection === "left" ? '2px solid rgb(232, 211, 228)' : 'none';
    }   
}
// Function to hide resize handles
function hideResizeHandles() {
    textBoxhandle.forEach(function(div) {
        div.style.opacity = '0'; // Set opacity for each element
        div.style.margin = '0'; // Reset margin for each element
    })
};
function showResizeHandles(event) {
    textBoxhandle.forEach(function(div) {
        div.style.opacity = '1'; // Set opacity for each element
        div.style.margin = '4px'; // Set margin for each element
        mainBar.style.display = 'grid';
         ScriptDiv.style.display='none'
         Scriptplay.style.display='none'
    })
    IsselectedElement = event.currentTarget; // Assign the current element
    console.log("Selected Element:", IsselectedElement);
    if (!animationSettings[IsselectedElement.id]) {
        // Element has not been saved yet, clear borders and set default value in inputs
        updiv.style.border = 'none';
        rightleft.style.border = 'none';
        downdiv.style.border = 'none';
        rightdiv.style.border = 'none';
        input11.value = "0.5"; // Default timer for "up"
        input22.value = "0.5"; // Default timer for "down"
        input33.value = "0.5"; // Default timer for "right"
        input44.value = "0.5"; // Default timer for "down"
    } else {
        // Element has been saved, retrieve its settings
        const savedSettings = animationSettings[IsselectedElement.id];
        const savedTimer = savedSettings.timer;
        const savedDirection = savedSettings.direction || null; // Default to null if direction isn't set
        // Set the input value based on the saved direction
        if (savedDirection === "up") {
            input11.value = savedTimer; // Up direction uses input11
            input22.value = "0.5"; // Default timer for "down"
            input33.value = "0.5"; // Default timer for "right"
            input44.value = "0.5"; // Default timer for "down"
        } else if (savedDirection === "down") {
            input22.value = savedTimer; // Down direction uses input22
            input11.value = "0.5"; // Default timer for "up"
            input44.value = "0.5"; // Default timer for "down"
            input33.value = "0.5"; // Default timer for "up"
            input33.value = "0.5"; // Default timer for "right"
        } else if (savedDirection === "right") {
            input33.value = savedTimer; // Right direction uses input33
            input11.value = "0.5"; // Default timer for "down"
            input44.value = "0.5"; // Default timer for "up"
            input22.value = "0.5"; // Default timer for "down"
        } 
        else if (savedDirection === "left") {
            input44.value = savedTimer; // Right direction uses input33
            input11.value = "0.5"; // Default timer for "down"
            input33.value = "0.5"; // Default timer for "up"
            input22.value = "0.5"; // Default timer for "down"
        }
        else {
            // Default behavior: apply savedTimer to all inputs if no direction is set
            input11.value = savedTimer;
            input22.value = savedTimer;
            input33.value = savedTimer;
            input44.value = savedTimer;
        }
        // Highlight the direction if it exists
        updiv.style.border = savedDirection === "up" ? '2px solid rgb(232, 211, 228)' : 'none';
        downdiv.style.border = savedDirection === "down" ? '2px solid rgb(232, 211, 228)' : 'none';
        rightdiv.style.border = savedDirection === "right" ? '2px solid rgb(232, 211, 228)' : 'none';
        rightleft.style.border = savedDirection === "left" ? '2px solid rgb(232, 211, 228)' : 'none';
    }   
}
function hidedivresizehandle(){
    boxclass.style.border='none'
    thisdiv.forEach(function(div2){
        div2.style.opacity='0'
        div2.style.margin = '0'; // Reset margin for each element
    });
}
// Show resize handles when clicking on the text box
textBox1.addEventListener('click', handleTextBoxClick); 
// Show resize handles when clicking on the box
boxclass.addEventListener('click', function(event) {
    event.stopPropagation();
    hideResizeHandles(); // Hide the text box resize handles
    hideAllHandles(activeElement);
    showdivresizehandle(event); // Show the box resize handles
});
//handle textbox clicks for textboxes
function handleTextBoxClick(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
    hidedivresizehandle(); // Hide the box resize handles
    hideAllHandles(activeElement);
    showResizeHandles(event); // Show the text box resize handles
}
let popupprotect = document.getElementById("popup")
// Hide resize handles when clicking anywhere else in the document
document.addEventListener('click', function(e) {
    if (thebackground.contains(e.target) &&(!colorPicker1.contains(e.target) && (!popupprotect.contains(e.target) && (e.target.tagName === 'IMG' || e.target.tagName === 'DIV' || e.target.tagName === 'INPUT')))) {
        hideResizeHandles(); // Hide the text box resize handles
        hidedivresizehandle(); // Hide the box resize handles
        hideAllHandles(activeElement);
        IsselectedElement = null; // Clear the selected element
        console.log("No element selected");  

    }
});