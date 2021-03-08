import { PageHeader } from 'antd';
import React from 'react';

import './index.css';
import { IHeader } from './Header.interface';

const Header: React.FC<IHeader> = ({ title, subtitle = '', onBack = true}: IHeader) => {
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
