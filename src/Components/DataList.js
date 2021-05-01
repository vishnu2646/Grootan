import React from 'react'
import { Link } from 'react-router-dom'

const DataList = (props) => {
    return (
        <div>
            <div className="container">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
                    {props.datas.map((data,index)=> (
                        <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500" key={index}>
                            <Link to={`/datalist/${data.id}`}>
                                <div className="flex flex-col justify-center">
                                    <p className="text-gray-900 dark:text-gray-300 font-semibold">Name: {data.Name}</p>
                                    <p className="text-black dark:text-gray-100 text-justify font-semibold">Phone: {data.phone}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default DataList