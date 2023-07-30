import request from '@/utils/request'
export default {

    /**
     * @description 生成统计数据
     * @param {*} day 
     * @returns 
     */
    createStaData(day) {
        return request({
            url: `/statisticsservice/sta/registerCount/${day}`,
            method: 'post'
          })
    },

    /**
     * @description 获取统计数据
     * @param {*} searchObj 
     * @returns 
     */
    getDataSta(searchObj) {
        return request({
            url: `/statisticsservice/sta/showData/${searchObj.type}/${searchObj.begin}/${searchObj.end}`,
            method: 'get'
          })
    }

}