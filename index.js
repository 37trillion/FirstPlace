let web3;

// Function to connect to MetaMask
async function connectMetamask() {
  if (window.ethereum) {
    try {
      await window.ethereum.enable();
      web3 = new Web3(window.ethereum);
      alert('Connected to MetaMask!');
    } catch (error) {
      alert('Error connecting to MetaMask:', error);
    }
  } else {
    alert('MetaMask not found!');
  }
}

// Function to connect to Trust Wallet
async function connectTrustWallet() {
  if (window.ethereum) {
    try {
      web3 = new Web3(window.ethereum);
      alert('Connected to Trust Wallet!');
    } catch (error) {
      alert('Error connecting to Trust Wallet:', error);
    }
  } else {
    alert('Trust Wallet not found!');
  }
}

// Function to import token address to wallet
function importTokenAddress() {
  const tokenAddress = document.getElementById('tokenAddressInput').value;
  if (web3 && web3.currentProvider.isMetaMask) {
    web3.currentProvider.sendAsync(
      {
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenAddress,
            symbol: 'TOKEN',
            decimals: 18,
            image: 'https://example.com/token-image.png',
          },
        },
      },
      (err, added) => {
        if (added) {
          alert('Token added to MetaMask!');
        } else {
          alert('Error adding token:', err);
        }
      }
    );
  } else {
    alert('Web3 provider not available!');
  }
}
