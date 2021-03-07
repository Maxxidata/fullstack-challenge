import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { ListInterface } from '../../../../shared/Interfaces/List.interface';

const List: React.FC<ListInterface> = ({ title = 'Profissionais' }: ListInterface) => {
  return (
    <Card
      title={title}
      bordered={false}
      extra={<Link to="/professionals-add"><PlusOutlined /></Link>}
    >
      <div className='professional-list-container'>
        Jonh
        <div className='professional-list-actions'>
          <Link to="/professionals-edit"><EditOutlined /></Link>
          <Link to="/professionals-delete"><DeleteOutlined /></Link>
        </div>
      </div>
    </Card>
  );
}

export default List;
