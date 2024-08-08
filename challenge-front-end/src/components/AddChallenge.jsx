import { useState } from "react";
import axios from "axios";

const AddChallenge = ({ onChallengeAdded }) => {
  const [month, setMonth] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/challenges", {
        month,
        description,
      });
      onChallengeAdded();
      setMonth("");
      setDescription("");
    } catch (error) {
      console.error(`Error adding challenges : ${error}`);
    }
  };
  return (
    <div className="card my-5">
      <div className="card-header">Add New Challenge</div>
      <div className="card-body">
        <form onSubmit={handleSubmit} method="post">
          <div className="mb-3">
            <label className="form-label" htmlFor="month">
              Month
            </label>
            <input
              placeholder="e.g. January"
              className="form-control"
              onChange={(e) => setMonth(e.target.value)}
              type="text"
              name="month"
              id="month"
              value={month}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <textarea
              placeholder="Describe the challenge"
              className="form-control"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddChallenge;
