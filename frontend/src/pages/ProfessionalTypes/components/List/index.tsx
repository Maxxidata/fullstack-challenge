import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { ListInterface } from '../../../../shared/Interfaces/List.interface';

const List: React.FC<ListInterface> = ({ title = 'Profissões' }: ListInterface) => {
  return (
    <Card
      title={title}
      bordered={false}
      extra={<Link to="/professionals-type-add"><PlusOutlined /></Link>}
    >
      <div className='professional-type-list-container'>
        Dev
        <div className='professional-type-list-actions'>
          <Link to="/professionals-type-edit"><EditOutlined /> </Link>
          <Link to="/professionals--type-delete"><DeleteOutlined /></Link>
        </div>
      </div>
    </Card>
  );
}

export default List;
