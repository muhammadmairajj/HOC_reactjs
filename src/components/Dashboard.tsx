import withAuth from "../hoc/HOCWithAuth"

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Page...</h1>
        </div>
    )
}

// export default Dashboard;

export const DashboardWithAuth = withAuth(Dashboard);
