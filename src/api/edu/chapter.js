import request from '@/utils/request'
export default {
    /**
     * @description 根据课程id获取章节和小节数据列表
     * @author SxxStar
     */
    getAllChapterVideo(courseId) {
        return request({
            url: `/eduservice/chapter/getChapterVideo/${courseId}`,
            method: 'get'
          })
    },

    /**
     * @description 添加章节
     * @author SxxStar
     */
    addChapter(chapter) {
        return request({
            url: '/eduservice/chapter/addChapter/',
            method: 'post',
            data: chapter
        })
    },
    /**
     * @description 根据id查询章节
     * @author SxxStar
     */
    getChapter(chapterId) {
        return request({
            url: `/eduservice/chapter/getChapterInfo/${chapterId}`,
            method: 'get'
          })
    },
    /**
     * @description 修改章节
     * @author SxxStar
     */
    updateChapter(chapter) {
        return request({
            url: '/eduservice/chapter/updateChapter',
            method: 'post',
            data: chapter
          })
    },

    /**
     * @description 删除章节
     * @author SxxStar
     */
    deleteChapter(chapterId) {
        return request({
            url: `/eduservice/chapter/${chapterId}`,
            method: 'delete'
          })
    },
}