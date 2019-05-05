
// class Grass {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;

//         this.multiply = 0;

//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     // chooseCell(character) {
//     //     var found = [];
//     //     for (var i in this.directions) {
//     //         var x = this.directions[i][0];
//     //         var y = this.directions[i][1];

//     //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//     //             if (matrix[y][x] == character)
//     //                 found.push(this.directions[i]);
//     //         }
//     //     }
//     //     return found;
//     // }
//     mul() {
//         this.multiply++;
//         var newCell = random(this.chooseCell(0));

//         if (this.multiply >= 8 && newCell) {
//             var newGrass = new Grass(newCell[0], newCell[1], this.index);
//             grassArr.push(newGrass);
//             matrix[newCell[1]][newCell[0]] = 1;
//             this.multiply = 0;
//         }
//     }

// }

// class GrassEater {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.energy = 6;
//         this.index = index;
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     chooseCell(character) {
//         this.getNewCoordinates()
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character)
//                     found.push(this.directions[i]);
//             }

//         }
//         return found;
//     }

//     move() {

//         var newcell = random(this.chooseCell(0))
//         if (newcell) {
//             this.energy--;
//             var newX = newcell[0];
//             var newY = newcell[1];
//             matrix[this.y][this.x] = 0
//             matrix[newY][newX] = 2
//             this.x = newX
//             this.y = newY

//         }
//     }
//     eat() {

//         var newcell = random(this.chooseCell(1))
//         if (newcell) {
//             var newX = newcell[0];
//             var newY = newcell[1];
//             matrix[this.y][this.x] = 0
//             matrix[newY][newX] = 2
//             this.x = newX
//             this.y = newY
//             this.energy += 2;

//             for (var i in grassArr) {

//                 if (newX == grassArr[i].x && newY == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                     break;
//                 }
//             }

//         }
//     }
//     mul() {


//         var newCell = random(this.chooseCell(0));

//         if (this.energy >= 7 && newCell) {
//             var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
//             grasseaterArr.push(newGrassEater);
//             matrix[newCell[1]][newCell[0]] = 2;
//             this.energy = 6;
//         }
//     }

//     die() {
//         if (this.energy <= 0) {

//             matrix[this.y][this.x] = 0
//             for (var i in grasseaterArr) {
//                 if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
//                     grasseaterArr.splice(i, 1);

//                 }

//             }


//         }

//     }


// }

// class Gishatich {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.energy = 8;
//         this.index = index;
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x, this.y - 2],
//             [this.x - 2, this.y],
//             [this.x + 2, this.y],
//             [this.x, this.y + 2],
//             [this.x, this.y - 3],
//             [this.x - 3, this.y],
//             [this.x + 3, this.y],
//             [this.x, this.y + 3],
//         ];
//     }
//     chooseCell(character) {
//         this.getNewCoordinates()
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character)
//                     found.push(this.directions[i]);
//             }

//         }
//         return found;
//     }

//     move() {

//         var newcell = random(this.chooseCell(0))
//         if (newcell) {
//             this.energy--;
//             var newX = newcell[0];
//             var newY = newcell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = 3;
//             this.x = newX;
//             this.y = newY;

//         }
//     }
//     eat() {

//         var newcell = random(this.chooseCell(2))
//         if (newcell) {
//             var newX = newcell[0];
//             var newY = newcell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = 3;
//             this.x = newX;
//             this.y = newY;
//             this.energy += 2;

//             for (var i in grasseaterArr) {
//                 if (newX == grasseaterArr[i].x && newY == grasseaterArr[i].y) {
//                     grasseaterArr.splice(i, 1);
//                     break;
//                 }
//             }

//         }
//     }
//     mul() {


//         var newCell = random(this.chooseCell(0));

//         if (this.energy >= 10 && newCell) {
//             var newGishatich = new Gishatich(newCell[0], newCell[1], this.index);
//             gishatichArr.push(newGishatich);
//             matrix[newCell[1]][newCell[0]] = 3;
//             this.energy = 8;
//         }
//     }
//     die() {
//         if (this.energy <= 0) {

//             matrix[this.y][this.x] = 0

//             for (var i in gishatichArr) {
//                 if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
//                     gishatichArr.splice(i, 1);

//                 }

//             }


//         }

//     }


// }
// class Water {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;

//         this.multiply = 0;

//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     chooseCell(character) {
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];

//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character)
//                     found.push(this.directions[i]);
//             }
//         }
//         return found;
//     }
//     mul() {
//         this.multiply++;
//         var newCell = random(this.chooseCell(0));

