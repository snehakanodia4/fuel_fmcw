import { ethers } from "ethers";
import "./Buy.css";

const Buy = ({ state }) => {
  const get_tip = async (event) => {
    event.preventDefault();
    const { contract } = state;

    const name = document.querySelector("#name").value;
    const teamname = document.querySelector("#teamname").value;
    const message = document.querySelector("#message").value;
    const amount = document.querySelector("#amount").value;

    try {
      const transaction = await contract.get_tip(name, teamname, message, {
        value: ethers.utils.parseEther(amount),
      });
      await transaction.wait();
      alert("Transaction is successful");
      window.location.reload();
    } catch (err) {
      console.error("Transaction failed:", err);
      alert("Transaction failed. Check console for details.");
    }
  };

  return (
    
    <div className="center">
  <h1>Cheers from the Community </h1>

      <form onSubmit={get_tip}>
        <div className="inputbox">
          <input type="text" required id="name" />
          <span>Name</span>
        </div>
        <div className="inputbox">
          <input type="text" required id="teamname" />
          <span>Team</span>
        </div>
        <div className="inputbox">
          <input type="text" required id="message" />
          <span>Message</span>
        </div>
        <div className="inputbox">
          <input type="text" required id="amount" />
          <span>Amount (ETH)</span>
        </div>
        <div className="inputbox">
          <input type="submit" value="Pay" disabled={!state.contract} />
        </div>
         
      </form>
      
    </div>
    
  );
};

export default Buy;
