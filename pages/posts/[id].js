import Head from 'next/head'
import PropTypes from 'prop-types'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({postData}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
    </Layout>
  )
}

Post.propTypes = {
  postData: {
    title: PropTypes.string,
    date: PropTypes.string,
    contentHtml: PropTypes.string,
  },
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
