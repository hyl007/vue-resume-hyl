Vue.component('main-app',{
    props:['resume','editShow'],
    data(){
        return {
            resume_:null
        }
    },
    created() {
        this.resume_ = this.resume;
    },
    watch:{
        resume_:function(){
            this.$emit('edit-change',this.resume_)
        },
        resume:function(){
            this.resume_=this.resume
        }
    },
    methods:{
        addSkill(){
            this.resume.skills.push({name: 'css', description: '技能描述'})
        },
        addProject(){
            this.resume.projects.push({name: '项目名称', description: '项目描述'})
        },
        removeSkill(index){
            this.resume.skills.splice(index,1)
        },
        removeProject(index){
            this.resume.projects.splice(index,1)
        },
    },
    template:`
    <main>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-12 text-name">
                <h2 v-show="!editShow">{{resume.name}}</h2>
                <div class="input-group input-group-lg" v-show="editShow">
                    <span class="input-group-addon" id="sizing-addon1">姓名</span>
                    <input type="text" class="form-control" aria-describedby="sizing-addon1" v-model="resume_.name">
                </div>
                <h4 v-show="!editShow">
                    {{resume.gender}}|{{resume.birthday}}|{{resume.home}}
                </h4>
                <div class="input-group input-group-sm" v-show="editShow">
                    <span class="input-group-addon" id="sizing-addon3">性别</span>
                    <input type="text" class="form-control" aria-describedby="sizing-addon3" v-model="resume_.gender">
                </div>
                <div class="input-group input-group-sm" v-show="editShow">
                    <span class="input-group-addon" id="sizing-addon3">年龄</span>
                    <input type="text" class="form-control" aria-describedby="sizing-addon3" v-model="resume_.birthday">
                </div>
                <div class="input-group input-group-sm" v-show="editShow">
                    <span class="input-group-addon" id="sizing-addon3">家乡</span>
                    <input type="text" class="form-control" aria-describedby="sizing-addon3" v-model="resume_.home">
                </div>
                <h4 class="col-xs-12 col-sm-12 col-md-12" v-show="!editShow"><span>{{resume.job}}</span></h4>
                <div class="input-group input-group-sm" v-show="editShow">
                    <span class="input-group-addon" id="sizing-addon3">职位</span>
                    <input type="text" class="form-control" aria-describedby="sizing-addon3" v-model="resume_.job">
                </div>
            </div>
        </div>
        <!--******-->
        <div class="row">
            <div class="col-xs-12 col-md-12 information"><h2>联系</h2></div>
        </div>
        <div class="row informationList">
            <div class="col-xs-12 col-md-12">
                <ul>
                    <li class="col-xs-12 col-sm-6 col-md-2">
                        <span v-show="!editShow">
                        <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-phone"></use>
                        </svg>
                            {{resume.phone}}
                        </span>
                        <div class="input-group" v-show="editShow">
                            <span class="input-group-addon" id="sizing-addon2">手机</span>
                            <input type="text" class="form-control" aria-describedby="sizing-addon2" v-model="resume_.phone">
                        </div>
                    </li>
                    <li class="col-xs-12 col-sm-6 col-md-2">
                        <span v-show="!editShow">
                        <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-qq-copy"></use>
                            </svg>
                        {{resume.qq}}
                        </span>
                         <div class="input-group" v-show="editShow">
                            <span class="input-group-addon" id="sizing-addon2">QQ</span>
                            <input type="text" class="form-control" aria-describedby="sizing-addon2" v-model="resume_.qq">
                         </div>
                    </li>
                    <li class="col-xs-12 col-sm-6 col-md-2">
                        <span v-show="!editShow">
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-weixin"></use>
                        </svg>
                        {{resume.weiXin}}
                        </span>
                        <div class="input-group" v-show="editShow">
                            <span class="input-group-addon" id="sizing-addon2">微信</span>
                            <input type="text" class="form-control" aria-describedby="sizing-addon2" v-model="resume_.weiXin">
                         </div>
                    </li>
                    <li class="col-xs-12 col-sm-6 col-md-2">
                        <span v-show="!editShow">
                         <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-email"></use>
                        </svg>
                        {{resume.email}}
                        </span>
                        <div class="input-group" v-show="editShow">
                            <span class="input-group-addon" id="sizing-addon2">邮箱</span>
                            <input type="text" class="form-control" aria-describedby="sizing-addon2" v-model="resume_.email">
                         </div>
                    </li>
                    <li class="col-xs-12 col-sm-6 col-md-2">
                        <span v-show="!editShow">
                        <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-boke"></use>
                        </svg>
                        {{resume.blog}}
                        </span>
                        <div class="input-group" v-show="editShow">
                            <span class="input-group-addon" id="sizing-addon2">博客</span>
                            <input type="text" class="form-control" aria-describedby="sizing-addon2" v-model="resume_.blog">
                         </div>
                    </li>
                    <li class="col-xs-12 col-sm-6 col-md-2">
                        <span v-show="!editShow">
                        <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-github"></use>
                        </svg>
                        {{resume.gitHub}}
                        </span>
                        <div class="input-group" v-show="editShow">
                            <span class="input-group-addon" id="sizing-addon2">gitHub</span>
                            <input type="text" class="form-control" aria-describedby="sizing-addon2" v-model="resume_.gitHub">
                         </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--******-->
        <div class="row">
            <div class="col-xs-12 col-md-12 text-name">
                <h2>技能</h2>
            </div>
        </div>
        <div class="row skill">
            <div v-for="(skill,index) in resume.skills" class="col-sm-6 col-md-4">
                <div class="panel panel-success" v-show="!editShow">
                    <div class="panel-heading"><a href="#">{{skill.name}}</a></div>
                    <div class="panel-body">
                        {{skill.description}}
                    </div>
                </div>
                <div class="panel panel-success x" v-show="editShow">
                    <span class="removeX" v-if="index>=3" @click="removeSkill(index)">x</span>
                    <div class="panel-heading"><span><input type="text" v-model="skill.name"></span></div>
                    <div class="panel-body">
                        <input v-model="skill.description">
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block" v-show="editShow" @click="addSkill">添加技能</button>
        </div>
        <!--******-->
        <div class="row">
            <div class="col-xs-12 col-md-12 text-name">
                <h2>作品</h2>
            </div>
        </div>
        <div class="row">
            <div v-for="(project,index) in resume.projects" class="col-sm-12 col-md-6">
                <div class="panel panel-success" v-show="!editShow">
                    <div class="panel-heading">{{project.name}}</div>
                    <div class="panel-body">
                        {{project.description}}
                    </div>
                </div>
                <div class="panel panel-success x" v-show="editShow">
                    <span class="removeX" v-if="index>=4" @click="removeProject(index)">x</span>
                    <div class="panel-heading"><span><input type="text" v-model="project.name"></div>
                    <div class="panel-body">
                        <textarea rows="4" cols="57" v-model="project.description"></textarea>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-block" v-show="editShow" @click="addProject">添加项目</button>
        </div>
    </div>
</main>
    `,
})