//         if (this.multiply >= 8 && newCell) {
//             var newWater = new Water(newCell[0], newCell[1]);
//             waterArr.push(newWater);
//             matrix[newCell[1]][newCell[0]] = 5;
//             this.multiply = 0;
//         }
//     }
//     drown() {
//         var newcell = random(this.chooseCell(2))

//         if (newcell) {
//             var newX = newcell[0];
//             var newY = newcell[1];
//             matrix[this.y][this.x] = 5
//             matrix[newY][newX] = 5
//             this.x = newX
//             this.y = newY


//             for (var i in grasseaterArr) {

//                 if (newX == grasseaterArr[i].x && newY == grasseaterArr[i].y) {
//                     grasseaterArr.splice(i, 1);
//                     break;
//                 }
//             }

//         }

//     }
//    wash() {
//         var newcell = random(this.chooseCell(1))

//         if (newcell) {
//             var newX = newcell[0];
//             var newY = newcell[1];
//             matrix[this.y][this.x] = 5
//             matrix[newY][newX] = 5
//             this.x = newX
//             this.y = newY


//             for (var i in grassArr) {

//                 if (newX == grassArr[i].x && newY == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                     break;
//                 }
//             }

//         }
//     }
// }
// class Killer {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.energy = 10
//         this.index = index;
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x - 3, this.y - 3],
//             [this.x - 2, this.y - 3],
//             [this.x - 1, this.y - 3],
//             [this.x, this.y + -3],
//             [this.x + 1, this.y - 3],
//             [this.x + 2, this.y - 3],
//             [this.x + 3, this.y - 3],
//             [this.x - 3, this.y - 2],
//             [this.x - 2, this.y - 2],
//             [this.x - 1, this.y - 2],
//             [this.x, this.y - 2],
//             [this.x + 1, this.y - 2],
//             [this.x + 2, this.y - 2],
//             [this.x + 3, this.y - 2],
//             [this.x - 3, this.y - 1],
//             [this.x - 2, this.y - 1],
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x + 2, this.y - 1],
//             [this.x + 3, this.y - 1],
//             [this.x - 3, this.y],
//             [this.x - 2, this.y],
//             [this.x - 1, this.y],
//             [this.x, this.y],
//             [this.x + 1, this.y],
//             [this.x + 2, this.y],
//             [this.x + 3, this.y],
//             [this.x - 3, this.y + 1],
//             [this.x - 2, this.y + 1],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x + 2, this.y + 1],
//             [this.x + 3, this.y + 1],
//             [this.x - 3, this.y + 2],
//             [this.x - 2, this.y + 2],
//             [this.x - 1, this.y + 2],
//             [this.x, this.y + 2],
//             [this.x + 1, this.y + 2],
//             [this.x + 2, this.y + 2],
//             [this.x + 3, this.y + 2],
//             [this.x - 3, this.y + 3],
//             [this.x - 2, this.y + 3],
//             [this.x - 1, this.y + 3],
//             [this.x, this.y + 3],
//             [this.x + 1, this.y + 3],
//             [this.x + 2, this.y + 3],
//             [this.x + 3, this.y + 3]
//         ];
//     }
//     chooseCell(character) {
//         this.getNewCoordinates()
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character)
//                     found.push(this.directions[i]);
//             }

//         }
//         return found;
//     }
//     move() {
//         this.energy--
//         var newcell = random(this.chooseCell(0))
//         if (newcell) {
//             this.energy--
//             var newX = newcell[0];
//             var newY = newcell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = 4;
//             this.x = newX;
//             this.y = newY;
//         }
//     }
//     kill() {

//         var newcell = random(this.chooseCell(3))
//         if (newcell) {
//             this.energy += 2
//             var newX = newcell[0];
//             var newY = newcell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = 4;
//             this.x = newX;
//             this.y = newY;


//             for (var i in killerArr) {
//                 if (newX == killerArr[i].x && newY == killerArr[i].y) {
//                     gishatichArr.splice(i, 1);
//                     break;
//                 }
//             }

//         }
//     }
//     drink() {

//         var newcell = random(this.chooseCell(5))
//         if (newcell) {
//             this.energy++
//             var newX = newcell[0];
//             var newY = newcell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = 4;
//             this.x = newX;
//             this.y = newY;
//             for (var i in waterArr) {
//                 if (newX == waterArr[i].x && newY == waterArr[i].y) {
//                     waterArr.splice(i, 1);
//                     break;
//                 }
//             }

