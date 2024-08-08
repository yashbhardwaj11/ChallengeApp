import { useEffect, useState } from "react";
import ChallengeList from "./components/ChallengeList";
import axios from "axios";
import AddChallenge from "./components/AddChallenge";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [challenges, setChallenges] = useState([]);

  const fetchChallanges = async () => {
    try {
      const response = await axios.get("http://localhost:8080/challenges");
      setChallenges(response.data);
    } catch (error) {
      console.error(`Error fetching the challenges : ${error}`);
    }
  };

  useEffect(() => {
    fetchChallanges();
  }, []);

  const handleChallengeAdded = () => {
    fetchChallanges();
  };
  
  const onChallengeDeleted = () => {
    fetchChallanges();
  };

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-4">Monthly Challenges</h1>
      <AddChallenge onChallengeAdded={handleChallengeAdded} />
      <ChallengeList
        challenges={challenges}
        onChallengeDeleted={onChallengeDeleted}
      />
    </div>
  );
};

export default App;
