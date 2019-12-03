<template>
	<div>
		<swiper :options="swiperOption">
			<swiper-slide>
				<img class='w-100' src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg" height="272" width="640" alt="">
			</swiper-slide>
			<swiper-slide>
				<img class='w-100' src="../assets/images/b9905b35bb0afa9050d9ddbe04d82d29.jpeg" height="272" width="640" alt="">
			</swiper-slide>
			<swiper-slide>
				<img class='w-100' src="../assets/images/Q750422.1516178581.bb8a035a3fe6bd3832efa4cb1ed51cf1.750x422_27946.jpg" height="272" width="640" alt="">
			</swiper-slide>
			<div class="swiper-pagination pagination-home text-right px-3 pb-2"  slot="pagination"></div>
		</swiper>

		<!-- swiper end --> 

		<div class="nav-icons bg-white mt-3  text-center">
			<div class='d-flex flex-wrap'>
				<div class='nav-item my-3 text-dark-1'
				v-for='n in 10' :key='n'>
				<i class="sprite sprite-news"></i>
				<div class='py-2'>爆料站</div>
			</div>
		</div>
		<div class='bg-light py-2 fs-sm'>
			<i class="sprite sprite-arrow mr-1"></i>
			<span>收起</span>
		</div>
	</div>

	<!-- nav icons end -->

	<m-list-card icon='menu1' title='新闻资讯' :categories='newsCats'>
		<template #items='{category}'>
			<div class='py-2 fs-lg d-flex' v-for='(news, i) in category.newsList' :key='i'>
				<span class='text-info'>{{news.categoryName}}</span>
				<span class='px-1'>|</span>
				<span class='flex-1 text-dark text-ellipsis pr-2'>{{news.title}}</span>
				<span class='text-grey-1 fs-sm'>{{news.date}}</span>	
			</div>
		</template>
	</m-list-card>

	<m-list-card icon='card-hero' title='英雄列表' :categories='heroCats'>
		<template #items='{category}'>
			<div class='d-flex flex-wrap' style='margin:0 -0.5rem	'>
				<router-link tag='div' :to="`/${hero.id}`" class='p-2 text-center ' style='width:20%;' v-for='(hero, i) in category.heroList' :key='i'>
					<img :src="hero.avatar" class='w-100' alt="">
					<div>{{hero.name}}</div>
				</router-link>
			</div>
			
		</template>
	</m-list-card>

	<m-card icon='menu1' title='英雄列表'></m-card>
	<m-card icon='menu1' title='英雄列表'></m-card>

</div>
</template>

<script>

