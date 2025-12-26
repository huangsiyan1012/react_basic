/* 
    为Count组件生成action对象
*/
import { DECREMENT, INCREMENT } from "./constant";
import store from "./store";

// 同步action,就是指action返回的值为对象
export const createIncrementAction = (data) => ({ type: INCREMENT, data });

export const createDecrementAction = (data) => ({ type: DECREMENT, data });

// 异步action,就是指action返回的值为函数
export const createIncrementAsyncAction = (data, time) => {
  return () => {
    setTimeout(() => {
      store.dispatch(createIncrementAction(data));
    }, time);
  };
};
