<template>
    <div class="app-container">
        <el-form label-width="120px">

            <el-form-item label="轮播图名称">
                <el-input v-model="banner.title" />
            </el-form-item>

            <el-form-item label="展示页">
                <el-input v-model="banner.linkUrl" />
            </el-form-item>

            <el-form-item label="轮播图排序">
                <el-input-number v-model="banner.sort" controls-position="right" :min="0" />
            </el-form-item>


            <el-form-item label="轮播图">

                <el-image :src="banner.imageUrl"></el-image>

                <br>

                <!-- 文件上传按钮 -->
                <el-button type="primary" icon="el-icon-upload" @click="imagecropperShow = true">
                    上传轮播图
                </el-button>

                <!--
                    v-show：是否显示上传组件
                    :key：类似于id，如果一个页面多个图片上传控件，可以做区分
                    :url：后台上传的url地址
                    @close：关闭上传组件
                    @crop-upload-success：上传成功后的回调
                -->
                <image-cropper v-show="imagecropperShow" :width="300" :height="300" :key="imagecropperKey"
                    :url="'/ossservice/fileoss'" field="file" @close="close" @crop-upload-success="cropSuccess" />
            </el-form-item>

            <el-form-item>
                <el-button :disabled="saveBtnDisabled" type="primary" @click="saveBanner">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script>
import bannerApi from '@/api/cms/banner';
import ImageCropper from '@/components/ImageCropper';
export default {
    components: { ImageCropper },
    name: 'Save',
    data() {
        return {
            banner: {
                title: '',
                linkUrl: '',
                sort: 0,
                imageUrl: '',
            },

            // 上传弹框组件是否显示
            imagecropperShow: false,
            // 上传组件key的值
            imagecropperKey: 0,
            // 保存按钮是否禁用,
            saveBtnDisabled: false
        }
    },
    // 页面渲染之前执行
    created() {
        this.init()
    },

    watch: {  //监听
        $route(to, from) { //路由变化方式，路由发生变化，方法就会执行
            this.init()
        }
    },

    methods: {

        /**
         * @description 根据ID进行查询对数据进行回显
         * @author SxxStar
         */
        init() {
            //判断路径有id值,做修改
            if (this.$route.params && this.$route.params.id) {
                //从路径获取id值
                const id = this.$route.params.id
                //调用根据id查询的方法
                this.getInfo(id)
            } else { //路径没有id值，做添加
                //清空表单
                this.teacher = {}
            }
        },


        /**
         * @description 添加讲师
         * @author SxxStar
         */
        saveBanner() {
            bannerApi.addBanner(this.banner)
                // 添加成功
                .then(response => {
                    // 提示信息
                    this.$message({
                        type: 'success',
                        message: '轮播图添加成功'
                    });
                    // 回到列表页面 路由跳转
                    this.$router.push({ path: '/banner/list' })
                })
                .catch(error => {
                    // 提示信息
                    this.$message.error('轮播图添加失败');
                })
        },

        /**
         * @description 关闭上传弹框的方法
         * @author SxxStar
         */
        close() {
            this.imagecropperShow = false
            this.imagecropperKey = this.imagecropperKey + 1
        },

        /**
         * @description 上传成功后的方法
         * @author SxxStar
         */
        cropSuccess(data) {
            this.imagecropperShow = false
            // 上传之后接口返回图片地址
            this.banner.imageUrl = data.url
            this.imagecropperKey = this.imagecropperKey + 1
        }

    }

}
</script>
  
<style></style>