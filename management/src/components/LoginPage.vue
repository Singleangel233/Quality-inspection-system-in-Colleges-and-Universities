<template>
	<div class="main" >	
		<el-row  class="login">
		  <el-col :span="24">
				<el-form ref="form" :model="form" :rules="rules">
					<div class="container">
						<span class="systemname">教学质量系统登录</span>
						  <el-form-item label="账号" class="titlename" prop="name">
						    <el-input v-model="form.name" placeholder="请输入账户名" ></el-input>
						  </el-form-item>
						    <el-form-item  label="密码" class="titlename" id="passwordname" prop="pass">
							    <el-input v-model="form.pass" type="password"  placeholder="请输入密码"></el-input>
							</el-form-item>
							<div>
								<div class="forgetPass"><el-button type="text">忘记密码</el-button></div>
								<div class="clearfix">
									<el-radio-group v-model="radio" class="lefthead">
								    <el-radio :label="1">学生</el-radio>
								    <el-radio :label="2">教师</el-radio>
								    <el-radio :label="3">督导</el-radio>
								    <el-radio :label="4">管理员</el-radio>
								</el-radio-group>
								<el-button type="primary" class="loginbutton" @click='login' >登陆</el-button>
								</div>
							</div>
					</div>
				</el-form>
		  </el-col>
		</el-row>
	
	</div>
</template>

<script>
import { ajax } from '../../static/js/ajax.js'
	export default{
		data(){
			return{
				form:{
					name:'',
					pass:''					
				},
				radio:1,
				rules:{
					  name:[
				            { required: true, message: '请输入账户名', trigger: 'blur' },
				        
				      ],
				     pass:[
				     		{ required: true, message: '请输入密码', trigger: 'blur' },
				     ]
				}
			}
		},
		methods:{
			login(){
			console.log(this.form);
			ajax({
				method:'get',
				url:'http://localhost:8888/LoginController/login',
				data:this.form,
				success:function(data){
					console.log(data);
					console.log('成功了');
				}
			});
			console.log(this.form.name);
			console.log(this.form.pass);

			}
			
		},
		computed:{
			
		}
	}
</script>

<style scoped>
	*{
		box-sizing: border-box;
	}
	.main{
		margin-top: -10px;
		margin-left: -20px;
		background-color: #d3dce6;
		width: 1920px;
		height: 1080px;
		
	}
	.login{
		width: 500px;
		height: 450px;
		margin-left: 35%;
		margin-top: 200px;
		background-color: #f9f9f994;
		float: left;

	}
	.lefthead{
		float: left;		
		margin-left: 10px;
		margin-top: 20px;
	}
	.loginbutton{
		float: left;
		margin-left: 40px;
		margin-top: 10px;
	}
	.titlename{
		margin-left: 50px;
		width: 400px;
		margin-top: 45px;
	}
	.container{
		width: 500px;
		height: 250px;
		padding-top: 50px;
	}
	.systemname{
		padding-left: 180px;
		font-size: 18px;
	}
	.forgetPass{
		margin-left: 365px;
		margin-top: -25px;
	}
</style>