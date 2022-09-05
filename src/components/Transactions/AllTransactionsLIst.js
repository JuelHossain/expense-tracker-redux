import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { reset } from "../../features/filter/filterSlice";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";

export default function AllTransactionsList() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const { transactions, isLoading, isError } = useSelector(
    (state) => state.transaction
  );
  const { page } = useSelector((state) => state.filter);
  const lastIndex = page * 10;
  const firstIndex = lastIndex - 10;

  useEffect(() => {
    dispatch(fetchTransactions(filter));
  }, [dispatch, filter]);

  // decide what to render
  let content = null;
  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && isError)
    content = <p className="error">There was an error occured</p>;

  if (!isLoading && !isError && transactions?.length > 0) {
    content = [...transactions]
      .reverse()
      .slice(firstIndex, lastIndex)
      .map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ));
  }

  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p>No transactions found!</p>;
  }

  return (
    <>
      <p className="second_heading">All Transactions</p>
      <div className="max-w-[400px] mx-auto">
        <ul>{content}</ul>
        <NavLink
          onClick={() => {
            dispatch(reset());
          }}
          to={"/"}
          className="block text-center bg-indigo-700 text-white p-3 text-sm w-full"
        >
          Go To Home
        </NavLink>
      </div>
    </>
  );
}
