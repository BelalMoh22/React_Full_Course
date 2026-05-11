"use client"; // this line is used to make the code run on the client side
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, multiply, divide } from "./calculateSlice";
import type { RootState } from "@/stores/store";
/* 
useSelector and useDispatch are hooks that allow you to access the state and dispatch actions from the Redux store.
  1- useSelector is used to access the state from the Redux store. => for reading state
  2- useDispatch is used to dispatch(send) actions to the Redux store. => for updating state
*/

export default function Calculate() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  const firstValue = Number(firstNumber || 0);
  const secondValue = Number(secondNumber || 0);

  // without useReducer
  // const [result, setResult] = useState(0);

  // with Redux (useSelector and useDispatch)
  const result = useSelector((state: RootState) => state.calculate.result);
  const dispatch = useDispatch();

  const handleAdd = () => {
    // without useReducer
    //setResult(firstValue + secondValue);

    // with Redux
    dispatch(add(firstValue + secondValue));
  };

  const handleSubtract = () => {
    // without useReducer
    //setResult(firstValue - secondValue);

    // with Redux
    dispatch(
      subtract({
        firstNum: firstValue,
        secondNum: secondValue,
      }),
    );
  };

  const handleMultiply = () => {
    // without useReducer
    //setResult(firstValue * secondValue);

    // with Redux
    dispatch(multiply(firstValue * secondValue));
  };

  const handleDivide = () => {
    // without useReducer
    //setResult(firstValue / secondValue);

    // with Redux
    dispatch(divide(firstValue / secondValue));
  };

  const inputClass =
    "h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-base font-medium text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100";

  const buttonClass =
    "h-11 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 active:scale-[0.98]";

  return (
    <main className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-8">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Redux Math Calculator
          </p>
          <h1 className="text-3xl font-bold text-slate-950">Calculator</h1>
        </div>
        <div className="rounded-lg bg-sky-50 px-3 py-2 text-right">
          <p className="text-xs font-medium text-slate-500">Result</p>
          <p
            className="max-w-28 truncate text-2xl font-bold text-slate-950"
            aria-live="polite"
            title={String(result)}
          >
            {result}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-slate-700"
            htmlFor="fNum"
          >
            First Number
          </label>
          <input
            className={inputClass}
            type="number"
            id="fNum"
            onChange={(e) => setFirstNumber(e.target.value)}
            value={firstNumber}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-semibold text-slate-700"
            htmlFor="sNum"
          >
            Second Number
          </label>
          <input
            className={inputClass}
            type="number"
            id="sNum"
            onChange={(e) => setSecondNumber(e.target.value)}
            value={secondNumber}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button className={buttonClass} onClick={handleAdd} type="button">
            Add
          </button>
          <button
            className={buttonClass}
            onClick={handleSubtract}
            type="button"
          >
            Subtract
          </button>
          <button
            className={buttonClass}
            onClick={handleMultiply}
            type="button"
          >
            Multiply
          </button>
          <button className={buttonClass} onClick={handleDivide} type="button">
            Divide
          </button>
        </div>
      </div>
    </main>
  );
}
