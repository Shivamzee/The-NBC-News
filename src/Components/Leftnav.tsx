
type newsProp ={
    gnews:any
}

const Leftnav = (props:newsProp) => {
  return (
    <div className="w-9/12">
     {props.gnews.map((data:any)=>{
        return <>
             <h1>{data.author}</h1>
        </>
     })}
    </div>
  )
}

export default Leftnav
