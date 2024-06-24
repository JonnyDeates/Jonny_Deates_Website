import React, {useEffect, useRef, useState} from 'react';
import './BackendNodes.css'
import {useScreenWidth} from "../../../../utils/useScreenWidth";
type BackendNodesProps = {

};
type Point = {
    x: number,
    y: number,
    xVelocity: number,
    yVelocity: number,
    diameter: number
}
const BackendNodes = ({}: BackendNodesProps) => {
    const screenWidth = useScreenWidth();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const maxDistance = 100;
    const pointCount = 40;
    const connectionStrength = 10;
    const color = "0,220,0";

    useEffect(() => {
        let interval: number;
        if(canvasRef && canvasRef.current) {
            const context = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;
            const points  = generatePoints(pointCount);
            handlePointInteractions(context, points);
            interval = setInterval(() => handlePointInteractions(context, points),30);
        }
        return () => clearInterval(interval)
    }, [canvasRef]);

    useEffect(()=>{

    });
        // function init () {
            //Add on load scripts
            // resizeCanvas();
            // window.addEventListener('resize', resizeCanvas, false);
        // }
        const generatePoint  = ():Point => {
            const canvas = canvasRef.current as HTMLCanvasElement
            return {
                x: (Math.random() * (canvas.width + maxDistance)) - (maxDistance / 2),
                y: (Math.random() * (canvas.height + maxDistance)) - (maxDistance / 2),
                xVelocity: (Math.random()),
                yVelocity: (Math.random()),
                diameter: Math.random() * 3 + 3
            }
        };
        const generatePoints = (amount: number) => {
            const points = []
            for (let i = 0; i < amount; i++) {
                points.push(generatePoint())
            }
            return points;
        };
        const drawPoints = (ctx: CanvasRenderingContext2D, point: Point) => {
            ctx.beginPath();
            ctx.fillStyle = "rgb("+color+")";
            if(point.diameter){
                ctx.arc(point.x,point.y,point.diameter,0,2*Math.PI);
            }else{
                ctx.arc(point.x,point.y,2,0,2*Math.PI);
            }
            ctx.closePath();
            ctx.fill();
        };
        const updatePointPosition = (point: Point) => {
            const canvas = canvasRef.current as HTMLCanvasElement;
            point.x += point.xVelocity;
            point.y += point.yVelocity;
            if (point.x > canvas.width+(maxDistance/2)) {
                point.x = -(maxDistance/2);
            }
            else if (point.x < -(maxDistance/2)) {
                point.x = canvas.width+(maxDistance/2);
            }
            if (point.y > canvas.height+(maxDistance/2)) {
                point.y = -(maxDistance/2);
            }
            else if (point.y < -(maxDistance/2)) {
                point.y = canvas.height+(maxDistance/2);
            }
        };
        const handlePointInteractions = (context2D: CanvasRenderingContext2D, points: Point[]) => {
            const canvas = canvasRef.current as HTMLCanvasElement;
            context2D.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < points.length; i++) {
                pointCollision(context2D,  points, points[i]);
                drawPoints(context2D, points[i]);
                updatePointPosition(points[i]);
            };
        };

        const pointCollision = (context2D: CanvasRenderingContext2D, points: Point[], point: Point) => {
             let distanceBetweenTwoPoints;
            for (let i = 0; i < points.length; i++) {
                if (point !== points[i]) {
                    distanceBetweenTwoPoints = Math.sqrt(Math.pow((point.x - points[i].x),2) + Math.pow((point.y - points[i].y),2));
                    if (distanceBetweenTwoPoints<maxDistance) {
                        context2D.beginPath();
                        context2D.moveTo(point.x, point.y);
                        context2D.strokeStyle = `rgba(${color},${connectionStrength*Math.pow((maxDistance-distanceBetweenTwoPoints)/maxDistance,5)})`;
                        context2D.moveTo(point.x, point.y);
                        context2D.lineTo(points[i].x, points[i].y);
                        context2D.closePath();
                        context2D.stroke();
                    }
                }
            }
        };

    return (
        <div className='BackendNodes'>
            <canvas ref={canvasRef} width={600} height={400}/>
    </div>
    );
};

export default BackendNodes;