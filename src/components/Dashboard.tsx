import React from "react";

interface Props {
  children: React.ReactNode;
}

const Dashboard = (props: Props) => {
  return (
    <div className="dashboard__wrapper">
      <div className="dashboard__container">
        <div className="dashboard__grid">{props.children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
