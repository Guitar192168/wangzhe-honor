<template>
	<div class='page-hero' >
		<div class='topbar bg-black py-2 px-3 d-flex ai-center text-white'>
			<img src="../assets/logo.png" height="30">
			<div class='p-2 flex-1 fz-md'>
				<span class="text-white">王者荣耀</span>
				<span class='ml-2'>攻略站</span>
			</div>	
			<router-link to="/" tag="div">更多英雄 &gt;</router-link>
		</div>	
		<div>
			<div class='top'><img src="../assets/images/001.jpg"></div>
			<div class='info text-white p-3 d-flex flex-column h-100 jc-end'>
				<div>半神之弓</div>
				<h2 class='my-2'>后裔</h2>
				<div>射手</div>
				<div class='scores d-flex jc-between pt-2'>
					<div class='d-flex  ai-center'>
					<span>难度</span>
					<span class='badge bg-primary'>4</span>
					<span>技能</span>
					<span class='badge bg-blue-1'>5</span>
					<span>攻击</span>
					<span class='badge bg-danger'>8</span>
					<span>生存</span>
					<span class='badge bg-dark'>3</span>
				</div>
				<router-link tag='span' class='text-grey'>
					皮肤:2  &gt;
				</router-link>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default{
	props:{
		id:{required:true}
	},
	data(){
		return {
			// model:null
		}
	},
	methods:{
		// async fetch(){
		// 	const res = await this.$http.get(`heros/${this.id}`)
		// 	this.model = res.data
		// }
	},
	created(){
		// this.fetch()
	}
};
</script>

<style lang='scss' scoped>
.page-hero{
	

	.top{
		height: 50vw;
		background: #fff no-repeat top center;
		background-size: auto 100%;
	}

	.info{
		background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
		.scores{
			.badge{
				margin:0 0.25rem;
				display:inline-block;
				width:1rem;
				height: 1rem;
				line-height:1rem;
				text-align:center;
				border-radius:50%;
				font-size: 0.9rem;
				bodder:1px solid rgba(255, 255, 255, 0.2);
			}
		}
	}

	.topbar{
		width: 100%;
	}
}
</style>