//         }
//     }
//     die() {
//         if (this.energy <= 0) {

//             matrix[this.y][this.x] = 0

//             for (var i in killerArr) {
//                 if (this.x == killerArr[i].x && this.y == killerArr[i].y) {
//                     killerArr.splice(i, 1);

//                 }

//             }


//         }

//     }
// }
// class Bear {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.energy = 10;
//         this.index = index;
//     }
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x - 3, this.y - 3],
//             [this.x - 2, this.y - 3],
//             [this.x - 1, this.y - 3],
//             [this.x, this.y + -3],
//             [this.x + 1, this.y - 3],
//             [this.x + 2, this.y - 3],
//             [this.x + 3, this.y - 3],
//             [this.x - 3, this.y - 2],
//             [this.x - 2, this.y - 2],
//             [this.x - 1, this.y - 2],
//             [this.x, this.y - 2],
//             [this.x + 1, this.y - 2],
//             [this.x + 2, this.y - 2],
//             [this.x + 3, this.y - 2],
//             [this.x - 3, this.y - 1],
//             [this.x - 2, this.y - 1],
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x + 2, this.y - 1],
//             [this.x + 3, this.y - 1],
//             [this.x - 3, this.y],
//             [this.x - 2, this.y],
//             [this.x - 1, this.y],
//             [this.x, this.y],
//             [this.x + 1, this.y],
//             [this.x + 2, this.y],
//             [this.x + 3, this.y],
//             [this.x - 3, this.y + 1],
//             [this.x - 2, this.y + 1],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x + 2, this.y + 1],
//             [this.x + 3, this.y + 1],
//             [this.x - 3, this.y + 2],
//             [this.x - 2, this.y + 2],
//             [this.x - 1, this.y + 2],
//             [this.x, this.y + 2],
//             [this.x + 1, this.y + 2],
//             [this.x + 2, this.y + 2],
//             [this.x + 3, this.y + 2],
//             [this.x - 3, this.y + 3],
//             [this.x - 2, this.y + 3],
//             [this.x - 1, this.y + 3],
//             [this.x, this.y + 3],
//             [this.x + 1, this.y + 3],
//             [this.x + 2, this.y + 3],
//             [this.x + 3, this.y + 3]
//         ];
//     }
//     chooseCell(character) {
//         this.getNewCoordinates()
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character)
//                     found.push(this.directions[i]);
//             }

//         }
//         return found;
//     }
//     move() {

//         var newcell = random(this.chooseCell(0))
//         if (newcell) {
//             this.energy--;
//             var newX = newcell[0];
//             var newY = newcell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = 6;
//             this.x = newX;
//             this.y = newY;

//         }
//     }

//     eat() {
//         var eatArr = [];
//         var newcell1 = random(this.chooseCell(4));
//         var newcell = random(this.chooseCell(2));

//         eatArr.push(newcell1);
//         eatArr.push(newcell);

//         var food = random(eatArr);

//         if (food) {
//             var newX = food[0]
//             var newY = food[1]
//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = 6;
//             this.energy += 2
//             if (food = newcell) {


//                 for (var i in killerArr) {
//                     if (newX == killerArr[i].x && newY == killerArr[i].y) {
//                         killerArr.splice(i, 1);
//                         break;
//                     }
//                 }
//             }

//         }
//         else if (food = newcell1) {


//             for (var i in grasseaterArr) {
//                 if (newX == grasseaterArr[i].x && newY == grasseaterArr[i].y) {
//                     grasseaterArr.splice(i, 1);
//                     break;
//                 }
//             }

//         }

//     }
//     mul() {


//         var newCell = random(this.chooseCell(0));

//         if (this.energy >= 14 && newCell) {
//             var newBear = new Bear(newCell[0], newCell[1], this.index);
//             bearArr.push(newBear);
//             matrix[newCell[1]][newCell[0]] = 6;
//             this.energy = 10;
//         }
//     }
//     swim() {
//         var newcell = random(this.chooseCell(5))
//         if (newcell) {
//             this.energy--;
//             var newX = newcell[0];
//             var newY = newcell[1];
//             matrix[this.y][this.x] = 5;
//             matrix[newY][newX] = 6;
//             this.x = newX;
//             this.y = newY;

//         }
//     }

//     die() {
//         if (this.energy <= 0) {

//             matrix[this.y][this.x] = 0

//             for (var i in bearArr) {
//                 if (this.x == bearArr[i].x && this.y == bearArr[i].y) {
//                     bearArr.splice(i, 1);

//                 }

//             }


//         }

//     }
// }