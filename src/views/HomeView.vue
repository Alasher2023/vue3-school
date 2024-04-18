<script setup lang="ts">
import Dropdown from 'primevue/dropdown'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row' // optional
import Button from 'primevue/button'
import Divider from 'primevue/divider'

import { ref, computed, watch } from 'vue'

const selectedFeesType = ref('乐器')
const selectedFees = ref({})

const feesType = ref([
  '乐器',
  '声乐',
  '舞蹈',
  '语言',
  '画画',
  '空手道',
  '个人指导120分钟',
  '个人指导90分钟',
  '个人指导60分钟'
])

const fees = ref([
  { text: '钢琴幼儿30分钟', price: 7500, type: '乐器' },
  { text: '钢琴初级60分钟', price: 14000, type: '乐器' },
  { text: '钢琴中级60分钟', price: 15500, type: '乐器' },
  { text: '钢琴高级30分钟', price: 9600, type: '乐器' },
  { text: '钢琴高级60分钟', price: 17500, type: '乐器' },
  { text: '架子鼓小组课', price: 12000, type: '乐器' },
  { text: '架子鼓一对一', price: 15920, type: '乐器' },
  { text: '吉他一对一', price: 15920, type: '乐器' },
  { text: '古筝一对一', price: 15920, type: '乐器' },
  { text: '声乐', price: 20000, type: '声乐' },
  { text: '街舞60分钟', price: 6800, type: '舞蹈' },
  { text: '街舞90分钟', price: 7800, type: '舞蹈' },
  { text: '爵士舞60分钟', price: 6800, type: '舞蹈' },
  { text: '爵士舞90分钟', price: 7800, type: '舞蹈' },
  { text: '中国舞60分钟', price: 5800, type: '舞蹈' },
  { text: '中国舞90分钟', price: 6800, type: '舞蹈' },
  { text: '拉丁舞60分钟', price: 6800, type: '舞蹈' },
  { text: '拉丁舞90分钟', price: 7800, type: '舞蹈' },
  { text: '中文一年级上册', price: 5250, type: '语言' },
  { text: '中文一年级下册', price: 6000, type: '语言' },
  { text: '中文二年级以上', price: 6800, type: '语言' },
  { text: '英语', price: 7800, type: '语言' },
  { text: '画画60分钟', price: 5000, type: '画画' },
  { text: '画画大班', price: 6500, type: '画画' },
  { text: '画画提高班', price: 7000, type: '画画' },
  { text: '画画一对一', price: 15920, type: '画画' },
  { text: '空手道60分钟', price: 4500, type: '空手道' },
  { text: '空手道90分钟', price: 5500, type: '空手道' },

  //个人指导 小学生
  { text: '周1回（幼儿 小学生）', price: 16000, type: '个人指导120分钟' },
  { text: '周2回（幼儿 小学生）', price: 31200, type: '个人指导120分钟' },
  { text: '周3回（幼儿 小学生）', price: 45600, type: '个人指导120分钟' },
  { text: '周4回（幼儿 小学生）', price: 59200, type: '个人指导120分钟' },
  { text: '周5回（幼儿 小学生）', price: 72000, type: '个人指导120分钟' },

  { text: '周1回（幼儿 小学生）', price: 12300, type: '个人指导90分钟' },
  { text: '周2回（幼儿 小学生）', price: 24000, type: '个人指导90分钟' },
  { text: '周3回（幼儿 小学生）', price: 35100, type: '个人指导90分钟' },
  { text: '周4回（幼儿 小学生）', price: 45600, type: '个人指导90分钟' },
  { text: '周5回（幼儿 小学生）', price: 55500, type: '个人指导90分钟' },

  { text: '周1回（幼儿 小学生）', price: 8400, type: '个人指导60分钟' },
  { text: '周2回（幼儿 小学生）', price: 17200, type: '个人指导60分钟' },
  { text: '周3回（幼儿 小学生）', price: 25200, type: '个人指导60分钟' },
  { text: '周4回（幼儿 小学生）', price: 32800, type: '个人指导60分钟' },
  { text: '周5回（幼儿 小学生）', price: 40000, type: '个人指导60分钟' },

  //个人指导 中学生
  { text: '周1回（中学生）', price: 18000, type: '个人指导120分钟' },
  { text: '周2回（中学生）', price: 36000, type: '个人指导120分钟' },
  { text: '周3回（中学生）', price: 52800, type: '个人指导120分钟' },
  { text: '周4回（中学生）', price: 68800, type: '个人指导120分钟' },
  { text: '周5回（中学生）', price: 84000, type: '个人指导120分钟' },

  { text: '周1回（中学生）', price: 13800, type: '个人指导90分钟' },
  { text: '周2回（中学生）', price: 27000, type: '个人指导90分钟' },
  { text: '周3回（中学生）', price: 39600, type: '个人指导90分钟' },
  { text: '周4回（中学生）', price: 51600, type: '个人指导90分钟' },
  { text: '周5回（中学生）', price: 63000, type: '个人指导90分钟' },

  { text: '周1回（中学生）', price: 9800, type: '个人指导60分钟' },
  { text: '周2回（中学生）', price: 19200, type: '个人指导60分钟' },
  { text: '周3回（中学生）', price: 28200, type: '个人指导60分钟' },
  { text: '周4回（中学生）', price: 36800, type: '个人指导60分钟' },
  { text: '周5回（中学生）', price: 45000, type: '个人指导60分钟' },

  //个人指导 高一高二
  { text: '周1回（高一高二）', price: 19200, type: '个人指导120分钟' },
  { text: '周2回（高一高二）', price: 37600, type: '个人指导120分钟' },
  { text: '周3回（高一高二）', price: 55200, type: '个人指导120分钟' },
  { text: '周4回（高一高二）', price: 72000, type: '个人指导120分钟' },
  { text: '周5回（高一高二）', price: 88000, type: '个人指导120分钟' },

  { text: '周1回（高一高二）', price: 14700, type: '个人指导90分钟' },
  { text: '周2回（高一高二）', price: 28800, type: '个人指导90分钟' },
  { text: '周3回（高一高二）', price: 42300, type: '个人指导90分钟' },
  { text: '周4回（高一高二）', price: 55200, type: '个人指导90分钟' },
  { text: '周5回（高一高二）', price: 67500, type: '个人指导90分钟' },

  { text: '周1回（高一高二）', price: 10400, type: '个人指导60分钟' },
  { text: '周2回（高一高二）', price: 20400, type: '个人指导60分钟' },
  { text: '周3回（高一高二）', price: 30000, type: '个人指导60分钟' },
  { text: '周4回（高一高二）', price: 39200, type: '个人指导60分钟' },
  { text: '周5回（高一高二）', price: 48000, type: '个人指导60分钟' },

  //个人指导 高三
  { text: '周1回（高三）', price: 19200, type: '个人指导120分钟' },
  { text: '周2回（高三）', price: 37600, type: '个人指导120分钟' },
  { text: '周3回（高三）', price: 55200, type: '个人指导120分钟' },
  { text: '周4回（高三）', price: 72000, type: '个人指导120分钟' },
  { text: '周5回（高三）', price: 88000, type: '个人指导120分钟' },

  { text: '周1回（高三）', price: 14700, type: '个人指导90分钟' },
  { text: '周2回（高三）', price: 28800, type: '个人指导90分钟' },
  { text: '周3回（高三）', price: 42300, type: '个人指导90分钟' },
  { text: '周4回（高三）', price: 55200, type: '个人指导90分钟' },
  { text: '周5回（高三）', price: 67500, type: '个人指导90分钟' },

  { text: '周1回（高三）', price: 10400, type: '个人指导60分钟' },
  { text: '周2回（高三）', price: 20400, type: '个人指导60分钟' },
  { text: '周3回（高三）', price: 30000, type: '个人指导60分钟' },
  { text: '周4回（高三）', price: 39200, type: '个人指导60分钟' },
  { text: '周5回（高三）', price: 48000, type: '个人指导60分钟' }
])

