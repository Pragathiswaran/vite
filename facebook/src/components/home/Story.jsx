import React from 'react'

const Story = () => {
  return (
    <>
        <div className="flex flex-col w-32 h-60 shadow-xl rounded-xl dark:bg-white-0 mr-2">
                <img
                className="w-full h-4/5 rounded-t-xl"
                src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                alt="Card Image"
                />
                <div className="p-4">
                <p className="mt-1 text-slate-950 text-center">create</p>
                </div>
            </div>
    </>
  )
}

export default Story