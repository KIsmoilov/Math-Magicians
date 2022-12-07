import React from 'react';

const Quote = () => (
  <div className="quote">

    <h1
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem',
        margin: '5rem auto',
        fontSize: '4rem',
        fontWeight: 'bold',
      }}
    >
      Math Quote

    </h1>

    <p
      style={{
        fontSize: '2rem',
        textAlign: 'center',
        lineHeight: '1.6',
        padding: '2rem',
        background: 'rgb(72, 154, 92)',
        color: '#fff',
        margin: '5rem auto',
        width: '65%',
        borderRadius: '5rem',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0 30px 90px',
        fontStyle: 'italic',
      }}
    >
      Mathematics as an expression of the human mind
      reflects the active will, the contemplative reason,
      and the desire for aesthetic perfection.
      Its basic elements are logic and intuition,
      analysis and construction, generality and individuality.
      <br />
      — Richard Courant, German-American mathematician.
    </p>
  </div>
);

export default Quote;
