// EXAM 2
// 4) * Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards
// from the standard 52 card deck. After that the solution is to tell us what is the best poker set.
// Zasada: nie wymieniamy kart! Jedno rozdanie i jaki mamy tego wynik.

// colors
let suits = [1, 2, 3, 4];

// figures
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//creating playing deck (talia kart)
let deck = [];
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < ranks.length; j++) {
    let card = {
      suit: suits[i],
      rank: ranks[j]
    };
    deck.push(card);
  }
}

// console.log(deck);
// console.log(deck[12]);

//shuffling (tasowanie) cards and picking 5 on your hand
let yourHand = [];
for (let i = 0; i <= 4; i++) {
  // losowanie karty z talii
  let newCard = Math.floor(Math.random() * deck.length);
  // dodawanie karty do ręki gracza
  yourHand.push(deck[newCard]);
  // usuwanie z talii wylosowanej karty
  deck.splice(newCard, 1);
}

// console.log(yourHand[0]);
// console.log(yourHand[1]);
// console.log(yourHand[2]);
// console.log(yourHand[3]);
// console.log(yourHand[4]);

// sorting from lowest to highest card
const cardsSorted = yourHand.sort((compare = (a, b) => a.rank - b.rank));
// console.log(yourHand);

// your own cards
// const cardsSorted = [
//   {
//     rank: 10,
//     suit: 1
//   },
//   {
//     rank: 11,
//     suit: 1
//   },
//   {
//     rank: 12,
//     suit: 1
//   },
//   {
//     rank: 13,
//     suit: 1
//   },
//   {
//     rank: 14,
//     suit: 1
//   }
// ];

// assign suits and ranks to numbers
const cardsSuits = cardsSorted.map(e => {
  switch (e.suit) {
    case 1:
      return (e = {
        rank: e.rank,
        suit: "Clubs"
      });
    case 2:
      return (e = {
        rank: e.rank,
        suit: "Diamonds"
      });
    case 3:
      return (e = {
        rank: e.rank,
        suit: "Hearts"
      });
    case 4:
      return (e = {
        rank: e.rank,
        suit: "Spades"
      });
  }
});

const cardsRanks = cardsSuits.map(e => {
  switch (e.rank) {
    case 2:
      return (e = {
        rank: "Two",
        suit: e.suit
      });
    case 3:
      return (e = {
        rank: "Three",
        suit: e.suit
      });
    case 4:
      return (e = {
        rank: "Four",
        suit: e.suit
      });
    case 5:
      return (e = {
        rank: "Five",
        suit: e.suit
      });
    case 6:
      return (e = {
        rank: "Six",
        suit: e.suit
      });
    case 7:
      return (e = {
        rank: "Seven",
        suit: e.suit
      });
    case 8:
      return (e = {
        rank: "Eight",
        suit: e.suit
      });
    case 9:
      return (e = {
        rank: "Nine",
        suit: e.suit
      });
    case 10:
      return (e = {
        rank: "Ten",
        suit: e.suit
      });
    case 11:
      return (e = {
        rank: "Jack",
        suit: e.suit
      });
    case 12:
      return (e = {
        rank: "Queen",
        suit: e.suit
      });
    case 13:
      return (e = {
        rank: "King",
        suit: e.suit
      });
    case 14:
      return (e = {
        rank: "Ace",
        suit: e.suit
      });
  }
});

// console.log(cardsSorted);
// console.log(cardsRanks);
console.log(cardsRanks[0]);
console.log(cardsRanks[1]);
console.log(cardsRanks[2]);
console.log(cardsRanks[3]);
console.log(cardsRanks[4]);
// console.log(cardsSorted[0]);
// console.log(cardsSorted[1]);
// console.log(cardsSorted[2]);
// console.log(cardsSorted[3]);
// console.log(cardsSorted[4]);

