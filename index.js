var fun_aut_count_value = [
	{
		"value_id": "user",
		"count_id": "count_user",
	},
	{
		"value_id": "psd",
		"count_id": "count_psd",
	},
];

fun_aut_count_value.forEach((key) => {
	document.getElementById(key["value_id"]).addEventListener("input", () => {
		document.getElementById(key["count_id"]).innerText = document.getElementById(key["value_id"]).value.length;
	});
});
//
//
// 作用:自动获取输入框的字数填入某一个元素内
// 副作用:无论是输入框还是被填入的元素都需要指定一个id
// value_id 输入框的id
// count_id 需要填进哪个元素内
// 思路:遍历数组,对数组内的元素进行监听事件绑定
//
//

/**
 *
 * @param {*} name 要获取cookie的名称
 * @returns
 */
function get_cookie(name) {
	// 获取所有cookie项（用分号+空格分隔）
	var cookies = document.cookie.split("; ");

	// 遍历每个cookie，查找目标名称的cookie
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];

		// 判断此cookie是否为目标名称的cookie
		if (cookie.indexOf(name + "=") === 0) {
			// 如果是，则返回cookie值
			return decodeURIComponent(cookie.substring(name.length + 1));
		}
	}

	// 如果未找到目标cookie，则返回null
	return null;
}

/**
 *
 * @param {string} name 要设置的cookie名称
 * @param {string} value 要设置的值
 * @param {number} days 设置的时间 单位 天 默认为会话级别
 */

function set_cookie(name, value, days) {
	var expires = "";

	if (days) {
		if (days === -1) {
			// 设置为永不过期
			expires = "; expires=Fri, 9999年12月31日 23:59:59 GMT";
		} else {
			var date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			expires = "; expires=" + date.toUTCString();
		}
	}

	document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}
