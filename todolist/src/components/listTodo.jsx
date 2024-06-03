const listTodo = ({todolist,editList,deleteList})=>{
    return(
        <>
            {
            todolist.map((item, index)=>{
                return(
                    <>
                        <li key={index} className="flex justify-between bg-white mt-3 ">
                            <div className="flex justify-around w-3/4">
                                <div className="mt-auto mb-auto w-1">
                                    <input type='checkbox' className="checkbox checkbox-accent border-2" />
                                </div>
                                <div className="mt-auto mb-auto w-4/5">
                                <span className="mt-auto mb-auto text-wrap">{item}</span>
                                </div>
                            </div>
                                <div className="flex justify-end w-1/4 mr-2 gap-2 mt-auto mb-auto">
                                <button onClick={()=>{editList(index,item)}} className="btn btn-accent max-w-xs max-h-3">edit</button>
                                <button onClick={()=>{deleteList(index)}} className="btn btn-accent max-w-xs">del</button>
                            </div>
                        </li>
                    </>
                )
            })
            }
        </>
    )
}

export default listTodo;