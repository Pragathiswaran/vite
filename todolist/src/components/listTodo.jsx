import {React, useState} from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';

const listTodo = ({todolist,editList,deleteList})=>{

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [style,setStyle] =  useState('no-underline')
    const [styleIndex,setStyleIndex] = useState('');

    const changeStyle = (index)=>{
        setStyleIndex(index)
        if(style === 'no-underline'){
            setStyle('line-through decoration-red-600')
        }else{
            setStyle('no-underline')
        }
    }
    return(
        <>
            {
            todolist.map((item, index)=>{
                return(
                    <>
                        <li key={index} className="flex justify-between bg-slate-600 mt-3 ">
                            <div className="flex justify-around w-3/4">
                                <div className="mt-auto mb-auto w-2">
                                    <Checkbox {...label} size="small" onClick={()=>{changeStyle(index)}}/>
                                </div>
                                <div className="mt-auto mb-auto w-4/5">
                                    <span className={`mt-auto mb-auto text-wrap ${index === styleIndex ? style : ''}`}>{item}</span>
                                </div>
                            </div>
                            <div className="flex justify-end mr-2 gap-2 mt-auto mb-auto">
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <IconButton aria-label="edit" color='success' onClick={()=>{editList(index,item)}}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" color='error' onClick={()=>{deleteList(index)}} >
                                        <DeleteIcon />
                                    </IconButton>
                                </Stack>
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