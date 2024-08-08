import axios from 'axios';
import { useState } from 'react';

const Challenge = ({ challenge, onChallengeDeleted }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteChallenge = async (e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this challenge?')) {
      setIsDeleting(true);
      try {
        await axios.delete(`http://localhost:8080/challenges/${challenge.id}`);
        if (onChallengeDeleted) {
          onChallengeDeleted();
        }
      } catch (error) {
        console.error(`Error deleting challenge: ${error}`);
        alert('Failed to delete the challenge. Please try again.');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div
      className="list-group-item list-group-item-action"
      aria-current="true"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{challenge.month}</h5>
        <small onClick={deleteChallenge}>
          {isDeleting ? 'Deleting...' : 'X'}
        </small>
      </div>
      <p className="mb-1">{challenge.description}</p>
    </div>
  );
};

export default Challenge;
