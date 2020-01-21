import React from "react";

function PreviousDisplayCard({
  cardNumberToDisplay,
  monthToDisplay,
  yearToDisplay,
  brandToDisplay
}) {
  return (
    <div class="row">
      <output class="col-sm-2">
        Previous card number was: {cardNumberToDisplay}
      </output>
      <output class="col-sm-2">
        Previous selected month was: {monthToDisplay}
      </output>
      <output class="col-sm-2">
        Previous selected year was: {yearToDisplay}
      </output>
      <output class="col-sm-2">
        Previous selected brand was: {brandToDisplay}
      </output>
    </div>
  );
}
export default PreviousDisplayCard;
