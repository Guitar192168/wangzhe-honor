<template>
	<div class='card p-3 mt-3'>
		<div class='card-header d-flex ai-center pb-3'>
			<i class="iconfont" :class="`icon-${icon}`"></i>
			<span class='flex-1 fs-xl px-2'>{{ title }}</span>
			<i class="iconfont icon-menu"></i>
		</div>
		<div class='card-body pt-3'>
			<slot></slot>
		</div>
	</div>
</template>

<script>

export default {
	props:{
		title: { type:String, required: true },
		icon: { type:String, required: true },
	}
};
</script>

<style lang='scss' scoped>
@import '../assets/scss/variables.scss';

.card{
	.card-header{
		border-bottom:1px solid $border-color;
	}
	border-bottom: 1px solid $border-color;
}


</style>
