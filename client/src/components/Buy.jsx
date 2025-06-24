import { ethers } from "ethers";
import "./Buy.css";

const Buy = ({ state, account })  => {
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
    <div className="page-wrapper">
              <div className="sticky-header">
                <h1 style={{
                  fontSize: "3.5rem",
                  fontWeight: "bolder",
                  color: "#fff",
                  textAlign: "center",
                  margin: 0,
                  padding: "10px 0",
                  // backgroundColor: "#000", 
                  zIndex: 1000
                }}>
                  FMC Weekend Fund Raiser - NOW LIVE !!
                </h1>
              </div>

            <div className="header-strip">
              <img src="/img.png" alt="Header Banner" />
            </div>
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
        <footer className="foot-strip">
          Your ETH will be transferred to: {account }
        </footer>
      </div> 
    </div>
    
  );
};

export default Buy;
