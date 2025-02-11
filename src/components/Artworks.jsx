import ethereum from '../assets/ethereum.png'
import { useEffect, useState } from 'react'

const Artworks = ({ artworks }) => {
  const [end, setEnd] = useState(4)
  const [count] = useState(4)

  const [nfts, setNfts] = useState([])

  const getNfts = () => {
    return artworks.slice(0, end)
  }

  useEffect(() => {
    setNfts(getNfts())
  }, [artworks, end])

  return (
    <div className="bg-content-section py-10">
      <div className="w-5/5 mx-auto">
        <h4 className="text-gradient align-top text-center text-4xl">Collection Porks</h4>

        <div className="flex flex-wrap justify-center items-center mt-4">
          {nfts.map((nft, i) => (
            <a
              key={i}
              href={nft.url}
              target="_blank"
              className="relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-64 h-64 object-contain 
                bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
              style={{ backgroundImage: 'url(' + nft.imageURL + ')' }}
            >
              <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>{`RocketPork NFT #${nft.id}`}</p>
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={ethereum}
                    alt={`rocket pork NFT collection #` + nft.id}
                  />
                 
                </div>
              </div>
            </a>
          ))}
        </div>

        {artworks.length > 0 && artworks.length > nfts.length ? (
          <div className="flex flex-row justify-center items-center mx-auto mt-4">
            <button
              className="bg-transparent hover:bg-transparent text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              onClick={() => setEnd(end + count)}
            >
              Load more
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Artworks
