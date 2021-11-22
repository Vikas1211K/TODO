import React, {useState} from 'react'
import todo from "../images/todo.png";

const Todo = () => {

    const [inputdata, setInputData] = useState('');
    const [item, setItems] = useState([]);
    
    const addItem = () => {
        if(inputdata){
            setItems([...item,inputdata]); 
            setInputData('');
        }
    }

    const delItem = (id) => {
        const updatedItem = item.filter((elem, ind) =>{
            return ind != id;
        });

        setItems(updatedItem);
    }

    const delAll =() => {
        setItems([]);
    }

    return (
        <>
            <div className="main-div App">
                <div className="child-div">
                    <figure>
                        <img className="App-logo" src={todo} alt="todologo"/>
                        <figcaption>ADD YOUR LIST HERE </figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="Add Items..."
                        value={inputdata}
                        onChange={(e) => setInputData(e.target.value)}/>
                        <i className="fa fa-plus add-btn " title="Add Item" onClick={addItem}></i>
                    </div>

                    <div className="showItem">

                        {
                            item.map((elem,ind) => {
                                return(
                                    <div className="EItem" key={ind}>
                                    <h5>{elem}<i className="far fa-trash-alt add-btn " title="Delete Item" onClick={() => delItem(ind)}></i> </h5>
                                    
                                </div>
                                )
                            })
                        }
                        
                    </div>
                    <div className="showItem">
                        <button className="btn btn-warning" onClick={delAll}>Remove All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo

