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
}