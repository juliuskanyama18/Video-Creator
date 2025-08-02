
        document.addEventListener("DOMContentLoaded", function () {
            const imageBox = document.getElementById("image-box");
            const background = document.getElementById("background");
            const imgContent = document.getElementById("image-content");
    
            let isDragging = false;
            let isResizing = false;
            let startX, startY, startTop, startLeft, startWidth, startHeight, startHandle;
    
            const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    
            const calculateNewDimensions = (dx, dy) => {
    let newWidth = startWidth;
    let newHeight = startHeight;
    let newTop = startTop;
    let newLeft = startLeft;

    const parentRect = background.getBoundingClientRect();

    if (startHandle === "nw") {
        newWidth = startWidth - dx;
        newHeight = startHeight - dy;
        newTop = clamp(startTop + dy, 0, startTop + startHeight - 20);
        newLeft = clamp(startLeft + dx, 0, startLeft + startWidth - 20);
    } else if (startHandle === "ne") {
        newWidth = startWidth + dx;
        newHeight = startHeight - dy;
        newTop = clamp(startTop + dy, 0, startTop + startHeight - 20);
    } else if (startHandle === "sw") {
        newWidth = startWidth - dx;
        newHeight = startHeight + dy;
        newLeft = clamp(startLeft + dx, 0, startLeft + startWidth - 20);
    } else if (startHandle === "se") {
        newWidth = startWidth + dx;
        newHeight = startHeight + dy;
    } else if (startHandle === "n") {
        newHeight = startHeight - dy;
        newTop = clamp(startTop + dy, 0, startTop + startHeight - 20);
    } else if (startHandle === "s") {
        newHeight = startHeight + dy;
    } else if (startHandle === "e") {
        newWidth = startWidth + dx;
    } else if (startHandle === "w") {
        newWidth = startWidth - dx;
        newLeft = clamp(startLeft + dx, 0, startLeft + startWidth - 20);
    }

    // Ensure width and height don't cause the box to exceed the parent's bounds
    newWidth = clamp(newWidth, 20, parentRect.width - newLeft);
    newHeight = clamp(newHeight, 20, parentRect.height - newTop);
    newTop = clamp(newTop, 0, parentRect.height - newHeight);
    newLeft = clamp(newLeft, 0, parentRect.width - newWidth);

    return { newWidth, newHeight, newTop, newLeft };
    };

    
            const onMouseDown = (e, handleId) => {
                e.preventDefault();
                isResizing = !!handleId;
                isDragging = !handleId;
    
                startX = e.clientX;
                startY = e.clientY;
                startTop = imageBox.offsetTop;
                startLeft = imageBox.offsetLeft;
                startWidth = imageBox.offsetWidth;
                startHeight = imageBox.offsetHeight;
                startHandle = handleId;
    
                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);
            };
            
            const onMouseMove = (e) => {
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
    
                if (isResizing) {
                    const { newWidth, newHeight, newTop, newLeft } = calculateNewDimensions(dx, dy);
                    imageBox.style.width = `${newWidth}px`;
                    imageBox.style.height = `${newHeight}px`;
                    imageBox.style.top = `${newTop}px`;
                    imageBox.style.left = `${newLeft}px`;
                } else if (isDragging) {
                    const parentRect = background.getBoundingClientRect();
                    const newTop = clamp(startTop + dy, 0, parentRect.height - imageBox.offsetHeight);
                    const newLeft = clamp(startLeft + dx, 0, parentRect.width - imageBox.offsetWidth);
                    imageBox.style.top = `${newTop}px`;
                    imageBox.style.left = `${newLeft}px`;
                }
            };
    
            const onMouseUp = () => {
                isDragging = false;
                isResizing = false;
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);

                imgsaveState();// Save state after resizing or dragging ends
            };
    
            // Adding drag functionality to the box
            imageBox.addEventListener("mousedown", (e) => {
                if (!e.target.classList.contains("imageHandle")) {
                    onMouseDown(e, null);
                }
            });
    
            // Adding resize handles
            const handles = ['nw', 'ne', 'sw', 'se', 'n', 's', 'e', 'w'];
            handles.forEach((handleId) => {
                const handle = document.getElementById(handleId);
                handle.addEventListener("mousedown", (e) => onMouseDown(e, handleId));
            });

            //hover eventlistener for imagebox
            imageBox.addEventListener('mouseover', () => {
                imageBox.style.transform = 'scale(0.95)';
                imageBox.style.transition = 'transform 0.4s ease';
            });
            imageBox.addEventListener('mouseout', () => { 
                imageBox.style.transform = 'scale(1.00)';
                imageBox.style.transition = 'transform 0.4s ease';
            });

            
            // Adding image upload functionality
            imageUpload.addEventListener("change", function (event) {
                const file = event.target.files[0];

                if (file && file.type.startsWith("image/")) {
                    const reader = new FileReader();

                    reader.onload = function (e) {
                        // Remove previous uploaded image if exists
                        const existingImg = document.getElementById("uploaded-image");
                        if (existingImg) {
                            existingImg.remove();
                        }

                        // Create a new image element
                        const uploadedImg = document.createElement("img");
                        uploadedImg.src = e.target.result;
                        uploadedImg.id = "uploaded-image";
                        uploadedImg.style.position = "absolute";
                        uploadedImg.style.top = "0";
                        uploadedImg.style.left = "0";
                        uploadedImg.style.width = "100%";
                        uploadedImg.style.height = "100%";
                        // uploadedImg.style.objectFit = "contain"; // Ensure it fits inside the box
                        uploadedImg.style.pointerEvents = "none"; // Prevent interference with dragging/resizing

                        // Ensure image-box has a default width and height (or maintains aspect ratio)
                        const img = new Image();
                        img.src = e.target.result;
                        img.onload = function () {
                            const maxWidth = imageBox.parentElement.clientWidth;  // Get container width
                            const maxHeight = imageBox.parentElement.clientHeight; // Get container height
                            const aspectRatio = img.width / img.height;

                            let newWidth = maxWidth;
                            let newHeight = maxWidth / aspectRatio;

                            if (newHeight > maxHeight) {
                                newHeight = maxHeight;
                                newWidth = maxHeight * aspectRatio;
                            }

                            // Apply new size to image-box
                            imageBox.style.width = `${newWidth}px`;
                            imageBox.style.height = `${newHeight}px`;
                            imageBox.style.left = `${(maxWidth - newWidth) / 2}px`;
                            imageBox.style.top = `${(maxHeight - newHeight) / 2}px`;

                            // Append the uploaded image inside #image-box AFTER size adjustments
                            imageBox.appendChild(uploadedImg);
                        };

                        // Save the new state after setting the image
                        imgsaveState();
                    };

                    reader.readAsDataURL(file);
                } else {
                    alert("Please upload a valid image file.");
                }
            });

        });

























        const imghistory = []; // To store the boxhistory of positions and sizes
        const imageBox = document.getElementById("image-box");
        const imgContent = document.getElementById("image-content");


        // Function to save the current state (position and size) of the box
        const imgsaveState = (deletedElement = null) => {
            if (deletedElement instanceof HTMLElement) {
                // Save the entire element to restore later
                imghistory.push({ 
                    action: "delete", 
                    element: deletedElement, // Store actual element
                    parent: deletedElement.parentElement, // Store parent for reinsertion
                    nextSibling: deletedElement.nextSibling // Store next sibling to maintain order
                 });
            } else {
                const imageBoxStyle = getComputedStyle(imageBox);
                const imagecontentStyle = getComputedStyle(imgContent);
                const state = {
                    action: "update",
                    // Parent (image box) styles
                    parent: {
                        backgroundColor: imageBoxStyle.backgroundColor,
                        height: imagebox.offsetHeight + "px",
                        left: imagebox.style.left,
                        opacity: imageBoxStyle.opacity,
                        top: imagebox.style.top,
                        width: imagebox.offsetWidth + "px",    
                    },
                    // Child (image content) styles
                    child: {
                        // backgroundColor: imagecontentStyle.backgroundColor,
                        // height: imgContent.offsetHeight + "px",
                        // left: imgContent.style.left,
                        opacity: imagecontentStyle.opacity,
                        // top: imgContent.style.top,
                        // width: imgContent.offsetWidth + "px",    
                    }
                };
    
                // Prevent storing duplicate states
                if (imghistory.length === 0 || JSON.stringify(imghistory[imghistory.length - 1]) !== JSON.stringify(state)) {
                    imghistory.push(state);
                }
            }
        };
    
        // Function to boxundo the last change
        const imgundo = () => {
            if (imghistory.length > 1) { 
                // boxhistory.pop(); 
                const lastState =  imghistory.pop(); // Remove last change safely
                const previousState = imghistory[imghistory.length - 1]; // Get last saved state

                if (!previousState) return; // Prevent accessing undefined states
                if (!lastState) return; // Ensure lastState is defined
    
                if (lastState.action === "delete" && lastState.element && lastState.parent) {
                    // Restore deleted element at the same position
                    if (lastState.nextSibling) {
                        lastState.parent.insertBefore(lastState.element, lastState.nextSibling);
                    } else {
                        lastState.parent.appendChild(lastState.element);
                    }
                } else if (lastState.action === "update") {
                    // Restore parent styles (image box)
                    imagebox.style.width = previousState.parent.width;
                    imagebox.style.height = previousState.parent.height;
                    imagebox.style.top = previousState.parent.top;
                    imagebox.style.left = previousState.parent.left;
                    imagebox.style.backgroundColor = previousState.parent.backgroundColor;
                    imagebox.style.opacity = previousState.parent.opacity;

                    // Restore child styles (image content)
                    // imgContent.style.width = previousState.child.width;
                    // imgContent.style.height = previousState.child.height;
                    // imgContent.style.top = previousState.child.top;
                    // imgContent.style.left = previousState.child.left;
                    // imgContent.style.backgroundColor = previousState.child.backgroundColor;
                    imgContent.style.opacity = previousState.child.opacity;
                }
            }
        };
    
        
    
    
        // Detect "Ctrl + Z" to trigger boxundo
        document.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.key === 'z') {
                e.preventDefault();  // Prevent default behavior (e.g., undo in the browser)
                imgundo();
                console.log(imghistory)
            }
        });
    
    
         // Save initial state when the document is fully loaded
         document.addEventListener("DOMContentLoaded", () => {
            imgsaveState();
            console.log(imghistory)
        });