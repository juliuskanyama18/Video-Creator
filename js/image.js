
        document.addEventListener("DOMContentLoaded", function () {
            const imageBox = document.getElementById("image-box");
            const background = document.getElementById("background");
    
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
        });
   