import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={150} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596384746072&di=8e040de769a770950debfd18dad82d41&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F1%2F960x600%2F1348730532251.jpg" /></div>
            <div className="author-introduction">
                前端小白，专注于学习WEB前端开发，第一个博客项目。
                <Divider>社交账号</Divider>
                <Avatar gap={1} size={40}  className="account" ><a target="_blank" href="https://github.com/liaoliao1">github</a></Avatar>
                <Avatar gap={1} size={40}  className="account" ><a target="_blank" href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=799534018&website=www.oicqzone.com">qq</a></Avatar>
                <Avatar gap={1} size={40}  className="account" >wechat</Avatar>
            </div>
        </div>
    )

}

export default Author