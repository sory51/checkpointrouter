import React ,{useState}from 'react';
import data from './Data';
import Rating from'./Rating';
const Search = () => {
    const [filter,setFilter]= useState('');
    const searchText=(event)=>{
        setFilter(event.target.value);
    }
    let dataSearch=data.filter(item=>{
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLocaleLowerCase()))
    });
    return (
       <section className='py-4 container'>
        <div className='row justify-content-center'>
            <div className='col-12 mb-5'>
                <div className='mb-3 col-4 mx-auto text-center'>
                    <label className='form-label h5 mx-2'>Search</label>
                    <input
                    type='text'
                    className='from-control'
                    value={filter}
                    onChange={searchText.bind(this)}
                    />

                </div>

            </div>
            {dataSearch.map((item,index)=>{
                return(
                    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={item.title}>
                         <div className='card p-0 overflow-hidden h-100 shadow'>
                               <img src={item.posterUrl} className="card-img-top img-fluid" alt='tetdtt'/>
                               <div className='card-body'>
          
                                 <h5 className='card-title' >{item.title}</h5>
                                  <p className='card-text text-center'>{item.description}</p>
                                <Rating ratingValue={item.rating} />
                               </div>
                               </div>
                         </div>  

                     )
            })}

        
       
       </div>

       </section>
    );
};

export default Search;