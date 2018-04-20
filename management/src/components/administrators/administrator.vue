<template>
	<div>
		<router-view/>
		<el-container id="main">
			<el-aside id="miao" width="200px">
				<el-tree
				  :data="data"
				  :props="defaultProps"
				  accordion
				  @node-click="handleNodeClick"
				  class="nav">
				</el-tree>
        <div class="reset" @click="resetMethod">重置密码</div>
        <div class="reset" @click="editMethod">修改密码</div>
			</el-aside>
				<el-container>
    				<el-header>
    					<span class="leftMe">您好，欢迎使用教学质量系统</span>
    					<span class="rightMe">注销登录</span>
    				</el-header>
    					<el-main v-loading="loading">


                <!-- 学生信息管理界面 -->
                <div id="studentwork" class="donghua">
                    <div class="search">
                      <el-input
                        placeholder="请输入姓名或者学号进行查询"
                        prefix-icon="el-icon-search"
                        v-model="inputstudent"
                        >
                      </el-input>
                  </div>
                        <div class="checkbutton">
                          <el-button type="primary" round >查询</el-button>  
                        </div>
                    <el-table
                      :data="tableStu"
                      style="width: 100%"

                      >

                      <el-table-column
                        prop="number"
                        :label="labelarr[0]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        :label="labelarr[1]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="department"
                        :label="labelarr[2]">
                      </el-table-column>
                       <el-table-column
                        prop="major"
                        :label="labelarr[3]">
                      </el-table-column>
                       <el-table-column
                        prop="class"
                        :label="labelarr[4]">
                      </el-table-column>
                       <el-table-column
                        prop="sex"
                        :label="labelarr[5]">
                      </el-table-column>
                       <el-table-column
                        prop="grade"
                        :label="labelarr[6]">
                      </el-table-column>
                       <el-table-column
                        prop="tel"
                        :label="labelarr[7]">
                      </el-table-column> 
                       <el-table-column
                        prop="use"
                        label="操作"
                        width="140px"> 
                        <template slot-scope="scope">
                          <el-button @click="" type="text" size="small" icon='el-icon-close' @click="handleDelete(scope.$index,tableStu,scope.row)">删除</el-button>
                          <el-button type="text" size="small" icon='el-icon-edit-outline' @click="editStu(scope.row)">修改</el-button>
                        </template>
                      </el-table-column>
                  </el-table>
                  <div class="foot">
                    <el-button type="danger" @click="addStu">增加</el-button>
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="40"
                      class="page">
                    </el-pagination> 
                  </div>
                </div>

                <!-- 修改页面的弹窗 -->
                <el-dialog
                  title="修改页面"
                  :visible.sync="editStudialogVisible"
                  width="30%"
                  >
                 <el-form :model="formEditStu">
                  <el-form-item label="学号" label-width="100">
                    <el-input v-model="formEditStu.num" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="名字" label-width="100">
                    <el-input v-model="formEditStu.name" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="院系" label-width="100">
                    <el-input v-model="formEditStu.dep" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="专业" label-width="100">
                    <el-input v-model="formEditStu.pro" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="班级" label-width="100">
                    <el-input v-model="formEditStu.class" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="性别" label-width="100">
                    <el-input v-model="formEditStu.sex" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="年级" label-width="100">
                    <el-input v-model="formEditStu.grade" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="电话" label-width="100">
                    <el-input v-model="formEditStu.tel" auto-complete="off" ></el-input>
                  </el-form-item>
                </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="editStudialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="editStuFinal">确 定</el-button>
                  </span>
                </el-dialog>

                <!-- 增加页面的弹窗 -->
                <el-dialog
                  title="增加页面"
                  :visible.sync="addStudialogVisible"
                  width="30%"
                  >
                 <el-form :model="formaddStu">
                  <el-form-item label="学号" label-width="100">
                    <el-input v-model="formaddStu.num" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="名字" label-width="100">
                    <el-input v-model="formaddStu.name" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="院系" label-width="100">
                    <el-input v-model="formaddStu.dep" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="专业" label-width="100">
                    <el-input v-model="formaddStu.pro" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="班级" label-width="100">
                    <el-input v-model="formaddStu.class" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="性别" label-width="100">
                    <el-input v-model="formaddStu.sex" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="年级" label-width="100">
                    <el-input v-model="formaddStu.grade" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="电话" label-width="100">
                    <el-input v-model="formaddStu.tel" auto-complete="off" ></el-input>
                  </el-form-item>
                </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="addStudialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addStuFinal">确 定</el-button>
                  </span>
                </el-dialog>





                <!-- 教师信息管理页面 -->
                <div id="teacherwork" class="donghua">
                  <div class="search">
                      <el-input
                        placeholder="请输入姓名或者教工号进行查询"
                        prefix-icon="el-icon-search"
                        v-model="inputteacher" 
                        >
                      </el-input>
                  </div>
                        <div class="checkbutton">
                          <el-button type="primary" round >查询</el-button>  
                        </div>
                    <el-table
                      :data="tableTea"
                      style="width: 100%"
                      >
                      <el-table-column
                        prop="number"
                        :label="labelarr2[0]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        :label="labelarr2[1]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="department"
                        :label="labelarr2[2]">
                      </el-table-column>
                       <el-table-column
                        prop="sex"
                        :label="labelarr2[3]">
                      </el-table-column>
                       <el-table-column
                        prop="tel"
                        :label="labelarr2[4]">
                      </el-table-column>
                       <el-table-column
                        prop="use"
                        label="操作"
                        width="140px"> 
                        <template slot-scope="scope">
                          <el-button @click="" type="text" size="small" icon='el-icon-close' @click="handleDelete(scope.$index,tableTea,scope.row)">删除</el-button>
                          <el-button type="text" size="small" icon='el-icon-edit-outline' @click="editTea(scope.row)">修改</el-button>
                        </template>
                      </el-table-column>
                  </el-table>
                  <div class="foot">
                    <el-button type="danger" @click="addTea">增加</el-button>
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="70"
                      class="page">
                    </el-pagination> 
                  </div>
                </div>
                

                 <!-- 修改页面的弹窗 -->
                <el-dialog
                  title="修改页面"
                  :visible.sync="editTeadialogVisible"
                  width="30%"
                  >
                 <el-form :model="formEditTea">
                  <el-form-item label="教师工号" label-width="100">
                    <el-input v-model="formEditTea.num" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="名字" label-width="100">
                    <el-input v-model="formEditTea.name" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="院系" label-width="100">
                    <el-input v-model="formEditTea.dep" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="性别" label-width="100">
                    <el-input v-model="formEditTea.sex" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="电话" label-width="100">
                    <el-input v-model="formEditTea.tel" auto-complete="off" ></el-input>
                  </el-form-item>
                </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="editTeadialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="editTeaFinal">确 定</el-button>
                  </span>
                </el-dialog>

                <!-- 增加页面的弹窗 -->
                <el-dialog
                  title="增加页面"
                  :visible.sync="addTeadialogVisible"
                  width="30%"
                  >
                 <el-form :model="formAddTea">
                  <el-form-item label="教师工号" label-width="100">
                    <el-input v-model="formAddTea.num" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="名字" label-width="100">
                    <el-input v-model="formAddTea.name" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="院系" label-width="100">
                    <el-input v-model="formAddTea.dep" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="性别" label-width="100">
                    <el-input v-model="formAddTea.sex" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="电话" label-width="100">
                    <el-input v-model="formAddTea.tel" auto-complete="off" ></el-input>
                  </el-form-item>
                </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="addTeadialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addTeaFinal">确 定</el-button>
                  </span>
                </el-dialog>




                <!-- 督导信息管理界面 -->
                <div id="supwork">
                   <div class="search">
                      <el-input
                        placeholder="请输入姓名或者督导工号进行查询"
                        prefix-icon="el-icon-search"
                        v-model="inputsup"
                        >
                      </el-input>
                  </div>
                        <div class="checkbutton">
                          <el-button type="primary" round >查询</el-button>  
                        </div>
                    <el-table
                      :data="tableSup"
                      style="width: 100%"
                      >
                      <el-table-column
                        prop="number"
                        :label="labelarr3[0]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        :label="labelarr3[1]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="department"
                        :label="labelarr3[2]">
                      </el-table-column>
                       <el-table-column
                        prop="sex"
                        :label="labelarr3[3]">
                      </el-table-column>
                       <el-table-column
                        prop="tel"
                        :label="labelarr3[4]">
                      </el-table-column>
                       <el-table-column
                        prop="use"
                        label="操作"
                        width="140px"> 
                        <template slot-scope="scope">
                          <el-button @click="" type="text" size="small" icon='el-icon-close' @click="handleDelete(scope.$index,tableSup,scope.row)">删除</el-button>
                          <el-button type="text" size="small" icon='el-icon-edit-outline' @click="editSup(scope.row)">修改</el-button>
                        </template>
                      </el-table-column>
                  </el-table>
                  <div class="foot">
                    <el-button type="danger" @click="addSup">增加</el-button>
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="70"
                      class="page">
                    </el-pagination> 
                  </div>
                </div>



                <!-- 修改页面的弹窗 -->
                <el-dialog
                  title="修改页面"
                  :visible.sync="editSupdialogVisible"
                  width="30%"
                  >
                 <el-form :model="formEditSup">
                  <el-form-item label="教师工号" label-width="100">
                    <el-input v-model="formEditSup.num" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="名字" label-width="100">
                    <el-input v-model="formEditSup.name" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="院系" label-width="100">
                    <el-input v-model="formEditSup.dep" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="性别" label-width="100">
                    <el-input v-model="formEditSup.sex" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="电话" label-width="100">
                    <el-input v-model="formEditSup.tel" auto-complete="off" ></el-input>
                  </el-form-item>
                </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="editSupdialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="editSupFinal">确 定</el-button>
                  </span>
                </el-dialog>

                <!-- 增加页面的弹窗 -->
                <el-dialog
                  title="增加页面"
                  :visible.sync="addSupdialogVisible"
                  width="30%"
                  >
                 <el-form :model="formAddSup">
                  <el-form-item label="教师工号" label-width="100">
                    <el-input v-model="formAddSup.num" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="名字" label-width="100">
                    <el-input v-model="formAddSup.name" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="院系" label-width="100">
                    <el-input v-model="formAddSup.dep" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="性别" label-width="100">
                    <el-input v-model="formAddSup.sex" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="电话" label-width="100">
                    <el-input v-model="formAddSup.tel" auto-complete="off" ></el-input>
                  </el-form-item>
                </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="addSupdialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addSupFinal">确 定</el-button>
                  </span>
                </el-dialog>

            <!-- 班级信息管理界面 -->
                
                <div id="classwork">
                    <div class="search">
                      <el-input
                        placeholder="请输入课程号或者课程名进行查询"
                        prefix-icon="el-icon-search"
                        v-model="inputclass"
                        >
                      </el-input>
                  </div>
                        <div class="checkbutton">
                          <el-button type="primary" round >查询</el-button>  
                        </div>
                    <el-table
                      :data="tableClass"
                      style="width: 100%"
                      >
                      <el-table-column
                        prop="number"
                        :label="labelarr4[0]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        :label="labelarr4[1]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="department"
                        :label="labelarr4[2]">
                      </el-table-column>
                       <el-table-column
                        prop="teachername"
                        :label="labelarr4[3]">
                      </el-table-column>
                       <el-table-column
                        prop="use"
                        label="操作"
                        width="140px"> 
                        <template slot-scope="scope">
                          <el-button @click="" type="text" size="small" icon='el-icon-close' @click="handleDelete(scope.$index,tableClass,scope.row)">删除</el-button>
                          <el-button type="text" size="small" icon='el-icon-edit-outline' @click="editClass(scope.row)">修改</el-button>
                        </template>
                      </el-table-column>
                  </el-table>
                  <div class="foot">
                    <el-button type="danger" @click="addClass">增加</el-button>
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="70"
                      class="page">
                    </el-pagination> 
                  </div>
                </div>



              <!-- 修改页面的弹窗 -->
                <el-dialog
                  title="修改页面"
                  :visible.sync="editClassdialogVisible"
                  width="30%"
                  >
                 <el-form :model="formEditClass">
                  <el-form-item label="教师工号" label-width="100">
                    <el-input v-model="formEditClass.num" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="名字" label-width="100">
                    <el-input v-model="formEditClass.name" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="院系" label-width="100">
                    <el-input v-model="formEditClass.dep" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="性别" label-width="100">
                    <el-input v-model="formEditClass.teachername" auto-complete="off" ></el-input>
                  </el-form-item>
                </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="editClassdialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="editClassFinal">确 定</el-button>
                  </span>
                </el-dialog>

                <!-- 增加页面的弹窗 -->
                <el-dialog
                  title="增加页面"
                  :visible.sync="addClassdialogVisible"
                  width="30%"
                  >
                 <el-form :model="formAddClass">
                  <el-form-item label="教师工号" label-width="100">
                    <el-input v-model="formAddClass.num" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="名字" label-width="100">
                    <el-input v-model="formAddClass.name" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="院系" label-width="100">
                    <el-input v-model="formAddClass.dep" auto-complete="off" ></el-input>
                  </el-form-item>
                  <el-form-item label="性别" label-width="100">
                    <el-input v-model="formAddClass.teachername" auto-complete="off" ></el-input>
                  </el-form-item>
                </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="addClassdialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addClassFinal">确 定</el-button>
                  </span>
                </el-dialog>




            <!-- 打分记录查询 -->
            <!-- 学生教师评分查询 -->
                    <div id="Sgrade">
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
                    <el-table
                      :data="tableSgrade"
                      style="width: 100%"
                      >
                      <el-table-column
                        prop="student"
                        :label="labelarr5[0]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="teacher"
                        :label="labelarr5[1]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="classname"
                        :label="labelarr5[2]">
                      </el-table-column>
                       <el-table-column
                        prop="num1"
                        :label="labelarr5[3]">
                      </el-table-column>
                      <el-table-column
                        prop="num2"
                        :label="labelarr5[4]">
                      </el-table-column>
                      <el-table-column
                        prop="num3"
                        :label="labelarr5[5]">
                      </el-table-column>
                  </el-table>
                  <div class="foot">
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="70"
                      class="page">
                    </el-pagination> 
                  </div>
                </div>


                <!-- 督导教师打分表 -->

                    <div id="Supgrade">
                    <div class="search">
                      <el-input
                        placeholder="请输入督导名字或者督导学号进行查询"
                        prefix-icon="el-icon-search"
                        v-model="inputSupgrade"
                        >
                      </el-input>
                  </div>
                        <div class="checkbutton">
                          <el-button type="primary" round >查询</el-button>  
                        </div>
                    <el-table
                      :data="tableSupgrade"
                      style="width: 100%"
                      >
                      <el-table-column
                        prop="supname"
                        :label="labelarr6[0]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="teacher"
                        :label="labelarr6[1]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="classname"
                        :label="labelarr6[2]">
                      </el-table-column>
                       <el-table-column
                        prop="num1"
                        :label="labelarr6[3]">
                      </el-table-column>
                      <el-table-column
                        prop="num2"
                        :label="labelarr6[4]">
                      </el-table-column>
                      <el-table-column
                        prop="num3"
                        :label="labelarr6[5]">
                      </el-table-column>
                       <el-table-column
                        prop="text"
                        :label="labelarr6[6]">
                      </el-table-column>
                  </el-table>
                  <div class="foot">
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="70"
                      class="page">
                    </el-pagination> 
                  </div>
                </div>




            <!-- 教师同行打分表 -->

                    <div id="Tgrade">
                    <div class="search">
                      <el-input
                        placeholder="请输入督导名字或者督导学号进行查询"
                        prefix-icon="el-icon-search"
                        v-model="inputTgrade"
                        >
                      </el-input>
                  </div>
                        <div class="checkbutton">
                          <el-button type="primary" round >查询</el-button>  
                        </div>
                    <el-table
                      :data="tableTgrade"
                      style="width: 100%"
                      >
                      <el-table-column
                        prop="teacherone"
                        :label="labelarr7[0]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="teachertwo"
                        :label="labelarr7[1]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="num1"
                        :label="labelarr7[2]">
                      </el-table-column>
                       <el-table-column
                        prop="num2"
                        :label="labelarr7[3]">
                      </el-table-column>
                      <el-table-column
                        prop="num3"
                        :label="labelarr7[4]">
                      </el-table-column>
                      <el-table-column
                        prop="text"
                        :label="labelarr7[5]">
                      </el-table-column>
                  </el-table>
                  <div class="foot">
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="70"
                      class="page">
                    </el-pagination> 
                  </div>
                </div>


            <!-- 重置密码表 -->

                    <div id="Resetlist">
                    <div class="search">
                      <el-input
                        placeholder="请输入用户对应的唯一号码进行查询"
                        prefix-icon="el-icon-search"
                        v-model="inputReset"
                        >
                      </el-input>
                  </div>
                        <div class="checkbutton">
                          <el-button type="primary" round >查询</el-button>  
                        </div>
                    <el-table
                      :data="userTable"
                      style="width: 100%"
                      >
                      <el-table-column
                        prop="username"
                        :label="labelarr8[0]"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="number"
                        :label="labelarr8[1]"
                        >
                      </el-table-column>
                     <el-table-column
                        prop="use"
                        label="操作"
                        width="160px"> 
                        <template slot-scope="scope">
                          <el-button @click="" type="primary" size="small" >重置</el-button>
                          <el-button type="primary" size="small" >取消</el-button>
                        </template>
                      </el-table-column>
                  </el-table>
                  </el-table>
                  <div class="foot">
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :total="70"
                      class="page">
                    </el-pagination> 
                  </div>
                </div>


           </el-main>
  			</el-container>
		</el-container>	

	</div>
