<template>
	<view class="page-danger-info">
		<view class="danger-info-header">
			<view class="title">1,2,3,6-四氢化苯甲醛</view>
			<text>1,2,3,6-四氢化苯甲醛(1,2,3,6-tetrahydrobenzaldehyde, C7H10O)是一种 无色液体,</text>
		</view>
		<view class="danger-info-tab">
			<view class="nav-list">
				<view class="nav" v-for="(item,index) in title" :key='item.id' :class="{'active': tabIndex == index}" @tap="toggleTab(index)">{{item.name}}</view>
			</view>
		</view>
		<view class="danger-info-box">
			<view class="danger-info-list">
				<view class="danger-title">基本信息</view>
				<view class="danger-info">
					<view class="info"><text class="title">货物名称（中文）：</text>1,2,3,6-四氢化苯甲醛</view>
					<view class="info"><text class="title">货物名称（英文）：</text>1,2,3,6-tetrahy</view>
					<view class="info"><text class="title">其他名称（中文）：</text>----</view>
					<view class="info"><text class="title">其他名称（英文）：</text>----</view>
					<view class="info"><text class="title">CAS No：</text>----</view>
					<view class="info"><text class="title">EC No：</text>----</view>
					<view class="info"><text class="title">分子式：</text>100-50-5202-858-3</view>
					<view class="info"><text class="title">分子量：</text> C7H10O 110.15</view>
				</view>
			</view>
			<view class="danger-info-list">
				<view class="danger-title">成分识别</view>
				<view class="danger-info">
					<view class="info">
						<text>成分</text>
						<text>CAS_NO</text>
						<text>百分比</text>
					</view>
					<view class="info">
						<text>苯甲醇</text>
						<text>100-51-6</text>
						<text>86.75%</text>
					</view>
					<view class="info">
						<text>二苯基</text>
						<text>100-51-6</text>
						<text>86.75%</text>
					</view>
				</view>
			</view>
			<view class="danger-info-list">
				<view class="danger-title">物化特性和化学特性</view>
				<view class="danger-info">
					<view class="info"><text class="title">货物名称（中文）：</text>1,2,3,6-四氢化苯甲醛</view>
					<view class="info"><text class="title">货物名称（英文）：</text>1,2,3,6-tetrahy</view>
					<view class="info"><text class="title">其他名称（中文）：</text>----</view>
					<view class="info"><text class="title">其他名称（英文）：</text>----</view>
					<view class="info"><text class="title">CAS No：</text>----</view>
					<view class="info"><text class="title">EC No：</text>----</view>
					<view class="info"><text class="title">分子式：</text>100-50-5202-858-3</view>
					<view class="info"><text class="title">分子量：</text> C7H10O 110.15</view>
				</view>
			</view>
			<view class="danger-info-list">
				<view class="danger-title">反应性与稳定性</view>
				<view class="danger-info">
					---略---
				</view>
			</view>
			<view class="danger-info-list">
				<view class="danger-title">船舶运载条件</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >国际海运危险货物规则(IMDG-CODE) </view>
					<view class="info-main" v-show="brandFold">
						<view class="info"><text class="title">货物名称（中文）：</text>1,2,3,6-四氢化苯甲醛</view>
						<view class="info"><text class="title">货物名称（英文）：</text>1,2,3,6-tetrahy</view>
						<view class="info"><text class="title">其他名称（中文）：</text>----</view>
						<view class="info"><text class="title">其他名称（英文）：</text>----</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
