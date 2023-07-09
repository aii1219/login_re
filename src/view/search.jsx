import { Card, Space } from 'antd';
const App = () => (
  <Space direction="vertical" size={16}>
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>search页面</p>
    </Card>
  </Space>
);
export default App;