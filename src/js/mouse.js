export default class Mouse {
  constructor (canvas){
      this.x=0;
      this.y=0;
      var rect = canvas.getBoundingClientRect();//возвращает размер элемента и его позицию относительно окна.
      canvas.onmousemove=e=>{
          this.x = e.clientX - rect.left;
          this.y = e.clientY - rect.top;
          //console.log(this.x, this.y);
      }
  }
}