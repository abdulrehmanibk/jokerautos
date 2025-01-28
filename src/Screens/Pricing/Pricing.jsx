import React, { useState } from 'react'
import ShortBoxList from '../../Components/ShortBoxList/ShortBoxList'
import { Link } from 'react-router-dom'
import { PricingData } from './PricingData'

const Pricing = () => {
  
  const [currencyStates, setCurrencyStates] = useState(
    PricingData.map(() => 'USD') // Default currency for each item is 'USD'
  );
  const paymentImages = [
    '/images/qot-ace-money.webp',
    '/images/qot-jcb.webp',
    '/images/qot-mastercard.webp',
    '/images/qot-moneygram.webp',
    '/images/qot-paypal.webp',
    '/images/qot-remitly.webp',
    '/images/qot-ria.webp',
    '/images/qot-visa.webp',
    '/images/qot-western-union.webp',
  ]
  const exchangeRates = {
    USD: 1,
    CAD: 1.36,
    AUD: 1.44,
    GBP: 0.75,
    EUR: 0.85,
  };

  // Handle currency change for an individual item
  const handleCurrencyChange = (index, newCurrency) => {
    const newCurrencyStates = [...currencyStates];
    newCurrencyStates[index] = newCurrency;
    setCurrencyStates(newCurrencyStates);
  };



  return (
    <>
    <ShortBoxList
    heading={
        <>
        <span style={{color:'var(--c4)'}}>Fee</span> and <span style={{color:'var(--c4)'}}>Schedule</span> Plan
        </>
    }
    headpara={'We offer flexible and affordable fee plans to accommodate students from all over the world. Our fee structure is designed to provide high-quality Modern education at competitive prices.'}
    >
        {PricingData.map((item, index) => (
            <li key={index} style={{textAlign:'left', backgroundColor:'var(--c1)', color:'var(--c3)'}}>
                <h4>{item.title}</h4>
                <p>{item.details}</p>
                <div style={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center'}}>
                <select 
                  value={currencyStates[index]}
                  onChange={(e) => handleCurrencyChange(index, e.target.value)}
                >
                  <option value="USD">USD</option>
                  <option value="CAD">CAD</option>
                  <option value="AUD">AUD</option>
                  <option value="GBP">GBP</option>
                  <option value="EUR">EUR</option>
                </select>
                    <p style={{fontSize:'3rem', fontWeight:'bold'}}>
                    {(item.price * exchangeRates[currencyStates[index]]).toFixed(2)}
                    </p>
                </div>
                <Link className='button2' to={'/register'} style={{width:'100%'}}>Start Free Trial</Link>
            </li>
        ))}
    </ShortBoxList>

    <ShortBoxList
    heading={'Customized Plans'}
    headpara={'We also offer customized plans based on your specific needs and preferences. Please contact us to discuss and arrange a personalized fee plan that suits your requirements. '}
        styles={{
            color:'var(--c4)',
        }}
    >
        <li  style={{height:'10rem', backgroundColor:'var(--c5)',color:'var(--c3)'}} >
            <h4>Low-Income Families</h4>
            <p>We offer a 10% discount for low-income families.</p>
        </li>        
        <li style={{height:'10rem', backgroundColor:'var(--c5)', color:'var(--c3)'}}>
            <h4>Referral Discount</h4>
            <p>Refer a friend and receive a 10% discount on your next month’s fee.</p>
        </li>
    </ShortBoxList>

    <ShortBoxList
    heading={'Payment Methods'}
    headpara={'We accept worldwide payment methods.'}
    >
      {/* <ul>
        <li>
        </li>
        </ul> */}
        {paymentImages.map((item, index) => (
          <>
        <img src={item} alt="" />
          </>
        ))}
    </ShortBoxList>
    </>
  )
}

export default Pricing;