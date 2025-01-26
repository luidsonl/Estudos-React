import MainLayout from '../../layouts/MainLayout';
import BlogConfigService from '../../services/BlogConfigService';
import Head from '../../components/Head';
import { useState } from 'react';
import { useEffect } from 'react';
import SeoTypes from '../../types/SeoTypes';

function Home() {
  const [seo, setSeo] = useState<SeoTypes | undefined>();

  useEffect(() => {
    async function getSeo() {
      const seo = await BlogConfigService.getSeo('home');

      setSeo(seo);
    }

    getSeo();
  }, []);

  return (
    <>
      <Head seo={seo} />
      <MainLayout>
        <h1>Home</h1>
      </MainLayout>
    </>
  );
}

export default Home;
