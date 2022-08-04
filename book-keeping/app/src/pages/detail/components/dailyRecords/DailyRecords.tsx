import React, { FC } from "react";
import Record, { RecordItem } from "../record/Record";
import "./DailyRecords.css";
import { GroupedDailyRecords } from "../../../../services/recordHelper";
import { DateFormat, formatTimeStamp } from "../../../../services/dateHelper";

// interface DailyRecordsProps {
//   records: RecordItem[]
// }

// DailyRecordsProps 直接继承 GroupedDailyRecords
interface DailyRecordsProps extends GroupedDailyRecords {
  onOpenUpdateModal: (id: number) => void;
  onDeleteRecord: (id: number) => void;
}

// DailyRecords 接受一组 records 信息，且这些 records 日期均在同一天，且是经过排序后的结果
const DailyRecords: FC<DailyRecordsProps> = ({
  records,
  summary,
  timeStamp,
  onOpenUpdateModal,
  onDeleteRecord,
}) => {
  return (
    <div className={"daily-records"}>
      {/* <div className={'records'}>
        {records.map((record) => (
          <Record key={record.timeStamp} {...record} />
        ))}
      </div> */}
      <div className={"daily-records-summary"}>
        <div className={"daily-records-date"}>
          {/* 调用 formatTimeStamp 格式化时间戳 */}
          {formatTimeStamp(timeStamp, DateFormat.MONTH_DAYOFWEEK)}
        </div>
        {summary.totalExpenditure > 0 && (
          <div className={"daily-records-detail"}>
            支出：-{summary.totalExpenditure}
          </div>
        )}
        {summary.totalIncome > 0 && (
          <div className={"daily-records-detail"}>
            收入：+{summary.totalIncome}
          </div>
        )}
      </div>
      <div className={"records"}>
        {records.map((record) => (
          <Record
            key={record.timeStamp}
            {...record}
            onOpenUpdateModal={onOpenUpdateModal}
            onDeleteRecord={onDeleteRecord}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyRecords;
