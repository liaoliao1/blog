import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import { Row, Col, Affix,  Breadcrumb } from 'antd'
import {CalendarOutlined, FolderOutlined,FireOutlined} from '@ant-design/icons';

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar';
import axios from 'axios'
import 'markdown-navbar/dist/navbar.css';
import '../static/style/pages/detailed.css'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

import Tocify from '../components/tocify.tsx'
import servicePath from '../config/apiUrl'

const Detailed = (props) => {
  console.log(props);
  const tocify = new Tocify()
  const renderer = new marked.Renderer()

  renderer.heading=function(text,level,raw){
    const anchor = tocify.add(text,level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  }

  marked.setOptions({
    renderer:renderer,
    gfm:true,
    pedantic:false,
    sanitize:false,
    tables:true,
    breaks:false,
    smartLists:true,
    highlight:function(code){
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(props.article_content)

  return (
    <>
      <Head>
        <title>Blog-详细页</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href={`/list?id=${props.typeId}`}>{props.typeName}</a></Breadcrumb.Item>
                <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                React博客实战-学习记录(01集)
              </div>

              <div className="list-icon center">
                <span><CalendarOutlined /> 2020-06-29</span>
                <span><FolderOutlined /> 资料学习 </span>
                <span><FireOutlined /> 0人</span>
              </div>

              <div className="detailed-content" dangerouslySetInnerHTML={{__html:html}}>

              </div>
            </div>
          </div>
        </Col>

        <Col className="comm-box" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />


    </>
  )
}

Detailed.getInitialProps = async(context)=>{
  let id =context.query.id
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleById+id).then(
      (res)=>{
        // console.log(res)
        resolve(res.data.data[0])
      }
    )
  })
  return await promise
}

export default Detailed