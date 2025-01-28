import React, { useEffect, useState } from 'react'
import ShortBoxList from '../../Components/ShortBoxList/ShortBoxList'
import { ServiceData } from './ServicesData'
import { Link, useParams, NavLink } from 'react-router-dom'

const ServicesCategotries = () => {
  // const [paramsString, setParamsString] = useState('services');
  

  // const params = useParams();
  // const [selectedCategory, setSelectedCategory] = useState([]);

  // useEffect(() => {
  //   const product = ServiceData.filter((item) => item.category === params.id);
  //   setSelectedCategory(product);
  // }, [params.id,params]);


  return (
    <>
    <ShortBoxList 
    heading={
        <>
        Discover Our Top Rated Courses
        </>
    }
    headpara={
        <>
        <p>Join our comprehensive education program designed to nurture both knowledge and spiritual growth at your own pace.</p>
        </>
    }
    >
            <div style={{
                display:'flex',
                flexWrap:'wrap',
                width:'100%',
                alignItems:'center',
                justifyContent:'center',
                gap:'1rem'
                }}>
            {ServiceData.map((item, index) => (
                         <div
                         key={index}
                         style={{
                            width: '25rem',
                            borderRadius: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            backgroundColor: 'var(--c1)',
                            textAlign: 'center',                
                            alignItems: 'center',
                            transition: '.3s',
                            boxShadow: '.1rem .1rem 1rem gray',
                            color:'var(--c3)',
                            fontSize:'1.5rem'
                         }}
                       >
                         <div className="card_img">
                           <img src={item.image} alt="" />
                         </div>
                         <p>{item.title}</p>
                         <NavLink to={`/service/${item.id}`}>
                          <button className="button3">Read More</button>
                         </NavLink>
                         {/* <a className="button3" href={`/${paramsString}/${item.id}`}>Read More</a> */}
                       </div>
            ))}
            </div>
    </ShortBoxList>
    </>
  )
}

export default ServicesCategotries