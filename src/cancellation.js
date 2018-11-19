export function formatAmount(floatNumber, decimalCount = 2) {
  return Number(
    // Math.round(floatNumber + 'e' + decimalCount) + 'e-' + decimalCount
    parseFloat(floatNumber).toFixed(decimalCount)
  );
}

export async function transformCancellationDetails(
  cancellationDetails,
  seatNumbers, // to be cancelled
  numSeats //total
) {
  console.log(
    "CANCELLATION IP",
    JSON.stringify(cancellationDetails),
    seatNumbers
  );
  let refundAmount = 0;
  let cancellationCharges = 0;

  if (numSeats > 1) {
    if (cancellationDetails.cancellable === "true") {
      if (cancellationDetails.partiallyCancellable === "true") {
        //calculate for seat numbers to be cancelled
        let cancellationChargesArr = [];
        let faresArray = [];
        seatNumbers.forEach(seat => {
          faresArray.push(
            cancellationDetails.fares.entry.filter(s => {
              //console.log("working on", s.key, " ", seat);
              return s.key == seat;
            })
          );

          cancellationChargesArr.push(
            cancellationDetails.cancellationCharges.entry.filter(s => {
              //console.log("working on", s.key, " ", seat);
              return s.key == seat;
            })
          );
        });
        cancellationChargesArr.map(x => {
          cancellationCharges += formatAmount(x[0].value); //change to format Amount
        });
        let totalFare = 0;
        faresArray.map(fare => {
          totalFare += formatAmount(fare[0].value);
        });
        refundAmount = totalFare - cancellationCharges;
        console.log(
          refundAmount,
          cancellationCharges,
          " refund and cancellaation charges of multiple"
        );
      } else {
        //not partially cancellable
        const faresArray = [];
        console.log("non partial");
        let totalFare = 0;
        //add fare of all seats
        cancellationDetails.fares.entry.map(s => {
          //console.log("working on", s.key, " ", seat);
          totalFare += formatAmount(s.value);
        });

        refundAmount = totalFare - cancellationCharges;
        cancellationDetails.cancellationCharges.entry.map(
          s => (cancellationCharges += formatAmount(s.value))
        );
        cancellationCharges = formatAmount(cancellationCharges);
        console.log(refundAmount, cancellationCharges);
      }
    } else {
      //ticket not cancellable
      console.log("non cancellable");
      cancellationDetails.fares.entry.map(
        s => (cancellationCharges += formatAmount(s.value))
      );
      console.log(cancellationCharges);
      refundAmount = 0;
    }
    //multiple seats parse the array
  } else {
    //sigle seat
    if (cancellationDetails.cancellable === "true") {
      cancellationCharges = cancellationDetails.cancellationCharges.entry.value;

      refundAmount =
        cancellationDetails.fares.entry.value -
        cancellationDetails.cancellationCharges.entry.value;
    } else {
      //single seat non cancellable
      refundAmount = 0;
      cancellationCharges = cancellationDetails.fares.entry.value;
    }
  }

  console.log(refundAmount, cancellationCharges, "final op");
}
