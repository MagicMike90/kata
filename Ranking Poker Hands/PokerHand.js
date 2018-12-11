var Result = { win: 1, loss: 2, tie: 3 };
var numbers = { T: 10, J: 11, Q: 12, K: 13, A: 14 };
var suits = ["S", "H", "D", "C"];
var combinations = [
  "Royal Flush",
  "Straight Flush",
  "Four of a Kind",
  "Full House",
  "Flush",
  "Straight",
  "Three of a Kind",
  "Two Pair",
  "One Pair"
];

function checkRoyalFlush(cards) {}
function PokerHand(hand) {
  var cards = hand.split("");
}

PokerHand.prototype.compareWith = function(hand) {
  return Result.tie;
};
