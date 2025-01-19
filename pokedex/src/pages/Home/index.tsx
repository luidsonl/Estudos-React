import MainLayout from '../../layouts/MainLayout';
import BlogConfigService from '../../services/BlogConfigService';
import Head from '../../components/Head';
import { useState } from 'react';
import { useEffect } from 'react';
import SeoTypes from '../../services/BlogConfigService/SeoTypes';

function Home() {
  const [seo, setSeo] = useState<SeoTypes | undefined>();

  useEffect(() => {
    async function fetchBlogName() {
      const seo = await BlogConfigService.getSeo('home');

      setSeo(seo);
    }

    fetchBlogName();
  });

  return (
    <>
      {seo ? <Head seo={seo} /> : null}
      <MainLayout>
        <h1>Home</h1>
      </MainLayout>
    </>
  );
}

export default Home;
