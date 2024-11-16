<script setup>
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Checkbox from 'primevue/checkbox'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import DataView from 'primevue/dataview'
import Divider from 'primevue/divider'
import Card from 'primevue/card'

import { computed, ref, watch } from 'vue'
import { feesType, fees, wddTimesValues } from '@/data/dropdownData.js'

/**
 * 计算费用
 */
const data = ref([])
const feesTypeValue = ref('钢琴')
const feesValue = ref('')
const c_fees = computed(() => {
  return fees.value.filter((fee) => fee.type === feesTypeValue.value)
})

const addFeeItem = () => {

  data.value.push({
    id: data.value.length + 1,
    lessonName: feesValue.value.text,
    lessonPrice: feesValue.value.price,
    lessonTaxPrice: parseInt(feesValue.value.price * 1.1),
    enlistsTimes: feesValue.value.times,
    restTimes: 0,
    totalPrice: parseInt(feesValue.value.price * 1.1),
    isLastMonth: false,
    isOtherFee: false,
  })
  
}

const removeFeeItem = (index) => {
  data.value.splice(index, 1)
}
watch(
  data,
  (newValue) => {
    console.debug('watchdata:', newValue)
    newValue.map((item) => {
      item.totalPrice = Math.floor(item.isLastMonth 
        ? item.lessonPrice / item.enlistsTimes * item.restTimes * 1.1
        : item.lessonPrice / item.enlistsTimes * (item.enlistsTimes - item.restTimes) * 1.1
      )
    })
    refResultLast.value = newValue.filter((item) => item.isLastMonth === true)
    refResultNow.value = newValue.filter((item) => item.isLastMonth === false)
  },
  { deep: true }
)

const refShowOtherDialog = ref(false)
const refOtherItemName = ref(null)
const refOtherItemValue = ref(null)
const addOtherFeeItem = () => {
  data.value.push({
    id: data.value.length + 1,
    lessonName: refOtherItemName.value,
    lessonPrice: refOtherItemValue.value,
    lessonTaxPrice: parseInt(refOtherItemValue.value),
    enlistsTimes: 1,
    restTimes: 0,
    totalPrice: parseInt(refOtherItemValue.value),
    isLastMonth: false,
    isOtherFee: true,
  })
  refShowOtherDialog.value = !refShowOtherDialog.value
}

/**
 * 显示结果对话框
 */
const refShowResultDialog = ref(false)
const studentName = ref('')
const needTitle = ref(false)
const refResultLast = ref([])
const refResultNow = ref([])
const dialogContent = ref(null)
const computerLastPrice = computed(() => {
  console.debug('computerLastPrice:', refResultLast.value)
  return refResultLast.value.reduce((acc, cur) => acc + cur?.totalPrice, 0)
})
const computerNowPrice = computed(() => {
  console.debug('computerNowPrice:', refResultNow.value)
  return refResultNow.value.reduce((acc, cur) => acc + cur?.totalPrice, 0)
})
const computerTotalPrice = computed(() => {
  console.debug('computerTotalPrice')
  return computerNowPrice.value - computerLastPrice.value
})
const copyDialogContent = async () => {
  if (dialogContent.value) {
    const content = dialogContent.value.innerText
    try {
      await navigator.clipboard.writeText(content)
      window.location.href = 'weixin://'
    } catch (err) {
      console.error('复制失败:', err)
    }
  }
}
</script>

