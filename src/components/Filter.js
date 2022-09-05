import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPage,
  setSearch,
  setSelected,
} from "../features/filter/filterSlice";

const Filter = () => {
  const { selected } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transaction);
  const onChange = (e) => {
    dispatch(setPage(1));
    dispatch(setSelected(e.target.value));
  };
  const debounce = useCallback((fn) => {
    let timer;
    return (e) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(e);
      }, 500);
    };
  }, []);
  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
    dispatch(setPage(1));
  };
  const handleDebounce = debounce(handleChange);
  // const searchRef = useRef(null);
  // useEffect(() => {
  //   dispatch(setSearchRef(searchRef));
  // }, [dispatch]);
  return (
    <div className="flex justify-between w-full max-w-sm">
      <form>
        <label htmlFor="all">
          <input
            type="radio"
            id="all"
            value={"all"}
            checked={selected === "all"}
            onChange={onChange}
          />
          All
        </label>
        <label htmlFor="income">
          <input
            type="radio"
            id="income"
            value={"income"}
            checked={selected === "income"}
            onChange={onChange}
          />
          Income
        </label>
        <label htmlFor="expense">
          <input
            type="radio"
            id="expense"
            value={"expense"}
            checked={selected === "expense"}
            onChange={onChange}
          />
          Expense
        </label>
      </form>
      <div>
        <input
          // ref={searchRef}
          type="search"
          name="search"
          id="search"
          placeholder="Search here"
          onChange={handleDebounce}
          className="border p-3"
        />
        <p>Result Found: {transactions.length}</p>
      </div>
    </div>
  );
};

export default Filter;
