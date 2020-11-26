export default class Mouse {
    constructor(canvas) {
        this.x = 0;
        this.y = 0;
        const rect = canvas.getBoundingClientRect();
        canvas.addEventListener('mousemove', ({clientX, clientY}) => this.updateCoordinates(clientX, clientY, rect));
    }

    updateCoordinates(clientX, clientY, {left, top}){
        this.x = clientX - left;
        this.y = clientY - top;
    }
}