import React from "react";
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import AllTransactionsList from "../components/Transactions/AllTransactionsLIst";

const AllTransactions = () => {
  return (
    <Layout>
      <Filter />
      <AllTransactionsList />
      <Pagination />
    </Layout>
  );
};

export default AllTransactions;
