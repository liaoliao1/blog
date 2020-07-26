import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593427223282&di=9e7f6c72a726f6780a516c55b645a367&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D2504437815%2C1526962299%26fm%3D214%26gp%3D0.jpg"  /></div>
            <div className="author-introduction">
                前端小白，专注于学习WEB前端开发，第一个博客项目。
                <Divider>社交账号</Divider>
                <Avatar gap={1} size={40}  className="account" >github</Avatar>
                <Avatar gap={1} size={40}  className="account" >qq</Avatar>
                <Avatar gap={1} size={40}  className="account" >wechat</Avatar>
            </div>
        </div>
    )

}

export default Author