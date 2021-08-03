import { Utils } from '../src/utils/utils';
import { expect } from 'chai';

describe("Util test", function() {
    
    describe("should check | this.checkSequence", function() {

        let utils: Utils;
        let chainSimian = ['AAAAAA','CCCCCC','TTTTTT','GGGGGG'];
        
        beforeEach(function() {
            utils = new Utils();
        })

        it("if it's a simian when there is a sequence of C", function() {
            let check = utils.checkSequence(chainSimian, 'CCCC');
            expect(check).to.be.an("boolean");
            expect(check).to.be.equals(true);
        });

        it("if it's a simian when there is a sequence of A", function() {
            let check = utils.checkSequence(chainSimian, 'AAAA');
            expect(check).to.be.an("boolean");
            expect(check).to.be.equals(true);
        });

        it("if it's a simian when there is a sequence of T", function() {
            let check = utils.checkSequence(chainSimian, 'TTTT');
            expect(check).to.be.an("boolean");
            expect(check).to.be.equals(true);
        });

        it("if it's a simian when there is a sequence of G", function() {
            let check = utils.checkSequence(chainSimian, 'GGGG');
            expect(check).to.be.an("boolean");
            expect(check).to.be.equals(true);
        });

    });

    describe("should check | this.checkSequence", function() {

        let utils: Utils;
        let chainFailSimian = ['AAATTT','CCCAAA','TTTGGG','GGGTTT'];

        beforeEach(function() {
            utils = new Utils();
        })

        it("if it's not a simian when there is no sequence of 4 characters C", function() {
            let check = utils.checkSequence(chainFailSimian, 'CCCC');
            expect(check).to.be.an("boolean");
            expect(check).to.be.equals(false);
        });

        it("if it's not a simian when there is no sequence of 4 characters A", function() {
            let check = utils.checkSequence(chainFailSimian, 'AAAA');
            expect(check).to.be.an("boolean");
            expect(check).to.be.equals(false);
        });

        it("if it's not a simian when there is no sequence of 4 characters T", function() {
            let check = utils.checkSequence(chainFailSimian, 'TTTT');
            expect(check).to.be.an("boolean");
            expect(check).to.be.equals(false);
        });

        it("if it's not a simian when there is no sequence of 4 characters G", function() {
            let check = utils.checkSequence(chainFailSimian, 'GGGG');
            expect(check).to.be.an("boolean");
            expect(check).to.be.equals(false);
        });

    });

    describe("should check | this.isSimian", function() {

        let utils: Utils;
        let chainFailSimian = [
            ['A','T','G','C','G','A'],
            ['C','A','G','T','G','C'],
            ['T','T','A','T','T','T'],
            ['A','G','A','C','G','G'],
            ['G','C','G','T','C','A'],
            ['T','C','A','C','T','G'],
        ];
        let chainTrueSimian = [
            ['C','T','G','A','G','A'],
            ['C','T','A','T','G','C'],
            ['T','A','T','T','G','T'],
            ['A','G','A','G','G','G'],
            ['C','C','C','C','T','A'],
            ['T','C','A','C','T','G'],
        ];
        let chainTrueVerticalSimian = [
            ['C','T','G','A','G','A'],
            ['C','T','A','T','G','C'],
            ['T','G','T','T','G','T'],
            ['A','G','A','G','G','G'],
            ['C','T','C','C','T','A'],
            ['T','C','A','C','T','G'],
        ];
        let chainTrueHorizontalSimian = [
            ['C','T','G','A','G','A'],
            ['T','T','T','T','G','C'],
            ['T','G','T','T','A','T'],
            ['A','G','A','G','G','G'],
            ['C','T','C','C','T','A'],
            ['T','C','A','C','T','G'],
        ];
        let chainTrueDESimian = [
            ['C','T','G','A','G','A'],
            ['T','C','T','T','G','C'],
            ['T','G','C','T','A','T'],
            ['A','G','A','C','G','G'],
            ['C','T','C','C','T','A'],
            ['T','C','A','C','T','G'],
        ];
        let chainTrueDDSimian = [
            ['C','T','G','A','G','G'],
            ['T','A','T','T','G','C'],
            ['T','G','C','G','A','T'],
            ['A','G','G','C','G','G'],
            ['C','T','C','C','T','A'],
            ['T','C','A','C','T','G'],
        ]

        beforeEach(function() {
            utils = new Utils();
        })

        it("if it's not a DNA simian", function() {
            let check = utils.isSimian(chainFailSimian);
            expect(check).to.be.an("object");
            expect(check).to.deep.equal({status: false, error: 'is human'});
        });

        it("if it's a DNA simian", function() {
            let check = utils.isSimian(chainTrueSimian);
            expect(check).to.be.an("object");
            expect(check).to.deep.equal({status: true, error: 'is simian'});
        });

        it("if the DNA exists in a sequence vertical", function() {
            let check = utils.isSimian(chainTrueVerticalSimian);
            expect(check).to.be.an("object");
            expect(check).to.deep.equal({status: true, error: 'is simian'});
        });

        it("if the DNA exists in a sequence horizontal", function() {
            let check = utils.isSimian(chainTrueHorizontalSimian);
            expect(check).to.be.an("object");
            expect(check).to.deep.equal({status: true, error: 'is simian'});
        });

        it("if the DNA exists in a sequence left diagonal", function() {
            let check = utils.isSimian(chainTrueDESimian);
            expect(check).to.be.an("object");
            expect(check).to.deep.equal({status: true, error: 'is simian'});
        });

        it("if the DNA exists in a sequence right diagonal", function() {
            let check = utils.isSimian(chainTrueDDSimian);
            expect(check).to.be.an("object");
            expect(check).to.deep.equal({status: true, error: 'is simian'});
        });

    });
    

});