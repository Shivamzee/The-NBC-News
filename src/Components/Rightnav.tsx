

type newsProp ={
    gnews:any
}

const Rightnav = (props:newsProp) => {
  return (
    <div className='w-60 ml-5'>
     {props.gnews.map((data:any)=>{
        return <>
         <a href={data.url}>
          <ul className="list-disc marker:text-blue-600 mt-5">
            <li className="font-bold">{data.title}</li>
          </ul>
         </a>

             
             <hr className="mt-5"/>
        </>
     })}
    </div>
  )
}

export default Rightnav
