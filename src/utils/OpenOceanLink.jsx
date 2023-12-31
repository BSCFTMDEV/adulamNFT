import React from "react";

function OpenOceanLink() {
  const handleOpenOceanClick = () => {
    if (window.ethereum) {
      const walletAddress = window.ethereum.selectedAddress;
      const openOceanLink = `https://testnets.opensea.io/collection/adulam-1?search[owner][address]=${walletAddress}`;
      window.open(openOceanLink, "_blank");
    } else {
      alert("No se pudo encontrar una billetera conectada.");
    }
  };

  return (
    <button onClick={handleOpenOceanClick}>Abrir OpenOcean</button>
  );
}

export default OpenOceanLink;