var TIMER = null;
export default {
	data() {
		return {
			title:[
				{id:1,name:'基本信息'},
				{id:2,name:'成分识别'},
				{id:3,name:'物化特性和化学特性'},
				{id:4,name:'反应性与稳定性'},
				{id:5,name:'船舶运载条件'},
			],
			brandFold: true,
			tabIndex: 0
		};
	},
	methods: {
		toggleMore() {
		  this.brandFold = !this.brandFold;
		},
		toggleTab(index){
			console.log('index....', index)
			this.tabIndex = index;
			var _this = this;
			let floor_item = document.getElementsByClassName('danger-info-list'),
					floor_offsetTop = floor_item[index].offsetTop - floor_item[0].offsetTop,
					window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
					timer = {
						step: 50,
						times: 20,
						FLOOR_OFFSETTOP: floor_offsetTop
					};
			console.log('floor_offsetTop', floor_offsetTop)
			console.log({ index, offsetTop: timer.FLOOR_OFFSETTOP })
			if (window_scrollTop > floor_offsetTop) {
				_this.setFloorScrollArrowUp(timer);
			} else if (window_scrollTop == floor_offsetTop) {
				return false;
			} else {
				_this.setFloorScrollArrowDown(timer);
				
			};
			console.log('floor_item', floor_item)
			console.log('window_scrollTop', window_scrollTop)
			console.log('floor_offsetTop', floor_offsetTop)
		},
		setFloorScrollArrowUp(timer) {
		  var _this = this
		  clearInterval(TIMER)
		  TIMER = setInterval(() => {
		    const window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		    if (window_scrollTop <= timer.FLOOR_OFFSETTOP) {
		      document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP
		      document.body.scrollTop = timer.FLOOR_OFFSETTOP
		      clearInterval(TIMER)
		    } else {
		      document.documentElement.scrollTop = window_scrollTop - timer.step
		      document.body.scrollTop = window_scrollTop - timer.step
		    }
		  }, timer.times)
		},
		setFloorScrollArrowDown(timer) {
		  var _this = this
		  clearInterval(TIMER)
		  TIMER = setInterval(() => {
		    const window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		    if (window_scrollTop >= timer.FLOOR_OFFSETTOP) {
		      document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP
		      document.body.scrollTop = timer.FLOOR_OFFSETTOP
		      clearInterval(TIMER)
		    } else {
		      document.documentElement.scrollTop = window_scrollTop + timer.step
		      document.body.scrollTop = window_scrollTop - timer.step
		    }
		  }, timer.times)
		},
		floorSrcollAddEventListener() {
			var _this = this
			let nav_item = document.getElementsByClassName('nav-list').getElementsByClassName('nav'),
					floor_item = document.getElementsByClassName('danger-info-list');
			nav_item[0].className = 'nav active';
			window.onscroll = function() {
				const window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				for (let i = 0, len = floor_item.length; i < len; i++) {
					const floor_offsetTop = floor_item[i].offsetTop - floor_item[0].offsetTop;
					if (window_scrollTop >= floor_offsetTop) {
						for (let n = 0, len = nav_item.length; n < len; n++) {
							nav_item[n].className = 'nav ' + (i === n ? 'active' : '');
						};
					};
				};
			};
		},
		initPage() {
			var _this = this;
			_this.floorSrcollAddEventListener()
		}
	},
	mounted() {
		//this.initPage()
	}
}
</script>

<style lang="scss">
.danger-info-header{padding: 30rpx 40rpx; position: fixed; width: 100%; background-color: #fff; top:80rpx; box-sizing: border-box;
	.title{ font-size:36rpx; line-height: 48rpx; margin-bottom: 12rpx; font-weight: 600;
		&::before{ content:'危'; display: inline-block; color:#e23232; border-radius:100%; text-align: center; background-color: #fdeeee; font-size:30rpx; margin-right: 20rpx; width: 48rpx; height:48rpx; font-weight: normal;}
	}
	>text{ font-size:24rpx; color:#999; display:block;}
}
.danger-info-tab{ background-color: #ebf2fe; height:98rpx; line-height:98rpx; font-size:32rpx; padding:0 40rpx;  position: fixed; width: 100%; top: 80rpx + 180rpx; box-sizing: border-box;
	.nav-list{ overflow-x: scroll; display:flex; }
	.nav{ display: inline-block; float: left; margin-right:40rpx; white-space:nowrap; position: relative;
		&::after{content: ''; position: absolute; bottom: 0; left: 50%; margin-left: -24rpx; width: 48rpx; height:5rpx; border-radius:3rpx; background-color: #3882f9; display: none;}
		&.active{ color:#3882f9;
			&::after{display: block;}
		}
		&:last-child{ margin: 0;}
	}
}
.danger-info-box{ padding: 0 40rpx; font-size:32rpx; margin-top: 80rpx + 180rpx + 50rpx;
	.danger-title{ font-size:40rpx; font-weight: bold; margin: 60rpx 0;}
	.danger-info{ 
		.info{ display: flex; justify-content: space-between; padding-bottom: 36rpx; margin-bottom: 36rpx; border-bottom:1rpx solid #e5e5e5;}
		.info-title{ @extend .info; position: relative; padding-left: 29rpx; line-height: 1; font-weight: 600;
			&::before{ content:''; display: block; position: absolute; left:0; top:2rpx; width: 0; height: 0; border-width: 15rpx 10rpx 10rpx 9rpx; border-style: solid; border-color:#3882f9 transparent transparent #3882f9;}
			&::after{ content:''; display: block; width: 21rpx; height: 21rpx; border-color: #bbb; margin-right: 5rpx; border-style: solid; border-width: 0 1rpx 1rpx 0; transform: rotate(45deg); position: relative;}
			&.cur{
				&::after{ transform: rotate(225deg); top: 15rpx;}
			}
		}
	}
}
</style>
