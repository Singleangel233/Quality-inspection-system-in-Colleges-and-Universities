<template>
	<div>
		<div class="header">
			<div class="header-left"><span>您好，欢迎登入系统</span></div>
			<div class="header-right">
					<span>欢迎登陆</span>&nbsp;&nbsp;&nbsp; 
					<el-button type="text">注销</el-button>
					<el-button type="text" @click="editMethod">修改密码</el-button>					
  				</div>
		</div>
		<div class="mainpage clearfix">
			<div class="mainheader">欢迎使用教学质量监控系统</div>
		<el-tabs tab-position="left" style="height: 500px;width: 950px;" class="view-page">
		    <el-tab-pane label="督导评定">
		    	<nav><span>院系</span>
						<el-select v-model="value" placeholder="请选择你所对应的院系" @change="check" size=mini>
    						<el-option
     							 v-for="item in optionsF"
      							 	:key="item.value"
      								:label="item.label"
      								:value="item.value">
    						</el-option>
  						</el-select>  
  						<span>专业</span>
						<el-select v-model="value2" placeholder="请选择你所对应的专业" size=mini>
    						<el-option
     							 v-for="item in optionsS"
      							 	:key="item.value"
      								:label="item.label"
      								:value="item.value">
    						</el-option>
  						</el-select>
  						<span>教师</span>
  						<el-select v-model="value3" placeholder="请选择你所对应的教师" size=mini>
    						<el-option
     							 v-for="item in optionsT"
      							 	:key="item.value"
      								:label="item.label"
      								:value="item.value">
    						</el-option>
  						</el-select>  
		    	</nav>
		    	<div class="tablepage">
		    		<el-table
				      :data="scoreData"
				      style="width: 100%"
				      class="clearfix"   
				      >
				      <el-table-column
				        prop="ability"
				        label="教学能力"
				        width="100">
				      </el-table-column>
				      <el-table-column
				        prop="content"
				        label="能力简介"
				        width="480"
				        >
				      </el-table-column>
				      <el-table-column
				        prop="score"
				        label="分数情况"
				        width="170"
				        >
				      <template slot-scope="scope" >
					        <el-input  placeholder="请输入分数"  @blur="calscore(scope.$index)"  class="neirong" :maxlength="inputlength"></el-input>
				      </template>
				      </el-table-column>
     				</el-table>
     				<div class="buttonpage"><el-button type="primary" class="submit" @click="total">提交</el-button></div>
		    	</div>   	
		    </el-tab-pane>

			<!-- 以上是查看督导评分的界面 -->





		    <el-tab-pane label="学生教师评分查询">
		    	<nav>
		    		<div class="search">
                      <el-input
                        placeholder="请输入教师名字或者教师学号进行查询"
                        prefix-icon="el-icon-search"
                        v-model="inputSgrade"
                        >
                      </el-input>
                   </div>
                   <div class="checkbutton">
                          <el-button type="primary" round >查询</el-button>  
                  </div>
                 </nav>
		    	<el-table
				      :data="scoreDataS"
				      style="width: 100%;"     
				      >
				      <el-table-column
				        prop="ability"
				        label="教师情况"
				        width="150">
				      </el-table-column>
				      <el-table-column
				        prop="content"
				        label="能力简介"
				        width="450"
				        >
				      </el-table-column>
				      <el-table-column
				        prop="score"
				        label="分数情况（平均值）"
				        id="scoreStu"
				        >
				      </el-table-column>
     				</el-table>
		    </el-tab-pane>

			<!-- 以上是查看督导评分的界面 -->

		    <el-tab-pane label="教师评分同行查询">
		    	<nav>
		    		<div class="search">
                      <el-input
                        placeholder="请输入教师名字或者教师学号进行查询"
                        prefix-icon="el-icon-search"
                        v-model="inputSgrade"
                        >
                      </el-input>
                   </div>
                   <div class="checkbutton">
                          <el-button type="primary" round >查询</el-button>  
                  </div>
                 </nav>
                  <el-table
			      :data="scoreDataT"
			      style="width: 100%">
			      <el-table-column
			        prop="name1"
			        label="打分教师"
			        >
			      </el-table-column>
			      <el-table-column
			        prop="name2"
			        label="被打分教师"
			        >
			      </el-table-column>
			      <el-table-column
			        prop="score1"
			        label="所得分数1">
			      </el-table-column>
			      <el-table-column
			        prop="score2"
			        label="所得分数2">
			      </el-table-column>
			      <el-table-column
			        prop="score3"
			        label="所得分数3">
			      </el-table-column>
			      <el-table-column
			        prop="advice"
			        label="建议"
			        width="280">
			      </el-table-column>
			    </el-table>
		    	

		    </el-tab-pane>
  		</el-tabs>
  		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				scoreData:[{ability:'课堂内容',content:'关于教师课堂讲述内容的详细程度，以及语言表达能力程度'},
						   {ability:'教学态度',content:'关于教学的态度是否端正，有无细心指导学生学习，积极与学生互动'},
						   {ability:'纪律风气',content:'关于课堂是否遵守了纪律，是否保持良好的学习环境和风气'}],
				scoreDataS:[{ability:'课堂内容',content:'关于老师课堂讲述内容的详细程度，以及语言表达能力程度',score:'8'},
						   {ability:'作业改正',content:'关于课后作业是否有认真改正，及时发现问题并且指出问题',score:'8'},
						   {ability:'教学态度',content:'关于教学的态度是否端正，有无细心指导学生学习，积极与学生互动',score:'8'}],
			    scoreDataT:[{name1:'阿花',name2:'阿喵',score1:'8',score2:'7',score3:'6',advice:'讲课还要认真'},
						   {name1:'阿雪',name2:'二狗',score1:'8',score2:'7',score3:'6',advice:'纪律还需提高'},
						   {name1:'阿喵',name2:'阿雪',score1:'8',score2:'7',score3:'6',advice:'请提高讲课音量'}],
				optionsF:[
				{value:'1',label:'计算机系'},
				{value:'2',label:'外语系'},
				{value:'3',label:'经济系'},
				{value:'4',label:'大气遥感系'}
				],
				optionsS:[
				{value:'1',label:'软件工程'},
				{value:'2',label:'计算机网络'},
				{value:'3',label:'计算机原理'},
				{value:'4',label:'javascript设计'}
				],
				optionsT:[
				{value:'1',label:'阿喵'},
				{value:'2',label:'天儿'},
				{value:'3',label:'小花'},
				{value:'4',label:'兔兔'}
				],
				value:'',
				value2:'',
				value3:'',
				inputlength:1,
				totalscores:[{score1:'',score2:'',score3:''}]

			}
		},
		methods:{
			check(){
				
			},
			editMethod(){
				this.$router.push('/EditPassword/EditPass');
			},
			total(){
				var re = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字 //判断正整数 /^[1-9]+[0-9]*]*$/
				var number = new Object(); 
				 	number.num1 = this.totalscores.score1;
				 	number.num2 = this.totalscores.score2;
				 	number.num3 = this.totalscores.score3;
				for(var j in number){
					if (!re.test(number[j])) {
					alert("请输入数字");
					return;
					}
				}
				console.log(number);
		},
			calscore(index){
				// console.log(index);
				if(index == 0){
					var a = document.getElementsByClassName('neirong')
					var b = a[0].getElementsByTagName('input');
					// console.log(b);
					var c = b[0].value
					this.totalscores.score1 = c;

				};
				if(index == 1){
					var a = document.getElementsByClassName('neirong')
					var b = a[1].getElementsByTagName('input');
					var c = b[0].value
					this.totalscores.score2 = c;
				};
				if(index == 2){
					var a = document.getElementsByClassName('neirong')
					var b = a[2].getElementsByTagName('input');
					var c = b[0].value
					this.totalscores.score3 = c;
				};
				console.log(this.totalscores);

			},
		}
	}
