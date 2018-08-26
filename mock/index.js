export default {
  'get /details': function (req, res, next) {
    setTimeout(() => {
      res.json({
        result: [
          `<p style={{ paddingLeft: 24 }}>
            熟练掌握css3、html5、javascript(es5 / es6); <br />
            熟悉less、scss等css拓展语言的使用；<br />
            熟悉react开发，及相关脚手架工具的使用，vue也有一定了解，可快速上手；<br />
            熟悉Ant Design组件库，有antd风格的后台系统开发经验；<br />
            熟悉git, svn等版本管理工具，webpack, gulp等模块打包工具的使用；<br />
            熟练使用DevTools进行断点调试；<br />
            了解webGL，有there.js的使用经验；<br />
            了解php开发的网站，有wamp使用经验；<br />
            了解微信开发文档，有微信开发工具使用经验；<br />
          </p>`,
          `<p style={{ paddingLeft: 24 }}>
            2016.10-2018.6：广州杰莱信息技术有限公司<br />
            主要职责：<br />
            维护公司网站，并进行性能优化；<br />
            编写可复用的用户界面组件、前端通用组件；<br />
            关注前端技术的发展，掌握最新动态和主流技术。<br />
            项目经验：<br />
            一、卓阳视觉（http://geewonii.top/zyvision） <br />
            描述：外包项目，静态网页。<br />
            项目技术：webpack，jquery，lazyload，sass, three.js, 腾讯街景api；<br />
            二、风险测评h5（http://geewonii.top/phonelee/h5/query） <br />
            描述：微信端问卷调查类h5。<br />
            项目技术：使用gulp进行资源整合，rem自适应布局，swiper.js实现滑动交互。<br />
            三、模板组件：(https://github.com/geewonii/templates)<br />
            描述：将可重用的UI进行封装，提升开发效率。<br />
            项目技术：以面向对象方式封装，待完善；<br />
            四、用户管理系统（http://geewonii.top/phonelee/admin）<br />
            描述：客户关系管理系统，项目使用了react-admin脚手架； <br />
            项目技术：以es6语法编写，采用redux进行公共状态管理，webpack进行压缩打 包，antd组件库提供UI设计。<br />
            五、近期（https://github.com/geewonii/antd-pro） <br />
            描述：通过修改该中后台解决方案，学习里面的相关技术知识。<br />
          </p>`,
          `<p style={{ paddingLeft: 24 }}>
            乐观向上，责任心强，有较好的学习能力和心理素质，与人为善。<br />
            时常了解行业新动向,关注 github，掘金等行业资讯网站。
          </p>`,
         ` <p style={{ paddingLeft: 24 }}>
            上网、羽毛球、台球
          </p>`]
      })
    }, 300)
  }
}