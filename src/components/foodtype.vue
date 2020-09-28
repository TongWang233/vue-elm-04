<template>
	<div>
		<router-link to="/components/businessList">
			<li>
	            <img :src="'/src/images/' + type.img">
	            <p>{{type.name}}</p>
	        </li>
		</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: [
			'type'
		]
	}
</script>

<style scoped>
li{
    /*一共10个子元素，通过计算，子元素宽度在16.7 ~ 20 之间，才能保证换两行*/
    width: 18vw;
    height: 20vw;

    display: flex;
    /*弹性盒子主轴方向设为column，然后仍然是垂直水平方向居中*/
    flex-direction: column;
    justify-content: center;
    align-items: center;

    user-select: none;
    cursor: pointer;
}
li img{
    width: 12vw;
    /*视频讲解时高度设置为12vw，实际上设置为10.3vw更佳*/
    height: 10.3vw;
}
li p{
    font-size: 3.2vw;
    color: #666;
}
</style>