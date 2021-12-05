import React,{useState} from 'react';
import FAQ from './FAQ';
import "./FAQs.css";

function App(){
const [faqs,setfaqs] = useState([
    {
        question: 'How many people should a Team be?',
        answer:'A team should be between 2-4 people',
        open:false
    },
    {
        question: 'What are the costs of participating?',
        answer:'Free of cost',
        open:false
    },
])

const toggleFAQ=index=>{
    setfaqs(faqs.map((faq,i)=>{
        if (i===index){
            faq.open=!faq.open
        } else{
            faq.open=false;
        }

        return faq;
    }))
}
    return (
       <div id="faq-comp" className="faqs" >
            {faqs.map((faq,i)=>(
                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
            ))}
       </div>
    )
}
export default App;
