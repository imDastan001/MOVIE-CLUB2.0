const menuShimmer  =()=>{

return(
    <>
             <div className="flex flex-wrap">
             {Array(10).fill("").map((e,index)=> <div key={index*0.6} className="h-52 w-28 bg-black p-3 m-7 rounded-xl bg-gradient-to-r from-gray-700 via-gray-600 to-gray-400 animate-pulse mt-9"></div>)}
            
                </div>
                </>
           )
}
export default menuShimmer;