</template>

<script>

function clearAll(){
  var a =document.getElementById('supwork');
  a.style.display = "none";
  var b = document.getElementById('classwork');
   b.style.display = "none";
  var c =document.getElementById('teacherwork');
   c.style.display = "none";
  var d =document.getElementById('studentwork');
   d.style.display = "none";
  var e =document.getElementById('Tgrade');
   e.style.display = "none";
  var f =document.getElementById('Supgrade');
   f.style.display = "none";
  var g =document.getElementById('Sgrade');
   g.style.display = "none";
  var h =document.getElementById('Resetlist');
   h.style.display = "none";
}

export default {
    data() {
      return {
        formLabelWidth: '120px',
        formEditStu:{
              num:'',
              name:'',
              dep:'',
              pro:'',
              class:'',
              sex:'',
              grade:'',
              tel:''
        },
        formaddStu:{
              num:'',
              name:'',
              dep:'',
              pro:'',
              class:'',
              sex:'',
              grade:'',
              tel:''
        },
        formEditTea:{
              num:'',
              name:'',
              dep:'',
              sex:'',
              tel:''
        },
        formAddTea:{
              num:'',
              name:'',
              dep:'',
              sex:'',
              tel:''
        },
        formEditSup:{
              num:'',
              name:'',
              dep:'',
              sex:'',
              tel:''
        },
        formAddSup:{
              num:'',
              name:'',
              dep:'',
              sex:'',
              tel:''
        },
        formEditClass:{
              teachername:'',
              name:'',
              num:'',
              dep:''
        },
        formAddClass:{
              teachername:'',
              name:'',
              num :'',
              dep:''
        },
        editStudialogVisible:false,
        addStudialogVisible:false,
        editTeadialogVisible:false,
        addTeadialogVisible:false,
        editSupdialogVisible:false,
        addSupdialogVisible:false,
        editClassdialogVisible:false,
        addClassdialogVisible:false,
        loading:true,
        labelarr:["学号","名字", "院系","专业","班级","性别","年级","电话"],
        labelarr2:["教师工号","名字", "院系","性别","电话"],
        labelarr3:["督导工号","督导名字", "院系","性别","电话"],
        labelarr4:["课程号","课程名字", "课程所属院系","课程教师"],
        labelarr5:["打分学生","被打分教师","打分科目","所得分数1","所得分数2","所得分数3"],
        labelarr6:["打分督导","被打分教师","打分科目","所得分数1","所得分数2","所得分数3","建议"],
        labelarr7:["打分教师","被打分教师","所得分数1","所得分数2","所得分数3","建议"],
        labelarr8:["用户姓名","用户唯一号码"],
        inputstudent:'',
        inputteacher:'',
        inputsup:'',
        inputclass:'',
        inputSgrade:'',
        inputSupgrade:'',
        inputTgrade:'',
        inputReset:'',
        loading:false,
        data: [{
          label: '信息管理',
          children: [
          {label:'学生用户-信息管理'},
          {label:'教师用户-信息管理'},
          {label:'督导用户-信息管理'},
          {label:'院系课程-信息管理'}
          ]
        }, 
        {
          label: '评分管理',
          children: [
          {label: '学生-教师评分管理'}, 
          {label: '教师-教师评分管理'},
          {label: '督导-教师评分管理'}]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },



        tableStu: [{
            number: '8008208820',
            name: '天儿',
            department: '计算机系',
            major:'软件工程',
            class: '一班',
            sex: '男',
            grade: '2014',
            tel: '1008611'
          },
          {
            number: '8008208819',
            name: '猫儿',
            department: '外语系',
            major:'日语',
            class: '二班',
            sex: '女',
            grade: '2014',
            tel: '10086110'
          },
                    {
            number: '8008208820',
            name: '天儿',
            department: '计算机系',
            major:'软件工程',
            class: '一班',
            sex: '男',
            grade: '2014',
            tel: '1008611'
          }
          ],



          tableTea:[{
            number: '8008208820',
            name: '狗子',
            department: '计算机系',          
            sex: '男',
            tel: '1008611'
          },
          {
            number: '8008208820',
            name: '猫子',
            department: '计算机系',
            sex: '男',
            tel: '1008611'
          }],



          tableSup:[{
            number: '8008208820',
            name: '狗子',
            department: '计算机系',          
            sex: '男',
            tel: '1008611'
          },
          {
            number: '8008208820',
            name: '猫子',
            department: '计算机系',
            sex: '男',
            tel: '1008611'
          }],




          tableClass:[{
            number: '20145675',
            name: '软件工程',
            department: '计算机系',          
            sex: '男',
            teachername: '阿雪'
          },
          {
            number: '78889454',
            name: '计算机原理',
            department: '计算机系',
            sex: '男',
            teachername: '阿花'
          }],




          tableSgrade:[{
            student: '天儿',
            teacher: '二狗',
            classname: '计算机网络',          
            num1: 2,
            num2: 3,
            num3: 7,
            average:'',
            
          },
          {
            student: '猫儿',
            teacher: '二哈',
            classname: '计算机原理',          
            num1: 1,
            num2: 2,
            num3: 3,
            average:'',
            
          }],



           tableSupgrade:[{
            supname: '天儿',
            teacher: '二狗',
            classname: '计算机网络',          
            num1: 2,
            num2: 3,
            num3: 7,
            average:'',
            text:'声音洪亮，热情十足'
          },
          {
            supname: '猫儿',
            teacher: '二哈',
            classname: '计算机原理',          
            num1: 1,
            num2: 2,
            num3: 3,
            average:'',
            text:'上课纪律保持良好'
          }],



          tableTgrade:[{
            teacherone: '天儿',
            teachertwo: '二狗',
            classname: '计算机网络',          
            num1: 2,
            num2: 3,
            num3: 7,
            average:'',
            text:'上课纪律保持良好'
          },
          {
            teacherone: '天儿',
            teachertwo: '二狗',
            classname: '计算机原理',          
            num1: 1,
            num2: 2,
            num3: 3,
            average:'',
            text:'声音洪亮，热情十足'
          }],
          userTable:[
          {
            username:'天儿',
            number:'20142344006'
            
          },

          ]
      }
    },
    methods: {
      handleNodeClick(data) {
        if(data.label == '学生用户-信息管理'){
          this.loading = true;
          setTimeout(() => {
          this.loading = false;
        }, 500);
          clearAll(); 
          let a = document.getElementById('studentwork');
          a.style.display='block';
        };
        if (data.label == '教师用户-信息管理') {
          clearAll(); 
          let a = document.getElementById('teacherwork');
          a.style.display='block';
        };
        if (data.label == '督导用户-信息管理') {
          clearAll(); 
          let a = document.getElementById('supwork');
          a.style.display='block';
        };
        if (data.label == '院系课程-信息管理') {
          clearAll(); 
          let a = document.getElementById('classwork');
          a.style.display='block';
        };
        if (data.label == '学生-教师评分管理') {
          clearAll(); 
          let a = document.getElementById('Sgrade');
          a.style.display='block';
        };
        if (data.label == '教师-教师评分管理') {
          clearAll(); 
          let a = document.getElementById('Tgrade');
          a.style.display='block';
        };
        if (data.label == '督导-教师评分管理') {
          clearAll(); 
          let a = document.getElementById('Supgrade');
          a.style.display='block';
        };

      },
      resetMethod(){
          clearAll(); 
          let a = document.getElementById('Resetlist');
          a.style.display='block';
      },
      editMethod(){
          this.$router.push('/EditPassword/EditPass');
      },
      handleDelete(index,table,row){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          table.splice(index,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      editStu(row){
        console.log(row);
        console.log(this.formEditStu);
        this.editStudialogVisible= true;
        this.formEditStu.name = row.name;
        this.formEditStu.class = row.class;
        this.formEditStu.pro = row.major;
        this.formEditStu.num = row.number;
        this.formEditStu.dep = row.department;
        this.formEditStu.sex = row.sex;
        this.formEditStu.grade = row.grade;
        this.formEditStu.tel = row.tel;
      },
      addStu(){
        this.addStudialogVisible= true;
      },
      editStuFinal(){
        this.editStudialogVisible = false;
        console.log(this.formEditStu);
      },
      addStuFinal(){
        this.addStudialogVisible = false;
        console.log(this.formaddStu);
      },
      editTea(row){
        console.log(row);
        this.editTeadialogVisible= true;
        this.formEditTea.name = row.name;
        this.formEditTea.class = row.class;
        this.formEditTea.num = row.number;
        this.formEditTea.dep = row.department;
        this.formEditTea.sex = row.sex;
      },
      addTea(){
        this.addTeadialogVisible= true;
      },
      editTeaFinal(){
        this.editTeadialogVisible = false;
        console.log(this.formEditTea);
      },
      addTeaFinal(){
        this.addTeadialogVisible = false;
        console.log(this.formAddTea);
      },
      editSup(row){
        console.log(row);
        this.editSupdialogVisible= true;
        this.formEditSup.name = row.name;
        this.formEditSup.class = row.class;
        this.formEditSup.num = row.number;
        this.formEditSup.dep = row.department;
        this.formEditSup.sex = row.sex;
      },
      addSup(){
        this.addSupdialogVisible= true;
      },
      editSupFinal(){
        this.editSupdialogVisible = false;
        console.log(this.formEditSup);
      },
      addSupFinal(){
        this.addSupdialogVisible = false;
        console.log(this.formAddSup);
      },
      editClass(row){
        console.log(row);
        this.editClassdialogVisible= true;
        this.formEditClass.teachername = row.teachername;
        this.formEditClass.name = row.name;
        this.formEditClass.num = row.number;
        this.formEditClass.dep = row.department;
      },
      addClass(){
        this.addClassdialogVisible= true;
      },
      editClassFinal(){
        this.editClassdialogVisible = false;
        console.log(this.formEditClass);
      },
      addClassFinal(){
        this.addClassdialogVisible = false;
        console.log(this.formAddClass);
      },

    },
    created:function(){

    },
    mounted: function(){
    var maindiv = document.getElementById("main");
    	maindiv.style.width = '1300px';
    	maindiv.style.height = '680px';

	}
  };
</script>

<style scoped>
	#main{
		margin: 0 auto;
		margin-top: 100px;
	}
	
	.nav{
		margin-top: 100px;
		background-color: #c6d1e2;
	}

	.el-aside{
		background-color: #c6d1e2;
	}
  .reset{
    color: #606266;
    font-size: 14px;
    padding-left: 24px;
    padding-top: 5px;
    cursor:pointer;
  }

  .reset:hover{
    background-color: white;
  }

	.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .leftMe{
  	margin-left: 200px;
  }	

  .rightMe{
	float: right;
	margin-right: 200px
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .page{
    float: right;
  } 
  body > .el-container {
    margin-bottom: 40px;
  }
  .foot{
    margin-top: 25px;
  }
  .search{
    width: 300px;
    padding-bottom: 10px;
    float: left;

  }

  #studentwork{
    display: none;
  }

  #teacherwork{
    display: none;
  }

  #supwork{
    display: none;
  }
  
  #classwork{
    display: none;
  }
  
  #Sgrade{
    display: none;
  }
  
  #Supgrade{
    display: none;
  }

  #Tgrade{
    display: none;
  }

  #Resetlist{
    display: none;
  }
  .checkbutton{
    float: left;
    margin-left: 10px;
  }

</style>