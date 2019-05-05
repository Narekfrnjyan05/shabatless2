class Bear extends LivingCreature {
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
            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x, this.y + -3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3]
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
            matrix[newY][newX] = 6;
            this.x = newX;
            this.y = newY;

        }
    }

    eat() {
        var eatArr = [];
        var newcell1 = random(this.chooseCell(4));
        var newcell = random(this.chooseCell(2));

        eatArr.push(newcell1);
        eatArr.push(newcell);

        var food = random(eatArr);

        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 6;
            this.energy += 2
            if (food = newcell) {


                for (var i in killerArr) {
                    if (newX == killerArr[i].x && newY == killerArr[i].y) {
                        killerArr.splice(i, 1);
                        break;
                    }
                }
            }

        }
        else if (food = newcell1) {


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

        if (this.energy >= 14 && newCell) {
            var newBear = new Bear(newCell[0], newCell[1], this.index);
            bearArr.push(newBear);
            matrix[newCell[1]][newCell[0]] = 6;
            this.energy = 10;
        }
    }
    swim() {
        var newcell = random(this.chooseCell(5))
        if (newcell) {
            this.energy--;
            var newX = newcell[0];
            var newY = newcell[1];
            matrix[this.y][this.x] = 5;
            matrix[newY][newX] = 6;
            this.x = newX;
            this.y = newY;

        }
    }

    die() {
        if (this.energy <= 0) {

            matrix[this.y][this.x] = 0

            for (var i in bearArr) {
                if (this.x == bearArr[i].x && this.y == bearArr[i].y) {
                    bearArr.splice(i, 1);

                }

            }


        }

    }
}