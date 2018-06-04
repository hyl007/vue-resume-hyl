Vue.component('nav-aside',{
    data(){
        return {

        }
    },
    methods:{
        noOrIsUser(){
            if(!AV.User.current()){
                this.$router.push('/login')
            }else {
                alert("已经登录了");
            }
        }
    },
    template:`
<nav class="navbar navbar-default">
    <div class="container-fluid bg-warning">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#example-navbar-collapse" aria-expanded="false">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand nav-bold" href="javascript: void(0);">
                简历&nbsp;制作器
            </a>
        </div>
        <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <ul class="nav navbar-nav navbar-left">
                <li>
                    <a href="javascript: void(0);" @click.prevent="$emit('edit')">修改</a>
                </li>
                <li>
                    <a href="javascript: void(0);" @click.prevent="$emit('save')">保存</a>
                </li>
                <li>
                    <a href="javascript: void(0);" @click.prevent="$emit('share-user')">分享</a>
                </li>
                <li>
                    <a href="javascript: void(0);" @click.prevent="$emit('print')">打印</a>
                </li>
            </ul>
            <ul class=" nav navbar-nav navbar-right">
                <button type="button" class="btn btn-default navbar-btn navbar-left login">
                    <a href="javascript: void(0);" @click.prevent="noOrIsUser">登录</a>
                </button>
                <button type="button" class="btn btn-default navbar-btn navbar-left">
                    <a href="javascript: void(0);" @click.prevent="$emit('user-out')">注销</a>
                </button>
            </ul>
        </div>
    </div>
</nav>
    `,
})