</script>

<style scoped>
	*{
		box-sizing: border-box;	
	}
	.header{	
		overflow: hidden;
		height: 100px;
		background-color: skyblue;
		box-shadow: 0 6px 6px rgba(0,0,0,0.2);
		width: 1000px;
		margin: 0 auto;
		margin-top: 60px;
	}
	.header-left{
		float: left;
		margin-left: 90px;
		padding-top: 30px;
	}
	.header-right{
		float: right;
		margin-right: 100px;
		padding-top: 21px;
	}
	.clearfix:after{
		content: ".";
		display: none;
		height: 0;
		visibility: hidden;
		clear: both;
	}
	.mainpage{
		background-color: #d3dce6;
		height: 700px;
		width: 1000px;
		margin: 0 auto;
		box-shadow: 0 6px 6px rgba(0,0,0,0.2);
	}
	.mainpage .mainheader{
		margin: 0px 0px 20px 0px;
		padding-left: 400px;
		padding-top: 40px;

	}
	.mainpage .view-page{
		margin-top: 60px;	
	}
	.totalscore{
		margin-top: 30px;
		margin-left: 350px;
	}
	nav span{
		font-size: 15px;
	}
	.tablepage{
		margin-top: 25px;
	}
	.buttonpage{
  	float: right;
  	margin-top: 20px;
  	margin-right: 40px;
  }
  .search{
    width: 300px;
    padding-bottom: 10px;
    float: left;

  }
  .checkbutton{
    float: left;
    margin-left: 10px;
  }
</style>