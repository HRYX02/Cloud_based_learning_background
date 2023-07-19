import request from '@/utils/request'
export default {

    /**
     * @description 添加小节
     * @author SxxStar
     */
    addVideo(video) {
        return request({
            url: '/eduservice/video/addVideo/',
            method: 'post',
            data: video
        })
    },
    

    /**
     * @description 删除小节
     * @author SxxStar
     */
    deleteVideo(videoId) {
        return request({
            url: `/eduservice/video/${videoId}`,
            method: 'delete'
          })
    },

    /**
     * @description 根据id查询小节
     * @author SxxStar
     */
    getVideo(videoId) {
        return request({
            url: `/eduservice/video/getVideoInfo/${videoId}`,
            method: 'get'
          })
    },

    /**
     * @description 修改章节
     * @author SxxStar
     */
    updateVideo(video) {
        return request({
            url: '/eduservice/video/updateVideo',
            method: 'post',
            data: video
          })
    },

    /**
     * @description 删除视频
     * @author SxxStar
     */
    deleteAlYunVideo(id) {
        return request({
            url: `/vodservice/video/removeAlYunVideo/${id}`,
            method: 'delete',
        })
    },
}