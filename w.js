<!-- <script>

const coinOpen = document.getElementById("coin-select");
const qrContainer = document.getElementById("generateqr");
const coinContainer = document.getElementById("bit-coin");
coinOpen.addEventListener("click", function () {
    reloaderScreen();
    setTimeout(() => {
        coinContainer.classList.add("active");
    }, 2000);
})

const coins = [
    {
        id: 1,
        coin_name: "Bitcoin",
        coin_subname: "BTC",
        logo: "/assets/images/coin/bitcoin.png",
        address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",  // Example Bitcoin address
        exchangeRates: 30000  // 1 BTC = 30,000 USD
    },
    {
        id: 2,
        coin_name: "Ethereum",
        coin_subname: "ETH",
        logo: "/assets/images/coin/ethereum.png",
        address: "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",  // Example Ethereum address
        exchangeRates: 2000  // 1 ETH = 2,000 USD
    },
    {
        id: 3,
        coin_name: "Tether",
        coin_subname: "USDT",
        logo: "/assets/images/coin/tether.png",
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",  // Example Tether address
        exchangeRates: 1  // 1 USDT = 1 USD
    },
    {
        id: 4,
        coin_name: "BNB",
        coin_subname: "Binance Coin",
        logo: "/assets/images/coin/bnb.png",
        address: "bnb1v8xd7hf25y5z2f7q8v97l3hdt7v8hf98whs5dh",  // Example Binance Coin address
        exchangeRates: 250  // 1 BNB = 250 USD
    },
    {
        id: 5,
        coin_name: "XRP",
        coin_subname: "Ripple",
        logo: "/assets/images/coin/xrp.png",
        address: "rHb9CJAWyB4rj91VRwzB9LRqV9ofCFJeF8A2wG9X4mUK",  // Example Ripple address
        exchangeRates: 0.5  // 1 XRP = 0.50 USD
    },
    {
        id: 6,
        coin_name: "USD Coin",
        coin_subname: "USDC",
        logo: "/assets/images/coin/usdc.png",
        address: "0xA0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",  // Example USD Coin address
        exchangeRates: 1  // 1 USDC = 1 USD
    },
    {
        id: 7,
        coin_name: "Solana",
        coin_subname: "SOL",
        logo: "/assets/images/coin/solana.png",
        address: "So11111111111111111111111111111111111111112",  // Example Solana address
        exchangeRates: 20  // 1 SOL = 20 USD
    },
    {
        id: 8,
        coin_name: "Dogecoin",
        coin_subname: "DOGE",
        logo: "/assets/images/coin/dogecoin.png",
        address: "D9Hc1zHLzPsUPQ3hpcNTu4d8deEa9K8d89wHc7W33B9h",  // Example Dogecoin address
        exchangeRates: 0.06  // 1 DOGE = 0.06 USD
    },
    {
        id: 9,
        coin_name: "TRON",
        coin_subname: "TRX",
        logo: "/assets/images/coin/tron.png",
        address: "TKh5iW4t5D8aCw15C9pKo48qhtfU7pmUJZ",  // Example TRON address
        exchangeRates: 0.08  // 1 TRX = 0.08 USD
    },
    {
        id: 10,
        coin_name: "Toncoin",
        coin_subname: "TON",
        logo: "/assets/images/coin/toncoin.png",
        address: "EQBFS4Ydd2crNC6g8MgJdYq4j4UjU6Pggjfwz3vFfAeCj6W",  // Example Toncoin address
        exchangeRates: 1.5  // 1 TON = 1.5 USD
    },
    {
        id: 11,
        coin_name: "Cardano",
        coin_subname: "ADA",
        logo: "/assets/images/coin/cardano.png",
        address: "addr1qxy9l93np3wdvw3rps5z4kxd50s4f3g6vl7y4wprwd9ss7rcln8tqa4nvtyz",  // Example Cardano address
        exchangeRates: 0.35  // 1 ADA = 0.35 USD
    },
    {
        id: 12,
        coin_name: "Avalanche",
        coin_subname: "AVAX",
        logo: "/assets/images/coin/avalanche.png",
        address: "0x3F3f6D9BF4b5A08a29D943CD54509a6d0E4EE77B",  // Example Avalanche address
        exchangeRates: 18  // 1 AVAX = 18 USD
    },
    {
        id: 13,
        coin_name: "Shiba Inu",
        coin_subname: "SHIB",
        logo: "/assets/images/coin/shiba-inu.png",
        address: "0x5b6E3aE8A93d855ABe799c6B8bC435D4b4d9b8cB",  // Example Shiba Inu address
        exchangeRates: 0.000007  // 1 SHIB = 0.000007 USD
    },
    {
        id: 14,
        coin_name: "Chainlink",
        coin_subname: "LINK",
        logo: "/assets/images/coin/chainlink.png",
        address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",  // Example Chainlink address
        exchangeRates: 8  // 1 LINK = 8 USD
    },
    {
        id: 15,
        coin_name: "Bitcoin Cash",
        coin_subname: "BCH",
        logo: "/assets/images/coin/bitcoin-cash.png",
        address: "bitcoincash:qzp3kcw8nhvqg5r2fxkt3rrm9yllefdzv5x2nd9r7vftl9k",  // Example Bitcoin Cash address
        exchangeRates: 110  // 1 BCH = 110 USD
    },
    {
        id: 16,
        coin_name: "Polkadot",
        coin_subname: "DOT",
        logo: "/assets/images/coin/polkadot.gif",
        address: "1N6pCrwGhuHDuF2DJ5XB6BqUy1V6w4uYyr5Dh3T89B5",  // Example Polkadot address
        exchangeRates: 4.5  // 1 DOT = 4.5 USD
    },
    {
        id: 17,
        coin_name: "UNUS SED LEO",
        coin_subname: "LEO",
        logo: "/assets/images/coin/unus-sed-leo.png",
        address: "0x2e5E6dE2FfCE0E947905e3C2e2D5FBC8bB02D5AA",  // Example UNUS SED LEO address
        exchangeRates: 4  // 1 LEO = 4 USD
    },
    {
        id: 18,
        coin_name: "Dai",
        coin_subname: "DAI",
        logo: "/assets/images/coin/dai.png",
        address: "0xFf795577d9AC8bD7D90Ee22b8d8C7A8b6e4e6b5F",  // Example Dai address
        exchangeRates: 1  // 1 DAI = 1 USD
    },
    {
        id: 19,
        coin_name: "Litecoin",
        coin_subname: "LTC",
        logo: "/assets/images/coin/litecoin.png",
        address: "ltc1qv53rq4qft5z9mmt3a2r3w2jxscmkglh8xl5wma03ysl",  // Example Litecoin address
        exchangeRates: 60  // 1 LTC = 60 USD
    },
    {
        id: 20,
        coin_name: "NEAR Protocol",
        coin_subname: "NEAR",
        logo: "/assets/images/coin/near.png",
        address: "near1g4wqk5frc2j97y2syc2e7nspk3sjfdp4sgwm3f",  // Example NEAR Protocol address
        exchangeRates: 1.2  // 1 NEAR = 1.2 USD
    }
];

