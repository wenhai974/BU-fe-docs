<template>
	<div class="text">{{text}}</div>
</template>
<script>
export default {
	name: 'name',
	data () {
		return {
      text: '测试自定义组件在Markdown中的使用'
    }
	},
	components: {},
	computed: {},
	created () {},
	mounted () {
    console.log('mounted!!')
  },
	methods: {},
	watch: {},
	beforeDestroy () {},
}
</script>
<style scoped>
 .text{
   color: #ff6c00;
   font-size: 20px;
 }
</style>
