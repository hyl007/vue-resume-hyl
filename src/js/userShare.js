Vue.component('share',{
    props:['shareLink'],
    template:`
    <div class="panel panel-success share">
        <div class="panel-heading">
            <h3 class="panel-title">请复制下面的链接</h3>
        </div>
        <div class="panel-body">
            <span>{{shareLink}}</span>
        </div>
    </div>
    `,
})

