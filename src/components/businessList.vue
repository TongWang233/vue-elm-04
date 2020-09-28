<template>
	<div>
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../images/sj01.jpg">
						<div class="mui-media-body">
							<h3>万家饺子（软件园E18店）</h3>
							<p class='mui-ellipsis'>¥15起送 | ¥3配送</p>
							<p class='mui-ellipsis'>各种饺子炒菜</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../images/sj01.jpg">
						<div class="mui-media-body">
							木屋
							<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../images/sj01.jpg">
						<div class="mui-media-body">
							CBD
							<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
						</div>
					</a>
				</li>

			</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		created() {
			this.$emit('func', {flag: true, title: '商家列表'})
		}
	}
</script>

<style scoped>
	.mui-table-view .mui-media-object {
		max-width: 20vw;
		height: 20vw;
		
	}
	.mui-media-body {
		line-height: 6.5vw;
	}
	.mui-media-body h3 {
		font-size: 4.5vw;
		
	}
	.mui-media-body p {
		font-size: 3vw;
	}
</style>