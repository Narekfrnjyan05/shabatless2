class Water extends LivingCreature {


    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));

        if (this.multiply >= 8 && newCell) {
            var newWater = new Water(newCell[0], newCell[1]);
            waterArr.push(newWater);
            matrix[newCell[1]][newCell[0]] = 5;
            this.multiply = 0;
        }
    }
    drown() {
        var newcell = random(this.chooseCell(2))

        if (newcell) {
            var newX = newcell[0];
            var newY = newcell[1];
            matrix[this.y][this.x] = 5
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY


            for (var i in grasseaterArr) {

                if (newX == grasseaterArr[i].x && newY == grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }
            }

        }

    }
    wash() {
        var newcell = random(this.chooseCell(1))

        if (newcell) {
            var newX = newcell[0];
            var newY = newcell[1];
            matrix[this.y][this.x] = 5
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY


            for (var i in grassArr) {

                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        }
    }
}
