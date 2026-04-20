<template>
    <CommonBar>
        <s-scroll-view class="room-manage-container">
            <div class="header">
                <span>自习室管理</span>
                <s-button @click="showAddDialog = true" class="add-btn">添加自习室</s-button>
            </div>

            <div v-if="loading" class="loading">加载中...</div>
            <div v-else-if="roomList.length === 0" class="empty">暂无自习室</div>
            <div v-else class="room-list">
                <div v-for="room in roomList" :key="room.room_id" class="room-item">
                    <div class="room-info">
                        <div class="room-name">{{ room.room_name }}</div>
                        <div class="room-capacity">容量: {{ room.capacity }}人</div>
                    </div>
                    <div class="room-actions">
                        <s-button @click="handleEdit(room)" class="btn-edit">编辑</s-button>
                        <s-button @click="handleDelete(room.room_id)" class="btn-delete">删除</s-button>
                    </div>
                </div>
            </div>

            <!-- 添加/编辑对话框 -->
            <div v-if="showAddDialog || showEditDialog" class="dialog-overlay" @click="closeDialog">
                <div class="dialog-content" @click.stop>
                    <div class="dialog-header">
                        <h3>{{ showAddDialog ? '添加自习室' : '编辑自习室' }}</h3>
                        <span class="close-btn" @click="closeDialog">×</span>
                    </div>
                    <div class="dialog-body">
                        <div class="form-item">
                            <label>自习室名称</label>
                            <input v-model="formData.room_name" type="text" placeholder="请输入自习室名称">
                        </div>
                        <div class="form-item">
                            <label>容量</label>
                            <input v-model.number="formData.capacity" type="number" placeholder="请输入容量">
                        </div>
                    </div>
                    <div class="dialog-footer">
                        <s-button @click="closeDialog" class="btn-cancel">取消</s-button>
                        <s-button @click="handleSubmit" class="btn-confirm">确定</s-button>
                    </div>
                </div>
            </div>
        </s-scroll-view>
    </CommonBar>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import CommonBar from '@/components/CommonBar/index.vue'
import { GetRoomList } from '@/api/room/api'
import type { RoomInfo } from '@/api/room/type'
import { ElMessage, ElMessageBox } from 'element-plus'

let roomList = ref<RoomInfo[]>([])
let loading = ref(true)
let showAddDialog = ref(false)
let showEditDialog = ref(false)
let editingRoomId = ref(0)

let formData = reactive({
    room_name: '',
    capacity: 0
})

const loadRoomList = async () => {
    try {
        loading.value = true
        const res = await GetRoomList()
        if (res.code === 1 || res.code === 0) {
            roomList.value = res.data || []
        } else {
            ElMessage.error('获取自习室列表失败')
        }
    } catch (error) {
        ElMessage.error('网络错误')
    } finally {
        loading.value = false
    }
}

const handleEdit = (room: RoomInfo) => {
    editingRoomId.value = room.room_id
    formData.room_name = room.room_name
    formData.capacity = room.capacity
    showEditDialog.value = true
}

const handleDelete = async (room_id: number) => {
    try {
        await ElMessageBox.confirm('确定要删除这个自习室吗？', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        })

        // TODO: 调用删除接口
        ElMessage.success('删除成功')
        loadRoomList()
    } catch (error) {
        if (error !== 'cancel') {
            ElMessage.error('删除失败')
        }
    }
}

const handleSubmit = async () => {
    if (!formData.room_name || formData.capacity <= 0) {
        ElMessage.warning('请填写完整信息')
        return
    }

    try {
        if (showAddDialog.value) {
            // TODO: 调用添加接口
            ElMessage.success('添加成功')
        } else {
            // TODO: 调用更新接口
            ElMessage.success('更新成功')
        }
        closeDialog()
        loadRoomList()
    } catch (error) {
        ElMessage.error('操作失败')
    }
}

const closeDialog = () => {
    showAddDialog.value = false
    showEditDialog.value = false
    formData.room_name = ''
    formData.capacity = 0
    editingRoomId.value = 0
}

onMounted(() => {
    loadRoomList()
})
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
