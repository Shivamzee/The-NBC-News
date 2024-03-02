

type newsProp ={
    gnews:any
}

const Rightnav = (props:newsProp) => {
  return (
    <div className='w-60 ml-2'>
     {props.gnews.map((data:any)=>{
        return <>
             <h1 className="font-bold mt-4">{data.title}</h1>
             <hr className="mt-3"/>
        </>
     })}
    </div>
  )
}

export default Rightnav
