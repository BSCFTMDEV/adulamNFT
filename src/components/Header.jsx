import Logo from '../assets/Logo.png'
import izumi from '../assets/izumi.png'
import manta from '../assets/manta.png'
import { connectWallet } from '../Adulam'
import { truncate, useGlobalState } from '../store'


const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    
    <nav >
      <div className="flex flex-row justify-between  items-center md:flex-[0.5] flex-initial">
       
      </div>
      <img src={manta} alt="logo" className="w-12" />
  <img src={Logo} alt="logo" className="w-12" />
  <img src={izumi} alt="logo" className="w-12" />
      <div class="buttons-container  "> 
  
  <button class=" button "
 onClick={() => window.location.href = "https://www.orbiter.finance/?source=Arbitrum&dest=Manta&token=ETH"} >
  Bridge
  </button>
  <button class=" button "
 onClick={() => window.location.href = "https://dexscreener.com/manta/0x0c5fddfc38b5b090bea39929cb16240cea60ce44"} >
    Chart
  </button>


  
</div>


      
      {connectedAccount ? (
        <button
          className="rounded-l bg-gradient px-5 py-3 text-base font-medium text-[#393d3f] transition duration-200 hover:shadow-xl hover:shadow-[#6025F5]/50 shadow-lg 
          ">
          {truncate(connectedAccount, 3, 4, 9)}
        </button>
      ) : (
        <button
          className="rounded-l bg-gradient px-5 py-3 text-base font-medium text-[#393d3f] transition duration-200 hover:shadow-xl hover:shadow-[#6025F5]/50 shadow-lg 
          shadow-[#e32970] "
          onClick={connectWallet}
        >
          Connect
        </button>

      
      )}
      </nav>
    
  )
}

export default Header
