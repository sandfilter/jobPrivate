<template>
	<view >
		<uni-nav-bar backgroundColor="#FFFFFF" fixed="false" color="#000000" status-bar="true" title="连云港微海事" />

		<view>
			<image src="../../static/images/index/header.png" mode="widthFix" style="width: 100%;" alt="" class="back-image"></image>
		</view>
		
		<view class='index__container'>
			<view class="scrolltabs">
			    <scroll-view class="tabs" id="tab-bar" style="-webkit-flex-wrap: nowrap;flex-wrap: nowrap;" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
          <view class="font-title-box">
            <view v-for="(item, index) in itemTabs" :key="index" :class="tabsType == index?'font-title-crude':'font-title'" :data-index='index' @click="ontabtap" >
              {{item.title}}
            </view>
          </view>
			    </scroll-view>
				<swiper :current="tabsType" class="swiper-box" style="flex: 1;" :duration="300" @change="ontabchange">
				    <swiper-item class="swiper-item">
						<view class="access-box" @click="toSearch(1)" >
							<uni-search-bar isDisable="true" class="search-bar" bgColor="#FFFFFF" boxShadow="1px 5px 5px #ccc" searchButton="none" radius="15" placeholder="请输入关键词查询" clearButton="auto" cancelButton="none" @confirm="search" />
						</view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<view class="access-box" @click="toSearch(2)" >
							<uni-search-bar isDisable="true" class="search-bar" bgColor="#FFFFFF" boxShadow="1px 5px 5px #ccc" searchButton="none" radius="15" placeholder="请输入关键词查询" clearButton="auto" cancelButton="none" @confirm="search" />
						</view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<view class="access-box" @click="toSearch(3)" >
							<uni-search-bar isDisable="true" class="search-bar" style="width: 90%;" bgColor="#FFFFFF" boxShadow="1px 5px 5px #ccc" searchButton="none" radius="15" placeholder="请输入关键词查询" clearButton="auto" cancelButton="none" @confirm="search" />
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="data-total">
				<view class="flex-row-between">
					<view class="data-total-title">数据总览</view>
					<!-- 接口没返回 让去掉 -->
					<!-- <view class="data-total-time">截至：{{nowDate}}</view> -->
				</view>
				<view class="flex-column" style="margin-top: 20rpx; padding: 0rpx 10rpx;">
					<view class="flex-row">
						<view class="flex-row-section section-rightborder">
							<view class="section-title">入港船舶/艘</view>
							<view class="section-content font-blue">{{shipInOutData.length>0 ? shipInOutData[0].shipCnt :'--'}}</view>
							<view class="section-remark">较昨日<text class="font-blue" >{{shipInOutData.length>0 ? '+'+shipInOutData[0].shipCntRatio :'--'}}</text></view>
						</view>
						<view class="flex-row-section ">
							<view class="section-title">到达货物/吨</view>
							<view class="section-content font-red">{{cargoData.length>0 ? cargoData[0].portcargoCnt :'--'}}</view>
							<view class="section-remark">较昨日<text class="font-red" >{{cargoData.length>0&&cargoData[1].portcargoCntRatio!=null ? '+'+cargoData[0].portcargoCntRatio :'--'}}</text></view>
						</view>
						<view class="flex-row-section section-rightborder">
							<view class="section-title">到达旅客/人</view>
							<view class="section-content font-green">{{passengerData.length>0 ? passengerData[0].portpassengerCnt :'--'}}</view>
							<view class="section-remark">较昨日<text class="font-green" >{{passengerData.length>0&&passengerData[0].portpassengerCntRatio!=null ? '+'+passengerData[0].portpassengerCntRatio :'--'}}</text></view>
						</view>
					</view>
					<view class="flex-row">
						<view class="flex-row-section section-rightborder">
							<view class="section-title">出港船舶/艘</view>
							<view class="section-content font-blue">{{shipInOutData.length>=2 ? shipInOutData[1].shipCnt:'--'}}</view>
							<view class="section-remark">较昨日<text class="font-blue" >{{shipInOutData.length>=2 ? '+'+shipInOutData[1].shipCntRatio :'--'}}</text></view>
						</view>
						<view class="flex-row-section section-rightborder">
							<view class="section-title">发送货物/吨</view>
							<view class="section-content font-red">{{cargoData.length>=2 ? cargoData[1].portcargoCnt :'--'}}</view>
							<view class="section-remark">较昨日<text class="font-red" >{{cargoData.length>=2 &&cargoData[1].portcargoCntRatio!=null ? '+'+cargoData[1].portcargoCntRatio :'--'}}</text></view>
						</view>
						<view class="flex-row-section">
							<view class="section-title">发送旅客/人</view>
							<view class="section-content font-green">{{passengerData.length>=2 ? passengerData[1].portpassengerCnt :'--'}}</view>
							<view class="section-remark">较昨日<text class="font-green" >{{passengerData.length>=2&&passengerData[1].portpassengerCntRatio!=null ? '+'+passengerData[1].portpassengerCntRatio :'--'}}</text></view>
						</view>
					</view>
				</view>
			</view>
			<view>
				<image mode="aspectFit" src="../../static/images/index/index-rotation.png" style="width: 100%;height: 250rpx;"></image>
			</view>
			<view class="data-stats">
				<view class="flex-row-between">
					<view class="data-stats-title">数据统计</view>
					<view class="data-stats-time"></view>
				</view>
				<view class="flex-column" >
					<view class="flex-row-between section-item" >
						<view class="section-twenty">
							<image mode="aspectFit" src="../../static/images/index/index-icon-01.png" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="flex-column section-tighty">
							<view class="section-item-title">进出港业务分析</view>
							<view class="section-item-content">我是业务分析描述，我是业务分析描述，我是业务分析描述，我是业务分析描述</view>
						</view>
					</view>
					<view class="flex-row-between section-item">
						<view class="section-twenty">
							<image mode="aspectFit" src="../../static/images/index/index-icon-02.png" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="flex-column section-tighty">
							<view class="section-item-title">危防业务分析</view>
							<view class="section-item-content">我是业务分析描述，我是业务分析描述，我是业务分析描述，我是业务分析描述</view>
						</view>
					</view>
					<view class="flex-row-between section-item">
						<view class="section-twenty">
							<image mode="aspectFit" src="../../static/images/index/index-icon-03.png" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="flex-column section-tighty">
							<view class="section-item-title">船旗国安全检查分析</view>
							<view class="section-item-content">我是业务分析描述，我是业务分析描述，我是业务分析描述，我是业务分析描述</view>
						</view>
					</view>
					<view class="flex-row-between section-item">
						<view class="section-twenty">
							<image mode="aspectFit" src="../../static/images/index/index-icon-04.png" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="flex-column section-tighty">
							<view class="section-item-title">行政处罚管理</view>
							<view class="section-item-content">我是业务分析描，我是业务分析描述</view>
						</view>
					</view>
				</view>
			</view>
		</view>	
		
		<uni-footer sponsor="连云港微海事"></uni-footer>
 
	</view>
