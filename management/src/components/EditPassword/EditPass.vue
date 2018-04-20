<template>
	<div>
		<el-container class="mainpage">
		  <el-header class="headpage">
		  	<span>修改密码页面</span>
		  	<el-input type="text"  auto-complete="off" :value="this.user[0].userId" id="hidden"></el-input>
		  </el-header>
		  <el-main>
		  	<div class="editpage">
		  	<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
			  <el-form-item label="请输入新密码" prop="pass">
			    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="请再次确认密码" prop="checkPass" >
			    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
			    <el-button @click="resetForm('ruleForm2')">重置</el-button>
			  </el-form-item>
			</el-form>
			</div>
		  </el-main>
		</el-container>
	</div>
</template>

<script>
	export default{
		data(){
			var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入密码'));
		        } else {
		          if (this.ruleForm2.checkPass !== '') {
		            this.$refs.ruleForm2.validateField('checkPass');
		          }
		          callback();
		        }
		      };
		    var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入密码'));
		        } else if (value !== this.ruleForm2.pass) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
		      };
      return {

      	user:[{
      		userId:'123456'
      	}],
      	//ruleForm2表绑定的数据
        ruleForm2: {
          pass: '',
          checkPass: '',
        },

        //检查密码的提示
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },

    //绑定的方法
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.user[0].userId);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },

    //开始挂载发送ajax请求获取
   mounted:function(){
   	console.log('发送ajax请求');
   	var a = document.getElementById('hidden');
   	a.style.display="none";
   }
	}
</script>

<style scoped>
	*{
		box-sizing: border-box;	
	}
	body{
		background-color: #d3dce6;
	}
	.mainpage{
		width: 1920px;
		height:1080px;
		background-color: #f9f9f994;
		margin:0 auto;
		padding-top: 100px;
	}
	.editpage{
		width: 400px;
		margin: 0 auto;
		margin-top: 50px;
	}
	.headpage{
		padding-top: 70px;
		margin:0 auto;
	}
</style>