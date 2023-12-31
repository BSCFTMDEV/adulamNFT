import { useEffect, useState } from "react";
import { getWeb3 } from "./utils";

const MyNFTs = () => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    const loadNFTs = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
      const result = await contract.methods.getNFTs().call({ from: accounts[0] });
      setNFTs(result);
    };
    loadNFTs();
  }, []);

  return (
    <div>
      <h2>My NFTs</h2>
      <div>
        {nfts.map((nftId) => (
          <div key={nftId}>
            <p>Id: {nftId}</p>
            <img src={`https://ipfs.io/ipfs/${images[nftId]}`} alt={`NFT ${nftId}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
