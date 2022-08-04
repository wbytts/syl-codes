import React, { FC, useContext, useState } from "react";
import DailyRecords from "./components/dailyRecords/DailyRecords";
import { groupDailyRecords } from "../../services/recordHelper";
import { IconButton } from "../../components/icon/Icon";
import "./DetailPage.css"; // 记得要引入样式
import { Context } from "../../components/provider/Provider";
import RecordModal, {
  NewRecordItem,
} from "./components/recordModal/RecordModal";
import {
  addRecord,
  deleteRecord,
  updateRecord,
} from "../../components/provider/reducer/actions";
import { RecordItem } from "./components/record/Record";

const DetailPage: FC = () => {
  const { state, dispatch } = useContext(Context);
  const [visible, setVisible] = useState(false);
  const [updateRecordId, setUpdateRecordId] = useState<number>();
  const currentRecords = groupDailyRecords(state.currentRecords);

  const onToggleVisible = () => {
    setVisible(!visible);
  };

  // 添加新建记录方法
  const onAddRecord = (record: NewRecordItem) => {
    // id 暂时用 timestamp 代替，集成后端后，会由后端生成
    dispatch(addRecord({ ...record, id: record.timeStamp }));
  };

  const onUpdateRecord = (record: RecordItem) => {
    dispatch(
      updateRecord({
        ...record,
        id: updateRecordId ? updateRecordId : record.timeStamp,
      })
    );
  };

  // 点击修改按钮的处理方法
  const onOpenUpdateModal = (id: number) => {
    setUpdateRecordId(id);
    setVisible(true);
  };

  // 如果 updateRecordId 不为空，则找到目标 record
  const target = updateRecordId
    ? state.monthlyRecords.find((i) => i.id === updateRecordId)
    : undefined;

  const onDeleteRecord = (id: number) => {
    dispatch(deleteRecord(id));
  };

  return (
    <div className="detail-page">
      <div className="detail-page-content">
        <div className={"detail-page-header"}>
          <IconButton
            icon={"icon-huabanfuben"}
            className={"detail-page-add-btn"}
            onClick={onToggleVisible}
          />
        </div>
        {currentRecords.map((daily) => (
          <DailyRecords
            key={daily.timeStamp}
            {...daily}
            onOpenUpdateModal={onOpenUpdateModal}
            onDeleteRecord={onDeleteRecord}
          />
        ))}
      </div>

      <RecordModal
        visible={visible}
        onClose={onToggleVisible}
        onProcessRecord={target ? onUpdateRecord : onAddRecord}
      />
    </div>
  );
};

export default DetailPage;
