<template>
  <Card>
    <template #content>
      <Toolbar>
        <template #start>
          <InputGroup>
            <Button label="类别" />
            <Dropdown
              v-model="feesTypeValue"
              :options="feesType"
              pt:root:class="wdd-large"
            ></Dropdown>
          </InputGroup>

          <InputGroup pt:root:style="margin-left: 10px">
            <Button label="项目" />
            <Dropdown
              v-model="feesValue"
              :options="c_fees"
              option-label="text"
              pt:root:class="wdd-large"
            ></Dropdown>
          </InputGroup>
          <Button label="新增" outlined class="toolbar-btn" @click="addFeeItem"></Button>
        </template>
        <template #end>
          <InputGroup>
            <InputText v-model="otherFeeItem" style="width: 10em" placeholder="其他项目" />
            <Button label="添加" severity="warning" @click="() => (visible = true)" />
          </InputGroup>
        </template>
      </Toolbar>

      <DataTable :value="lessons" ref="dt" editMode="cell" @cell-edit-complete="onCellEditComplete">
        <Column field="lessonName" header="课程" style=""></Column>
        <Column field="lessonPrice" header="稅前价格" style="">
          <template #body="slotProps">
            {{ parseInt(slotProps.data.lessonPrice).toLocaleString() }}
          </template>
        </Column>
        <Column field="lessonTaxPrice" header="稅後价格" style="">
          <template #body="slotProps">
            {{
              slotProps.data.id === 99
                ? parseInt(slotProps.data.lessonPrice).toLocaleString()
                : Math.floor(slotProps.data.lessonPrice * 1.1).toLocaleString()
            }}
          </template>
        </Column>
        <Column field="enlistsTimes" header="报名回数" style="">
          <template #editor="{ data, field }">
            <Dropdown
              v-model="data[field]"
              :options="wddTimesValues"
              optionLabel="Text"
              option-value="Value"
              pt:root:class="wdd-normal"
            />
          </template>
        </Column>
        <Column field="restTimes" header="休息回数" style="">
          <template #editor="{ data, field }">
            <Dropdown
              v-model="data[field]"
              :options="wddTimesValues"
              optionLabel="Text"
              option-value="Value"
              pt:root:class="wdd-normal"
            />
          </template>
        </Column>
        <Column field="spOffer" header="折扣" style="">
          <template #editor="{ data, field }">
            <Dropdown
              v-model="data[field]"
              :options="specialOffers"
              optionLabel="text"
              option-value="value"
              pt:root:class="wdd-normal"
            />
          </template>
          <template #body="slotProps">
            {{
              slotProps.data.spOffer === 1.0
                ? '无'
                : slotProps.data.spOffer === 0.95
                  ? '95折'
                  : '9折'
            }}
          </template>
        </Column>
        <Column field="price" header="应缴费用" style="">
          <template #body="slotProps">
            {{
              slotProps.data.id === 99
                ? parseInt(slotProps.data.lessonPrice).toLocaleString()
                : slotProps.data.id === 98
                  ? Math.floor(slotProps.data.lessonPrice * 1.1).toLocaleString()
                  : Math.ceil(
                      (Math.floor(slotProps.data.lessonPrice * 1.1) / (4 * slotProps.data.id)) *
                        (slotProps.data.enlistsTimes * slotProps.data.id -
                          slotProps.data.restTimes) *
                        slotProps.data.spOffer
                    ).toLocaleString()
            }}
          </template>
        </Column>
        <Column style="width: 15%">
          <template #body="slotProps">
            <Button
              icon="pi pi-trash"
              @click="
                () => {
                  lessons.splice(slotProps.index, 1)
                }
              "
            ></Button>
            <Button
              style="margin: auto 5px"
              icon="pi pi-bitcoin"
              @click="
                () => {
                  slotProps.data.lessonPrice = 0 - slotProps.data.lessonPrice
                }
              "
            ></Button>
          </template>
        </Column>
        <ColumnGroup type="footer">
          <Row>
            <Column footer="总计:" :colspan="6" footerStyle="text-align:right" />
            <Column :footer="totlePrice" />
          </Row>
        </ColumnGroup>
      </DataTable>
    </template>
  </Card>

  <Dialog v-model:visible="visible" header="税前价格" modal :style="{ width: '25rem' }">
    <InputGroup>
      <InputText
        v-model="otherFeeValue"
        type="number"
        pattern="[0-9]*"
        inputmode="numeric"
        placeholder="请输入费用"
      />
      <Button label="确定" severity="warning" @click="addOtherFeeItem" />
    </InputGroup>
  </Dialog>
</template>

<script setup>
import Card from 'primevue/card'
import Toolbar from 'primevue/toolbar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row' // optional
import Dropdown from 'primevue/dropdown'
import Dialog from 'primevue/dialog'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import { computed, ref } from 'vue'
import { feesType, fees, specialOffers, wddTimesValues } from '@/data/dropdownData.js'

const feesTypeValue = ref('乐器')
const feesValue = ref('')
const c_fees = computed(() => {
  return fees.value.filter((fee) => fee.type === feesTypeValue.value)
})
const otherFeeItem = ref()
const otherFeeValue = ref()
const lessons = ref([])

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

  lessons.value.push({
    id: id,
    lessonName: feesValue.value.text,
    lessonPrice: feesValue.value.price,
    enlistsTimes:
      fees.value.find((fee) => fee.text === feesValue.value.text).type === '其他' ? 1 : 4,
    restTimes: 0,
    spOffer: 1.0
  })
}

const addOtherFeeItem = () => {
  lessons.value.push({
    id: 99,
    lessonName: otherFeeItem.value,
    lessonPrice: otherFeeValue.value,
    enlistsTimes: 1,
    restTimes: 0,
    spOffer: 1.0
  })
  otherFeeItem.value = ''
  otherFeeValue.value = ''
  visible.value = false
}

const onCellEditComplete = (event) => {
  let { data, newValue, field } = event
  data[field] = newValue
}

const dt = ref([])
const totlePrice = computed(() => {
  let total = 0
  lessons.value.forEach((lesson) => {
    let price =
      lesson.id === 99
        ? parseInt(lesson.lessonPrice)
        : lesson.id === 98
          ? Math.floor(lesson.lessonPrice * 1.1)
          : Math.ceil(
              (Math.floor(lesson.lessonPrice * 1.1) / (4 * lesson.id)) *
                (lesson.enlistsTimes * lesson.id - lesson.restTimes) *
                lesson.spOffer
            )

    total += price
  })
  return total.toLocaleString()
})

const visible = ref(false)
</script>

<style scoped>
.wdd-normal {
  width: 100%;
  max-width: 9em;
}
.wdd-large {
  width: 9em;
}
.toolbar-btn {
  margin: 0 5px;
  width: 8em;
}
</style>
