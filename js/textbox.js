
        let thebackground=document.getElementById('background')
        makeResizable1AndDraggable1(document.getElementById("text-box"));
    
        function makeResizable1AndDraggable1(elmnt) {
            let isResizing = false;
            const background = document.getElementById("background");
    
            dragElement1(elmnt);
            makeResizable1(elmnt);
    
            function dragElement1(elmnt) {
                let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
                elmnt.onmousedown = function (e) {
                    if (!isResizing && e.target !== document.getElementById("text-content")) {
                        dragMouseDown1(e);
                    }
                };

                let textBox=document.getElementById('text-box')
    

    
                function dragMouseDown1(e) {
                    e = e || window.event;
                    e.preventDefault();
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closedragElement1;
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
    
                function closedragElement1() {
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
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
    
                        document.onmouseup = function () {
                            document.onmousemove = null;
                            document.onmouseup = null;
                            isResizing = false;
                        };
    
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
        }

    
      

  
       