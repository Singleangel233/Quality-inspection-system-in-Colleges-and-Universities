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
		    <el-tab-pane label="教学评分查询">
		    	<el-table
				      :data="scoreData"
				      style="width: 100%"
				      class="clearfix"   
				      >
				      <el-table-column
				        prop="ability"
				        label="教学能力"
				        width="180">
				      </el-table-column>
				      <el-table-column
				        prop="content"
				        label="能力简介"
				        width="480"
				        >
				      </el-table-column>
				      <el-table-column
				        prop="score"
				        label="分数情况（总体）"
				        >
				      </el-table-column>
     				</el-table>
		    </el-tab-pane>

			<!-- 以上是查看学生评分的界面 -->

		    <el-tab-pane label="督导评分查询">
		    	<el-table
				      :data="scoreDataS"
				      style="width: 100%;"     
				      >
				      <el-table-column
				        prop="ability"
				        label="教师情况"
				        width="180">
				      </el-table-column>
				      <el-table-column
				        prop="content"
				        label="能力简介"
				        width="480"
				        >
				      </el-table-column>
				      <el-table-column
				        prop="score"
				        label="分数情况（总体）"
				        >
				      </el-table-column>
     				</el-table>
		    </el-tab-pane>

			<!-- 以上是查看督导评分的界面 -->

		    <el-tab-pane label="同行打分">
		    	<nav class="classpage"><span>您所在的专业：</span><span>{{}}</span>&nbsp;&nbsp;&nbsp;<span>请选择对应的课程</span>
						<el-select v-model="value" placeholder="请选择你所对应的课程" @change="check">
    						<el-option
     							 v-for="item in options"
      							 	:key="item.value"
      								:label="item.label"
      								:value="item.value">
    						</el-option>
  						</el-select>  
		    	</nav>
		    	<div class="teacherpage"><span>该任课老师为：</span><span>{{}}</span></div>
		    	<div class="tablepage">
		    		<el-table
			      :data="scoreData"
			      
			      >
			      <el-table-column
			        prop="ability"
			        label="教学能力"
			        width="100px;">
			      </el-table-column>
			      <el-table-column
			        prop="content"
			        label="能力简介"
			        >
			      </el-table-column>
			      <el-table-column
			        prop="score"
			        label="分数(1-9分)"
			        width="130"
			        >
			        <template slot-scope="scope" >
					        <el-input  placeholder="请输入分数"  @blur="calscore(scope.$index)"  class="neirong" :maxlength="inputlength"></el-input>
				      </template>
			      </el-table-column>
			      <el-table-column
			        prop="content"
			        label="建议（选填）"
			        class="line"
			        >
			        <template slot-scope="scope" >
					        <el-input  placeholder="请输入建议（20字）"  @blur="calscore2(scope.$index)"  class="neirong2" :maxlength="inputlength2"></el-input>
				      </template>
			      </el-table-column>
			    </el-table>   
		    	</div>
		    	<div class="buttonpage"><el-button type="primary" @click="total">提交</el-button></div>  	
		    </el-tab-pane>
  		</el-tabs>

  		<!-- 以上是教师同行评分 -->
  		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				scoreData:[{ability:'课堂内容',content:'关于教师课堂讲述内容的详细程度，以及语言表达能力程度',score:'5'},
						   {ability:'作业改正',content:'关于课后作业是否有认真改正，及时发现问题并且指出问题',score:'6'},
						   {ability:'教学态度',content:'关于教学的态度是否端正，有无细心指导学生学习，积极与学生互动',score:'7'}
						   ],
				scoreDataS:[{ability:'教师品德',content:'关于教师是否尊重学生的表现',score:'7'},
						   {ability:'课堂纪律',content:'关于教师课堂纪律',score:'8'},
						   {ability:'敬业精神',content:'关于教师对本身职业的热情',score:'9'}
						   ],
				options:[
				{value:'1',label:'软件工程'},
				{value:'2',label:'计算机网络'},
				{value:'3',label:'计算机原理'},
				{value:'4',label:'javascript设计'}
				],
				value:"",
				inputlength:1,
				inputlength2:40,
				totalscores:[{score1:'',score2:'',score3:'',advice1:'',advice2:'',advice3:''}]
			}
		},
		methods:{
			check(){

			},
			calscore(index){
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
			calscore2(index){
				if(index == 0){
					var a = document.getElementsByClassName('neirong2')
					var b = a[0].getElementsByTagName('input');
					// console.log(b);
					var c = b[0].value
					this.totalscores.advice1 = c;

				};
				if(index == 1){
					var a = document.getElementsByClassName('neirong2')
					var b = a[1].getElementsByTagName('input');
					var c = b[0].value
					this.totalscores.advice2 = c;
				};
				if(index == 2){
					var a = document.getElementsByClassName('neirong2')
					var b = a[2].getElementsByTagName('input');
					var c = b[0].value
					this.totalscores.advice3 = c;
				};
				console.log(this.totalscores);
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
			},
			editMethod(){
				this.$router.push('/EditPassword/EditPass');
			}
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
		padding-top: 39px;
	}
	.header-right{
		float: right;
		margin-right: 100px;
		padding-top: 30px;
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
	.tablepage{
		margin-top: 30px;
	}
	.teacherpage span,.classpage span{
		font-size: 15px;
		color:#927e7e;
	}
	.buttonpage{
		float: right;
		margin-top: 20px;
		margin-right: 30px;
	}
</style>