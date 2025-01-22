import { useEffect, useState } from "react";
import BlogConfigService from "../../services/BlogConfigService";
import SeoTypes from "../../types/SeoTypes";
import MainLayout from "../../layouts/MainLayout";
import Head from "../../components/Head";

function NotFound(){
    const [seo, setSeo] = useState<SeoTypes | undefined>();

    useEffect(() => {
        async function fetchBlogName() {
            const seo = await BlogConfigService.getSeo('404');

            setSeo(seo);
        }

        fetchBlogName();
    });



    return(
        <>
            <Head seo={seo} statusCode="404"/>
            <MainLayout>
                <h1>
                    Not found
                </h1>
            </MainLayout>
        </>
        
        
    )
}

export default NotFound