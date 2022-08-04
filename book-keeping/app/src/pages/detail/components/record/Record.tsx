import React, { FC } from "react";
import { getIconByName } from "../../../../services/iconSelector";
// import Icon from "../../../../components/icon/Icon";
import { IconButton } from "../../../../components/icon/Icon";
import "./Record.css";
import { Popconfirm } from "antd";

// 该类型用于声明账单条目是收入还是支出
export enum RecordType {
  Income = "income", // 收入
  Expenditure = "expenditure", // 支出
}

interface RecordProps extends RecordItem {
  onOpenUpdateModal: (id: number) => void;
  onDeleteRecord: (id: number) => void;
}

export interface RecordItem {
  id: number; // 条目 id
  timeStamp: number; // 条目对应的时间戳
  type: RecordType; // 条目对应的收支类型
  name: string; // 条目的名字，还用于 icon 查询
  price: number; // 条目价格
  remark?: string; // 条目备注信息，可选
}

/* 和之前相同 */

interface RecordProps extends RecordItem {}

const Record: FC<RecordProps> = ({
  id,
  type,
  name,
  price,
  remark,
  onOpenUpdateModal,
  onDeleteRecord,
}) => {
  const icon = getIconByName(type, name); // 根据 icon 名字获取 icon 对应的 id

  return (
    <div className={"record"}>
      {/* <Icon className={"record-icon"} icon={icon.icon} /> */}
      <IconButton icon={"icon-bianji"} onClick={() => console.log("update")} />
      <IconButton icon={"icon-shanchu"} onClick={() => console.log("delete")} />
      <div className={"record-name"}>{name}</div>
      <div className={"record-remark"}>{remark}</div>
      <div className={"record-price"}>
        {/* 根据条目类型添加正负号，收入为 +，支出为 - */}
        {type === RecordType.Income ? "+" : "-"}
        {price}
      </div>
      {/* 每个条目的操作按钮组，暂时用 actions 作为 placeholder */}
      <div className={"record-action"}>
        {/* 点击修改按钮时，调用openUpdateModal方法 */}
        <IconButton
          icon={"icon-bianji"}
          onClick={() => onOpenUpdateModal(id)}
        />
        {/* 使用 PopConfirm 确认 */}
        <Popconfirm
          placement="topRight"
          okText="确认"
          cancelText="取消"
          title={"您确认想删除这条记录吗？"}
          onConfirm={() => {
            onDeleteRecord(id);
          }}
        >
          <IconButton icon={"icon-shanchu"} />
        </Popconfirm>
      </div>
    </div>
  );
};

export default Record;
