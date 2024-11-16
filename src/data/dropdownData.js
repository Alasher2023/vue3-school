import { ref } from 'vue'

export const feesType = ref([
  '音乐',
  '舞蹈',
  '语言',
  '绘画',
  '书法',
  'パズル道場',
  '其他',
  '空手道',
  '个人指导2h',
  '个人指导1.5h',
  '个人指导1h'
])

export const fees = ref([
  // { text: '钢琴幼儿0.5h', price: 7500, type: '音乐' },
  // { text: '钢琴初级1h', price: 14000, type: '音乐' },
  // { text: '钢琴初级1h（2回）', price: 26600, type: '音乐' },
  // { text: '钢琴中级1h', price: 15500, type: '音乐' },
  // { text: '钢琴高级0.5h', price: 9600, type: '音乐' },
  // { text: '钢琴高级1h', price: 17500, type: '音乐' },

  { text: '10月-钢琴幼儿0.5h', price: 7900, type: '音乐', times: 4 },
  { text: '10月-钢琴幼儿0.5h（2回）', price: 15010, type: '音乐', times: 8 },
  { text: '10月-钢琴学生初级1h', price: 14800, type: '音乐', times: 4 },
  { text: '10月-钢琴学生初级1h（2回）', price: 28120, type: '音乐', times: 8 },
  { text: '10月-钢琴学生中级0.5h', price: 9000, type: '音乐', times: 4 },
  { text: '10月-钢琴学生中级0.5h（2回）', price: 17100, type: '音乐', times: 8 },
  { text: '10月-钢琴学生中级1h', price: 16400, type: '音乐', times: 4 },
  { text: '10月-钢琴学生中级1h（2回）', price: 31160, type: '音乐', times: 8 },
  { text: '10月-钢琴学生高级0.5h', price: 10100, type: '音乐', times: 4 },
  { text: '10月-钢琴学生高级0.5h（2回）', price: 19190, type: '音乐', times: 8 },
  { text: '10月-钢琴学生高级1h', price: 18500, type: '音乐', times: 4 },
  { text: '10月-钢琴学生高级1h（2回）', price: 35150, type: '音乐', times: 8 },
  { text: '10月-钢琴大人初级0.5h', price: 8300, type: '音乐', times: 4 },
  { text: '10月-钢琴大人初级0.5h（2回）', price: 15770, type: '音乐', times: 8 },
  { text: '10月-钢琴大人初级1h', price: 15300, type: '音乐', times: 4 },
  { text: '10月-钢琴大人初级1h（2回）', price: 29070, type: '音乐', times: 8 },
  { text: '10月-钢琴大人中级0.5h', price: 9300, type: '音乐', times: 4 },
  { text: '10月-钢琴大人中级0.5h（2回）', price: 17670, type: '音乐', times: 8 },
  { text: '10月-钢琴大人中级1h', price: 16900, type: '音乐', times: 4 },
  { text: '10月-钢琴大人中级1h（2回）', price: 32100, type: '音乐', times: 8 },

  { text: '架子鼓小组课', price: 12000, type: '音乐', times: 4  },
  { text: '架子鼓一对一', price: 15920, type: '音乐', times: 4  },

  { text: '12月-架子鼓小组课', price: 13000, type: '音乐', times: 4  },
  { text: '12月-架子鼓一对一', price: 17200, type: '音乐', times: 4  },

  { text: '吉他一对一', price: 15920, type: '音乐', times: 4  },
  
  { text: '12月-吉他小组课', price: 14500, type: '音乐', times: 4  },
  { text: '12月-吉他一对一', price: 17200, type: '音乐', times: 4  },

  { text: '12月-小提琴小组课', price: 13000, type: '音乐', times: 4  },
  { text: '12月-小提琴一对一（30分钟）', price: 9460, type: '音乐', times: 4  },
  { text: '12月-小提琴一对一（60分钟）', price: 17200, type: '音乐', times: 4  },
  
  { text: '古筝一对一', price: 15920, type: '音乐' },

  { text: '12月-古筝小组课', price: 13000, type: '音乐', times: 4  },
  { text: '12月-古筝一对一（30分钟）', price: 9460, type: '音乐', times: 4  },
  { text: '12月-古筝一对一（60分钟）', price: 17200, type: '音乐', times: 4  },
  
  { text: '声乐', price: 20000, type: '音乐', times: 4  },

  { text: '12月-乐理视唱练耳小组课', price: 19000, type: '音乐', times: 4  },
  { text: '12月-乐理视唱练耳小组课一对一', price: 21000, type: '音乐', times: 4  },
  
  { text: '中国舞1h', price: 5800, type: '舞蹈', times: 4  },
  { text: '中国舞1.5h', price: 6800, type: '舞蹈', times: 4  },
  { text: '街舞1h', price: 6800, type: '舞蹈', times: 4  },
  { text: '街舞1.5h', price: 7800, type: '舞蹈', times: 4  },
  { text: '爵士舞1h', price: 6800, type: '舞蹈', times: 4  },
  { text: '爵士舞1.5h', price: 7800, type: '舞蹈', times: 4  },
  { text: '拉丁舞1h', price: 6800, type: '舞蹈', times: 4  },
  { text: '拉丁舞1.5h', price: 7800, type: '舞蹈', times: 4  },

  { text: '12月-HipHop幼儿班', price: 6200, type: '舞蹈', times: 4  },
  { text: '12月-HipHop学生班', price: 7400, type: '舞蹈', times: 4  },
  { text: '12月-HipHop成人班', price: 8600, type: '舞蹈', times: 4  },
  { text: '12月-爵士舞学生班', price: 7400, type: '舞蹈', times: 4  },
  { text: '12月-爵士舞成人班', price: 8600, type: '舞蹈', times: 4  },
  { text: '12月-中国舞幼儿班', price: 6200, type: '舞蹈', times: 4  },
  { text: '12月-中国舞学生班', price: 7400, type: '舞蹈', times: 4  },
  { text: '12月-中国舞成人班', price: 8600, type: '舞蹈', times: 4  },
  { text: '12月-拉丁舞幼儿班', price: 7400, type: '舞蹈', times: 4  },
  { text: '12月-拉丁舞学生班', price: 8600, type: '舞蹈', times: 4  },
  { text: '12月-拉丁舞成人班', price: 8600, type: '舞蹈', times: 4  },
  { text: '12月-舞蹈一对一', price: 20000, type: '舞蹈', times: 4  },
  { text: '12月-舞蹈一对二', price: 16000, type: '舞蹈', times: 4  },
  { text: '12月-舞蹈一对三', price: 12000, type: '舞蹈', times: 4  },
  
  // 语言
  { text: '中文一年级上册', price: 5250, type: '语言', times: 4  },
  { text: '中文一年级下册', price: 6000, type: '语言', times: 4  },
  { text: '中文二年级以上', price: 6800, type: '语言', times: 4  },

  { text: '12月-幼儿班', price: 4300, type: '语言', times: 4  },
  { text: '12月-中文一年级上册', price: 5800, type: '语言', times: 4  },
  { text: '12月-中文一年级下册', price: 6600, type: '语言', times: 4  },
  { text: '12月-中文二年级以上', price: 7500, type: '语言', times: 4  },
  
  { text: '英语', price: 7800, type: '语言', times: 4  },

  { text: '12月-幼儿班', price: 6600, type: '语言', times: 4  },
  { text: '12月-学生班', price: 8500, type: '语言', times: 4  },
  { text: '12月-5级英检对策班', price: 9800, type: '语言', times: 4  },
  { text: '12月-4级英检对策班', price: 10900, type: '语言', times: 4  },
  
  { text: '画画1h', price: 5000, type: '绘画', times: 4  },
  { text: '画画大班', price: 6500, type: '绘画', times: 4  },
  { text: '画画提高班', price: 7000, type: '绘画', times: 4  },
  { text: '画画一对一', price: 15920, type: '绘画', times: 4  },

  { text: '12月-幼儿班', price: 5500, type: '绘画', times: 4  },
  { text: '12月-学生班', price: 7100, type: '绘画', times: 4  },
  { text: '12月-素描班', price: 7700, type: '绘画', times: 4  },
  { text: '12月-大人绘画班', price: 7700, type: '绘画', times: 4  },
  { text: '12月-一对一', price: 17200, type: '绘画', times: 4  },
  { text: '12月-一对二', price: 12000, type: '绘画', times: 4  },
  { text: '12月-一对三', price: 8800, type: '绘画', times: 4  },

  { text: '12月-硬笔书法', price: 4200, type: '书法', times: 4  },

  { text: '12月-周一次班', price: 8250, type: 'パズル道場', times: 4  },
  { text: '12月-周二次班', price: 14850, type: 'パズル道場', times: 8  },
  
  { text: '空手道1h', price: 4500, type: '空手道', times: 4  },
  { text: '空手道1.5h', price: 5500, type: '空手道', times: 4  },

  { text: '12月-空手道幼儿班', price: 4900, type: '空手道', times: 4  },
  { text: '12月-空手道成人班', price: 6000, type: '空手道', times: 4  },

  // 其他
  { text: '入会费', price: 10000, type: '其他', times: 1 },
  { text: '材料费', price: 3980, type: '其他', times: 1 },
  { text: '介绍费', price: -1000, type: '其他', times: 1 },
  { text: '12月-材料费', price: 4380, type: '其他', times: 1 },

  //个人指导 小学生
  { text: '周1回（幼儿 小学生）', price: 16000, type: '个人指导2h', times: 4  },
  { text: '周2回（幼儿 小学生）', price: 31200, type: '个人指导2h', times: 8 },
  { text: '周3回（幼儿 小学生）', price: 45600, type: '个人指导2h', times: 12 },
  { text: '周4回（幼儿 小学生）', price: 59200, type: '个人指导2h', times: 16 },
  { text: '周5回（幼儿 小学生）', price: 72000, type: '个人指导2h', times: 20  },

  { text: '周1回（幼儿 小学生）', price: 12300, type: '个人指导1.5h', times: 4  },
  { text: '周2回（幼儿 小学生）', price: 24000, type: '个人指导1.5h', times: 8  },
  { text: '周3回（幼儿 小学生）', price: 35100, type: '个人指导1.5h', times: 12  },
  { text: '周4回（幼儿 小学生）', price: 45600, type: '个人指导1.5h', times: 16  },
  { text: '周5回（幼儿 小学生）', price: 55500, type: '个人指导1.5h', times: 20  },

  { text: '周1回（幼儿 小学生）', price: 8400, type: '个人指导1h', times: 4  },
  { text: '周2回（幼儿 小学生）', price: 17200, type: '个人指导1h', times: 8  },
  { text: '周3回（幼儿 小学生）', price: 25200, type: '个人指导1h', times: 12  },
  { text: '周4回（幼儿 小学生）', price: 32800, type: '个人指导1h', times: 16  },
  { text: '周5回（幼儿 小学生）', price: 40000, type: '个人指导1h', times: 20  },

  //个人指导 中学生
  { text: '周1回（中学生）', price: 18000, type: '个人指导2h', times: 4  },
  { text: '周2回（中学生）', price: 36000, type: '个人指导2h', times: 8  },
  { text: '周3回（中学生）', price: 52800, type: '个人指导2h', times: 12  },
  { text: '周4回（中学生）', price: 68800, type: '个人指导2h', times: 16  },
  { text: '周5回（中学生）', price: 84000, type: '个人指导2h', times: 20  },

  { text: '周1回（中学生）', price: 13800, type: '个人指导1.5h', times: 4  },
  { text: '周2回（中学生）', price: 27000, type: '个人指导1.5h', times: 8  },
  { text: '周3回（中学生）', price: 39600, type: '个人指导1.5h', times: 12  },
  { text: '周4回（中学生）', price: 51600, type: '个人指导1.5h', times: 16  },
  { text: '周5回（中学生）', price: 63000, type: '个人指导1.5h', times: 20  },

  { text: '周1回（中学生）', price: 9800, type: '个人指导1h', times: 4  },
  { text: '周2回（中学生）', price: 19200, type: '个人指导1h', times: 8  },
  { text: '周3回（中学生）', price: 28200, type: '个人指导1h', times: 12  },
  { text: '周4回（中学生）', price: 36800, type: '个人指导1h', times: 16  },
  { text: '周5回（中学生）', price: 45000, type: '个人指导1h', times: 20  },

  //个人指导 高一高二
  { text: '周1回（高一高二）', price: 19200, type: '个人指导2h', times: 4  },
  { text: '周2回（高一高二）', price: 37600, type: '个人指导2h', times: 8  },
  { text: '周3回（高一高二）', price: 55200, type: '个人指导2h', times: 12  },
  { text: '周4回（高一高二）', price: 72000, type: '个人指导2h', times: 16  },
  { text: '周5回（高一高二）', price: 88000, type: '个人指导2h', times: 20  },

  { text: '周1回（高一高二）', price: 14700, type: '个人指导1.5h', times: 4  },
  { text: '周2回（高一高二）', price: 28800, type: '个人指导1.5h', times: 8  },
  { text: '周3回（高一高二）', price: 42300, type: '个人指导1.5h', times: 12  },
  { text: '周4回（高一高二）', price: 55200, type: '个人指导1.5h', times: 16  },
  { text: '周5回（高一高二）', price: 67500, type: '个人指导1.5h', times: 20  },

  { text: '周1回（高一高二）', price: 10400, type: '个人指导1h', times: 4  },
  { text: '周2回（高一高二）', price: 20400, type: '个人指导1h', times: 8  },
  { text: '周3回（高一高二）', price: 30000, type: '个人指导1h', times: 12  },
  { text: '周4回（高一高二）', price: 39200, type: '个人指导1h', times: 16  },
  { text: '周5回（高一高二）', price: 48000, type: '个人指导1h', times: 20  },

  //个人指导 高三
  { text: '周1回（高三）', price: 19200, type: '个人指导2h', times: 4  },
  { text: '周2回（高三）', price: 37600, type: '个人指导2h', times: 8  },
  { text: '周3回（高三）', price: 55200, type: '个人指导2h', times: 12  },
  { text: '周4回（高三）', price: 72000, type: '个人指导2h', times: 16  },
  { text: '周5回（高三）', price: 88000, type: '个人指导2h', times: 20  },

  { text: '周1回（高三）', price: 14700, type: '个人指导1.5h', times: 4  },
  { text: '周2回（高三）', price: 28800, type: '个人指导1.5h', times: 8  },
  { text: '周3回（高三）', price: 42300, type: '个人指导1.5h', times: 12  },
  { text: '周4回（高三）', price: 55200, type: '个人指导1.5h', times: 16  },
  { text: '周5回（高三）', price: 67500, type: '个人指导1.5h', times: 20  },

  { text: '周1回（高三）', price: 10400, type: '个人指导1h', times: 4  },
  { text: '周2回（高三）', price: 20400, type: '个人指导1h', times: 8  },
  { text: '周3回（高三）', price: 30000, type: '个人指导1h', times: 12  },
  { text: '周4回（高三）', price: 39200, type: '个人指导1h', times: 16  },
  { text: '周5回（高三）', price: 48000, type: '个人指导1h', times: 20  }
])

export const specialOffers = ref([
  { text: '无优惠', value: 1.0 },
  { text: '95折', value: 0.95 },
  { text: '9折', value: 0.9 }
])

export const wddTimesValues = ref([
  { Text: '0回', Value: 0 },
  { Text: '1回', Value: 1 },
  { Text: '2回', Value: 2 },
  { Text: '3回', Value: 3 },
  { Text: '4回', Value: 4 },
  { Text: '5回', Value: 5 },
  { Text: '6回', Value: 6 },
  { Text: '7回', Value: 7 },
  { Text: '8回', Value: 8 },
  { Text: '9回', Value: 9 },
  { Text: '10回', Value: 10 },
  { Text: '11回', Value: 11 },
  { Text: '12回', Value: 12 },
  { Text: '13回', Value: 13 },
  { Text: '14回', Value: 14 },
  { Text: '15回', Value: 15 },
  { Text: '16回', Value: 16 },
  { Text: '17回', Value: 17 },
  { Text: '18回', Value: 18 },
  { Text: '19回', Value: 19 },
  { Text: '20回', Value: 20 },
  { Text: '21回', Value: 21 },
  { Text: '22回', Value: 22 },
  { Text: '23回', Value: 23 },
  { Text: '24回', Value: 24 }
])
