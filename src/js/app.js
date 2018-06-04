window.Appmain = {
    template: `
    <div>
        <nav-aside @edit="editMain" @save="saveMain" @user-out="userOut" @share-user="share" @print="print"></nav-aside>
        <main-app :resume="resume" :editShow="editShow" @edit-change="changeResume"></main-app>
        <footer-app></footer-app>
        <share v-show="isShare" :shareLink="shareLink"></share>
    </div>
  `,
    watch:{
        '$route':'fetchdata',
    },
    created(){
       this.fetchdata()
    },
    data(){
        return {
            resume: {
                name: '姓名',
                job: '前端工程师',
                gender: '男',
                birthday: '25',
                home: '广西',
                phone: '1888888888',
                blog: 'hyl007.github.io',
                qq: '999999999',
                weiXin: 'hyl66666666',
                email: '99999@qq.com',
                gitHub: 'github.com',
                skills: [
                    {name: '技能名', description: '技能描述'},
                    {name: '技能名', description: '技能描述'},
                    {name: '技能名', description: '技能描述'},
                ],
                projects: [
                    {name: '项目名称', description: '项目描述'},
                    {name: '项目名称', description: '项目描述'},
                    {name: '项目名称', description: '项目描述'},
                    {name: '项目名称', description: '项目描述'},
                ],
            },
            editShow: false,
            isShare:false,
            currentUser:{id:''},
            shareLink:'请登录再分享链接',
        }
    },
    methods:{
        fetchdata(){
            Object.assign(this.currentUser,AV.User.current())
            if(this.currentUser.id){
               this.getResume(this.currentUser.id)
            }
        },
        editMain(){
            this.editShow=true
        },
        saveMain(){
            if(AV.User.current()){
                let {objectId}=AV.User.current().toJSON()
                let user = AV.Object.createWithoutData('User', objectId);
                user.set('resume', this.resume);
                user.save().then(()=>{
                    alert('保存成功')
                    this.getResume(objectId)
                    this.editShow=false
                },()=>{
                    alert('保存失败')
                });
            }else {
                alert("请登录，再保存");
            }
        },
        share(){
            this.isShare=!this.isShare
            this.shareLink = location.origin + location.pathname + '?user_id=' + this.currentUser.id
        },
        getResume(user){
            var query = new AV.Query('User');
            return query.get(user).then( (user)=> {
                if(user.toJSON().resume){
                    this.resume=user.toJSON().resume
                }
            },  (error) =>{
            });
        },
        print(){
            window.print()
        },
        changeResume(e){
            this.resume=e
        },
        userLogin(){
            let currentUser = AV.User.current();
            if (!currentUser) {
                this.$router.push('/login')
            }
            else {
                this.saveResuem()
            }
        },
        userOut(){
            if(AV.User.current()){
                AV.User.logOut();
                alert('注销成功')
                window.location.reload()
            }
        },
    }
}
Vue.component('app-main',Appmain)



