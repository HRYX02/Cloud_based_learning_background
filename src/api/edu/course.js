import request from '@/utils/request'
export default {

    /** 
     * @description 添加课程信息
     * @author SxxStar
     */
    addCourseInfo(courseInfo) {
        return request({
            url: '/eduservice/course/addCourseInfo',
            method: 'post',
            data: courseInfo,
        })
    },

    /** 
     * @description 查询所有讲师
     * @author SxxStar
     */
    getListTeacher() {
        return request({
            url: '/eduservice/teacher/findAll',
            method: 'get',
        })
    },

    /**
     * @description 根据课程ID查询课程的基本信息
     * @author SxxStar
     */
    getCourseInfoId(id) {
        return request({
            url: `/eduservice/course/getCourseInfo/${id}`,
            method: 'get',
        })
    },

    /**
     * @description 修改课程信息
     * @author SxxStar
     */
    updateCourseInfo(courseInfo) {
        return request({
            url: '/eduservice/course/updateCourseInfo',
            method: 'post',
            data: courseInfo,
        })
    },

    /**
     * @description 课程确认信息显示
     * @author SxxStar
     */
    getPublihCourseInfo(id) {
        return request({
            url: `/eduservice/course/getPublishCourseInfo/${id}`,
            method: 'get'
          })
    },

    /**
     * @description 课程最终发布
     * @author SxxStar
     */
    publishCourse(id) {
        return request({
            url: `/eduservice/course/publishCourse/${id}`,
            method: 'post'
          })
    }

}