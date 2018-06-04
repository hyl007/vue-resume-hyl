
window.Register={
    data(){
        return {
            userRegister:{
                email:'',
                password:''
            },
        }
    },
    methods:{
        onSubmit(e){
            let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
            if(this.userRegister.email===''||this.userRegister.password===''){
                alert("邮箱或密码不都能为空")
            }else if(!reg.test(this.userRegister.email)){
                alert("请输入正确的邮箱")
            }else {
                let user = new AV.User();
                user.setUsername(this.userRegister.email);
                user.setPassword(this.userRegister.password);
                user.setEmail(this.userRegister.email);
                user.signUp().then( (user)=> {
                    alert("注册成功")
                    this.$router.push('/')
                },  (error)=> {
                    alert(error.rawMessage)
                });
            }
        },
    },
    template:`
  <div class="userlogin">
    <div class="login-title">
        <h3>注册</h3>
    </div>
    <form @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" v-model="userRegister.email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="userRegister.password">
        </div>
        <button type="submit" class="btn btn-default">提交</button>
        <button type="button" class="btn btn-default btn-right"><router-link to="/">关闭</a></button>
        <button type="button" class="btn btn-default"><router-link to="/login">登录</a></button>
    </form>
  </div>
    `,
}

Vue.component('user-register',Register)