const specialOffers = ref([
  { text: '无优惠', value: 1.0 },
  { text: '95折', value: 0.95 },
  { text: '9折', value: 0.9 }
])
const spOffers = ref(1.0)

const c_fees = computed(() => {
  return fees.value.filter((fee) => fee.type === selectedFeesType.value)
})

watch(selectedFeesType, () => {
  selectedFees.value = {}
})

const admissionFee = ref(false)
const materialCosts = ref(false)
const backFlg = ref(false)
const normalTimes = ref('4')
const enlistsTimes = ref('4')
const restTimes = ref('0')

const totlePrice = computed(() => {
  let total = 0
  lessons.value.forEach((lesson) => {
    total += lesson.price
  })
  return total.toLocaleString()
})

const lessons = ref([])

const addGrid = () => {
  let iPrice = Math.ceil(
    ((((selectedFees.value.price * 11) / 10) * spOffers.value) / parseInt(normalTimes.value)) *
      (parseInt(enlistsTimes.value) - parseInt(restTimes.value))
  )

  if (backFlg.value) iPrice = iPrice * -1

  let lesson = {
    id: 1,
    lessonName: selectedFees.value.text,
    lessonPrice: selectedFees.value.price,
    withTax: (selectedFees.value.price * 11) / 10,
    times: enlistsTimes.value,
    spOffer: spOffers.value === 1.0 ? '' : spOffers.value === 0.9 ? '9折' : '95折',
    price: iPrice
  }
  addGridValue(lesson)
}

