import React, {useState} from 'react';
import {questions} from './api';
import './FAQs.css';
import MyAccordion from './MyAccordion';

const FAQ=() =>{
    const [faqs, setfaqs] = useState(questions);

   return (
        <>
            {
                faqs.map((curElem)=> {
                    const {id}=curElem;
                    return <MyAccordion key={id} {...curElem}/>
                })
             }
        </>
    )
}
export default FAQs;
