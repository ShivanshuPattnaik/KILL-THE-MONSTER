class Fly {

    constructor(bodyA, pointB) {

        var options = {

            bodyA : bodyA,
            pointB : pointB,

            'stiffness' : 0.04,
            'length' : 300

        }

        this.fly = Constraint.create(options);

        this.pointB = pointB;

        World.add(world, this.fly);

    }

}