import React from 'react';
import Card from './Card';

const CardList = () => {
    return (
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:px-20'>
            <Card imgsrc="https://cdn.ssstutter.com/products/4ovtAAN1yPEEoriO/072023/1689232792101.webp"/>
            <Card imgsrc="https://cdn.ssstutter.com/products/4ovtAAN1yPEEoriO/072023/1689230153649.webp"/>
            <Card imgsrc="https://cdn.ssstutter.com/products/4ovtAAN1yPEEoriO/072023/1689228113494.webp"/>
            <Card imgsrc="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/082023/1691055284213.webp"/>
            <Card imgsrc="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/072023/1689848071819.webp"/>
            <Card imgsrc="https://cdn.ssstutter.com/products/4ovtAAN1yPEEoriO/072023/1689229855465.webp"/>
            <Card imgsrc="https://cdn.ssstutter.com/products/66z6ao28eNQDG839/062023/1687150756941.webp"/>
            <Card imgsrc="https://cdn.ssstutter.com/products/4ovtAAN1yPEEoriO/072023/1689236239598.webp"/>
            <Card imgsrc="https://cdn.ssstutter.com/products/po0EUQXd52Ks47dT/072023/1689846099742.webp"/>
        </div>
    );
};

export default CardList;