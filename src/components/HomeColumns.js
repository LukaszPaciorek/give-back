import React from 'react';


function HomeColumns() {
  return (
    <section className='columns'>

        <div className='three__columns__container'>
          <div className="column">
            <p className="column__number">500</p>
            <p className="column__header">ODDANYCH WORKÓW</p>
            <p className="column__content">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim</p>
          </div>

          <div className="column">
            <p className="column__number">50</p>
            <p className="column__header">WSPARTYCH ORGANIZACJI</p>
            <p className="column__content">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim</p>
          </div>

          <div className="column">
            <p className="column__number">20</p>
            <p className="column__header">ZORGANIZOWANYCH ZBIÓREK</p>
            <p className="column__content">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim</p>
          </div>
        </div>

    </section>
  );
}

export { HomeColumns };
