import { Layout } from "antd";
import AppRouter from "./router/AppRouter";

const { Header, Content } = Layout;

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "#fff", fontSize: 20 }}>Employee Management</Header>
      <Content style={{ padding: 24 }}>
        <AppRouter />
      </Content>
    </Layout>
  );
}
