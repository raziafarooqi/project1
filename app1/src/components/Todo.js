import React,{useEffect, useState}from 'react'
import './Todo.css';
import photo from './images/img.png';
function Todo() {
    const[inputData,setInputData]=useState('');
    const[toggle,setToggle]=useState(true);
    const[isEdit,setIsEdit]=useState(null)
   const getLocalStorageItems=()=>{
        const list=localStorage.getItem('list');
        if(list)
        {
            return JSON.parse(localStorage.getItem('list'))
        }
        else
        {
            return []
        }
    }
    const[items,setItems]=useState(getLocalStorageItems());
     const removeAll=()=>{
        setItems([])
     }
    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(items))
            },[items]
            )
    const deleteItem=(id)=>{
       const temp= items.filter((elem)=>{
            return(elem.id!==id?elem:'')
        })
        setItems(temp)
        
    }
    const editItem=(id)=>{
      
    // let newEditItem=items.find((elem)=>{return elem.id===id })
    // setInputData(newEditItem.name);
    // setToggle(!toggle);
    // setIsEdit(id)
    let tempoo=items.find((elem)=>{return elem.id===id});
    setInputData(tempoo.name);
    setToggle(!toggle);
    setIsEdit(id)
    }
    const addItem=(e)=>{
        const allInputData={id:new Date().getTime().toString(),name:inputData}
        if(!inputData){}

    else if(inputData.trim()!=='' && toggle){
        
setItems([...items,allInputData]);
setInputData('')
    }
    else{
setItems(items.map((elem)=>{if(elem.id===isEdit) {return {elem,name:inputData}}
return elem;
}
//setToggle(!toggle)
))
setInputData('');
setToggle(!toggle);
setIsEdit(null)
    }
}
  return (
    <div>
      <h1>Todo list in React</h1>
      <div className='main-div'>
        <div className='child-div'>
<figure>
<img src={photo} alt="image" width="100"/>
<figcaption>Add a todo list</figcaption>
</figure>
        </div>
        <div className='addItems'>
<input type="text"  placeholder=" add task..." value={inputData} onChange={(e)=>{setInputData(e.target.value)}}/>

{toggle?<i className="fa-solid fa-plus" title="add Items" onClick={addItem}></i>:
<i className="fa-solid fa-edit" title="update Item" onClick={addItem}></i>
}
        </div>
        <div className='showItems'>
            {
                items.map((elem)=>{
      return(<div className='eachItem' key={elem.id}>
            <h4>{elem.name}</h4>
            <i className="fa-solid fa-trash " title="delete Items" onClick={()=>deleteItem(elem.id)}></i>
            <i className="fa-solid fa-edit " title="edit Items" onClick={()=>editItem(elem.id)}></i>
            
        </div>  
      ) 
})
            }
         
        </div>
        <div className='showItems'>
         <button type="button" className='button1' onClick={()=>{removeAll()}}>RemoveAll</button>
        </div>
</div>
    </div>
  )
}

export default Todo
