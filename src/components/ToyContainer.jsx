import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  const toyCards = () => props.toys.map(toy => <ToyCard toy={toy}/>)

  return(
    <div id="toy-collection">
      {toyCards()}
    </div>
  );
}

export default ToyContainer;