<template>
  <div style="height: 100svh; margin: 0; padding: 0; box-sizing: border-box">
    <div style="display: flex; flex-direction: column; gap: 0.5rem; height: 100%">
      <Card style="flex: none">
        <template #content>
          <div
            style="display: grid; grid-template-columns: 40% 60%; align-items: center; gap: 0.5rem"
          >
            <span>课程类别</span>
            <Dropdown v-model="feesTypeValue" :options="feesType"></Dropdown>
            <span>课程名</span>
            <Dropdown
              v-model="feesValue"
              :options="c_fees"
              option-label="text"
              placeholder="请选择课程"
            ></Dropdown>
            <div style="display: flex; flex-direction: row; gap: 0.5rem">
              <Button
                icon="pi pi-fw pi-box"
                @click.prevent="() => (refShowOtherDialog = !refShowOtherDialog)"
              ></Button>
              <Button
                icon="pi pi-fw pi-send"
                @click.prevent="() => (refShowResultDialog = !refShowResultDialog)"
              ></Button>
            </div>
            <Button label="添加" icon="pi pi-plus" @click.prevent="addFeeItem"></Button>
          </div>
        </template>
        <template #footer>
          <div
            style="display: grid; grid-template-columns: 40% 60%; align-items: center; gap: 0.5rem"
          >
            <div style="display: flex; flex-direction: row; gap: 0.5rem"></div>
            <div style="display: flex; flex-direction: row; gap: 0.5rem">
              <span style="font-size: x-large">总价:</span>
              <span style="flex: 1 1 0%; text-align: right; font-size: x-large"
                >{{ computerTotalPrice }}円</span
              >
            </div>
          </div>
        </template>
      </Card>
      <DataView
        :value="data"
        v-show="data.length > 0 ? true : false"
        style="flex: 1 1 0%; overflow: auto"
      >
        <template #list="slotProps">
          <div v-for="(item, index) in slotProps.items" :key="item.id">
            <Divider></Divider>
            <Card style="width: 100%; overflow: hidden">
              <template #title>{{ item.lessonName }}</template>
              <template #subtitle>
                <div class="div-dataview">
                  <label>课程价格(稅前)</label>
                  <span>{{ item.lessonPrice.toLocaleString() }}</span>
                  <label>课程价格(稅后)</label>
                  <span>{{ item.lessonTaxPrice.toLocaleString() }}</span>
                </div>
              </template>
              <template #content v-if="!item.isOtherFee">
                <div class="div-dataview">
                  <label>休息回数</label>
                  <Dropdown
                    v-model="item.restTimes"
                    :options="wddTimesValues"
                    optionLabel="Text"
                    option-value="Value"
                  />
                </div>
              </template>
              <template #footer>
                <div style="display: flex; align-items: center; gap: 0.5rem">
                  <Button
                    :label="item.isLastMonth ? '11月' : '12月'"
                    @click.prevent="() => item.isLastMonth = !item.isLastMonth"
                  ></Button>
                  <Button
                    label='删除'
                    @click.prevent="removeFeeItem(index)"
                  ></Button>
                  <div style="margin-left: auto; font-size: large">
                    <b>{{item.isLastMonth ? '应退费用' : '应缴费用'}}:{{ item.totalPrice.toLocaleString() }}</b>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </template>
      </DataView>
      <footer style="height: 0.5rem; flex: none"></footer>
    </div>
  </div>

  <Dialog v-model:visible="refShowOtherDialog" header="添加自定义项目" modal style="width: 25rem">
    <div style="display: grid; grid-template-columns: 10% 90%; gap: 0.5rem; align-items: center">
      <label for="otherItemName">项目</label>
      <InputText name="otherItemName" v-model="refOtherItemName" placeholder="其他项目" />
      <label for="otherItemValue">费用</label>
      <InputText
        name="otherItemValue"
        v-model="refOtherItemValue"
        type="number"
        pattern="[0-9]*"
        inputmode="numeric"
        placeholder="请输入费用"
      />
      <Button label="确定" style="grid-column: 1; grid-column-end: 3" @click.prevent="addOtherFeeItem" />
    </div>
  </Dialog>
  <Dialog v-model:visible="refShowResultDialog" modal header="费用账单" style="width: 25rem">
    <div style="display: none" ref="dialogContent">
      {{ studentName }}&nbsp;&nbsp;家长：您好！
      <br />
      <br />
      <template v-if="needTitle">
        12月费用稍有上调,明细如下
        <br />
        <br />
      </template>

      <!-- 上月 -->
      <template v-if="refResultLast.length > 0">
        11月
        <br />
        <template v-for="(item, index) in refResultLast" :key="index">
          {{ item.lessonName }}&nbsp;&nbsp;休&nbsp;{{ item.restTimes }}&nbsp;&nbsp;费用&nbsp;{{
            item.totalPrice.toLocaleString()
          }}&nbsp;円
          <br />
        </template>
        总计&nbsp;{{ computerLastPrice.toLocaleString() }}&nbsp;円
      </template>
      <br />
      <br />
      <!-- 今月 -->
      <template v-if="refResultNow.length > 0">
        12月
        <br />
        <template v-for="(item, index) in refResultNow" :key="index">
          {{ item.lessonName }}&nbsp;&nbsp;费用&nbsp;{{ item.totalPrice.toLocaleString() }}&nbsp;円
          <br />
        </template>
        <br />
        总计&nbsp;{{ computerNowPrice.toLocaleString() }}&nbsp;円
        <br />
      </template>
      <br />
      <template v-if="needTitle"> 12月费用 - 11月休总额 </template>
      <br />
      12月费用应付&nbsp;{{ computerTotalPrice.toLocaleString() }}&nbsp;円，请您确认
    </div>

    <div style="display: flex; flex-direction: column; gap: 0.25rem">
      <span>11月</span>
      <div
        v-for="(item, index) in refResultLast"
        :key="index"
        style="display: grid; grid-template-columns: 50% 15% 35%"
      >
        <span>{{ item.lessonName }}</span>
        <span
          >休&nbsp;<u>{{ item.restTimes }}</u></span
        >
        <span
          >费用&nbsp;<u>{{ item.totalPrice.toLocaleString() }}</u
          >&nbsp;円</span
        >
      </div>
      <div style="display: grid; grid-template-columns: 50% 15% 35%">
        <span style="grid-column-start: 3"
          >合计&nbsp;<u>{{ computerLastPrice.toLocaleString() }}</u
          >&nbsp;円</span
        >
      </div>

      <span>12月</span>
      <div
        v-for="(item, index) in refResultNow"
        :key="index"
        style="display: grid; grid-template-columns: 50% 15% 35%"
      >
        <span>{{ item.lessonName }}</span>
        <span></span>
        <span
          >费用&nbsp;<u>{{ item.totalPrice.toLocaleString() }}</u
          >&nbsp;円</span
        >
      </div>
      <div style="display: grid; grid-template-columns: 50% 15% 35%">
        <span style="grid-column-start: 3"
          >合计&nbsp;<u>{{ computerNowPrice.toLocaleString() }}</u
          >&nbsp;円</span
        >
      </div>
      <br />
      <div style="display: grid; grid-template-columns: 50% 15% 35%">
        <span>12月费用 - 11月休总额</span>
        <span style="grid-column-start: 3"
          >总计&nbsp;<u>{{ computerTotalPrice.toLocaleString() }}</u
          >&nbsp;円</span
        >
      </div>
    </div>
    <br />
    <InputGroup>
      <InputGroupAddon>
        <Checkbox v-model="needTitle" :binary="true" />
      </InputGroupAddon>
      <InputText type="text" v-model="studentName" placeholder="学生姓名"/>
      <InputGroupAddon>
        <Button icon="pi pi-fw pi-send" @click.prevent="copyDialogContent" />
      </InputGroupAddon>
    </InputGroup>
  </Dialog>
</template>

<style scoped>
.div-dataview {
  display: grid;
  grid-template-columns: 40% auto;
  gap: 5px;
  align-items: center;
}
</style>