</template>

<!-- <g-footer sponsor='德州民政局主办'></g-footer> -->

<script> 
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniFooter from '@/components/uni-footer/uni-footer.vue'
	
	export default {
		components:{
			uniNavBar,
			uniSearchBar,
			uniFooter
		},
	     data() {
			return {
				type: 'popup',
				//控制页面滚动动画效果的显示隐藏图
				isShowBg: true,
				value: '',
				//办理业务默认展示分类和选择展示分类 默认展示 我要办理
				tabsType: '0',
				scrollInto: '',
				itemTabs: [{
					val: "a0",
					title: "船舶",
				},{
					val: "a1",
					title: "船员",
				},{
					val: "a2",
					title: "危货属性",
				}],
				//待办任务数量
				taskNum:0,
				nowDate:'',
				//数据总览船舶进出港
				shipInOutData:[],
				//货物进出港
				cargoData:[],
				//旅客进出港
				passengerData:[]
				
			}
	    },	
	    //监听页面滑动事件
	    onPageScroll(e) {
			
	    },
	    onLoad(options) {
			uni.setNavigationBarTitle({
				title:'连云港微海事'
			})
			this.getTime();
			this.getZLXX();
	    },
		methods: {
			ontabtap(e) {
			    let index = e.target.dataset.index || e.currentTarget.dataset.index;
			    this.switchTab(index);
			},
			ontabchange(e) {
			    let index = e.target.current || e.detail.current;
			    this.switchTab(index);
			},
			switchTab(index) {
			    if (this.tabsType === index) {
			        return;
			    }
		
				this.tabsType = index;
				this.scrollInto = this.itemTabs[index].val;
			},
			toSearch(searchType){
				let url = '';
				if(searchType == '1'){
					url = "/pages/search/index?searchType=1"
				}else if(searchType == '2'){
					url = "/pages/search/index?searchType=2"
				}else if(searchType == '3'){
					url = "/pages/search/index?searchType=3"
				}
				console.log(url);
				uni.navigateTo({
					url: url
				})
			},
			getZLXX(){
				const that = this;
				//组装参数
				let params = {'parentId': ''};
				//请求后台数据
				that.api.request('/das/view/getShipPort?type=today&tabFlag=comprehensive&searchFlag=0&startTime=&endTime=',{},'GET')
				.then(res => {
					console.log('>>'+JSON.stringify(res));
					//没有封装统一参数返回格式
					/* if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					} */
					that.shipInOutData = res.shipInOutData;
					that.cargoData = res.cargoData;
					that.passengerData = res.passengerData;
				});	
			},
			  getTime(){
			  var date=new Date();
			  var year=date.getFullYear();//得到当前年份
			  var month=this.editTime(date.getMonth()+1);//得到当前月份
			  var day=this.editTime(date.getDate());//得到当前几号
			  var hour=this.editTime(date.getHours());//得到当前小时
			  var min=this.editTime(date.getMinutes());//得到当前分钟
			  var seconds=this.editTime(date.getSeconds());//得到当前秒
			  
			  this.nowDate=year+"-"+month+"-"+day+" "+hour+":"+min;
				 
			  },
			  editTime(i){
			  if(i<10){
			  i="0"+i;
			  }
			  return i;
			  }
		}
	}
