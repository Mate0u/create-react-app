import React from 'react';

function DisplayCard ({cardNumberToDisplay,monthToDisplay,yearToDisplay}) {

return (
<div class="row">
 <output class="col-sm-4">Actual card number is:{cardNumberToDisplay}</output>
 <output class="col-sm-3">Actual selected month is:{monthToDisplay}</output>
 <output class="col-sm-3">Actual selected year is:{yearToDisplay}</output>
</div>
)

} export default DisplayCard;