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
}