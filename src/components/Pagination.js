import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { reset, setPage } from "../features/filter/filterSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const {
    transaction: { transactions },
    filter: { page },
  } = useSelector((state) => state);

  const pageCount = transactions.length / 10;
  return (
    <div className="w-[400px] mx-auto mt-2">
      {transactions.length > 10 && (
        <div className="flex w-full gap-2">
          {pageCount &&
            Object.keys([...Array(Math.ceil(pageCount))]).map(
              (number, index) => (
                <button
                  key={Math.random()}
                  onClick={(e) => {
                    dispatch(setPage(parseInt(e.target.innerText)));
                  }}
                  className={
                    index + 1 === page
                      ? "flex-1 bg-indigo-700 text-center text-white p-2"
                      : "flex-1 bg-indigo-200 text-center text-center p-2"
                  }
                >
                  {parseInt(number) + 1}
                </button>
              )
            )}
        </div>
      )}
      <Link
        onClick={() => {
          dispatch(reset());
        }}
        to={"/"}
        className="block text-center bg-indigo-700 text-white p-3 text-sm w-full mt-2"
      >
        Go To Home
      </Link>
    </div>
  );
};

export default Pagination;
