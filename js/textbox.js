
        let thebackground=document.getElementById('background')
        makeResizable1AndDraggable1(document.getElementById("text-box"));
    
        function makeResizable1AndDraggable1(elmnt) {
            let isResizing = false;
            let isDragging = false;
            const background = document.getElementById("background");
    
            dragElement1(elmnt);
            makeResizable1(elmnt);
    
            function dragElement1(elmnt) {
                let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
                elmnt.onmousedown = function (e) {
                    if (!isResizing && e.target !== document.getElementById("text-content")) {
                        isDragging = true; // Flag that dragging is happening
                        dragMouseDown1(e);
                    }
                };

                // let textBox=document.getElementById('text-box')
    

    
                function dragMouseDown1(e) {
                    e = e || window.event;
                    e.preventDefault();
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    // document.onmouseup = closedragElement1;
                    document.onmousemove = elementDrag1;
                }

    
                function elementDrag1(e) {
                    e = e || window.event;
                    e.preventDefault();
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
    
                    let newTop = elmnt.offsetTop - pos2;
                    let newLeft = elmnt.offsetLeft - pos1;
    
                    const backgroundRect = background.getBoundingClientRect();
                    const elmntRect = elmnt.getBoundingClientRect();
    
                    newTop = Math.max(0, Math.min(newTop, backgroundRect.height - elmntRect.height));
                    newLeft = Math.max(0, Math.min(newLeft, backgroundRect.width - elmntRect.width));
    
                    elmnt.style.top = newTop + "px";
                    elmnt.style.left = newLeft + "px";
                }
                
    
                // function closedragElement1() {
                //     document.onmouseup = null;
                //     document.onmousemove = null;
                // }
            }
    
            function makeResizable1(elmnt) {
                const handles = elmnt.querySelectorAll(".resize-handle");
                const content = document.getElementById("text-content");
    
                let initialRect = elmnt.getBoundingClientRect();
                let initialWidth = initialRect.width;
                let initialFontSize = parseInt(window.getComputedStyle(content).fontSize, 10);
    
                handles.forEach(function (handle) {
                    handle.addEventListener("mousedown", function (e) {
                        e.preventDefault();
                        isResizing = true;
                        const rect = elmnt.getBoundingClientRect();
                        const initialX = e.clientX;
                        const initialY = e.clientY;
                        const initialBoxWidth = rect.width;
                        const initialBoxHeight = rect.height;
                        const startLeft = elmnt.offsetLeft;
                        const startTop = elmnt.offsetTop;
    
                        document.onmousemove = function (e) {
                            const dx = e.clientX - initialX;
                            const dy = e.clientY - initialY;
    
                            const { newWidth, newHeight, newTop, newLeft } = calculateNewDimensions(dx, dy);
    
                            if (newWidth > 20 && newHeight > 20) {
                                elmnt.style.width = newWidth + "px";
                                elmnt.style.height = newHeight + "px";
                                elmnt.style.top = newTop + "px";
                                elmnt.style.left = newLeft + "px";
    
                                const widthRatio = newWidth / initialWidth;
                                const newFontSize = initialFontSize * widthRatio;
                                content.style.fontSize = newFontSize + "px";
                            }
                        };
    
                        // document.onmouseup = function () {
                        //     if (isDragging || isResizing){
                        //         //save settings for dragging and resizing of textbox
                        //         textsaveState();
                        //         console.log(texthistory)
                        //     }
                        //     document.onmousemove = null;
                        //     document.onmouseup = null;
                        //     isResizing = false;
                        // };
    
                        function calculateNewDimensions(dx, dy) {
                            let newWidth = initialBoxWidth, newHeight = initialBoxHeight;
                            let newTop = startTop, newLeft = startLeft;
    
                            if (handle.classList.contains("nw")) {
                                newWidth -= dx;
                                newHeight -= dy;
                                newLeft += dx;
                                newTop += dy;
                            } else if (handle.classList.contains("ne")) {
                                newWidth += dx;
                                newHeight -= dy;
                                newTop += dy;
                            } else if (handle.classList.contains("sw")) {
                                newWidth -= dx;
                                newHeight += dy;
                                newLeft += dx;
                                newHeight
                            } else if (handle.classList.contains("se")) {
                                newWidth += dx;
                                newHeight += dy;
                            } else if (handle.classList.contains("n")) {
                                newHeight -= dy;
                                newTop += dy;
                            } else if (handle.classList.contains("s")) {
                                newHeight += dy;
                            } else if (handle.classList.contains("e")) {
                                newWidth += dx;
                            } else if (handle.classList.contains("w")) {
                                newWidth -= dx;
                                newLeft += dx;
                            }
    
                            return { newWidth, newHeight, newTop, newLeft };
                        }
                    });
                });
            }
         // **Global Mouse Up Event to Save Both Resizing & Dragging**
        document.addEventListener("mouseup", function () {
            if (isResizing || isDragging) {
                textsaveState();
                console.log("State saved:", texthistory);
            }
            isResizing = false;
            isDragging = false;
            document.onmousemove = null;
        });
    }
        
    
        


         
        const texthistory = []; // To store the boxhistory of positions and sizes

        const textContent1 = document.getElementById("text-content");


        // Function to save the current state (position and size) of the box
        const textsaveState = (deletedElement = null) => {
            if (deletedElement instanceof HTMLElement) {
                // Save the entire element to restore later
                texthistory.push({ 
                    action: "delete", 
                    element: deletedElement, // Store actual element
                    parent: deletedElement.parentElement, // Store parent for reinsertion
                    nextSibling: deletedElement.nextSibling // Store next sibling to maintain order
                 });
            } else {
                // Get computed styles for parent and child
                const parentStyle = getComputedStyle(textBox1);
                const childStyle = getComputedStyle(textContent1);

                const state = {
                    action: "update",
                    // Parent (text box) styles
                    parent: {
                        backgroundColor: parentStyle.backgroundColor,
                        height: textBox1.offsetHeight + "px",
                        left: textBox1.style.left,
                        opacity: parentStyle.opacity,
                        top: textBox1.style.top,
                        width: textBox1.offsetWidth + "px",  
                    },
                    // Child (text content) styles
                    child: {
                        color: childStyle.color,
                        content: textContent1.innerHTML, // Save text content as well
                        fontSize: childStyle.fontSize,
                        fontWeight: childStyle.fontWeight,
                        // height: textContent1.offsetHeight + "px",
                        // left: textContent1.style.left,
                        opacity: childStyle.opacity,
                        // textAlign: childStyle.textAlign,
                        // top: textContent1.style.top,
                        // width: textContent1.offsetWidth + "px"
                    }
                };
    
                // Prevent storing duplicate states
                if (texthistory.length === 0 || JSON.stringify(texthistory[texthistory.length - 1]) !== JSON.stringify(state)) {
                    texthistory.push(state);
                }
            }
        };
    
        // Function to boxundo the last change
        // const textundo = () => {
        //     if (texthistory.length > 1) { 
        //         // boxhistory.pop(); 
        //         const lastState =  texthistory.pop(); // Remove last change safely
        //         const previousState = texthistory[texthistory.length - 1]; // Get last saved state

        //         if (!previousState) return; // Prevent accessing undefined states
        //         if (!lastState) return; // Ensure lastState is defined
    
        //         if (lastState.action === "delete" && lastState.element && lastState.parent) {
        //             // Restore deleted element at the same position
        //             if (lastState.nextSibling) {
        //                 lastState.parent.insertBefore(lastState.element, lastState.nextSibling);
        //             } else {
        //                 lastState.parent.appendChild(lastState.element);
        //             }
        //         } else if (lastState.action === "update") {
        //             // Restore parent styles (text box)
        //             textBox1.style.width = previousState.width;
        //             textBox1.style.height = previousState.height;
        //             textBox1.style.top = previousState.top;
        //             textBox1.style.left = previousState.left;
        //             textBox1.style.backgroundColor = previousState.backgroundColor;
        //             textBox1.style.opacity = previousState.opacity;

        //             // Restore child styles (text content)
        //             textContent1.style.color = previousState.child.color;
        //             textContent1.style.fontSize = previousState.child.fontSize;
        //             textContent1.style.fontWeight = previousState.child.fontWeight;
        //             textContent1.style.textAlign = previousState.child.textAlign;
        //             textContent1.innerHTML = previousState.child.content; // Restore text content
        //         }
        //     }
        // };



        const textundo = () => {
            if (texthistory.length > 1) {
                // texthistory.pop(); // Remove the last saved state
                const lastState =  texthistory.pop(); // Remove last change safely
                const previousState = texthistory[texthistory.length - 1]; // Get the previous state
        
                if (!previousState) return; // Ensure a valid state exists
                if (!lastState) return; // Ensure lastState is defined
        
                const textBox1 = document.getElementById("text-box");
                const textContent1 = document.getElementById("text-content");
        
                if (!textBox1 || !textContent1) return;
        
                if (lastState.action === "update") {
                    // Restore text box styles
                    textBox1.style.width = previousState.parent.width;
                    textBox1.style.height = previousState.parent.height;
                    textBox1.style.top = previousState.parent.top;
                    textBox1.style.left = previousState.parent.left;
                    textBox1.style.backgroundColor = previousState.parent.backgroundColor;
                    textBox1.style.opacity = previousState.parent.opacity;
        
                    // Restore text content styles
                    textContent1.style.color = previousState.child.color;
                    textContent1.style.fontSize = previousState.child.fontSize;
                    textContent1.style.fontWeight = previousState.child.fontWeight;
                    textContent1.style.textAlign = previousState.child.textAlign;
                    textContent1.innerHTML = previousState.child.content;
                    textContent1.style.opacity = previousState.child.opacity;
                } else if (lastState.action === "delete" && lastState.element && lastState.parent) {
                    // Restore deleted text box
                    if (lastState.nextSibling) {
                        lastState.parent.insertBefore(lastState.element, lastState.nextSibling);
                    } else {
                        lastState.parent.appendChild(lastState.element);
                    }
                }
            }
        };
        
    
        
    
    
        // Detect "Ctrl + Z" to trigger boxundo
        document.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.key === 'z') {
                e.preventDefault();  // Prevent default behavior (e.g., undo in the browser)
                textundo();
                console.log(texthistory)
            }
        });
    
    
         // Save initial state when the document is fully loaded
         document.addEventListener("DOMContentLoaded", () => {
            textsaveState();
            console.log(texthistory)
        });