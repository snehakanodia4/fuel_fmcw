import { useState, useEffect } from "react";
import "./Memos.css";

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <div className="memo-container">
      <h3 className="memo-title">Support So Far 💚</h3>
      <div className="memo-table-wrapper">
        <table className="memo-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Team</th>
              <th>Time</th>
              <th>Message</th>
              <th>From</th>
            </tr>
          </thead>
          <tbody>
            {memos.map((memo, idx) => (
              <tr key={idx}>
                <td>{memo.name}</td>
                <td>{memo.teamname}</td>
                <td>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
                <td>{memo.message}</td>
                <td>{memo.from}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Memos;
