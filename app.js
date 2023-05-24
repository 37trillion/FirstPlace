const contractAddress = '0x69D7F6880aeDCDD4b98D71e9008B310B0DfE4aa9';

async function connect() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      setStatus('Connected to Web3');
    } catch (error) {
      setStatus('Web3 connection error');
      console.error(error);
    }
  } else {
    setStatus('Web3 not detected');
  }
}

async function importToken() {
  const tokenAddressInput = document.getElementById('token-address-input');
  const tokenAddress = tokenAddressInput.value;

  if (!window.ethereum) {
    setStatus('Web3 not detected');
    return;
  }

  try {
    await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: 'TOKEN',
          decimals: 18,
          image: 'https://example.com/token.png',
        },
      },
    });
    setStatus('Token imported successfully');
  } catch (error) {
    setStatus('Token import error');
    console.error(error);
  }
}

function setStatus(message) {
  const statusElement = document.getElementById('status');
  statusElement.innerHTML = message;
}
