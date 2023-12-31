import twitter from '../assets/twitter.png'
import discord from '../assets/discord.png'
import telegram from '../assets/telegram.png'

import { setAlert, setGlobalState, useGlobalState } from '../store'
import { payToMint, } from '../Adulam'  
import { useState } from 'react';


const Hero = () => {
  const [nfts] = useGlobalState('nfts');
  const [quantity, setQuantity] = useState(1); 

  const onMintNFT = async () => {
    if (quantity > 5) {
      setAlert('Max', 'red');
      return;
    }
    setGlobalState('loading', {
      show: true,
      msg: 'Minting nft',
    })

    await payToMint(quantity) 
      .then(() => setAlert('Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  
 
  };
  return (
    <div
    className="bg-[url('https://i.imgur.com/eWAoZlE.png')]
    bg-no-repeat bg-center bg-fixed">

      
          
      <div className="flex flex-col justify-center items-center mx-auto py-16">
        <div className="flex flex-col justify-center items-center">
        
        
        <ul class="flex flex-col justify-center space-y-4 items-center my-4">
 
  <a
    class="bg-transparent hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
    href=""
  >
    <img class="w-12 h-12" src={twitter} alt="twitter" />
  </a>
  <a
    class="bg-transparent hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
    href="https://t.me/manti_zard"
  >

    <img class="w-12 h-12" src={telegram} alt="twitter" />
  </a>
</ul>
<h1 className="text-[#cbc4bc]  text-6xl font-extrabold text-center">
         MantiZard
         <br />
        
            </h1> 

<h1 className="text-[#cbc4bc]  text-xl font-extrabold text-center">
The first meme coin on manta that give you penta yield exposure (LP with stone)<br />
            </h1> 
            <div className="flex flex-wrap justify-center">
 
</div>
<div class="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
    <div class="sm:flex sm:space-x-4">
        <div class="inline-block align-bottom bg-transparent rounded-xl text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8 rainbow-shadow">
            <div class="bg-transparent p-5">
                <div class="sm:flex sm:items-start">
                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 class="text-xl leading-6 font-bold text-[#ffa751]">TotalSupply</h3>
                        <p class="text-l font-bold text-[#cbc4bc]">1.009.500.000</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="inline-block align-bottom bg-transparent rounded-xl text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8 rainbow-shadow">
            <div class="bg-transparent p-5">
                <div class="sm:flex sm:items-start">
                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 class="text-xl leading-6 font-bold text-[#ffa751]">99% lp</h3>
                        <p class="text-l font-extrabold text-[#cbc4bc]">1% supply for New Year raffle</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="inline-block align-bottom bg-transparent rounded-xl text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8 rainbow-shadow">
            <div class="bg-transparent p-5">
                <div class="sm:flex sm:items-start">
                    <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                        <h3 class="text-xl leading-6 font-bold text-[#ffa751]">PAIR</h3>
                        <p class="text-l font-bold text-[#cbc4bc]">MZAR/STONE</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
 
<div>
<p className="text-white text-xs font-normal text-right "> 
        <br />
        </p>
   <button
      className="button"
      onClick={() => window.location.href = "https://izumi.finance/trade/swap?outputCurrency=0x71763103f697E550200cF4a5C25850114F560CA7"} >
     BUY MZARD
    </button>     
    <button class=" button "
 onClick={() => window.location.href = "https://pacific-explorer.manta.network/token/0x71763103f697E550200cF4a5C25850114F560CA7/token-transfers"} >
    contract
  </button>
    </div>


<br />
<br />
<br />
<p className="text-[#cbc4bc] text-l font-medium text-center"> 
         <br /> 
         Join the Mantizar community and get your hands on one of these exclusive tokens that are not only a digital asset but also a highly coveted collectible in the world of blockchain technology. Get your Mantizar token today and be a part of the innovative journey with our revolutionary platform!
        </p>
        <br />  

    </div>
    
        </div>

      </div>

    
 
  )
}
  
   {/*  <div> 
      <button
        onClick={handleOpenOceanClick}
        style={{
          backgroundColor: "#49B6FF",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
         ver nft
      </button>
    </div>
    
  ///////////////////////////////////////////////////////
     <button
            className="  rounded-sm bg-gradient px-5 py-3 text-lg font-medium text-white transition duration-200 hover:shadow-xl hover:shadow-[#6025F5]/50  shadow-lg 
            shadow-[#e32970]"
            onClick={onMintNFT}  >
          <i class="fas fa-heart"></i> Mint NFTs
          </button>
      */}

  
    

export default Hero