// Royal Flush - Poker królewski to najwyższy układ kart po kolei w tym samym kolorze: 10, Jopek, Dama, Król, As.
if (
  cardsSorted[0].rank == 10 &&
  cardsSorted[1].rank == 11 &&
  cardsSorted[2].rank == 12 &&
  cardsSorted[3].rank == 13 &&
  cardsSorted[4].rank == 14 &&
  cardsSorted[0].suit == cardsSorted[1].suit &&
  cardsSorted[1].suit == cardsSorted[2].suit &&
  cardsSorted[2].suit === cardsSorted[3].suit
) {
  console.log(`Congratulations you have Royal Flush`);
}
// Straight Flush - Poker to układ kart po kolei w kolorze, ale niższy niż poker królewski.
else if (
  cardsSorted[0].rank == 2 &&
  cardsSorted[1].rank == 3 &&
  cardsSorted[2].rank == 4 &&
  cardsSorted[3].rank == 5 &&
  cardsSorted[4].rank == 14 &&
  cardsSorted[0].suit == cardsSorted[1].suit &&
  cardsSorted[1].suit == cardsSorted[2].suit &&
  cardsSorted[2].suit === cardsSorted[3].suit
) {
  console.log(`Congratulations you have Straight Flush`);
} else if (
  cardsSorted[0].rank == cardsSorted[1].rank - 1 &&
  cardsSorted[1].rank == cardsSorted[2].rank - 1 &&
  cardsSorted[2].rank == cardsSorted[3].rank - 1 &&
  cardsSorted[3].rank == cardsSorted[4].rank - 1 &&
  cardsSorted[0].suit == cardsSorted[1].suit &&
  cardsSorted[1].suit == cardsSorted[2].suit &&
  cardsSorted[2].suit === cardsSorted[3].suit
) {
  console.log(`Congratulations you have Straight Flush`);
}
// Four of a Kind - Kareta to cztery te same karty, np. Jopek, Jopek, Jopek, Jopek, Dama.
else if (
  (cardsSorted[0].rank == cardsSorted[1].rank &&
    cardsSorted[1].rank == cardsSorted[2].rank &&
    cardsSorted[2].rank === cardsSorted[3].rank) ||
  (cardsSorted[1].rank == cardsSorted[2].rank &&
    cardsSorted[2].rank == cardsSorted[3].rank &&
    cardsSorted[3].rank === cardsSorted[4].rank)
) {
  console.log(
    `Congratulations you have Four of a Kind of ${cardsRanks[1].rank}s`
  );
}
// Full House - Ful to trzy takie same figury i para, na przykład: Król, Król, Król, Jopek, Jopek.
else if (
  cardsSorted[0].rank == cardsSorted[1].rank &&
  cardsSorted[1].rank == cardsSorted[2].rank &&
  cardsSorted[3].rank == cardsSorted[4].rank
) {
  console.log(
    `Congratulations you have Full House ${cardsRanks[0].rank}s on ${cardsRanks[4].rank}s`
  );
} else if (
  cardsSorted[4].rank == cardsSorted[3].rank &&
  cardsSorted[3].rank == cardsSorted[2].rank &&
  cardsSorted[0].rank == cardsSorted[1].rank
) {
  console.log(
    `Congratulations you have Full House ${cardsRanks[4].rank}s on ${cardsRanks[0].rank}s`
  );
}
// Flush - Kolor to karty w tym samym kolorze, ale występujące nie po kolei, na przykład: Król, Jopek, 6, 2, Dama.
else if (
  cardsSorted[0].suit == cardsSorted[1].suit &&
  cardsSorted[1].suit == cardsSorted[2].suit &&
  cardsSorted[2].suit === cardsSorted[3].suit
) {
  console.log(`Congratulations you have Flush ${cardsSorted[0].suit}s`);
}
// Straight - Strit to pięć kart po kolei, na przykład 5, 6, 7, 8, 9.
else if (
  cardsSorted[0].rank == 2 &&
  cardsSorted[1].rank == 3 &&
  cardsSorted[2].rank == 4 &&
  cardsSorted[3].rank == 5 &&
  cardsSorted[4].rank == 14
) {
  console.log(
    `Congratulations you have Straight ${cardsSorted[4].rank} to ${cardsSorted[0].rank}`
  );
} else if (
  cardsSorted[0].rank == cardsSorted[1].rank - 1 &&
  cardsSorted[1].rank == cardsSorted[2].rank - 1 &&
  cardsSorted[2].rank == cardsSorted[3].rank - 1 &&
  cardsSorted[3].rank == cardsSorted[4].rank - 1
) {
  console.log(
    `Congratulations you have Straight ${cardsSorted[0].rank} to ${cardsSorted[4].rank}`
  );
}
// Three of a Kind - Trójka to trzy te same karty i dwie inne, na przykład: Jopek, Jopek, Jopek, Dama, Król.
else if (
  (cardsSorted[0].rank === cardsSorted[1].rank &&
    cardsSorted[1].rank === cardsSorted[2].rank) ||
  (cardsSorted[2].rank === cardsSorted[3].rank &&
    cardsSorted[3].rank === cardsSorted[4].rank) ||
  (cardsSorted[1].rank === cardsSorted[2].rank &&
    cardsSorted[2].rank === cardsSorted[3].rank)
) {
  console.log(
    `Congratulations you have Three of a Kind of ${cardsRanks[2].rank}s`
  );
}
// Two Pairs - Dwie pary to dwie te same karty i kolejne dwie takie same, na przykład Jopek, Jopek, Król, Król, 3.
else if (
  (cardsSorted[0].rank == cardsSorted[1].rank &&
    cardsSorted[2].rank == cardsSorted[3].rank) ||
  (cardsSorted[1].rank == cardsSorted[2].rank &&
    cardsSorted[3].rank == cardsSorted[4].rank) ||
  (cardsSorted[0].rank == cardsSorted[1].rank &&
    cardsSorted[3].rank == cardsSorted[4].rank)
) {
  console.log(
    `Congratulations you have Two Pairs of ${cardsRanks[1].rank}s and ${cardsRanks[3].rank}s`
  );
}
// Pair - Para to dwie takie same karty i trzy inne karty, na przykład: Król, Król, 9, Dama, 5.
else if (
  cardsSorted[0].rank == cardsSorted[1].rank ||
  cardsSorted[1].rank == cardsSorted[2].rank
) {
  console.log(`Congratulations you have Pair of ${cardsRanks[1].rank}s`);
} else if (
  cardsSorted[2].rank == cardsSorted[3].rank ||
  cardsSorted[3].rank == cardsSorted[4].rank
) {
  console.log(`Congratulations you have Pair of ${cardsRanks[3].rank}s`);
}
// High Card - Wysoka karta to układ, w którym nie mamy żadnego z pozostałych układów i liczy się najwyższa karta, którą posiadamy.
else {
  console.log(
    `Congratulations your High Card is ${cardsRanks[4].rank} of ${cardsSuits[4].suit}`
  );
}