</script>

<style lang="scss">
	swiper-item {
		display: block;
		overflow: hidden;
		will-change: transform;
		border-radius: 5px;
	}
	
	.index__container {position: relative;margin-top: -140rpx;padding:0 40rpx;}
	
	.access-box {
		margin: 20rpx 0rpx;
	}
	
	swiper {
		display: block;
		height: 130rpx;
	}
	
	.swiper-box {
		flex: 1;
	}
	
	.swiper-item {
		flex: 1;
		flex-direction: row;
    
	}
	
	.access-box {
		display: flex;
		background: #ffffff;
    height: 88rpx;
		box-shadow:0rpx 6rpx 10rpx 0rpx rgba(0, 0, 0, 0.1);
		border-radius: 10rpx;
		margin: 20rpx 3rpx 3rpx;
	}
.font-title-box{display: flex; justify-content: space-around; align-items:center; padding: 0 50rpx; color: #fffFFF; text-align: center; line-height: 44rpx; 
  .font-title {	font-size: 32rpx;  padding-bottom: 12rpx; position: relative; opacity: .6; font-weight:400;}
  .font-title-crude { position: relative; font-size: 36rpx; padding-bottom: 12rpx;
    &::after { content: ''; position: absolute; bottom: 0; margin-top: 12rpx; height: 5rpx; width: 48rpx; background-color: #FFFFFF;border-radius: 3rpx; left: 50%; margin-left: -25rpx; font-weight:600;}
  }
}

	

	
	.data-total {
		margin-top: 40rpx;
	}
	
	.data-total-title {
		font-size:40rpx;
		font-weight:500;
		color:rgba(0,0,1,1);
		line-height:56rpx;
	}
	
	.data-total-time {
    font-size:24rpx;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:33rpx;
    opacity: .6;
	}
	
	.data-stats {}
	

	
	/**************布局样式设置***********************/
	.flex-row {

    display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      justify-content: space-between;
	}
	
	.flex-row-between {
		display: flex;
	
		align-items: center;
    .data-stats-title{ margin-bottom: 30rpx;}
	}
	
.flex-row-section { width:207rpx; height:199rpx; background:rgba(255,255,255,1); box-shadow:0rpx 8rpx 18rpx 0rpx rgba(10,55,82,0.1); border-radius:4rpx; text-align: center; margin-bottom: 8rpx; display: flex; flex-direction: column; justify-content: center; align-items: center;
  .section-title {font-size:28rpx;font-weight:500; color:rgba(25,25,25,1); line-height:38rpx; }
  .section-content {font-size:40rpx; margin: 15rpx 0; font-weight: bold;}
  .section-remark {font-size: 28rpx;color:rgba(102,102,102,.6); }
}
	
	.flex-column {
		display: flex;
		flex-direction: column;
	}
		
.section-item { box-shadow:0rpx 8rpx 18rpx 0rpx rgba(10,55,82,0.1);border-radius:16rpx; align-items: flex-start; margin-bottom: 20rpx; padding: 30rpx;
  .section-item-title {font-size:36rpx;font-weight:500;color:rgba(0,0,0,1); margin-bottom: 10rpx;}
  .section-twenty { margin-right: 30rpx;  }
  .section-item-content { font-size:26rpx;font-weight:400;color:rgba(102,102,102,.6);line-height:38rpx; }
}
	
	
	
	
	
	/**************字体颜色设置***********************/
	.font-red {
		color:#E04040;
	}
	
	.font-orange {
		color: #d9831f;
	}
	
	.font-violet {
		color: #5a5af1;
	}
	
	.font-blue {
		color: #4294F4;
	}
	
	.font-green {
		color: #389C86;
	}
	
	.font-pink {
		color: #ff6969;
	}
	
</style>
