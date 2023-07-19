<template>
    <div class="app-container">
        <!-- 表格 -->
        <el-table :data="list" border fit highlight-current-row>

            <el-table-column label="序号" width="70" align="center">
                <template slot-scope="scope">
                    {{ (page - 1) * limit + scope.$index + 1 }}
                </template>
            </el-table-column>

            <el-table-column prop="imageUrl" label="轮播图">
                <template slot-scope="scope">
                     <el-image :src="scope.row.imageUrl" :fit="scale-down"></el-image>
                </template>
            </el-table-column>

            <el-table-column prop="imageUrl" label="图片地址" />

            <el-table-column prop="linkUrl" label="展示页" />

            <el-table-column prop="gmtCreate" label="添加时间" width="160" />

            <el-table-column prop="sort" label="排序" width="60" />

            <el-table-column label="操作" width="200" align="center">
                <template slot-scope="scope">
                    <el-button type="danger" size="medium" icon="el-icon-delete"
                        @click="removeDataById(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination :current-page="page" :page-size="limit" :total="total" style="padding: 30px 0; text-align: center;"
            layout="total, prev, pager, next, jumper" @current-change="getList" />

    </div>
</template>

<script>
import banner from '@/api/cms/banner';
export default {
    name: 'List',
    data() {
        return {
            // 总记录数
            total: 0,
            page: 1,
            limit: 10,
            // 查询接口返回的集合
            list: null,
        };
    },
    created() {
        this.getList()
    },
    methods: {
        /**
         * @description 获取轮播图列表的方法
         * @author SxxStar
         */
        getList(page = 1) {
            this.page = page
            banner.getBannerListPage(this.page, this.limit)
                // 请求成功
                .then(response => {
                    // response代表接口返回的数据
                    this.total = response.data.total
                    this.list = response.data.records
                })
                // 请求失败
                .catch(error => {
                    console.log(error)
                });
        },

        /**
		 * @description 删除讲师的方法
		 * @author SxxStar
		 */
		removeDataById(id) {
			this.$confirm('此操作将永久删除讲师记录, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'

				//点击确定，执行then方法
			}).then(() => {
				//调用删除的方法
				banner.deleteBanner(id)
					.then(response => {
						// 提示信息
						this.$message({
							type: 'success',
							message: '删除成功!'
						});
						// 回到列表页面
						this.getList()
					})
					.catch(error => {

					})
				// 点击取消，执行catch方法
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消'
				});
			})
		}
    }
}
</script>

<style></style>