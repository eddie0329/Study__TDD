// Sample
const playsSample = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy" },
  othello: { name: "Othello", type: "tragedy" },
};

// Sample
const invoicesSample = {
  customer: "Eddie",
  performances: [
    {
      playID: "hamlet",
      audience: 55,
    },
    {
      playID: "as-like",
      audience: 35,
    },
    {
      playID: "othello",
      audience: 40,
    },
  ],
};

const amountFor = (aPerformance, play) => {
  let result = 0;
  switch (play.type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 3000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      break;
    default:
      throw new Error(`unknown type: ${play.type}`);
  }
  return result;
};

function statement(invoices, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoices.customer}\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoices.performances) {
    const play = plays[perf.playID];
    let thisAmount = amountFor(perf, play);

    volumeCredits += Math.max(perf.audience - 30, 0);

    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience);
    result += `${play.name} : ${format(thisAmount / 100)} (${perf.audience})\n`;
    totalAmount += thisAmount;
  }

  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;
}

// console.log(statement(invoicesSample, playsSample));
//Statement for Eddie
// Hamlet : $650.00 (55)As You Like It : $205.00 (35)Othello : $500.00 (40)Amount owed is $1,355.00
// You earned 75 credits

describe("statement test", () => {
  it("test1", () => {
    expect(statement(invoicesSample, playsSample)).toEqual(
      `Statement for Eddie\nHamlet : $650.00 (55)\nAs You Like It : $205.00 (35)\nOthello : $500.00 (40)\nAmount owed is $1,355.00\nYou earned 75 credits\n`
    );
  });
});
