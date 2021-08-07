import { Helmet } from 'react-helmet';

import React from 'react';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='Keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to Company Name',
  Keywords: 'Welcome to Company Name',
  description: ' We sell the best stuff for cheap',
};

export default Meta;
