/* eslint-disable no-extend-native */
import React, {Component} from "react";

import utils from './utils';


class Canvas extends Component{

    canvas(){
        const canvas = this.refs.canvas;
        const context = canvas.getContext("2d");

        canvas.width =  document.documentElement.clientWidth;
        canvas.height = window.innerHeight;
    
    
        const mouse ={
            x: window.innerWidth / 2,
            y: window.innerHeight / 2    
        }

        const colors = ['#F9C050', "#D3BF75", "#84BDC3", "#4CBCFA", "#B4BE94"]
        //$primaryColor:  #001427;//#2F4858;
        //$secondaryColor: #708D81; //33658A;
        //$tertiaryColor: #F4D58D; //55DDE0
    
        window.addEventListener("mousemove", (e)=>{
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
    
        window.addEventListener("resize", (e)=>{
            canvas.width = document.documentElement.clientWidth;
            canvas.height = window.innerHeight;

            init();
        });

        function Dot(x, y, radius, color) {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color;
            this.radians = Math.random() * Math.PI * 2;
            this.velocity = 0.05;
            this.distanceFromCenter = {
                x: utils.randomIntFromRange(50,120),
                y: utils.randomIntFromRange(50,120)
            }
            this.lastMouse = {
                x,
                y
            }
        

            Dot.prototype.draw = function(lastPoint) {
                context.beginPath()
                context.strokeStyle = this.color;
                context.lineWidth = this.radius;
                context.moveTo(lastPoint.x, lastPoint.y);
                context.lineTo(this.x, this.y);
                context.stroke();
                /*
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
                context.fillStyle = this.color
                context.fill()
                */
               context.closePath()
            }
            
            Dot.prototype.update = function() {
                //drag
                this.lastPoint = {
                    x: this.x,
                    y: this.y
                };
                this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
                this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

                //circular motion
                this.radians += this.velocity;
                this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter.x;
                this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter.y;

                //draw plain
                this.draw(this.lastPoint)
            }
        }
        
        // Implementation
        let dotArray;
        function init() {
            dotArray = []
        
            for (let i = 0; i < 100; i++) {
                const radius = 3 + Math.random() * 2;
                dotArray.push(new Dot(canvas.width/2, canvas.height/2, radius, utils.randomColor(colors)));
            }
        }
        
        // Animation Loop
        function animate() {
            requestAnimationFrame(animate)
            context.fillStyle = "rgba(0,20,39, 0.3)" //"rgba(244,213,141,0.30)";
            context.fillRect(0, 0, canvas.width, canvas.height)
             dotArray.forEach(dot => {
              dot.update();
             })
        }
        
        init()
        animate()
    }

    componentDidMount(){
        window.setTimeout(this.canvas(), 6000);
    }

    render(){
        return(
        <div className="canvas">
            <canvas ref="canvas" id="canvas"/>
        </div>
        );
    }
}

export default Canvas;