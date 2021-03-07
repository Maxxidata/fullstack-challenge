import { PageHeader } from 'antd';
import React from 'react';

import './index.css';
import { HeaderInterface } from './Header.interface';

const Header: React.FC<HeaderInterface> = ({ title, subtitle = '', onBack = true}: HeaderInterface) => {
  return (
    <>
      { onBack ?
        <PageHeader
          className="header"
          onBack={() => window.history.back()}
          title={title}
          subTitle={subtitle}
        />
        : <PageHeader
          className="header"
          title={title}
          subTitle={subtitle}
        />
      }
    </>
  );
}

export default Header;
