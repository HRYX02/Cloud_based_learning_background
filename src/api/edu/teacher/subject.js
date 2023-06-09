import request from '@/utils/request'
export default {

    /** 
     * @description 课程分类列表
     * @author SxxStar
     */
    getSubjectList() {
        return request({
            url: '/eduservice/subject/getAllSubject',
            method: 'get',
        })
    },
}