import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Spiner = () => {
  return (
    <div className='spinerDiv DFlex justify-content-center'>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    </div>
  );
};

export default Spiner;
