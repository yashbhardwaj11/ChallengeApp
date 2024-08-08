import Challenge from "./Challenge";

const ChallengeList = ({ challenges , onChallengeDeleted }) => {
  return (
    <div className="list-group">
      {challenges.map(challenge => (
        <Challenge key={challenge.id} challenge={challenge} onChallengeDeleted={onChallengeDeleted} />
      ))}
    </div>
  );
};

export default ChallengeList;
