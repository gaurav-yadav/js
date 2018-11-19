"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatAmount = formatAmount;
exports.transformCancellationDetails = transformCancellationDetails;
function formatAmount(floatNumber) {
  var decimalCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  return Number(
  // Math.round(floatNumber + 'e' + decimalCount) + 'e-' + decimalCount
  parseFloat(floatNumber).toFixed(decimalCount));
}

async function transformCancellationDetails(cancellationDetails, seatNumbers, // to be cancelled
numSeats //total
) {
  console.log("CANCELLATION IP", JSON.stringify(cancellationDetails), seatNumbers);
  var refundAmount = 0;
  var cancellationCharges = 0;

  if (numSeats > 1) {
    if (cancellationDetails.cancellable === "true") {
      if (cancellationDetails.partiallyCancellable === "true") {
        //calculate for seat numbers to be cancelled
        var cancellationChargesArr = [];
        var faresArray = [];
        seatNumbers.forEach(function (seat) {
          faresArray.push(cancellationDetails.fares.entry.filter(function (s) {
            //console.log("working on", s.key, " ", seat);
            return s.key == seat;
          }));

          cancellationChargesArr.push(cancellationDetails.cancellationCharges.entry.filter(function (s) {
            //console.log("working on", s.key, " ", seat);
            return s.key == seat;
          }));
        });
        cancellationChargesArr.map(function (x) {
          cancellationCharges += formatAmount(x[0].value); //change to format Amount
        });
        var totalFare = 0;
        faresArray.map(function (fare) {
          totalFare += formatAmount(fare[0].value);
        });
        refundAmount = totalFare - cancellationCharges;
        console.log(refundAmount, cancellationCharges, " refund and cancellaation charges of multiple");
      } else {
        //not partially cancellable
        var _faresArray = [];
        console.log("non partial");
        var _totalFare = 0;
        //add fare of all seats
        cancellationDetails.fares.entry.map(function (s) {
          //console.log("working on", s.key, " ", seat);
          _totalFare += formatAmount(s.value);
        });

        refundAmount = _totalFare - cancellationCharges;
        cancellationDetails.cancellationCharges.entry.map(function (s) {
          return cancellationCharges += formatAmount(s.value);
        });
        cancellationCharges = formatAmount(cancellationCharges);
        console.log(refundAmount, cancellationCharges);
      }
    } else {
      //ticket not cancellable
      console.log("non cancellable");
      cancellationDetails.fares.entry.map(function (s) {
        return cancellationCharges += formatAmount(s.value);
      });
      console.log(cancellationCharges);
      refundAmount = 0;
    }
    //multiple seats parse the array
  } else {
    //sigle seat
    if (cancellationDetails.cancellable === "true") {
      cancellationCharges = cancellationDetails.cancellationCharges.entry.value;

      refundAmount = cancellationDetails.fares.entry.value - cancellationDetails.cancellationCharges.entry.value;
    } else {
      //single seat non cancellable
      refundAmount = 0;
      cancellationCharges = cancellationDetails.fares.entry.value;
    }
  }

  console.log(refundAmount, cancellationCharges, "final op");
}