import React, { useState } from 'react';
import FAQ from './FAQ';
import "./FAQs.css";

function App() {
    const [faqs, setfaqs] = useState([
        {
            id: 1,
            question: 'How many people should a Team be?',
            answer: 'A team should be between 1-4 people',
        },
        {
            id: 2,
            question: 'What are the costs of participating?',
            answer: 'Free of cost',
        },
    ])

    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };

    return (
        <div id="faq-comp" className="faqs" >
            <h2 class="display-5">Frequently Asked Questions</h2>
            {faqs.map((question, index) =>
                <FAQ key={question.id} index={question.id} onToggle={() => handleToggle(index)}
                    active={clicked === index} {...question} />
            )}
        </div>
    )
}
export default App;
