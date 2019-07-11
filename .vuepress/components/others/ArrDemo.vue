<template>
	<div class="demo-cont">
    <div class="arr-cont">{{ JSON.stringify(testArr) }}</div>
    <div class="btn-cont">
      <a href="javascript:;" @click="sortHandle">快速排序</a>
      <a href="javascript:;">去重</a>
      <a href="javascript:;">获取最大值</a>
      <a href="javascript:;">获取最小值</a>
      <a href="javascript:;">重置</a>
    </div>
  </div>
</template>
<script>
function quickSort (arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr[pivotIndex]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(right)
}
export default {
	name: 'ArrDemo',
	data () {
		return {
      testArr: [1, 22, 33, 1, 43, 69, 42, 55, 55]
    }
	},
	components: {},
	computed: {},
	created () {},
	mounted () {},
	methods: {
    sortHandle () {
      this.testArr = quickSort(this.testArr)
    }
  },
	watch: {},
	beforeDestroy () {},
}
</script>
<style lang="less" scoped>
</style>
