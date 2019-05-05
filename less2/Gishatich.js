class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x, this.y + 2],
            [this.x, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x, this.y + 3],
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {

        var newcell = random(this.chooseCell(0))
        if (newcell) {
            this.energy--;
            var newX = newcell[0];
            var newY = newcell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;

        }
    }
    eat() {

        var newcell = random(this.chooseCell(2))
        if (newcell) {
            var newX = newcell[0];
            var newY = newcell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;
            this.energy += 2;

            for (var i in grasseaterArr) {
                if (newX == grasseaterArr[i].x && newY == grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }
            }

        }
    }
    mul() {


        var newCell = random(this.chooseCell(0));

        if (this.energy >= 10 && newCell) {
            var newGishatich = new Gishatich(newCell[0], newCell[1], this.index);
            gishatichArr.push(newGishatich);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 8;
        }
    }
    die() {
        if (this.energy <= 0) {

            matrix[this.y][this.x] = 0

            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);

                }

            }


        }

    }
}