const coinsList = document.getElementById("coins");
const coinTitle = document.getElementById("coin-title");
const coinSearch = document.getElementById("coin-search");
const paymentSuccess = document.getElementById("payment-success")

let isShowingAllCoins = false; // Track the current state

function coinTemplate(idx, name, subname, logo) {
    let html = `
<li data-id='coin-${idx}' class="coin-item">
    <img src=${logo} alt=${name}>
    <div>
        <strong>${name}</strong>
        <span>${subname}</span>
    </div>
</li>
`;
    coinsList.innerHTML += html;
}

function showAllCoins() {
    coinTitle.textContent = "All Currencies";
    coinsList.innerHTML = ""; // Clear the list
    coins.forEach(coin => {
        coinTemplate(coin.id, coin.coin_name, coin.coin_subname, coin.logo);
    });
    attachClickEventToCoins(); // Attach click events after displaying all coins
}

function filterCoins(searchTerm) {
    const filteredCoins = coins.filter(coin =>
        coin.coin_name.toLowerCase().includes(searchTerm) ||
        coin.coin_subname.toLowerCase().includes(searchTerm)
    );
    coinsList.innerHTML = ""; // Clear the list
    filteredCoins.forEach(coin => {
        coinTemplate(coin.id, coin.coin_name, coin.coin_subname, coin.logo);
    });
    attachClickEventToCoins(); // Attach click events after filtering coins
}

