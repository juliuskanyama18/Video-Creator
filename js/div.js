
    
const box = document.getElementById('draggable-resizable-box');

        const background1 = document.getElementById('background');
        let currentHandle, isResizing = false, isDragging = false;
        let startX, startY, startWidth, startHeight, startTop, startLeft;
    
        const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    
        const calculateNewDimensions = (dx, dy) => {
            let newWidth = startWidth, newHeight = startHeight;
            let newTop = startTop, newLeft = startLeft;
    
            switch (currentHandle) {
                case 'nw':
                    newWidth -= dx;
                    newHeight -= dy;
                    newLeft += dx;
                    newTop += dy;
                    break;
                case 'ne':
                    newWidth += dx;
                    newHeight -= dy;
                    newTop += dy;
                    break;
                case 'sw':
                    newWidth -= dx;
                    newHeight += dy;
                    newLeft += dx;
                    break;
                case 'se':
                    newWidth += dx;
                    newHeight += dy;
                    break;
                case 'n':
                    newHeight -= dy;
                    newTop += dy;
                    break;
                case 's':
                    newHeight += dy;
                    break;
                case 'e':
                    newWidth += dx;
                    break;
                case 'w':
                    newWidth -= dx;
                    newLeft += dx;
                    break;
            }
    
            // Ensure the new dimensions and positions are within the parent bounds
            const parentRect = background1.getBoundingClientRect();
            newWidth = clamp(newWidth, 20, parentRect.width - newLeft);
            newHeight = clamp(newHeight, 20, parentRect.height - newTop);
            newTop = clamp(newTop, 0, parentRect.height - newHeight);
            newLeft = clamp(newLeft, 0, parentRect.width - newWidth);
    
            return { newWidth, newHeight, newTop, newLeft };
        };
    
        const onMouseMove = (e) => {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            const parentRect = background1.getBoundingClientRect();
    
            if (isDragging) {
                let newTop = clamp(startTop + dy, 0, parentRect.height - box.offsetHeight);
                let newLeft = clamp(startLeft + dx, 0, parentRect.width - box.offsetWidth);
                box.style.top = `${newTop}px`;
                box.style.left = `${newLeft}px`;
            } else if (isResizing) {
                const { newWidth, newHeight, newTop, newLeft } = calculateNewDimensions(dx, dy);
    
                if (newWidth > 0 && newHeight > 0) {
                    box.style.width = `${clamp(newWidth, 20, parentRect.width - newLeft)}px`;
                    box.style.height = `${clamp(newHeight, 20, parentRect.height - newTop)}px`;
                    box.style.top = `${newTop}px`;
                    box.style.left = `${newLeft}px`;
                }
            }
        };
    
        const onMouseUp = () => {
            isResizing = false;
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    
        const onMouseDown = (e) => {
            const style = getComputedStyle(box);
    
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseFloat(style.width);
            startHeight = parseFloat(style.height);
            startTop = parseFloat(style.top);
            startLeft = parseFloat(style.left);
    
            if (e.target.dataset.resize) {
                isResizing = true;
                currentHandle = e.target.dataset.resize;
            } else {
                isDragging = true;
            }
    
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };
    
        const makeDraggableAndResizable1 = (element) => {
            element.addEventListener('mousedown', onMouseDown);
        };
    
        makeDraggableAndResizable1(box);
 


       
   



    // const DublicateBox = () => {
        //     if (getComputedStyle(box).opacity === "1") {
        //         const newBox = box.cloneNode(true);
        //         newBox.style.position = 'absolute';
        //         newBox.style.top = `${Math.random() * 400}px`;
        //         newBox.style.left = `${Math.random() * 400}px`;
        //         newBox.style.zIndex = '10';
        //         background1.appendChild(newBox);
        //         makeDraggableAndResizable1(newBox);
        //     } else {
        //         console.log("Box opacity is not 1, duplication not allowed.");
        //     }
        // };
    
        // document.addEventListener('keydown', (e) => {
        //     if (e.ctrlKey && e.key === 'd') {
        //         e.preventDefault();
        //         DublicateBox();
        //     }
        // });</script>
    