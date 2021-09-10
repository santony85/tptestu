var Wallet = require('../lib/wallet')
var assert = require('assert');

describe('Wallet', function () {

    it('getBallance', function () {
        let wallet = new Wallet(35);
        assert.equal(wallet.getBallance(), 35);
    });

    it('deposit', function () {
        let wallet = new Wallet(0);
        assert.equal(wallet.deposit(10), 10);
        assert.equal(wallet.deposit(40), "Too many coins!");
    });

    it('withdraw', function () {
        let wallet = new Wallet(15);
        assert.equal(wallet.withdraw(10), 5);
        assert.equal(wallet.withdraw(40), "Not enough cash!");
    });

}); 