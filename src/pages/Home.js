import React from 'react';

const Home = () => (
  <div>
    <h1
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem',
        margin: '5rem auto 3rem auto',
        fontSize: '4rem',
        fontWeight: 'bold',
      }}
    >
      Welcome to our page!

    </h1>

    <p
      style={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '1rem auto',
        fontSize: '2rem',
        width: '70%',
        fontStyle: 'italic',
      }}
    >
      Mathematicians like to talk about the beauty of mathematics.
      This beauty is seen in the harmony, patterns, and structures
      of numbers and forms – classical ideals of balance and symmetry.
      While experienced mathematicians can envision tangible representations
      of notations made on a page, mathematical beauty is not so well accessed
      by the non-mathematician.
    </p>

    <p
      style={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '3rem auto',
        fontSize: '2rem',
        width: '70%',
        fontStyle: 'italic',
      }}
    >
      The non-mathematician often appreciates the beauty of mathematics without
      realizing it. Have you ever felt a sense of awe while admiring a flower or
      a tree? Or been deeply attracted to a piece of art? Favored a specific type
      of architecture? The beauty that attracts your eye is made possible by and
      can be explained by mathematics. Trees, paintings, and buildings are made up
      of mathematical structures that please the eye. The Greeks believed there to be
      three elements of beauty: symmetry, proportion, and harmony. The perfect balance
      of these elements created the Golden Mean, which was found repeatedly in nature
      and was aspired to in art and architecture.
    </p>
  </div>
);

export default Home;
