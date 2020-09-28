<template>
	<div class="app-container">
		<!--头部header-->
		<header id="header" class="mui-bar mui-bar-nav" v-if="flag">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">{{title}}</h1>
		</header>
		<header v-else="flag" class="mui-bar mui-bar-nav">
            <div class="icon-location-box">
                <div class="icon-location"></div>
            </div>
            <div class="location-text">沈阳市规划大厦<i class="fa fa-caret-down"></i></div>
        </header>
        
		<!--主体-->
		<transition>
			<router-view @func='getTitle'></router-view>
		</transition>
		<!--tabbar-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/find">
				<span class="mui-icon mui-icon-extra mui-icon-extra-find"></span>
				<span class="mui-tab-label">发现</span>
			</router-link>
			<router-link class="mui-tab-item " to="/order">
				<span class="mui-icon mui-icon-extra mui-icon-extra-order"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">订单</span>
			</router-link>
			<router-link class="mui-tab-item" to="/my">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
	</div> 
</template>

<script>
	export default {
		data() {
			return {
				flag: false,
				title: ''
			}
		},
		methods: {
			getTitle(data) {
				this.flag = data.flag;
				this.title = data.title;
			}
		}
	}
</script>

<style scoped>
	
	.app-container {
		margin-top: 12vw;
		overflow-x: hidden;
		background: white;
		height: 100vh;
	}
	/****************** header ******************/

.app-container header{
    width: 100%;
    height: 12vw;
    background-color: #0097FF;

    display: flex;
    align-items: center;
}
.app-container header .icon-location-box{
    width: 3.5vw;
    height: 3.5vw;
    margin: 0 1vw 0 3vw;
}
.app-container header .location-text{
    font-size: 4.5vw;
    font-weight: 700;
    color: #fff;
}
.app-container header .location-text .fa-caret-down{
    margin-left: 1vw;
}
	.mui-bar-nav {
		background-color: #0097FF;
	}
	.mui-bar-nav a {
		color: white;
	}
	.mui-title {
		color: white;
	}
	
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	
	.v-enter-active,
	.v-leave-action {
		transition: all 0.4s ease;
	}
</style>