import React from 'react';

function DisplayCard ({cardNumberToDisplay,monthToDisplay,yearToDisplay,brandToDisplay}) {

return (
<div class="row">
 <output class="col-sm-2">Actual card number is: {cardNumberToDisplay}</output>
 <output class="col-sm-2">Actual selected month is: {monthToDisplay}</output>
 <output class="col-sm-2">Actual selected year is: {yearToDisplay}</output>
 <output class="col-sm-2">Actual selected brand is: {brandToDisplay}</output>
</div>
)

} export default DisplayCard;