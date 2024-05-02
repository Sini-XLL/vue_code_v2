<template>
    <div>
        <el-table :data="tableData.data" style="width: 100%">
            <el-table-column type="expand">
                <template #default="props">
                    <div m="4">
                        <p m="t-0 b-2">
                            <el-image :src="props.row.avatar" fit="fit">
                                <template #error>
                                    <div class="image-slot">
                                        <el-icon>
                                            <WarningFilled />
                                        </el-icon>
                                    </div>
                                </template>
                            </el-image>
                        </p>
                        <p m="t-0 b-2">用户名: {{ props.row.nick_name }}</p>
                        <p m="t-0 b-2">手机号码: {{ props.row.phone }}</p>
                        <p m="t-0 b-2">会员等级: <el-tag size="small" type="danger">
                                {{ props.row.is_member == 0 ? "普通会员" : "银卡会员" }}</el-tag></p>
                        <p m="t-0 b-2">邮箱: {{ props.row.email }}
                        </p>
                        <p m="t-0 b-2">注册时间: {{ formatTime(props.row.CreatedAt) }}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="序号" prop="ID" />
            <el-table-column label="账号" prop="username" />
            <el-table-column label="操作">
                <template #default="props">
                    <el-button type="primary" @click="editUser(props)">编辑</el-button>
                    <el-button type="danger" @click="deleteUser(props)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';



export default {
    setup() {

        const tableData = reactive({
            data: []
        })
        const store = useStore()
        // const getUsers = () => {
        //     store.dispatch("app/getUsers").then(response => {
        //         console.log(response);
        //         tableData.data = response.data
        //     }).catch(err => {
        //         console.log(err);
        //     })
        // }
        // onMounted(() => {
        //     getUsers()

        // })

        return {
            tableData,

        };
    },
};
</script>
<style lang="scss" scoped>
.el-image {
    padding: 0 5px;
    max-width: 300px;
    max-height: 200px;
    width: 100px;
    height: 100px;
}

.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 30px;
}

.image-slot .el-icon {
    font-size: 30px;
}
</style>