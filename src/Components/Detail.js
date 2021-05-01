import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams();
    const [user,setUser] = useState({})
    const idPrev = parseInt(id)-1;
    const idNext = parseInt(id)+1;
    useEffect(() => {
        fetch(`https://608ca9629f42b20017c3e2e2.mockapi.io/user/${id}`).then(res=>res.json()).then(data=>setUser(data))
    }, [id])
    return (
        <div>
            <div>
            {user !== undefined ?
                <div>
                    <div className="shadow-md border-3 p-10 text-center rounded">
                        <h3 className="text-2xl text-blue-900 font-bold mb-4">Details</h3>
                        <div className="text-2xl mb-4">
                            <span className="font-bold"><h5>Name: {user.Name}</h5></span>
                            <span className="font-bold">Age:{user.age}</span>
                            <br/>
                            <span className="font-bold">DOB:{user.dob}</span>
                            <br/>
                            <span className="font-bold">Address:{user.address}</span>
                            <br/>
                            <span className="font-bold">Phone:{user.phone}</span>
                            <br/>
                            <span className="font-bold">City:{user.city}</span>
                        </div>
                        <Link to={`/datalist/${idPrev}`} className="bg-blue-500 hover:bg-blue-700 text-white mt-5 font-bold py-2 px-4 rounded" style={{marginLeft:"4%"}}>Previous</Link>
                        <Link to={`/datalist/${idNext}`} className="bg-blue-500 hover:bg-blue-700 text-white mt-5 font-bold py-2 px-4 rounded" style={{marginLeft:"1%"}}>Next</Link>
                    </div>
                </div>
                :<h6>Loading</h6>}
            </div>
           
        </div>
       
    )
}
export default Detail