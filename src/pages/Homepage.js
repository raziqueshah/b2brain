import React, { useEffect, useState } from 'react';
import './Homepage.css';
import searchs from '../images/search.png';
import close from '../images/times.png'
import axios from "axios";
import logo from '../images/Logo.png'

const Homepage = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState('');
    const [back, setBack] = useState();
    
    const handleChange = (e)=>{
      const getSearch = e.target.value;
      

      if(getSearch.length > 0){
        const searchdata = data.filter( (item)=> item.company.toLowerCase().includes(getSearch));
        setData(searchdata);
      }
      else{
        setData(filter);
      }
      setSearch(getSearch);
    }

    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://staging.staging.b2brain.com/search/autocomplete_org_all/',
            params: {q: 'get'}
            };

            axios.request(options).then(function (response) {
            console.log(response.data);
            setData(response.data);
            setFilter(response.data);
            }).catch(function (error) {
            console.error(error);
            });
    },[])


  return (
    <div>
      { back ? <div>{<Homepage />}</div> : <div>
      <div className='homepage'>
      <div className='header'>
        <div className='search-wrapper'>
        <img src={search ? close : searchs} alt="search" className={search ? 'search-icon' : 'search-icon'} onClick={()=>setBack(!back)} />
        <input type="search" name="Search" value={search} id="search" className='search' placeholder='Search by account name or website' onChange={handleChange} />
        </div>
        <div className='bell-wrapper'>
            <div className='bell-icon'></div>
            <div className='notify'></div>
        </div>
        <div className='harrow'></div>
    </div>

      {search ? <div className='top-head'><span className='title'>Similar accounts</span><span className='side-head'>QuickActions</span><p className='track'>Track new account</p><p className='bulk'>Bulk track accounts</p><p className='manage'>Manage accounts</p></div> : <div></div>}
      { search ? data.map((item, index) => (
                <tbody key={index}>
                    <tr className='t-row'>
                        <td><img src={logo} alt="logo" className='image' /></td>
                        <td className='company-name'><span><p className='com-title'>{item.company}</p><p className='com-web'>{item.website}</p></span></td>
                        <td className='btn btn-track'><div className='butn' onClick={()=>{
                           setTimeout(()=>{}, 3000);
                        }} >Track</div></td>
                    </tr>
                </tbody>
            )) 
        :
      <>
        <div className='home-image'></div>
        <div className='home-image2'></div>
        <div className='home-image3'></div>
      </>
      }
      </div>
      </div>}
    </div>
  )
}

export default Homepage
