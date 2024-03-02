
type newsProp ={
    gnews:any
}

const Leftnav = (props:newsProp) => {
  console.log(props)
  return (
    <div className="w-9/12">
     {props.gnews.map((data:any)=>{
        return <>
            <a href={data.url}>
             <div className="flex mt-4 ml-3 mr-3">
              <div className="pr-5">
                <h1 className="font-bold text-3xl">{data.title}</h1>
                <h1 className="font-bold mt-3 ">{data.author}</h1>
                <h1 className="">{data.description}</h1>
              </div>

              <img className="w-96 h-60" src= {!data.urlToImage ? 'https://assets.entrepreneur.com/content/3x2/2000/20180830200628-GettyImages-1004136768-crop.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380' :data.urlToImage}  />
             </div>
              </a>
             <hr className="mt-5" />
        </>
     })}
    </div>
  )
}

export default Leftnav
