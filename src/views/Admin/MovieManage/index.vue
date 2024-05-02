<template>
    <div>

        <el-row>
            <el-col :span="2"></el-col>
            <el-col :span="20">
                <!-- 省份表格 -->
                <el-table :data="tableData.data" stripe style="width: 100%">
                    <el-table-column label="序号" prop="ID"> <template #default="scope">
                            {{ scope.$index + 1 }}
                        </template></el-table-column>
                    <el-table-column label="标题" prop="title" />
                    <el-table-column label="发表者" prop="username" />
                    <el-table-column label="发布时间">
                        <template #default="scope">
                            {{ formatTime(scope.row.CreatedAt) }}
                        </template>
                    </el-table-column>
                    <el-table-column align="center">
                        <template #header>
                            <el-input v-model="search" size="large" placeholder="Type to search" />
                        </template>
                        <template #default="scope">
                            <!-- 查看的按钮还没做 管理员没有编辑用户文章权利只能查看 -->
                            <el-button size="small" type="success" @click="handleEdit(scope.row.ID)">查看</el-button>
                            <el-button size="small" type="danger" @click="showDeleteDialog(scope.row.ID)">删除</el-button>

                        </template>
                    </el-table-column>




                </el-table><el-dialog v-model="DeleteDialogVisible" title="Warning" width="500" center>
                    <span>
                        确定删除该文章吗
                    </span>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button @click="DeleteDialogVisible = false">Cancel</el-button>
                            <el-button type="primary" @click="handleDelete()">
                                Confirm
                            </el-button>
                        </div>
                    </template>
                </el-dialog>

            </el-col>
            <el-col :span="2"></el-col>
        </el-row>



    </div>

</template>
<script>
import { ref, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { CascaderProps } from 'element-plus'
export default {
    setup(props, context) {

        // const store = useStore()
        // const DeleteDialogVisible = ref(false)
        // const selectedRowID = ref()


        // // 存放全部文章数据
        // const tableData = reactive(
        //     {
        //         data: []
        //     }
        // )

        // const getArticles = () => {
        //     store.dispatch('article/getArticles', '').then(response => {
        //         console.log(response.data);
        //         tableData.data = response.data

        //     }).catch(err => {
        //         console.log(err);
        //     })
        // }
        // // 打开删除对话框，复制选中行ID
        // const showDeleteDialog = (data) => {
        //     DeleteDialogVisible.value = !DeleteDialogVisible.value
        //     selectedRowID.value = data
        // }
        // // 表格

        // const search = ref('')

        // const handleEdit = (ID) => {
        //     console.log(ID)
        // }
        // const handleDelete = () => {
        //     console.log(selectedRowID.value)
        //     const data = {
        //         "ID": selectedRowID.value
        //     }
        //     store.dispatch("article/deleteArticleByID", data).then(response => {
        //         console.log(response);
        //         ElMessage({
        //             message: '删除成功',
        //             type: 'success',
        //         })
        //         getArticles()
        //     }).catch(err => {
        //         console.log(err);
        //     })
        //     DeleteDialogVisible.value = !DeleteDialogVisible.value
        // }


        // onMounted(() => {
        //     getArticles()



        // });



        // return {

        //     tableData,
        //     formatTime,
        //     handleEdit,
        //     handleDelete,
        //     DeleteDialogVisible,
        //     showDeleteDialog



        // }


    }
}
</script>
<style lang="scss" scoped>
.table {
    margin-top: 20px;
}
</style>