export default {
	data(){
		return {
			swiperOption: {
				pagination: {
					el: '.pagination-home',
				},
				autoplay:{delay:1500}
			},
			newsCats:[
			{
				name:'热门',
				newsList:new Array(5).fill().map( v => ({
					categoryName:'[公共]',
					title:"冲八万冲八万冲八万冲八万冲八万冲八万冲八万",
					date:'10/21'
				}))
			},
			{
				name:'新闻',
				newsList:new Array(5).fill().map( v => ({
					categoryName:'[公共]',
					title:"残雪凝辉冷画屏。落梅横笛已三更",
					date:'10/21'
				}))
			},
			{
				name:'公告',
				newsList:new Array(5).fill().map( v => ({
					categoryName:'[公共]',
					title:"风絮飘残已化萍。泥莲刚倩藕丝萦。珍重珍重别拈香一瓣，记前生",
					date:'10/21'
				}))
			},
			{
				name:'资讯',
				newsList:new Array(5).fill().map( v => ({
					categoryName:'[公共]',
					title:"人到情多情转薄，而今真个悔多情。又到断肠回首处，泪偷零",
					date:'10/21'
				}))
			},
			],
			heroCats:[
			{
				name:'热门',
				heroList:[
				{		
					avatar:require("../assets/images/169.jpg"),
					name:'后裔',
					id:1
				},
				{		
					avatar:require("../assets/images/109.jpg"),
					name:'妲己',
					id:2
				},
				{		
					avatar:require("../assets/images/110.jpg"),
					name:'嬴政',
					id:3
				},
				{		
					avatar:require("../assets/images/115.jpg"),
					name:'高渐离',
					id:4
				},
				{		
					avatar:require("../assets/images/113.jpg"),
					name:'庄周',
					id:5
				},
				{		
					avatar:require("../assets/images/117.jpg"),
					name:'钟无艳',
					id:6
				},
				{		
					avatar:require("../assets/images/119.jpg"),
					name:'扁鹊',
					id:7
				},
				{		
					avatar:require("../assets/images/120.jpg"),
					name:'白起',
					id:8
				},
				{		
					avatar:require("../assets/images/121.jpg"),
					name:'芈月',
					id:9
				},
				{		
					avatar:require("../assets/images/125.jpg"),
					name:'元歌',
					id:10
				},
				{		
					avatar:require("../assets/images/123.jpg"),
					name:'吕布',
					id:11
				},
				{		
					avatar:require("../assets/images/124.jpg"),
					name:'周瑜',
					id:12
				},
				{		
					avatar:require("../assets/images/130.jpg"),
					name:'周瑜',
					id:13
				},
				{		
					avatar:require("../assets/images/131.jpg"),
					name:'周瑜',
					id:14
				},
				{		
					avatar:require("../assets/images/132.jpg"),
					name:'周瑜',
					id:15
				},
				{		
					avatar:require("../assets/images/134.jpg"),
					name:'周瑜',
					id:16
				},
				
				]
			},
			{
				name:'战士',
				heroList:[
				{		
					avatar:require("../assets/images/109.jpg"),
					name:'妲己',
					id:1
				},
				{		
					avatar:require("../assets/images/110.jpg"),
					name:'嬴政',
					id:2
				},
				{		
					avatar:require("../assets/images/113.jpg"),
					name:'庄周',
					id:3
				},
				{		
					avatar:require("../assets/images/120.jpg"),
					name:'白起',
					id:4
				},
				{		
					avatar:require("../assets/images/121.jpg"),
					name:'芈月',
					id:5
				},
				{		
					avatar:require("../assets/images/125.jpg"),
					name:'元歌',
					id:6
				},
				{		
					avatar:require("../assets/images/123.jpg"),
					name:'吕布',
					id:7
				},
				{		
					avatar:require("../assets/images/124.jpg"),
					name:'周瑜',
					id:8
				}
				]
			},
			{
				name:'法师',
				heroList:[
				{		
					avatar:require("../assets/images/109.jpg"),
					name:'妲己',
					id:1
				},
				{		
					avatar:require("../assets/images/110.jpg"),
					name:'嬴政',
					id:2
				},
				{		
					avatar:require("../assets/images/113.jpg"),
					name:'庄周',
					id:3
				},
				{		
					avatar:require("../assets/images/117.jpg"),
					name:'钟无艳',
					id:4
				},
				{		
					avatar:require("../assets/images/120.jpg"),
					name:'白起',
					id:5
				},
				{		
					avatar:require("../assets/images/121.jpg"),
					name:'芈月',
					id:6
				},
				{		
					avatar:require("../assets/images/125.jpg"),
					name:'元歌',
					id:7
				},
				{		
					avatar:require("../assets/images/125.jpg"),
					name:'元歌',
					id:8
				},
				{		
					avatar:require("../assets/images/125.jpg"),
					name:'元歌',
					id:9
				},
				{		
					avatar:require("../assets/images/125.jpg"),
					name:'元歌',
					id:10
				},
				{		
					avatar:require("../assets/images/123.jpg"),
					name:'吕布',
					id:11
				},
				{		
					avatar:require("../assets/images/124.jpg"),
					name:'周瑜',
					id:12
				}
				]
			},
			{
				name:'刺客',
				heroList:[
				{		
					avatar:require("../assets/images/109.jpg"),
					name:'妲己',
					id:1
				},
				{		
					avatar:require("../assets/images/110.jpg"),
					name:'嬴政',
					id:2
				},
				{		
					avatar:require("../assets/images/113.jpg"),
					name:'庄周',
					id:3
				},
				{		
					avatar:require("../assets/images/117.jpg"),
					name:'钟无艳',
					id:4
				},
				{		
					avatar:require("../assets/images/120.jpg"),
					name:'白起',
					id:5
				},
				{		
					avatar:require("../assets/images/121.jpg"),
					name:'芈月',
					id:6
				},
				{		
					avatar:require("../assets/images/125.jpg"),
					name:'元歌',
					id:7
				},
				{		
					avatar:require("../assets/images/123.jpg"),
					name:'吕布',
					id:8
				},
				{		
					avatar:require("../assets/images/123.jpg"),
					name:'吕布',
					id:9
				},
				{		
					avatar:require("../assets/images/123.jpg"),
					name:'吕布',
					id:10
				},
				{		
					avatar:require("../assets/images/124.jpg"),
					name:'周瑜',
					id:11
				}
				]
			},
			{
				name:'肉',
				heroList:[
				{		
					avatar:require("../assets/images/109.jpg"),
					name:'妲己',
					id:1
				},
				{		
					avatar:require("../assets/images/110.jpg"),
					name:'嬴政',
					id:2
				},
				{		
					avatar:require("../assets/images/113.jpg"),
					name:'庄周',
					id:3
				},
				{		
					avatar:require("../assets/images/117.jpg"),
					name:'钟无艳',
					id:4
				},
				{		
					avatar:require("../assets/images/120.jpg"),
					name:'白起',
					id:5
				},
				{		
					avatar:require("../assets/images/121.jpg"),
					name:'芈月',
					id:6
				},
				{		
					avatar:require("../assets/images/125.jpg"),
					name:'元歌',
					id:7
				},
				{		
					avatar:require("../assets/images/123.jpg"),
					name:'吕布',
					id:8
				},
				{		
					avatar:require("../assets/images/123.jpg"),
					name:'吕布',
					id:9
				},
				{		
					avatar:require("../assets/images/123.jpg"),
					name:'吕布',
					id:10
				},
				{		
					avatar:require("../assets/images/124.jpg"),
					name:'周瑜',
					id:11
				}
				]
			},
			{
				name:'辅助',
				heroList:[
				{		
					avatar:require("../assets/images/109.jpg"),
					name:'妲己',
					id:1
				},
				{		
					avatar:require("../assets/images/110.jpg"),
					name:'嬴政',
					id:2
				},
				{		
					avatar:require("../assets/images/113.jpg"),
					name:'庄周',
					id:3
				},
				{		
					avatar:require("../assets/images/117.jpg"),
					name:'钟无艳',
					id:4
				},
				{		
					avatar:require("../assets/images/120.jpg"),
					name:'白起',
					id:5
				},
				{		
					avatar:require("../assets/images/120.jpg"),
					name:'白起',
					id:5
				},
				{		
					avatar:require("../assets/images/120.jpg"),
					name:'白起',
					id:5
				},
				{		
					avatar:require("../assets/images/120.jpg"),
					name:'白起',
					id:5
				},
				{		
					avatar:require("../assets/images/121.jpg"),
					name:'芈月',
					id:6
				},
				{		
					avatar:require("../assets/images/125.jpg"),
					name:'元歌',
					id:7
				},
				{		
					avatar:require("../assets/images/123.jpg"),
					name:'吕布',
					id:8
				},
				{		
					avatar:require("../assets/images/123.jpg"),
					name:'吕布',
					id:9
				},
				{		
					avatar:require("../assets/images/123.jpg"),
					name:'吕布',
					id:10
				},
				{		
					avatar:require("../assets/images/124.jpg"),
					name:'周瑜',
					id:11
				}
				]
			},
			
			],
		}
	},
	methods:{
		async fetchNewsCats(){
			const res = await this.$http.get('news/list')
			this.newsCats = res.data
		},
		async fetchHeroCats(){
			const res = await this.$http.get('heroes/list')
			this.heroCats = res.data
		}
	},
	// created(){
	// 	this.fetchNewsCats();
	// 	this.fetchHeroCats();
	// }
};
</script>

<style lang='scss' scoped>
@import '../assets/scss/variables';

.pagination-home{
	.swiper-pagination-bullet{
		opacity:1;
		border-radius:0.1538rem;
		background: map-get($colors,'white');
		&.swiper-pagination-bullet-active{
			background: map-get($colors, 'info');
		}
	}
}

.nav-icons {
	border-top: 1px solid $border-color;
	border-bottom: 1px solid $border-color;
	.nav-item{
		width: 25%;
		border-right : 1px solid $border-color;
		&:nth-child(4n){
			border-right:none;
		}
	}
}
</style>
