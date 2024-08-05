// A Higher-Order Component (HOC) that handles data fetching and loading states:
import React from 'react';

export const withDataFetching = (WrapperComponent: any, fetchData: any) => {
  return (props: any) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<any>(null);

    React.useEffect(() => {
      fetchData()
        .then((res: any) => {
          setData(res);
          setLoading(false);
        })
        .catch((err: any) => {
          setError(err);
          setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error?.message}</div>;

    return <WrapperComponent data = {data} {...props} />
  };
};

