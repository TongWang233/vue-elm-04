<template>
	<div class="wrapper">

	    <!-- header部分 -->
		<div class="orderbox">
		    <!-- 订单列表部分 -->
		    <h3>未支付订单信息：</h3>
		    <ul class="order">
		        <li>
		            <div class="order-info">
		                <p>
		                    万家饺子（软件园E18店）
		                    <i class="fa fa-caret-down"></i>
		                </p>
		                <div class="order-info-right">
		                    <p>&#165;49</p>
		                    <div class="order-info-right-icon">去支付</div>
		                </div>
		            </div>
		            <ul class="order-detailet">
		                <li>
		                    <p>纯肉鲜肉（水饺） x 2</p>
		                    <p>&#165;15</p>
		                </li>
		                <li>
		                    <p>玉米鲜肉（水饺） x 1</p>
		                    <p>&#165;16</p>
		                </li>
		                <li>
		                    <p>配送费</p>
		                    <p>&#165;3</p>
		                </li>
		            </ul>
		        </li>
		        <li>
		            <div class="order-info">
		                <p>
		                    小锅饭豆腐馆（全运店）
		                    <i class="fa fa-caret-down"></i>
		                </p>
		                <div class="order-info-right">
		                    <p>&#165;55</p>
		                    <div class="order-info-right-icon">去支付</div>
		                </div>
		            </div>
		            <ul class="order-detailet">
		                <li>
		                    <p>纯肉鲜肉（水饺） x 2</p>
		                    <p>&#165;15</p>
		                </li>
		                <li>
		                    <p>玉米鲜肉（水饺） x 1</p>
		                    <p>&#165;16</p>
		                </li>
		                <li>
		                    <p>配送费</p>
		                    <p>&#165;3</p>
		                </li>
		            </ul>
		        </li>
		    </ul>
		
		    <h3>已支付订单信息：</h3>
		    <ul class="order">
		        <li>
		            <div class="order-info">
		                <p>
		                    万家饺子（软件园E18店）
		                    <i class="fa fa-caret-down"></i>
		                </p>
		                <div class="order-info-right">
		                    <p>&#165;49</p>
		                </div>
		            </div>
		            <ul class="order-detailet">
		                <li>
		                    <p>纯肉鲜肉（水饺） x 2</p>
		                    <p>&#165;15</p>
		                </li>
		                <li>
		                    <p>玉米鲜肉（水饺） x 1</p>
		                    <p>&#165;16</p>
		                </li>
		                <li>
		                    <p>配送费</p>
		                    <p>&#165;3</p>
		                </li>
		            </ul>
		        </li>
		        <li>
		            <div class="order-info">
		                <p>
		                    小锅饭豆腐馆（全运店）
		                    <i class="fa fa-caret-down"></i>
		                </p>
		                <div class="order-info-right">
		                    <p>&#165;55</p>
		                </div>
		            </div>
		            <ul class="order-detailet">
		                <li>
		                    <p>纯肉鲜肉（水饺） x 2</p>
		                    <p>&#165;15</p>
		                </li>
		                <li>
		                    <p>玉米鲜肉（水饺） x 1</p>
		                    <p>&#165;16</p>
		                </li>
		                <li>
		                    <p>配送费</p>
		                    <p>&#165;3</p>
		                </li>
		            </ul>
		        </li>
		    </ul>
		</div>
	
	</div>    
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		created() {
			console.log('ok')
			this.$emit('func', {flag:true, title: '我的订单'})
		}
	}
</script>

<style scoped>
	/****************** 总容器 ******************/
.wrapper{
    width: 100%;
    height: 100%;
}


/****************** 历史订单列表部分 ******************/
.wrapper h3{
    box-sizing: border-box;
    padding: 4vw;
    font-size: 4vw;
    font-weight: 300;
    color: #999;
}
.wrapper .order{
    width: 100%;
}
.wrapper .order li{
    width: 100%;
}
.wrapper .order li .order-info{
    box-sizing: border-box;
    padding: 2vw 4vw;
    font-size: 4vw;
    color: #666;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.wrapper .order li .order-info .order-info-right{
    display: flex;
}
.wrapper .order li .order-info .order-info-right .order-info-right-icon{
    background-color: #f90;
    color: #fff;
    border-radius: 3px;
    margin-left: 2vw;
    user-select: none;
    cursor: pointer;
}

.wrapper .order li .order-detailet{
    width: 100%;
}
.wrapper .order li .order-detailet li{
    width: 100%;
    box-sizing: border-box;
    padding: 1vw 4vw;
    color: #666;
    font-size: 3vw;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.wrapper .orderbox {
	margin-bottom: 50px;
}

</style>