const addSpecialOffers = () => {
  let lesson = {
    id: 97,
    lessonName: '介绍优惠',
    lessonPrice: 1000,
    withTax: 1000,
    times: 1,
    spOffer: '',
    price: -1000
  }
  addGridValue(lesson)
}

const addAdmissionFee = () => {
  if (admissionFee.value) {
    let lesson = {
      id: 98,
      lessonName: '入会费',
      lessonPrice: 10000,
      withTax: 11000,
      times: 1,
      spOffer: '',
      price: 11000
    }
    addGridValue(lesson)
  } else {
    lessons.value.forEach((lesson, index) => {
      if (lesson.id === 98) {
        lessons.value.splice(index, 1)
      }
    })
  }
}

const addMaterialCosts = () => {
  if (materialCosts.value) {
    let lesson = {
      id: 99,
      lessonName: '材料费',
      lessonPrice: 3980,
      withTax: 4378,
      times: 1,
      spOffer: '',
      price: 4378
    }
    addGridValue(lesson)
  } else {
    lessons.value.forEach((lesson, index) => {
      if (lesson.id === 99) {
        lessons.value.splice(index, 1)
      }
    })
  }
}

const addGridValue = (lesson) => {
  lessons.value.push(lesson)
}
</script>

<template>
  <main>
    <div class="searchArea">
      <label>课程类别</label>
      <Dropdown
        id="wddLessonType"
        v-model="selectedFeesType"
        :options="feesType"
        placeholder="选择类别"
      />

      <label>课程名</label>
      <Dropdown
        id="wddLesson"
        v-model="selectedFees"
        :options="c_fees"
        optionLabel="text"
        placeholder="选择课程"
      />

      <label>优惠</label>
      <Dropdown
        id="wddSpOffer"
        v-model="spOffers"
        :options="specialOffers"
        optionLabel="text"
        option-value="value"
      />

      <label>课程价格(稅前)</label>
      <span>{{ selectedFees.price }}</span>

      <label>课程价格(稅後)</label>
      <span>{{ selectedFees.price == null ? '' : (selectedFees.price * 11) / 10 }}</span>

      <label> 课程回数 </label>
      <InputText
        v-model="normalTimes"
        type="number"
        pattern="[0-9]*"
        inputId="normal"
        inputmode="numeric"
      ></InputText>
      <label> 报名回数 </label>
      <InputText
        v-model="enlistsTimes"
        type="number"
        pattern="[0-9]*"
        inputmode="numeric"
      ></InputText>
      <label> 休息回数 </label>
      <InputText
        v-model="restTimes"
        type="number"
        pattern="[0-9]*"
        inputId="rest"
        inputmode="numeric"
      ></InputText>

      <Divider></Divider>
      <Divider></Divider>

      <label>介紹特典</label>
      <Button label="添加特典" severity="help" outlined @click="addSpecialOffers" />

      <label>入会费</label>
      <InputSwitch v-model="admissionFee" inputId="admissionFee" @change="addAdmissionFee" />

      <label>材料费</label>
      <InputSwitch v-model="materialCosts" inputId="materialCosts" @change="addMaterialCosts" />

      <label>返金</label>
      <InputSwitch v-model="backFlg" />

      <Button label="添加" class="btn" @click="addGrid" />
    </div>

    <div class="gridArea">
      <DataTable :value="lessons" tableStyle="min-width: 60rem">
        <Column field="lessonName" header="课程"></Column>
        <Column field="lessonPrice" header="课程价格(稅前)"></Column>
        <Column field="withTax" header="课程价格(稅後)"></Column>
        <Column field="times" header="报名回数"></Column>
        <Column field="spOffer" header=""></Column>
        <Column field="price" header="应缴费用"></Column>
        <Column>
          <template #body="slotProps">
            <Button
              label="删除"
              class="btn"
              @click="
                () => {
                  if (slotProps.data.id === 98) admissionFee = false
                  if (slotProps.data.id === 99) materialCosts = false
                  lessons.splice(slotProps.index, 1)
                }
              "
            />
          </template>
        </Column>
        <ColumnGroup type="footer">
          <Row>
            <Column footer="总计:" :colspan="5" footerStyle="text-align:right" />
            <Column :footer="totlePrice" />
          </Row>
        </ColumnGroup>
      </DataTable>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 0;
  padding: 0;
  height: 100dvh;
}

.searchArea {
  margin: 0.5em 0.5em;
  display: grid;
  grid-template-columns: 7em 13em;
  gap: 10px;
}

.searchArea .btn {
  grid-column: auto;
  width: 5em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.gridArea {
  margin: 0.5em 0.5em;
  width: 20em;
  @media screen and (min-width: 600px) {
    width: 70em;
  }
}

label {
  display: inline-flex;
  align-items: center;
  justify-content: left;
}

.p-inputtext {
  width: 5em !important;
}

span {
  display: inline-flex;
  align-items: center;
  justify-content: left;
}
</style>
