function Home() {
  return (
  <div>
  {/*o incio*/}
  
  

<div className="flex w-full p-2 border">
  <div className="flex-none w-44 relative">
    <img src="https://fakeimg.pl/250x100/" alt="" classNameName="absolute inset-0 w-full h-full object-cover" />
  </div>
  
  <form className="flex-auto py-7 px-8">
    <div className="flex flex-wrap items-baseline">
      <h1 className="w-full flex-none text-3xl text-black mb-1.5">
        Fancy Suit Jacket
      </h1>
      <div className="text-lg leading-6 text-black">
        R$   600.00
      </div>
      <div className="text-sm text-gray-500 ml-3">
        In stock
      </div>
    </div>
  
    
    
    <div className="flex space-x-3 mb-3 text-sm font-semibold uppercase">
      <div className="flex-auto flex space-x-3">
        <button className="w-full flex items-center justify-center bg-black text-white" type="submit">Buy now</button>
      
      </div>
      <button className="flex-none flex items-center justify-center w-12 h-12 text-gray-900 border border-gray-200" type="button" aria-label="like">
        <svg width="20" height="20" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
  
  </form>
</div>

  
  
  </div>
  
    )
};
export default Home;