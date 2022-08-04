import moment, { Moment } from "moment";
import {
  RecordItem,
  RecordType,
} from "../../../pages/detail/components/record/Record";
import { Action, ActionType } from "./actions";

// 定义全局 state 的类型，包含了所选择月份信息和当月所有记录信息
export interface State {
  month: Moment;
  monthlyRecords: RecordItem[];
  currentRecords: RecordItem[];
}

export const defaultState: State = {
  month: moment(), // 默认月份为当前月份
  monthlyRecords: [
    {
      timeStamp: 1613477254551, // 2021-02-16 20:07:34
      name: "餐饮",
      type: RecordType.Expenditure,
      price: 100,
      remark: "请人吃饭",
      id: 1,
    },
    {
      timeStamp: 1612969810000, // 2021-02-10 23:10:10
      type: RecordType.Expenditure,
      name: "购物",
      price: 200,
      id: 2,
    },
    {
      timeStamp: 1612969810002, // 2021-02-10 23:10:10
      type: RecordType.Expenditure,
      name: "蔬菜",
      price: 20,
      id: 3,
    },
    {
      timeStamp: 1613477254553, // 2021-02-16 20:07:34
      type: RecordType.Expenditure,
      name: "宠物",
      price: 200,
      id: 4,
    },
    {
      timeStamp: 1613477254556, // 2021-02-16 20:07:34
      type: RecordType.Income,
      name: "工资",
      price: 10000,
      remark: "这可是血汗钱啊",
      id: 5,
    },
  ],
  currentRecords: []
};

const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case Action.UPDATE_MONTH:
      state.currentRecords = state.monthlyRecords.filter(g => moment(g.timeStamp).month() === action.month.month())
      return {
        ...state,
        month: action.month,
      };

    case Action.ADD_RECORD:
      state.monthlyRecords = state.monthlyRecords.concat(action.record)
      state.currentRecords = state.monthlyRecords.filter(g => moment(g.timeStamp).month() === state.month.month())
      return {
        ...state,
      }

    case Action.UPDATE_RECORD:
      console.log('修改', action)
      state.monthlyRecords = state.monthlyRecords.map((i) =>
        i.id === action.record.id ? action.record : i,
      )
      state.currentRecords = state.monthlyRecords.filter(g => moment(g.timeStamp).month() === state.month.month())
      return {
        ...state,
      }

    case Action.DELETE_RECORD:
      state.monthlyRecords = state.monthlyRecords.filter(
        (item) => item.id !== action.recordId,
      )
      state.currentRecords = state.monthlyRecords.filter(g => moment(g.timeStamp).month() === state.month.month())
      return {
        ...state,
      }

    default:
      return state;
  }
};
export default reducer;