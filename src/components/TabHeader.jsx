import React, { Component } from "react";

class TabHeader extends Component {
  headerClicked = () => {
    this.props.onHeaderClicked(this.props.activeIndex);
  };

  render() {
    const { children, active } = this.props;
    return <div className={active ? 'active': ''} onClick={this.headerClicked}>{children}</div>;
  }
}
export default TabHeader;
