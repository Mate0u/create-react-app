import React from 'react';

function PreviousDisplayCard ({cardNumberToDisplay,monthToDisplay,yearToDisplay}) {

return (
<div class="row">
 <output class="col-sm-4">Previous card number was:{cardNumberToDisplay}</output>
 <output class="col-sm-3">Previous selected month was:{monthToDisplay}</output>
 <output class="col-sm-3">Previous selected year was:{yearToDisplay}</output>
</div>
)

} export default PreviousDisplayCard;