import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import { Row, Col, List,Icon } from 'antd'
import axios from 'axios'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';

import '../static/style/pages/index.css'
import servicePath from '../config/apiUrl'



export default function Home(list) {

  const [mylist, setMylist] = useState(list.data);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>首页</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{ pathname: '/detailed', query: { id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span><CalendarOutlined />{item.addTime}</span>
                  <span><FolderOutlined /> {item.typeName} </span>
                  <span><FireOutlined /> {item.view_count}人</span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>

        <Col className="comm-box" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
        <Footer />
      </Row>
    </>
  )
}

Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then(
      (res) => {
        resolve(res.data)
      }
    )
  })
  return await promise
}