<script setup>
import DataView from 'primevue/dataview'
import Divider from 'primevue/divider'
import Card from 'primevue/card'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputGroup from 'primevue/inputgroup'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row' // optional
import { ref, watch, computed } from 'vue'

import { feesType, fees, specialOffers, wddTimesValues } from '@/data/dropdownData.js'

const data = ref([])
const feesTypeValue = ref('乐器')
const feesValue = ref('')
const c_fees = computed(() => {
  return fees.value.filter((fee) => fee.type === feesTypeValue.value)
})
const totalPrice = ref(0)
const grid_visible = ref(false)
const studentName = ref('')

watch(
  data,
  (newValue) => {
    // 计算总价
    totalPrice.value = 0
    newValue.forEach((item) => {
      let price =
        item.id === 99
          ? item.lessonTaxPrice
          : item.id === 98
            ? item.lessonTaxPrice
            : (item.lessonTaxPrice / (4 * item.id)) *
              (item.enlistsTimes * item.id - item.restTimes) *
              item.spOffer

      item.totalPrice = parseInt(price)
      totalPrice.value += item.totalPrice
    })
  },
  { deep: true }
)

const addFeeItem = () => {
  let type = fees.value.find((fee) => fee.text === feesValue.value.text).type
  let id = 1
  if (type === '其他') {
    if (feesValue.value.text === '介绍费') {
      id = 99
    } else {
      id = 98
    }
  } else {
    if (type === '个人指导120分钟' || type === '个人指导90分钟' || type === '个人指导60分钟') {
      id = parseInt(feesValue.value.text.substring(1, 2))
    } else {
      id = 1
    }
  }

  data.value.push({
    id: id,
    lessonName: feesValue.value.text,
    lessonPrice: feesValue.value.price,
    lessonTaxPrice: parseInt(feesValue.value.price * 1.1),
    enlistsTimes:
      fees.value.find((fee) => fee.text === feesValue.value.text).type === '其他' ? 1 : 4,
    restTimes: 0,
    spOffer: 1.0,
    totalPrice: 0
  })
}

const otherFeeItem = ref()
const otherFeeValue = ref()
const visible = ref(false)
const addOtherFeeItem = () => {
  data.value.push({
    id: 99,
    lessonName: otherFeeItem.value,
    lessonPrice: otherFeeValue.value,
    lessonTaxPrice: otherFeeValue.value,
    enlistsTimes: 1,
    restTimes: 0,
    spOffer: 1.0,
    totalPrice: otherFeeValue.value
  })
  otherFeeItem.value = ''
  otherFeeValue.value = ''
  visible.value = false
}
</script>

<template>
  <div class="div-dataview" style="margin-top: 30px">
    <label>课程类别</label>
    <Dropdown v-model="feesTypeValue" :options="feesType"></Dropdown>
    <label>课程名</label>
    <Dropdown
      v-model="feesValue"
      :options="c_fees"
      option-label="text"
      placeholder="请选择课程"
    ></Dropdown>
    <div>
      <Button icon="pi pi-box" @click="visible = true" style="margin: auto 5px"></Button>
      <Button
        icon="pi pi-external-link"
        @click="grid_visible = true"
        style="margin: auto 5px"
      ></Button>
    </div>

    <Button label="新增" outlined @click="addFeeItem"></Button>
  </div>

  <div class="div-info">
    <InputText placeholder="学生姓名" v-model="studentName" />
    <b style="margin: auto; font-size: x-large">总价:</b>
    <b style="margin: auto; font-size: x-large">{{ totalPrice.toLocaleString() }}</b>
  </div>

  <DataView
    :value="data"
    v-show="data.length > 0 ? true : false"
    style="height: 30rem; overflow: auto; margin-top: 20px"
  >
    <template #list="slotProps">
      <div v-for="(item, index) in slotProps.items" :key="index">
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
          <template #content>
            <div class="div-dataview">
              <label>报名回数</label>
              <Dropdown
                v-model="item.enlistsTimes"
                :options="wddTimesValues"
                optionLabel="Text"
                option-value="Value"
              />
              <label>休息回数</label>
              <Dropdown
                v-model="item.restTimes"
                :options="wddTimesValues"
                optionLabel="Text"
                option-value="Value"
              />
              <label>享受折扣</label>
              <Dropdown
                v-model="item.spOffer"
                :options="specialOffers"
                optionLabel="text"
                option-value="value"
                pt:root:class="wdd-normal"
              />
            </div>
          </template>
          <template #footer>
            <div style="float: left">
              <Button
                icon="pi pi-trash"
                @click="
                  () => {
                    data.splice(index, 1)
                  }
                "
              ></Button>
              <Button
                style="margin: auto 5px"
                icon="pi pi-bitcoin"
                @click="
                  () => {
                    item.lessonPrice = 0 - item.lessonPrice
                    item.lessonTaxPrice = 0 - item.lessonTaxPrice
                  }
                "
              ></Button>
            </div>
            <div style="float: right; font-size: x-large">
              <b>应缴费用:{{ item.totalPrice.toLocaleString() }}</b>
            </div>
          </template>
        </Card>
      </div>
    </template>
  </DataView>

  <Dialog v-model:visible="visible" header="添加自定义项目" modal :style="{ width: '25rem' }">
    <InputGroup style="margin: 5px auto">
      <Button label="项目" severity="warning" />
      <InputText v-model="otherFeeItem" style="width: 10em" placeholder="其他项目" />
    </InputGroup>
    <InputGroup style="margin: 5px auto">
      <Button label="费用" severity="warning" />
      <InputText
        v-model="otherFeeValue"
        type="number"
        pattern="[0-9]*"
        inputmode="numeric"
        placeholder="请输入费用"
      />
    </InputGroup>
    <Button label="确定" style="width: 100%" severity="" @click="addOtherFeeItem" />
  </Dialog>

  <Dialog v-model:visible="grid_visible" maximizable>
    <template #header>
      <span style="margin: auto">{{ studentName }}</span>
    </template>
    <DataTable :value="data">
      <Column field="lessonName" header="课程"></Column>
      <Column field="lessonPrice" header="税前价格">
        <template #body="slotProps">
          {{ slotProps.data.lessonPrice.toLocaleString() }}
        </template>
      </Column>
      <Column field="lessonTaxPrice" header="税后价格">
        <template #body="slotProps">
          {{ slotProps.data.lessonTaxPrice.toLocaleString() }}
        </template></Column
      >
      <Column field="enlistsTimes" header="报名回数"></Column>
      <Column field="restTimes" header="休息回数"></Column>
      <Column field="spOffer" header="">
        <template #body="slotProps">
          {{
            slotProps.data.spOffer === 1.0 ? '' : slotProps.data.spOffer === 0.9 ? '9折' : '95折'
          }}
        </template>
      </Column>
      <Column field="totalPrice" header="应缴费用">
        <template #body="slotProps">
          {{ slotProps.data.totalPrice.toLocaleString() }}
        </template>
      </Column>
      <ColumnGroup type="footer">
        <Row>
          <Column footer="总计:" :colspan="6" footerStyle="text-align:right" />
          <Column :footer="totalPrice.toLocaleString()" />
        </Row>
      </ColumnGroup>
    </DataTable>
  </Dialog>
</template>

<style scoped>
.div-dataview {
  display: grid;
  grid-template-columns: 40% auto;
  gap: 5px;
}
.div-info {
  margin: 10px auto;
  display: grid;
  grid-template-columns: 40% 20% auto;
}
</style>
