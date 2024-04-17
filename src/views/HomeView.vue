<script setup lang="ts">
import Dropdown from 'primevue/dropdown'
import InputSwitch from 'primevue/inputswitch'
import InputNumber from 'primevue/inputnumber'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row' // optional
import Button from 'primevue/button'

import { ref, computed } from 'vue'

const selectedFees = ref({ text: '钢琴幼儿30分钟', price: 8250 })

const fees = ref([
  { text: '钢琴幼儿30分钟', price: 8250 },
  { text: '钢琴初级60分钟', price: 15400 },
  { text: '钢琴中级60分钟', price: 17050 },
  { text: '钢琴高级30分钟', price: 10560 },
  { text: '钢琴高级60分钟', price: 19250 },
  { text: '架子鼓小组课', price: 13200 },
  { text: '架子鼓一对一', price: 17512 },
  { text: '吉他一对一', price: 17512 },
  { text: '古筝一对一', price: 17512 },
  { text: '声乐', price: 22000 },
  { text: '街舞60分钟', price: 7480 },
  { text: '街舞90分钟', price: 8580 },
  { text: '爵士舞60分钟', price: 7480 },
  { text: '爵士舞90分钟', price: 8580 },
  { text: '中国舞60分钟', price: 6380 },
  { text: '中国舞90分钟', price: 7480 },
  { text: '拉丁舞60分钟', price: 7480 },
  { text: '拉丁舞90分钟', price: 8580 },
  { text: '中文一年级上册', price: 5775 },
  { text: '中文一年级下册', price: 6600 },
  { text: '中文二年级以上', price: 7480 },
  { text: '英语', price: 8580 },
  { text: '画画60分钟', price: 5500 },
  { text: '画画大班', price: 7150 },
  { text: '画画提高班', price: 7700 },
  { text: '画画一对一', price: 17512 },
  { text: '空手道60分钟', price: 4950 },
  { text: '空手道90分钟', price: 6050 }
])

const admissionFee = ref(false)
const materialCosts = ref(false)
const normalTimes = ref(4)
const enlistsTimes = ref(4)
const restTimes = ref(0)

const totlePrice = computed(() => {
  let total = 0
  lessons.value.forEach((lesson) => {
    total += lesson.price
  })
  return total.toLocaleString()
})

const lessons = ref([])

const addGrid = () => {
  let lesson = {
    id: 1,
    lessonName: selectedFees.value.text,
    lessonPrice: selectedFees.value.price,
    times: enlistsTimes.value,
    price: (selectedFees.value.price / normalTimes.value) * (enlistsTimes.value - restTimes.value)
  }
  addGridValue(lesson)
}

const addAdmissionFee = () => {
  if (admissionFee.value) {
    let lesson = {
      id: 98,
      lessonName: '入会费',
      lessonPrice: 10000,
      times: 1,
      price: 10000
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
      lessonPrice: 10000,
      times: 1,
      price: 10000
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
      <label>课程名</label>
      <Dropdown
        id="wddLesson"
        v-model="selectedFees"
        :options="fees"
        optionLabel="text"
        placeholder="选择课程"
        inputClass="input"
      />

      <label>课程价格</label>
      <span>{{ selectedFees.price }}</span>

      <label> 课程回数 </label>
      <InputNumber type="number" v-model="normalTimes" inputId="normal"></InputNumber>

      <label> 报名回数 </label>
      <InputNumber v-model="enlistsTimes" inputId="enlists"></InputNumber>

      <label> 休息回数 </label>
      <InputNumber type="number" v-model="restTimes" inputId="rest"></InputNumber>

      <label>入会费</label>
      <InputSwitch
        type="number"
        v-model="admissionFee"
        inputId="admissionFee"
        @change="addAdmissionFee"
      />

      <label>材料费</label>
      <InputSwitch v-model="materialCosts" inputId="materialCosts" @change="addMaterialCosts" />

      <Button label="添加" class="btn" @click="addGrid" />
    </div>

    <div class="gridArea">
      type="number"
      <DataTable :value="lessons" tableStyle="min-width: 40rem">
        <Column field="lessonName" header="课程"></Column>
        <Column field="lessonPrice" header="课程价格"></Column>
        <Column field="times" header="报名回数"></Column>
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
            <Column footer="Totals:" :colspan="3" footerStyle="text-align:right" />
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
  grid-template-columns: 5em 15em;
  gap: 20px;
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
