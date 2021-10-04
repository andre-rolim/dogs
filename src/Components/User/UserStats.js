import React from 'react';
import { GET_STATS } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();
  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatisticas" description="Perfil do usuario" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  } else return null;
};

export default UserStats;
