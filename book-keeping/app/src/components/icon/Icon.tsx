import React, { FC } from "react";
import classNames from "classnames";
import "./Icon.css";
import { Button } from "antd";

interface IconProps {
  icon: string; // icon 名字
  className?: string; // 提供该字段用于后续定制化 icon 样式
}

const Icon: FC<IconProps> = ({ icon, className }) => {
  // 我们使用 iconfont 的 svg 形式，这样就能保留图标已有的配色信息
  return (
    <svg className={classNames("icon", className)}>
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};

export const IconButton: FC<
  IconProps & { onClick?: React.MouseEventHandler<HTMLElement> }
> = ({ icon, className, onClick }) => {
  return (
    <Button
      shape="circle"
      className={className}
      icon={<Icon icon={`${icon}`} />}
      onClick={onClick}
    />
  );
};

export default Icon;
