import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
import {
  UserOutlined,
  HomeOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

class TabbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.location.pathname,
      hidden: false,
      fullScreen: false,
    };
  }
  render() {
    const { children } = this.props;
    const pathname = children.props;
    return (
      <div className="flex h-full justify-between flex-col">
        {children}
        <div className="footer order-last">
          <TabBar>
            {Config.map((item) => (
              <TabBar.Item
                icon={item.icon}
                key={item.link}
                selectedIcon={item.icon}
                title={item.title}
                selected={this.state.selectedTab === item.link}
                onPress={(e) => {
                  this.setState({
                    selectedTab: item.link,
                  });
                  this.props.history.push(item.link);
                }}
              ></TabBar.Item>
            ))}
          </TabBar>
        </div>
      </div>
    );
  }
}

const Config = [
  {
    title: "首页",
    link: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "列表",
    link: "/list",
    icon: <ContainerOutlined />,
  },
  {
    title: "我的",
    link: "/user",
    icon: <UserOutlined />,
  },
];

export default withRouter(TabbarContainer);
