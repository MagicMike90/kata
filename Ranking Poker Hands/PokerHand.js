var Result = { win: 1, loss: 2, tie: 3 };
var numbers = { T: 10, J: 11, Q: 12, K: 13, A: 14 };
var suits = { S: 1, H: 2, D: 3, C: 4 };

function PokerHand(hand) {
  let hands = hand.split("");
}

PokerHand.prototype.compareWith = function(hand) {
  return Result.tie;
};
