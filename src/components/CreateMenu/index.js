import React from 'react';
import PropTypes from 'prop-types';
import Card from '~/components/Card';

import { Queries } from './styles';

const CreateMenu = ({ container }) => {
  return (
    <Queries>
      <div>
        <hr />
        <h2>{container.title}</h2>
        <img className="search" src={container.image} alt="lupa" />
      </div>
      <div className="cardContainer">
        {container.itens.map(item => (
          <Card
            key={item.title}
            icon={item.icon}
            title={item.title}
            router={item.router}
          />
        ))}
      </div>
    </Queries>
  );
};

export default CreateMenu;

CreateMenu.propTypes = {
  container: PropTypes.objectOf(PropTypes.object, PropTypes.array).isRequired,
};
