import React from "react";
import { Query } from "react-apollo";
import Table from "antd/lib/table";
import { GET_REPOS } from "../queries";

const columns = [
  {
    title: "Name",
    dataIndex: "full_name",
    key: (text, row, index) => index,
    sorter: (a, b) => a.name.length - b.name.length,
    render: (text, row, index) => {
      return (
        <a href={row.html_url} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      );
    }
  },
  {
    title: "Stars",
    dataIndex: "stargazers_count",
    sorter: (a, b) => a.stargazers_count - b.stargazers_count
  },
  {
    title: "Forks",
    dataIndex: "forks_count",
    sorter: (a, b) => a.forks_count - b.forks_count
  }
];

const ReposList = () => (
  <Query
    query={GET_REPOS}
    variables={{
      per_page: 50,
      q: "javascript"
    }}
  >
    {({ data, error, loading }) => {
      const { reposList } = data;
      return (
        <Table
          loading={loading}
          columns={columns}
          dataSource={reposList}
          rowKey={(rec, index) => index}
        />
      );
    }}
  </Query>
);

export default ReposList;
