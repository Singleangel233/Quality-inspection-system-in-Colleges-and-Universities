<template>
	<div>
		<el-container id="main">
		  <el-header>
		  	   <div class="header-left">
  					<span>你好，你所在的系为：</span> 
  					<span>计算机系</span>
  					 <span>请选择你所对应的课程</span>
  					   <el-select v-model="value" placeholder="请选择你所对应的课程">
    						<el-option
     							 v-for="item in options"
      							 	:key="item.value"
      								:label="item.label"
      								:value="item.value">
    						</el-option>
  						</el-select>  
  				</div>
  				<div class="header-right">
					<span>欢迎登陆</span>&nbsp;&nbsp;&nbsp; 
					<el-button type="text">注销</el-button>
					<el-button type="text" @click="editMethod">修改密码</el-button>					
  				</div>
		  </el-header>
		  <el-main>
		  	<div class="teachhead">
		  	<span>该任课老师为：</span><span>{{}}</span>
		  </div>
  				<el-table
			      :data="scoreData"
			      border
			      >
			      <el-table-column
			        prop="ability"
			        label="教学能力"
			        width="150px;">
			      </el-table-column>
			      <el-table-column
			        prop="content"
			        label="能力简介"
			        class="line"
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
			    </el-table>   
  			 <div class="buttonpage">
  			 	<el-button type="primary" class="submit" @click="total">提交</el-button>
  			 </div>	
  			  
		  </el-main>
		</el-container>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				options:[
				{value:'1',label:'软件工程'},
				{value:'2',label:'计算机网络'},
				{value:'3',label:'计算机原理'},
				{value:'4',label:'javascript设计'}
				],
				value:'',
				tableData:[{date:'2017-01-01',className:'软件工程',teacherName:'阿喵'}],
				scoreData:[{ability:'课堂内容',content:'关于老师课堂讲述内容的详细程度，以及语言表达能力程度',score:'3'},
						   {ability:'作业改正',content:'关于课后作业是否有认真改正，及时发现问题并且指出问题'},
						   {ability:'教学态度',content:'关于教学的态度是否端正，有无细心指导学生学习，积极与学生互动'}
						   ],
				totalscores:[{score1:'',score2:'',score3:''}],
				user:[],
				inputlength:1

				
			}
		},
		methods:{
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
			editMethod(){
				this.$router.push('/EditPassword/EditPass');
			}
		},
		mounted:function(){
		    var maindiv = document.getElementById("main");
		    	maindiv.style.width = '1300px';
		    	maindiv.style.height = '490px';
		}
	}
</script>

<style scoped>
*{
	box-sizing: border-box;
}
#main{
		margin: 0 auto;
		margin-top: 150px;
	}
.header-right{
	float: left;
	margin-left: 300px;
}
.header-left{
	width: 635px;
	float: left;
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .buttonpage{
  	float: right;
  	margin-top: 30px;
  	margin-right: 40px;
  }
  .teachhead{
  	margin-bottom: 20px;
  }
 
</style>