import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  const toyCards = () => props.toys.map(toy => <ToyCard key={toy.id} toy={toy} removeToy={props.removeToy}/>)

  return(
    <div id="toy-collection">
      {toyCards()}
    </div>
  );
}

export default ToyContainer;
