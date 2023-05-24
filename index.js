document.addEventListener("DOMContentLoaded", function() {
  let web3;

  // Function to connect to Metamask
  async function connectToMetamask() {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
        // Request access to the user's MetaMask account
        await window.ethereum.enable();
        console.log("Connected to Metamask");
        // Enable other functionality or display account information
      } catch (error) {
        console.error("Failed to connect to Metamask", error);
      }
    } else {
      console.error("Metamask is not available");
    }
  }

  // Function to import First Place token
  async function importFirstPlaceToken() {
    if (!web3) {
      console.error("Not connected to Metamask");
      return;
    }

    const tokenAddress = "0x69D7F6880aeDCDD4b98D71e9008B310B0DfE4aa9";

    try {
      // Use web3 to interact with the Ethereum network
      const accounts = await web3.eth.getAccounts();
      const tokenContract = new web3.eth.Contract(abi, tokenAddress);
      const tokenName = await tokenContract.methods.name().call();

      console.log(`Imported token: ${tokenName}`);
      // Perform further actions with the imported token
    } catch (error) {
      console.error("Failed to import token", error);
    }
  }

  // Event listener for the "Connect to Metamask" button
  const connectButton = document.getElementById("connectButton");
  connectButton.addEventListener("click", connectToMetamask);

  // Event listener for the "Import First Place Token" button
  const importTokenButton = document.getElementById("importTokenButton");
  importTokenButton.addEventListener("click", importFirstPlaceToken);
});
