const assert = require('chai').assert;
const expect = require('chai').expect;  
const nfl = require('../public/assets/js/test.js');

// ======================================CHECK PASS PLAY==================================

// describe('Check pass plays', function(){
   
    // CHECKING INCOMPLETE PASSES
    it.skip('check if the passYardage for incomplete pass is zero', () => {

        // STORING THE INCOMPLETEPASS IN PLAY
        const totalYardage = nfl.incompletePass();

        // EXPECTING TOTAL YARDAGE EQUALS TO O
        assert.equal(totalYardage, 0);
    });

     // CHECKING YARD LOSS
    it.skip('Check yard loss', () => {

       // STORING THE BIGDEFPLAY IN PLAY
        const play = nfl.bigDefPlay()

        // PASS YARDAGE
        let PassYardage = nfl.passYardage
        ; const lossYard = function (){ 
            PassYardage -= nfl.roundedYards; 
        }
        ; const yardLoss = function (){
            return  PassYardage;
        };

        // EXPECTING THE PASS YARDAGE TO DECREASE BY AMOUNT OF ROUNDED YARDS
        expect(lossYard).to.decrease(yardLoss).by(nfl.roundedYards)
    });

    // CHECKING THE NORAML PASS
    it.skip('Check normal', () => {

       // STORING THE BIGDEFPLAY IN PLAY
        const play = nfl.normalPass()

        // PASS YARADAGE
        let PassYardage = nfl.passYardage
        ; const gainedYard = function (){
            PassYardage += nfl.roundedYards;
        }
        ; const yardgained = function (){
            return  PassYardage;
        };

        // EXPECTING THE PASS YARDAGE TO INCREASE BY AMOUNT OF ROUNDED YARDS
        expect(gainedYard).to.increases(yardgained).by(nfl.roundedYards)
    });

    // CHECKING THE BIG PASS PLAY
    it.skip('Check Big Pass Play ', () => { 

        // STORING THE BIGPASSPLAY IN PLAY
        const play = nfl.bigPassPlay()

        // PASSYARDAGE
        let PassYardage = nfl.passYardage
        ; const gainedYard = function (){
            PassYardage += nfl.roundedYards;
        }
        ; const yardgained = function (){
            return  PassYardage;
        };

       // EXPECTING THE PASS YARDAGE TO INCREASE BY AMOUNT OF ROUNDED YARDS
        expect(gainedYard).to.increases(yardgained).by(nfl.roundedYards)
    });

// });




//= ====================================== RUN PLAYS=============================


describe('Check run plays', () => { 

    // CHECK NORMAL RUN
    it('Check normal run', () => {

        // STORING THE NORMALRUN IN PLAY
        const play = nfl.normalRun()

        // RUNYARDAGE
        let runYardage = nfl.runYardage
        ; const gainedYard = function (){
            runYardage += nfl.roundedYards;
        }
        ; const yardgained = function (){
            return  runYardage;
        };

        // EXPECTING THE RUN YARDAGE TO INCREASE BY AMOUNT OF ROUNDED YARDS
        expect(gainedYard).to.increases(yardgained).by(nfl.roundedYards)
    });

    // CHECKING THE BIG RUN PLAY
    it('Check big run play', () => {

        // STORING THE BIGRUNPLAY IN PLAY
        const play = nfl.bigRunPlay()

        // RUNYARDAGE
        let runYardage = nfl.runYardage
        ; const gainedYard = function (){
            runYardage += nfl.roundedYards;
        }
        ; const yardgained = function (){
            return  runYardage;
        };

        // EXPECTING THE RUNYARDAGE TO DECREASE BY AMOUNT OF ROUNDED YARDS
        expect(gainedYard).to.increases(yardgained).by(nfl.roundedYards)
    });
    
    // CHECKING THE YARD LOSS
    it.only('Check yard loss', () => {

        // STORING THE LOSS IN PLAY
        const play = nfl.bigDefPlay()

        // RUN YARDAGE
        let runYardage = nfl.runYardage
        ; const gainedYard = function (){
            runYardage -= nfl.roundedYards;
        }
        ; const yardgained = function (){
            return  runYardage;
        };

        // EXPECTING THE RUN YARDAGE TO DECREASE BY AMOUNT OF ROUNDED YARDS
        expect(gainedYard).to.decrease(yardgained).by(nfl.roundedYards)
    });


})
