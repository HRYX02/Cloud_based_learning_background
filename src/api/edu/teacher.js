import request from '@/utils/request'
export default {

	/** 
	 * 1 讲师列表(条件查询分页)
	 * @current 当前页
	 * @limit 每页记录数
	 * @teacherQuery 条件对象
	 */
	getTeacherListPage(current, limit, teacherQuery) {
		return request({
			url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
			method: 'post',
			// teacherQuery条件对象，后端使用RequestBody获取数据
			// data表示把对象转换json进行传递到接口里面
			data: teacherQuery,
			//params: {}不可用于json数据
		})
	},


	/**
	 * 2 删除讲师
	 */
	deleteTeacherId(id) {
		return request({
			url: `/eduservice/teacher/${id}`,
			method: 'delete'
		})
	},

	/**
	 * @description 添加讲师
	 * @author SxxStar
	 */
	addTeacher(teacher) {
		return request({
			url: `/eduservice/teacher/addTeacher`,
			method: 'post',
			data: teacher
		})
	},

	/**
	 * @description 获取指定ID讲师数据
	 * @author SxxStar
	 */
	getTeacherInfo(id) {
		return request({
			url: `/eduservice/teacher/getTeacher/${id}`,
			method: 'get',
		})
	},

	/**
	 * @description 修改讲师
	 * @author SxxStar
	 */
	updateTeacher(teacher) {
		return request({
			url: `/eduservice/teacher/updateTeacher`,
			method: 'post',
			data: teacher
		})
	}
}