let eventHub=new Vue()
Vue.prototype.$eventHub=eventHub
window.Login={
    data(){
        return {
            userLogin:{
                email:'',
                password:''
            },
        }
    },
    methods:{
        onLogin(e){
            if(AV.User.current()){
                alert("已经登录了")
            }else{
                AV.User.logIn(this.userLogin.email, this.userLogin.password).then( (user)=> {
                    user = user.toJSON()
                    this.$eventHub.$emit('login-up',user.objectId)
                    this.$router.push('/')
                },  (error) =>{
                    if(error.code===211){
                        alert("邮箱不存在");
                    }else if(error.code===210){
                        alert("邮箱和密码不匹配")
                    }
                });
            }

        },
    },
    template:`
  <div class="userlogin">
     <div class="login-title">
            <h3>登录</h3>
     </div>
    <form @submit.prevent="onLogin">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" v-model="userLogin.email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="userLogin.password">
        </div>
        <button type="submit" class="btn btn-default">提交</button>
        <button type="button" class="btn btn-default"><router-link to="/register">注册</a></button>
        <button type="button" class="btn btn-default"><router-link to="/">关闭</a></button>
    </form>
  </div>
    `,
}

Vue.component('user-login',Login)
