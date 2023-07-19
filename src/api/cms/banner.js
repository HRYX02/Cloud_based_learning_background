import request from '@/utils/request'
export default {

	/** 
	 * 1 轮播图列表(条件查询分页)
	 * @current 当前页
	 * @limit 每页记录数
	 * @teacherQuery 条件对象
	 */
	getBannerListPage(page,limit) {
		return request({
			url: `/cmsservice/bannerbackground/pageBanner/${page}/${limit}`,
			method: 'get',
		})
	},

    /**
	 * @description 添加轮播图
	 * @author SxxStar
	 */
	addBanner(banner) {
		return request({
			url: `/cmsservice/bannerbackground/addBanner`,
			method: 'post',
			data: banner
		})
	},

    deleteBanner(id) {
		return request({
			url: `/cmsservice/bannerbackground/remove/${id}`,
			method: 'delete'
		})
	},
}