document.addEventListener("DOMContentLoaded", function () {
    // Initially show only the first 5 coins
    coins.slice(0, 5).forEach(coin => {
        coinTemplate(coin.id, coin.coin_name, coin.coin_subname, coin.logo);
    });
    coinTitle.textContent = "Top Currencies";
    attachClickEventToCoins(); // Attach click events to the initially displayed coins
});

// Handle input event to filter coins
coinSearch.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    if (searchTerm === "") {
        isShowingAllCoins = true;
        // If the input is empty, show all coins
        showAllCoins();
    } else {
        isShowingAllCoins = false;
        console.log(isShowingAllCoins);
        // Filter the coins based on the input value
        filterCoins(searchTerm);
    }
});

// Handle click event to show all coins
coinSearch.addEventListener("click", function () {
    console.log(isShowingAllCoins);

    if (isShowingAllCoins) {
        // If currently showing all coins, do nothing or show a message if needed
        console.log("Already showing all coins.");
    } else {
        // If currently showing filtered coins, show all coins
        isShowingAllCoins = true;
        showAllCoins();
    }
});

let isQrGenerate = false;

// Function to attach click event to each coin item
function attachClickEventToCoins() {
    const coinItems = document.querySelectorAll(".coin-item");
    coinItems.forEach(item => {
        item.addEventListener("click", function () {
            const dataId = this.getAttribute("data-id");
            const number = dataId.match(/\d+/)[0];
            let currentNumber = number - 1;
            isQrGenerate = true;
            generateQr(coins[currentNumber], isQrGenerate);

        });
    });
}

function generateQr(bitcoinObject, condition) {
    if (condition) {
        coinContainer.classList.remove("active");
        reloaderScreen();
        setTimeout(() => {
            qrContainer.classList.add("active");
        }, 2000);
    } else {
        qrContainer.classList.remove("active");
        coinContainer.classList.add("active");
    }

    const qrCodeContainer = document.getElementById('push-qr');
    pushQR(qrCodeContainer, bitcoinObject.coin_subname, bitcoinObject.logo, bitcoinObject.exchangeRates);

    // Create a canvas element to hold the QR code
    const canvas = document.createElement('canvas');
    qrCodeContainer.querySelector('.push-qr').appendChild(canvas);

    // Generate QR code and render it to the canvas
    QRCode.toCanvas(canvas, bitcoinObject.address, function (error) {
        if (error) {
            console.error(error);
        } else {
            console.log('QR code generated successfully!');
        }
    });
}

function pushQR(qrCodeContainer, subName, logo, changes) {
    const priceWithSymbol = document.getElementById("main-price").innerText;
    const priceWithoutSymbol = removeDollarSign(priceWithSymbol);
    const cryptoAmount = (priceWithoutSymbol / changes).toFixed(6);

    const html = `
<div class="qr-top">
    <button class="qr-copy">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M7 6V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H17V21C17 21.552 16.55 22 15.993 22H4.007C3.87513 22.0008 3.7444 21.9755 3.62232 21.9256C3.50025 21.8757 3.38923 21.8022 3.29566 21.7093C3.20208 21.6164 3.12779 21.5059 3.07705 21.3841C3.02632 21.2624 3.00013 21.1319 3 21L3.003 7C3.003 6.448 3.453 6 4.01 6H7ZM5.003 8L5 20H15V8H5.003ZM9 6H17V16H19V4H9V6Z"
                        fill="#24D36A" />
        </svg>
    </button>
    <h4 class="qr-price">${cryptoAmount} ${subName}</h4>
    <div class="qr-info">
        i
    </div>
</div>
<div class="push-qr">
    <img src="${logo}" alt="Coin Logo">
</div>
`;

    // Clear any existing content in the QR code container
    qrCodeContainer.innerHTML = html;
}

const paymentCloseButton = document.querySelector(".payment-close");
paymentCloseButton.addEventListener("click",handlePaymentClose)

function handlePaymentClose(){
    paymentSuccess.classList.remove("active")
}

function removeDollarSign(price) {
    let total = price.replace('$', '')
    // Use replace with a regular expression to remove the dollar sign
    return parseFloat(total);
}

function reloaderScreen() {
    const reloader = document.querySelector(".loader-main");
    reloader.classList.add("active");
    setTimeout(() => {
        reloader.classList.remove("active");
    }, 2000)
}
</script> -->
