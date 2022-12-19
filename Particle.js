class Particle {
    constructor(position) {
        this.acc = createVector(0, 0);
        this.vel = p5.Vector.random2D();
        
        this.randomwalk = createVector(random(-1, 1), random(-1, 1));
        this.pos = position.copy();
        this.lifetime = 1000;
        this.r = 10;
    }

    run(Force) {
        this.update();
        this.display();
        // this.edge();
        this.bomb();
        this.applyForce(Force);
    }

    applyForce(Force){
        this.acc.add(Force);
    }

    // edge() {
    //     if (this.pos.y > height - this.r / 2) {
    //         this.vel.y = this.vel.y * -1;
    //         this.pos.y = height - this.r / 2;
    //     }

    //     if (this.pos.y < this.r / 2) {
    //         this.vel.y = this.vel.y * -1;
    //         this.pos.y = this.r / 2;
    //     }

    //     if (this.pos.x > width - this.r / 2) {
    //         this.vel.x = this.vel.x * -1;
    //         this.pos.x = width - this.r / 2;
    //     }

    //     if (this.pos.x < this.r / 2) {
    //         this.vel.x = this.vel.x * -1;
    //         this.pos.x = this.r / 2;
    //     }
    // }

    bomb() {
        if (mouseIsPressed) {
            this.bombF = p5.Vector.random2D();
            this.bombF.mult(0.4);
            this.acc.add(this.bombF);
            this.lifetime -= 4;
        }
    }

    update() {
        this.vel.add(this.acc);
        this.vel.mult(this.randomwalk);
        this.pos.add(this.vel);
        this.lifetime -= 2;
        this.r -= 1;

        if(this.r<= 1){
            this.r = 1;
        }
    }

    display() {
        noStroke();
        fill(255, 150, 150, this.lifetime);

        ellipse(this.pos.x, this.pos.y, this.r);
    }

    isDead() {
        return this.lifetime < 0;
    }
}