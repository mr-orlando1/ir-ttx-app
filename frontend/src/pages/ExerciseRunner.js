import React from 'react';
import { useParams } from 'react-router-dom';

function ExerciseRunner() {
  const { id } = useParams();

  return (
    <div>
      <h1>Running Exercise ID: {id}</h1>
    </div>
  );
}

export default ExerciseRunner;