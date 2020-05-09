import React, { Component } from "react";
import Sketch from "react-p5";

export default class App extends Component {

    tvShowImages = [];
    particles = []; //particles contain an image each

    loadOneImage = (p5, path) => {
        return new Promise((res, rej) =>
            p5.loadImage(path, img => {
                this.tvShowImages.push(img);
                res(img);
            })
        )
    }

    preload = async (p5) => {
        console.log("preload running");
        const imgPaths = "banshee breaking futurama got newsroom planet sopranos stranger wire".split(" ").map(s => `/loader-images/${s}.jpg`);
        await Promise.all(imgPaths.map((path) => this.loadOneImage(p5, path)));
    }

    createShowParticles = (p, images) => {
        return images.map(image => {
            return {
                pos: this.randomStartPosition(p),
                vel: this.randomVelocity(p),
                image: image,
                phase: p.random(p.TWO_PI),
                rotation: p.random(p.TWO_PI),
                rotationSpeed: p.random([-0.01, 0.01]),
                lastUpset: 0
            };
        });
    }

    randomStartPosition = (p5) => {
        return p5.createVector(p5.random(p5.width), p5.random(p5.height));
    }

    randomVelocity = (p5) => {
        return p5.createVector(
            p5.random([-1, 1]) * p5.random(3, 6),
            p5.random([-1, 1]) * p5.random(3, 6)
        );

        //TODO: can't call this static method
        //p5.Vector.random2D().mult(p.random(3, 6))
    }
    drawParticle = (p5, p) => {
        p5.push();
        const rimWidth = 20;
        p5.translate(p.pos.x, p.pos.y);
        p5.scale(p5.map(p5.sin(p5.frameCount / 100 + p.phase), -1, 1, 0.5, 1));
        p5.rotate(p.rotation);
        p5.fill(0);
        p5.rect(0, 0, p.image.width + rimWidth * 2, p.image.height + rimWidth * 2, 5);
        p5.fill("f6f6f6");
        p5.rect(0, 0, p.image.width + rimWidth, p.image.height + rimWidth, 5);
        p5.image(p.image, 0, 0);
        p5.pop();
    }

    updateParticle = (p5, p) => {
        p.pos.add(p.vel);
        p.rotation += p.rotationSpeed;
        this.wrapIfNecessary(p5, p.pos);
        if (p.pos.dist(this.mouseAsVector(p5)) < 60 &&
            p5.millis() - p.lastUpset > 1000) {
            p.vel.mult(-1);
            p.lastUpset = p5.millis();
        }
    }

    mouseAsVector = (p5) => {
        return p5.createVector(p5.mouseX, p5.mouseY);
    }

    wrapIfNecessary = (p5, pos) => {
        const rim = 200;
        const wMax = p5.width + rim;
        const wMin = -rim;
        const hMax = p5.height + rim;
        const hMin = -rim;

        if (pos.x > wMax) {
            pos.x = wMin;
        }
        if (pos.x < wMin) {
            pos.x = wMax;
        }
        if (pos.y > hMax) {
            pos.y = hMin;
        }
        if (pos.y < hMin) {
            pos.y = hMax;
        }
    }


    setup = (p5, canvasParentRef) => {
        p5.createCanvas(1200, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
        //    p5.createCanvas(p5.windowWidth, p5.windowHeight);
        console.log("setup runs.  " + this.tvShowImages.length)
        p5.imageMode(p5.CENTER);
        p5.rectMode(p5.CENTER);
        p5.noStroke();

        this.particles = this.createShowParticles(p5, this.tvShowImages);
    };

    draw = p5 => {
        // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
        //        p5.background("#3f3f3f");
        p5.background("#f6f6f6");

        this.particles.forEach((p) => this.drawParticle(p5, p));
        this.particles.forEach((p) => this.updateParticle(p5, p));
    };



    render() {
        return <Sketch className="loader-sketch" preload={this.preload} setup={this.setup} draw={this.draw} />;
    }
}