import React, { useEffect, useState } from 'react'
import ShortBoxList from '../../Components/ShortBoxList/ShortBoxList'
import features from './additionalLinksData'
import { useParams } from 'react-router-dom';
import Error from '../../Components/Error/Error'

const AdditionalLinks = () => {
    const params = useParams();
    const [additionalLinkFeature, setAdditionalLinkFeature] = useState([]);
  
    useEffect(() => {
      const feature = features.find((item) => item.id == params.id);
  
      setAdditionalLinkFeature(feature);
    }, [params.id]);
  return (

    <>
      {!additionalLinkFeature ? (
        <Error/>
      ) : (

    <>
    <ShortBoxList
    heading={additionalLinkFeature.heading}
    headpara={additionalLinkFeature.headpara}
    >
    <ul style={{
        width:'100%', 
        rowGap:'1rem', 
        display:'flex', 
        flexDirection:'column',
        alignItems:'center',
        }}>
    {Object.entries(additionalLinkFeature).map(([key, value], index) => {
        if (key.startsWith('title')) {
            const descriptionKey = `description${key.replace('title', '')}`;
            return(
                <li key={index} style={{
                    width:'90%', 
                    textAlign:'left', 
                    transform: 'scale(1)',
                    boxShadow:'none',
                    backgroundColor:'var(--c3)'

                }}>    
                    <h3 style={{
                        width:'100%', 
                        // textAlign:'left', 
                        color:'var(--c5)',

                    }}>{key[key.length-1]}.{value}</h3>
                    <p style={{
                      width:'100%', 
                      color:'var(--c2)',
                      fontSize:'clamp(.9rem, 2vw, 1.4rem)'
                    }}>{additionalLinkFeature[descriptionKey]}</p>
                </li>
            )
        }
        return null;
          })}
    </ul>
    </ShortBoxList>
    </>
          )}
    </>
  )
}

export default AdditionalLinks