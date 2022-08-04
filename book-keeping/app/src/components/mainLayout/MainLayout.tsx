import React, { FC, useContext } from "react";
import { Menu, Layout, Statistic } from "antd";
import "./MainLayout.css";
import Icon from "../icon/Icon";
import Logo from "../logo/Logo";
import { renderRoutes } from "react-router-config";
import { ROUTE_CONFIG } from "../../services/router";
import { Link, useLocation } from "react-router-dom";
import LocaleDatePicker from "../localeDatePicker/LocaleDatePicker";
import { Context } from "../provider/Provider";
import { Moment } from "moment";
import { updateMonth } from "../provider/reducer/actions";
import { getSummary } from "../../services/recordHelper";

// Layout 里面包含多个其它组件，我们可以解构出所需要的组件
const { Sider, Content } = Layout;
// Menu 组件包含了很多其它组件，我们也需要通过解构获取需要的组件
const { Item } = Menu;

const MainLayout: FC = () => {
  // 使用 useLocation 获取当前页面的 path 信息
  const { pathname } = useLocation();

  // 获取上层 Provider 所传递的 state 和 dispatch
  const { state, dispatch } = useContext(Context);

  // 使用之前已经定义的方法计算总收入和总支出
  const monthlySummary = getSummary(state.monthlyRecords);

  // 在更改所选月份后更改全局状态
  const onMonthChange = (month: Moment) => {
    console.log('更改日期', month.format('YYYY-MM-DD'));
    dispatch(updateMonth(month));
  };

  return (
    <Layout className="app">
      <Sider className="sider" theme="light" collapsible>
        <Logo />
        <Menu defaultSelectedKeys={[pathname]}>
          <Item key="detail" icon={<Icon icon={"icon-zhuye"} />}>
            <Link to="/">明细</Link>
          </Item>
          <Item key="chart" icon={<Icon icon={"icon-Chart"} />}>
            <Link to="/chart">图表</Link>
          </Item>
        </Menu>
      </Sider>
      <Content className="content">
        <div className={"header"}>
          <Logo size={"large"} />
          <div className={"header-category"}>
            {/* value 默认只能 string 或者 number 类型数据，所以这里我们使用 valueRender 方法来重写其 value 渲染的组件*/}
            <Statistic
              title={"请选择月份"}
              valueRender={() => (
                <LocaleDatePicker
                  value={state.month}
                  onChange={onMonthChange}
                />
              )}
            />
            <Statistic title={"总收入"} value={monthlySummary.totalIncome} />
            <Statistic
              title={"总支出"}
              value={monthlySummary.totalExpenditure}
            />
          </div>
        </div>
        <div className="body">{renderRoutes(ROUTE_CONFIG)}</div>
      </Content>
    </Layout>
  );
};

export default MainLayout;
