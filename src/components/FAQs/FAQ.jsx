import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import "./FAQs.css";

const FAQ = ({ index, question, answer, active, onToggle }) => {
    return (
        <article className='question'>
            <Row className='col'>
                <Col lg={6} className='faq-col-left'>
                    <p className='faq-question lead'>{question}</p>
                    {active && <p>{answer}</p>}
                </Col>
                <Col lg={6} className='faq-col-right'>
                    <p className='faq-btn' onClick={onToggle}>
                        {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </p>
                </Col>
            </Row>
        </article>
    )
}

export default FAQ;
