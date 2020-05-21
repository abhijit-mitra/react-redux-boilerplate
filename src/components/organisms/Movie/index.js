import React, {memo} from 'react';
import PropTypes from 'prop-types';


const Movie = memo(({name, runtimeInMinutes, budgetInMillions, boxOfficeRevenueInMillions, academyAwardNominations, academyAwardWins}) => (
  <div className="col-md-4 mb-4">
    <div className="border-blue p-4 br-10">
      <div className="mb-2">{`Name: ${name}`}</div>
      <div className="mb-2">{`Duration: ${runtimeInMinutes} Mins`}</div>
      <div className="mb-2">{`Budget: ${budgetInMillions} Million`}</div>
      <div className="mb-2">{`Boxoffice Revenue: ${boxOfficeRevenueInMillions}`}</div>
      <div className="mb-2">{`Academy Award Nominations: ${academyAwardNominations}`}</div>
      <div className="mb-2">{`Academy Awards: ${academyAwardWins}`}</div>
    </div>
  </div>
));

Movie.propTypes={
  name: PropTypes.string.isRequired,
  runtimeInMinutes: PropTypes.number.isRequired,
  budgetInMillions: PropTypes.number.isRequired,
  boxOfficeRevenueInMillions: PropTypes.number.isRequired,
  academyAwardNominations: PropTypes.number.isRequired,
  academyAwardWins: PropTypes.number.isRequired,
};

export default Movie;
