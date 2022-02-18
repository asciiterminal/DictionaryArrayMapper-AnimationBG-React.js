import React  from "react";

function Entry(props){

return(
    <div className="term">
    <dt>
    {/* Dictionary Term {dt} */}
      <span className="symbol" role="img" aria-label="The Mind">
       { props.symbol}
      </span>
      <span>{props.name}</span>
    </dt>
    <dd>
    {/* Dictionary Detail {dd} */}
      {props.description}
    </dd>
  </div>
);

}

export default Entry;