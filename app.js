"use strict";

const categories = [
  "ทฤษฎีการชนและธรรมชาติของสารตั้งต้น",
  "ความเข้มข้นและพื้นที่ผิว",
  "อุณหภูมิ",
  "ตัวเร่งปฏิกิริยาและพลังงานก่อกัมมันต์"
];

const questions = [
  {
    category: 0,
    text: "ตามทฤษฎีการชน ปฏิกิริยาเคมีจะเกิดขึ้นได้เมื่ออนุภาคของสารตั้งต้นชนกันอย่างไร",
    options: ["ชนกันทุกทิศทางโดยไม่จำกัดพลังงาน", "ชนกันด้วยพลังงานเพียงพอและมีทิศทางที่เหมาะสม", "ชนกันด้วยพลังงานต่ำกว่าพลังงานก่อกัมมันต์", "ชนกันเฉพาะเมื่อมีตัวเร่งปฏิกิริยา"],
    answer: 1,
    hint: "นึกถึงเงื่อนไข 2 อย่างของการชนที่มีประสิทธิผล ได้แก่ พลังงานและการวางตัวของอนุภาค",
    explain: "การชนที่มีประสิทธิผลต้องมีพลังงานไม่น้อยกว่าพลังงานก่อกัมมันต์ และมีทิศทางการชนที่เหมาะสม"
  },
  {
    category: 0,
    text: "การชนที่ทำให้เกิดผลิตภัณฑ์เรียกว่าอะไร",
    options: ["การชนแบบยืดหยุ่น", "การชนแบบสุ่ม", "การชนที่มีประสิทธิผล", "การชนที่สมดุล"],
    answer: 2,
    hint: "ไม่ใช่ทุกการชนจะทำให้พันธะเดิมแตกและเกิดพันธะใหม่",
    explain: "การชนที่ทำให้เกิดผลิตภัณฑ์เรียกว่า การชนที่มีประสิทธิผล (effective collision)"
  },
  {
    category: 0,
    text: "เมื่อนำโลหะ Mg, Zn และ Fe ที่มีมวลและพื้นที่ผิวเท่ากันมาทำปฏิกิริยากับสารละลาย HCl ที่มีความเข้มข้นเท่ากัน โลหะใดเกิดปฏิกิริยาเร็วที่สุด",
    options: ["Mg", "Zn", "Fe", "เกิดเร็วเท่ากัน"],
    answer: 0,
    hint: "พิจารณาลำดับความว่องไวของโลหะ: Mg > Zn > Fe",
    explain: "Mg มีความว่องไวต่อปฏิกิริยากับกรดมากกว่า Zn และ Fe จึงให้แก๊สไฮโดรเจนเร็วกว่า"
  },
  {
    category: 0,
    text: "เมื่อนำโซเดียมและแมกนีเซียมมาทำปฏิกิริยากับน้ำที่อุณหภูมิห้อง พบว่าโซเดียมเกิดปฏิกิริยารุนแรงกว่า ข้อใดอธิบายได้ถูกต้อง",
    options: ["โซเดียมมีมวลอะตอมน้อยกว่าเสมอ", "โซเดียมมีพื้นที่ผิวมากกว่าเสมอ", "โซเดียมมีสมบัติทางเคมีและความว่องไวต่อปฏิกิริยามากกว่า", "น้ำทำหน้าที่เป็นตัวเร่งปฏิกิริยาของโซเดียม"],
    answer: 2,
    hint: "โจทย์กำลังเปรียบเทียบชนิดและสมบัติของสารตั้งต้น ไม่ใช่พื้นที่ผิวหรืออุณหภูมิ",
    explain: "ธรรมชาติของสารตั้งต้นต่างกัน โซเดียมว่องไวต่อปฏิกิริยากับน้ำมากกว่าแมกนีเซียม"
  },
  {
    category: 0,
    text: "ในการแสดงจรวดแอลกอฮอล์ เหตุใดไอแอลกอฮอล์จึงเกิดการเผาไหม้อย่างรวดเร็ว",
    options: ["ไอแอลกอฮอล์กระจายตัวและสัมผัสกับออกซิเจนได้ทั่วถึง", "แอลกอฮอล์มีอุณหภูมิต่ำลงอย่างรวดเร็ว", "ออกซิเจนทำหน้าที่เป็นตัวเร่งปฏิกิริยา", "แอลกอฮอล์เปลี่ยนเป็นของแข็งก่อนเกิดปฏิกิริยา"],
    answer: 0,
    hint: "เปรียบเทียบการสัมผัสกับออกซิเจนของแอลกอฮอล์ในสถานะของเหลวกับสถานะไอ",
    explain: "ไอแอลกอฮอล์ผสมและสัมผัสกับออกซิเจนได้ทั่วถึง จึงเกิดการชนที่มีประสิทธิผลจำนวนมากในเวลาสั้น"
  },
  {
    category: 1,
    text: "เมื่อเพิ่มความเข้มข้นของสารตั้งต้น อัตราการเกิดปฏิกิริยามักเพิ่มขึ้นเพราะเหตุใด",
    options: ["อนุภาคมีขนาดใหญ่ขึ้น", "จำนวนอนุภาคต่อหน่วยปริมาตรเพิ่มขึ้น ทำให้ชนกันบ่อยขึ้น", "พลังงานก่อกัมมันต์เพิ่มขึ้น", "ผลิตภัณฑ์เปลี่ยนกลับเป็นสารตั้งต้นมากขึ้น"],
    answer: 1,
    hint: "ลองนึกภาพคนจำนวนมากขึ้นอยู่ในห้องที่มีขนาดเท่าเดิม",
    explain: "ความเข้มข้นสูงทำให้มีอนุภาคต่อหน่วยปริมาตรมากขึ้น ความถี่ในการชนและจำนวนการชนที่มีประสิทธิผลจึงเพิ่มขึ้น"
  },
  {
    category: 1,
    text: "เมื่อนำผงแคลเซียมคาร์บอเนตและแคลเซียมคาร์บอเนตแบบก้อนที่มีมวลเท่ากันมาทำปฏิกิริยากับกรดชนิดเดียวกัน แบบใดเกิดปฏิกิริยาเร็วกว่า",
    options: ["แบบก้อน เพราะมีมวลมากกว่า", "แบบก้อน เพราะอนุภาคอยู่ชิดกัน", "แบบผง เพราะมีพื้นที่ผิวสัมผัสมากกว่า", "ทั้งสองแบบเกิดปฏิกิริยาเร็วเท่ากัน"],
    answer: 2,
    hint: "เมื่อบดสาร กรดสามารถสัมผัสผิวของสารได้มากขึ้นหรือน้อยลง",
    explain: "สารแบบผงมีพื้นที่ผิวรวมมากกว่า จึงมีบริเวณให้อนุภาคของกรดเข้าชนมากกว่าและเกิดปฏิกิริยาเร็วกว่า"
  },
  {
    category: 1,
    text: "จากกราฟปริมาตรแก๊สกับเวลา เส้น A มีความชันในช่วงเริ่มต้นมากกว่าเส้น B แต่กราฟทั้งสองสิ้นสุดที่ปริมาตรแก๊สเท่ากัน ข้อใดถูกต้อง",
    options: ["ปฏิกิริยา A เกิดเร็วกว่า แต่ให้ผลิตภัณฑ์สุดท้ายเท่ากับ B", "ปฏิกิริยา B เกิดเร็วกว่าและให้ผลิตภัณฑ์มากกว่า A", "ปฏิกิริยา A และ B มีอัตราการเกิดปฏิกิริยาเท่ากัน", "ปฏิกิริยา A ให้ผลิตภัณฑ์น้อยกว่า B"],
    answer: 0,
    hint: "ความชันบอกอัตราการเกิดปฏิกิริยา ส่วนระดับราบสุดท้ายบอกปริมาณผลิตภัณฑ์รวม",
    explain: "เส้น A ชันกว่า จึงเกิดปฏิกิริยาเร็วกว่า แต่จุดราบเท่ากันแสดงว่าได้ปริมาณแก๊สสุดท้ายเท่ากัน",
    visual: "rate"
  },
  {
    category: 1,
    text: "ฐานบั้งไฟใช้ส่วนผสมชนิดเดียวกันและปริมาณเท่ากัน แต่เปรียบเทียบสารที่มีขนาดอนุภาคต่างกัน การทดลองนี้ศึกษาปัจจัยใด",
    options: ["อุณหภูมิ", "ความเข้มข้น", "ตัวเร่งปฏิกิริยา", "พื้นที่ผิวของสารตั้งต้น"],
    answer: 3,
    hint: "การทำให้อนุภาคเล็กลงจะเพิ่มบริเวณที่สารต่างชนิดสัมผัสกัน",
    explain: "ขนาดอนุภาคเล็กลงทำให้พื้นที่ผิวสัมผัสรวมเพิ่มขึ้น จึงเพิ่มโอกาสการชนระหว่างสารตั้งต้น"
  },
  {
    category: 1,
    text: "ข้อใดทำให้อัตราการเกิดปฏิกิริยาเพิ่มขึ้นจากทั้งความเข้มข้นและพื้นที่ผิว",
    options: ["ใช้กรดเจือจางกับโลหะแผ่นใหญ่", "ใช้กรดเข้มข้นขึ้นกับโลหะที่แบ่งเป็นชิ้นเล็ก", "ลดความเข้มข้นของกรดและลดอุณหภูมิ", "ใช้กรดปริมาตรมากขึ้นโดยมีความเข้มข้นเท่าเดิม"],
    answer: 1,
    hint: "มองหาตัวเลือกที่เพิ่มทั้งจำนวนอนุภาคต่อปริมาตรและบริเวณสัมผัสของโลหะ",
    explain: "กรดเข้มข้นขึ้นเพิ่มความถี่การชน และโลหะชิ้นเล็กเพิ่มพื้นที่ผิวสัมผัส ทั้งสองปัจจัยจึงช่วยเพิ่มอัตราปฏิกิริยา"
  },
  {
    category: 2,
    text: "เมื่อนำแท่งเรืองแสงชนิดเดียวกันไปแช่ในน้ำอุ่นและน้ำเย็น ข้อใดเป็นผลที่คาดว่าจะสังเกตได้",
    options: ["ในน้ำอุ่นสว่างกว่า เพราะปฏิกิริยาเกิดเร็วขึ้น", "ในน้ำเย็นสว่างกว่า เพราะอนุภาคเคลื่อนที่เร็วขึ้น", "ทั้งสองสว่างเท่ากันทุกช่วงเวลา", "อุณหภูมิไม่มีผลต่อการเรืองแสง"],
    answer: 0,
    hint: "อุณหภูมิสูงทำให้ปฏิกิริยาเคมีภายในแท่งเรืองแสงเกิดเร็วขึ้น",
    explain: "น้ำอุ่นเพิ่มพลังงานจลน์ของอนุภาค ปฏิกิริยาจึงเร็วและให้แสงสว่างกว่า แต่อาจเรืองแสงได้เป็นเวลาสั้นลง"
  },
  {
    category: 2,
    text: "เมื่อเพิ่มอุณหภูมิ อัตราการเกิดปฏิกิริยาเพิ่มขึ้นเนื่องจากเหตุใด",
    options: ["อนุภาคหยุดเคลื่อนที่", "จำนวนสารตั้งต้นเพิ่มขึ้นเอง", "อนุภาคมีพลังงานจลน์เพิ่มขึ้นและเกิดการชนที่มีประสิทธิผลมากขึ้น", "พลังงานก่อกัมมันต์ของปฏิกิริยาเพิ่มขึ้น"],
    answer: 2,
    hint: "อุณหภูมิสัมพันธ์กับพลังงานจลน์เฉลี่ยของอนุภาค",
    explain: "เมื่ออุณหภูมิสูงขึ้น อนุภาคเคลื่อนที่เร็วขึ้นและมีสัดส่วนที่มีพลังงานถึงค่าพลังงานก่อกัมมันต์มากขึ้น"
  },
  {
    category: 2,
    text: "กราฟปริมาณผลิตภัณฑ์กับเวลา ณ 40°C มีความชันช่วงเริ่มต้นมากกว่ากราฟ ณ 20°C แต่กราฟทั้งสองมีค่าสุดท้ายเท่ากัน ข้อใดสรุปถูกต้อง",
    options: ["ที่ 20°C ปฏิกิริยาเกิดเร็วกว่า", "ที่ 40°C ปฏิกิริยาเกิดเร็วกว่า แต่ได้ผลิตภัณฑ์สุดท้ายเท่ากัน", "ที่ 40°C ได้ผลิตภัณฑ์สุดท้ายน้อยกว่า", "อุณหภูมิไม่มีผลต่ออัตราการเกิดปฏิกิริยา"],
    answer: 1,
    hint: "อ่านความเร็วจากความชันของกราฟ และอ่านปริมาณสุดท้ายจากระดับที่กราฟคงที่",
    explain: "กราฟ 40°C ชันกว่า แสดงว่าเกิดปฏิกิริยาเร็วกว่า ส่วนระดับสุดท้ายเท่ากันแสดงว่าได้ผลิตภัณฑ์รวมเท่ากัน",
    visual: "temperature"
  },
  {
    category: 2,
    text: "เหตุใดการเก็บอาหารไว้ในตู้เย็นจึงช่วยชะลอการเน่าเสีย",
    options: ["อุณหภูมิต่ำทำให้อนุภาคมีพลังงานจลน์ลดลง ปฏิกิริยาจึงช้าลง", "อุณหภูมิต่ำทำให้อนุภาคชนกันรุนแรงขึ้น", "ตู้เย็นเพิ่มความเข้มข้นของอาหาร", "ตู้เย็นทำหน้าที่เป็นตัวเร่งปฏิกิริยา"],
    answer: 0,
    hint: "เชื่อมโยงอุณหภูมิต่ำกับการเคลื่อนที่ของอนุภาคและกิจกรรมของจุลินทรีย์",
    explain: "อุณหภูมิต่ำทำให้อนุภาคมีพลังงานจลน์ลดลง ปฏิกิริยาเคมีและกระบวนการของจุลินทรีย์จึงช้าลง"
  },
  {
    category: 2,
    text: "หากต้องการศึกษาผลของอุณหภูมิต่ออัตราการเกิดปฏิกิริยา ตัวแปรใดควรควบคุมให้เหมือนกัน",
    options: ["อุณหภูมิของสาร", "เวลาที่ใช้ในการเกิดปฏิกิริยา", "ชนิด ปริมาณ ความเข้มข้น และพื้นที่ผิวของสารตั้งต้น", "ความเร็วของปฏิกิริยาที่วัดได้"],
    answer: 2,
    hint: "เปลี่ยนเฉพาะตัวแปรต้น ส่วนปัจจัยอื่นที่มีผลต่ออัตราปฏิกิริยาต้องคงที่",
    explain: "เพื่อศึกษาผลของอุณหภูมิเพียงปัจจัยเดียว ต้องควบคุมชนิด ปริมาณ ความเข้มข้น และพื้นที่ผิวของสารให้เหมือนกัน"
  },
  {
    category: 3,
    text: "ในกิจกรรมยาสีฟันช้างที่ใช้ H₂O₂ และเติม KI สาร KI ทำหน้าที่ใด",
    options: ["เป็นสารตั้งต้นหลักที่เปลี่ยนเป็นออกซิเจน", "เป็นตัวเร่งให้ H₂O₂ สลายตัวเร็วขึ้น", "เพิ่มปริมาณ H₂O₂ ในระบบ", "เป็นสารที่ทำให้ฟองมีสี"],
    answer: 1,
    hint: "สังเกตว่าเมื่อเติม KI แล้วเกิดฟองออกซิเจนเร็วขึ้น แต่ไอโอไดด์ไม่ใช่ผลิตภัณฑ์หลัก",
    explain: "ไอโอไดด์จาก KI ช่วยให้ H₂O₂ สลายตัวเป็นน้ำและแก๊สออกซิเจนผ่านเส้นทางที่เร็วขึ้น จึงทำหน้าที่เป็นตัวเร่ง"
  },
  {
    category: 3,
    text: "จากกราฟพลังงานของปฏิกิริยา เส้น A มียอดกราฟสูงกว่าเส้น B หากสารตั้งต้นและผลิตภัณฑ์อยู่ที่ระดับพลังงานเดียวกัน ข้อใดถูกต้อง",
    options: ["เส้น A แสดงเส้นทางที่ใช้ตัวเร่งปฏิกิริยา", "เส้น B มีพลังงานก่อกัมมันต์สูงกว่าเส้น A", "เส้น B แสดงเส้นทางที่มีพลังงานก่อกัมมันต์ต่ำกว่า", "ทั้งสองเส้นมีอัตราการเกิดปฏิกิริยาเท่ากัน"],
    answer: 2,
    hint: "พลังงานก่อกัมมันต์วัดจากระดับสารตั้งต้นถึงยอดสูงสุดของเส้นกราฟ",
    explain: "ยอดเส้น B ต่ำกว่า จึงมีพลังงานก่อกัมมันต์ต่ำกว่า และสอดคล้องกับเส้นทางที่มีตัวเร่งปฏิกิริยา",
    visual: "activation"
  },
  {
    category: 3,
    text: "ตัวเร่งปฏิกิริยาทำให้อัตราการเกิดปฏิกิริยาเพิ่มขึ้นได้อย่างไร",
    options: ["เพิ่มพลังงานของผลิตภัณฑ์", "เพิ่มจำนวนสารตั้งต้น", "เพิ่มอุณหภูมิของระบบเสมอ", "ทำให้เกิดเส้นทางปฏิกิริยาใหม่ที่มีพลังงานก่อกัมมันต์ต่ำลง"],
    answer: 3,
    hint: "ตัวเร่งเปลี่ยนเส้นทางของปฏิกิริยา ไม่ได้เปลี่ยนพลังงานของสารตั้งต้นและผลิตภัณฑ์",
    explain: "ตัวเร่งสร้างกลไกหรือเส้นทางปฏิกิริยาใหม่ที่มีพลังงานก่อกัมมันต์ต่ำลง ทำให้มีการชนที่ผ่านเกณฑ์พลังงานมากขึ้น"
  },
  {
    category: 3,
    text: "ข้อใดกล่าวถึงตัวเร่งปฏิกิริยาได้ถูกต้อง",
    options: ["ถูกใช้หมดไปอย่างถาวรเมื่อปฏิกิริยาสิ้นสุด", "ทำให้ปริมาณผลิตภัณฑ์ตามสมการเพิ่มขึ้นเสมอ", "ช่วยเพิ่มอัตราการเกิดปฏิกิริยาและกลับคืนมาเมื่อสิ้นสุดกลไกปฏิกิริยา", "ทำให้การชนของอนุภาคหยุดลง"],
    answer: 2,
    hint: "ตัวเร่งอาจเข้าร่วมในขั้นย่อย แต่จะถูกสร้างกลับคืนเมื่อกลไกสิ้นสุด",
    explain: "ตัวเร่งช่วยเพิ่มอัตราปฏิกิริยาและถูกสร้างกลับคืนเมื่อสิ้นสุดกลไก จึงไม่ถูกใช้หมดไปโดยรวม"
  },
  {
    category: 3,
    text: "จากกราฟพลังงานของปฏิกิริยา ข้อใดแสดงผลของการใช้ตัวเร่งปฏิกิริยาได้ถูกต้อง",
    options: ["ยอดกราฟสูงขึ้น แต่พลังงานของสารตั้งต้นลดลง", "ยอดกราฟต่ำลง โดยระดับพลังงานของสารตั้งต้นและผลิตภัณฑ์ไม่เปลี่ยนแปลง", "ยอดกราฟเท่าเดิม แต่ระดับพลังงานของผลิตภัณฑ์เพิ่มขึ้น", "ระดับพลังงานของสารตั้งต้นและผลิตภัณฑ์ลดลงทั้งหมด"],
    answer: 1,
    hint: "ตัวเร่งลดเฉพาะกำแพงพลังงานที่ปฏิกิริยาต้องข้าม ไม่ได้เปลี่ยนจุดเริ่มต้นหรือจุดสิ้นสุด",
    explain: "ตัวเร่งลดพลังงานก่อกัมมันต์ จึงทำให้ยอดกราฟต่ำลง แต่ไม่เปลี่ยนพลังงานของสารตั้งต้น ผลิตภัณฑ์ หรือค่า ΔH",
    visual: "activation"
  }
];

const state = {
  index: 0,
  score: 0,
  lives: 4,
  maxLives: 4,
  hints: 0,
  selected: null,
  locked: false,
  categoryScores: [0, 0, 0, 0],
  student: { name: "", room: "", number: "" },
  sound: true
};

const $ = (id) => document.getElementById(id);
const screens = ["startScreen", "quizScreen", "gameOverScreen", "resultScreen"];

function showScreen(id) {
  screens.forEach((screen) => $(screen).classList.toggle("active", screen === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function tone(type) {
  if (!state.sound || !window.AudioContext) return;
  const ctx = new AudioContext();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  const correct = type === "correct";
  oscillator.frequency.setValueAtTime(correct ? 520 : 180, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(correct ? 760 : 120, ctx.currentTime + .18);
  gain.gain.setValueAtTime(.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .22);
  oscillator.start();
  oscillator.stop(ctx.currentTime + .22);
}

function graphSvg(type) {
  if (type === "rate" || type === "temperature") {
    const labelA = type === "temperature" ? "40°C" : "A";
    const labelB = type === "temperature" ? "20°C" : "B";
    return `<svg viewBox="0 0 650 270" role="img" aria-label="กราฟปริมาณผลิตภัณฑ์เทียบกับเวลา">
      <text x="325" y="22" text-anchor="middle" class="chart-title">ปริมาณผลิตภัณฑ์กับเวลา</text>
      <line x1="70" y1="220" x2="610" y2="220" stroke="#6d8791" stroke-width="2"/>
      <line x1="70" y1="220" x2="70" y2="40" stroke="#6d8791" stroke-width="2"/>
      <path d="M70 220 C120 110, 190 67, 310 62 S510 62, 595 62" fill="none" stroke="#0ba89a" stroke-width="5"/>
      <path d="M70 220 C165 176, 240 113, 380 75 S525 62, 595 62" fill="none" stroke="#f2a81d" stroke-width="5" stroke-dasharray="10 7"/>
      <text x="320" y="252" text-anchor="middle" class="chart-label">เวลา</text>
      <text transform="translate(20 150) rotate(-90)" text-anchor="middle" class="chart-label">ปริมาณผลิตภัณฑ์</text>
      <text x="230" y="54" class="chart-title" fill="#0ba89a">${labelA}</text>
      <text x="385" y="105" class="chart-title" fill="#c58400">${labelB}</text>
    </svg>`;
  }
  return `<svg viewBox="0 0 650 290" role="img" aria-label="กราฟพลังงานของปฏิกิริยา">
    <text x="325" y="22" text-anchor="middle" class="chart-title">พลังงานของปฏิกิริยา</text>
    <line x1="70" y1="240" x2="610" y2="240" stroke="#6d8791" stroke-width="2"/>
    <line x1="70" y1="240" x2="70" y2="35" stroke="#6d8791" stroke-width="2"/>
    <path d="M70 190 L145 190 C235 190, 235 45, 325 45 C415 45, 415 145, 500 145 L600 145" fill="none" stroke="#f15e67" stroke-width="5"/>
    <path d="M70 190 L145 190 C225 190, 245 102, 325 102 C405 102, 425 145, 500 145 L600 145" fill="none" stroke="#0ba89a" stroke-width="5" stroke-dasharray="10 7"/>
    <text x="290" y="40" class="chart-title" fill="#d9444d">A</text>
    <text x="337" y="97" class="chart-title" fill="#078b81">B</text>
    <text x="340" y="270" text-anchor="middle" class="chart-label">การดำเนินไปของปฏิกิริยา</text>
    <text transform="translate(20 150) rotate(-90)" text-anchor="middle" class="chart-label">พลังงาน</text>
    <text x="83" y="181" class="chart-label">สารตั้งต้น</text>
    <text x="513" y="136" class="chart-label">ผลิตภัณฑ์</text>
  </svg>`;
}

function renderHearts() {
  $("heartDisplay").innerHTML = Array.from({ length: state.maxLives }, (_, i) =>
    `<span class="${i >= state.lives ? "heart-lost" : ""}">❤️</span>`
  ).join("");
  $("heartDisplay").setAttribute("aria-label", `เหลือ ${state.lives} จาก ${state.maxLives} หัวใจ`);
}

function renderQuestion() {
  const q = questions[state.index];
  state.selected = null;
  state.locked = false;
  $("categoryLabel").textContent = categories[q.category];
  $("questionCounter").textContent = `ข้อ ${state.index + 1}/${questions.length}`;
  $("questionBadge").textContent = `QUESTION ${String(state.index + 1).padStart(2, "0")}`;
  $("questionText").textContent = q.text;
  $("progressBar").style.width = `${((state.index + 1) / questions.length) * 100}%`;
  $("scoreDisplay").textContent = `คะแนน ${state.score}`;
  $("hintCount").textContent = `ใช้คำใบ้ ${state.hints} ครั้ง`;
  $("submitBtn").disabled = true;
  $("feedbackBox").hidden = true;
  $("hintBox").hidden = true;
  $("hintBtn").disabled = false;
  $("hintBtn").textContent = "💡 เปิดคำใบ้";

  const visual = $("visualArea");
  if (q.visual) {
    visual.hidden = false;
    visual.innerHTML = graphSvg(q.visual);
  } else {
    visual.hidden = true;
    visual.innerHTML = "";
  }

  $("options").innerHTML = q.options.map((option, index) => `
    <button class="option" type="button" role="radio" aria-checked="false" data-index="${index}">
      <span class="option-letter">${["ก", "ข", "ค", "ง"][index]}</span>
      <span class="option-text">${option}</span>
    </button>`).join("");

  document.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", () => selectOption(Number(button.dataset.index)));
  });
}

function selectOption(index) {
  if (state.locked) return;
  state.selected = index;
  document.querySelectorAll(".option").forEach((button, buttonIndex) => {
    const selected = buttonIndex === index;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-checked", String(selected));
  });
  $("submitBtn").disabled = false;
}

function revealHint() {
  if (state.locked || !$("hintBox").hidden) return;
  state.hints += 1;
  $("hintText").textContent = questions[state.index].hint;
  $("hintBox").hidden = false;
  $("hintBtn").disabled = true;
  $("hintBtn").textContent = "💡 เปิดคำใบ้แล้ว";
  $("hintCount").textContent = `ใช้คำใบ้ ${state.hints} ครั้ง`;
}

function submitAnswer() {
  if (state.selected === null || state.locked) return;
  state.locked = true;
  const q = questions[state.index];
  const isCorrect = state.selected === q.answer;
  const buttons = [...document.querySelectorAll(".option")];
  buttons.forEach((button) => { button.disabled = true; });
  buttons[q.answer].classList.add("correct");
  if (!isCorrect) buttons[state.selected].classList.add("wrong");

  if (isCorrect) {
    state.score += 1;
    state.categoryScores[q.category] += 1;
    $("feedbackTitle").textContent = "✅ ถูกต้อง!";
    $("feedbackBox").className = "feedback-box correct-feedback";
    tone("correct");
  } else {
    state.lives -= 1;
    $("feedbackTitle").textContent = `❌ ยังไม่ถูกต้อง — เสียหัวใจ 1 ดวง`;
    $("feedbackBox").className = "feedback-box wrong-feedback";
    tone("wrong");
  }
  $("feedbackText").textContent = q.explain;
  $("feedbackBox").hidden = false;
  $("submitBtn").disabled = true;
  $("scoreDisplay").textContent = `คะแนน ${state.score}`;
  renderHearts();

  const lastQuestion = state.index === questions.length - 1;
  if (!isCorrect && state.lives === 0) {
    $("nextBtn").textContent = "ดูผลภารกิจ";
  } else {
    $("nextBtn").textContent = lastQuestion ? "ดูสรุปผล →" : "ข้อต่อไป →";
  }
  $("feedbackBox").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextStep() {
  if (state.lives === 0) {
    showResults(true);
    return;
  }
  if (state.index === questions.length - 1) {
    showResults();
    return;
  }
  state.index += 1;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetGame(keepStudent = true) {
  state.index = 0;
  state.score = 0;
  state.lives = state.maxLives;
  state.hints = 0;
  state.selected = null;
  state.locked = false;
  state.categoryScores = [0, 0, 0, 0];
  if (!keepStudent) showScreen("startScreen");
  else {
    renderHearts();
    renderQuestion();
    showScreen("quizScreen");
  }
}

function showResults(endedByLives = false) {
  const percent = Math.round((state.score / questions.length) * 100);
  const passed = percent >= 60;
  const answered = state.index + 1;
  const now = new Intl.DateTimeFormat("th-TH", { dateStyle: "medium", timeStyle: "short" }).format(new Date());
  $("resultName").textContent = state.student.name;
  $("resultRoom").textContent = `${state.student.room} / เลขที่ ${state.student.number}`;
  $("resultDate").textContent = now;
  $("finalScore").textContent = state.score;
  $("percentScore").textContent = `${percent}%`;
  $("passBadge").textContent = passed ? "ผ่านเกณฑ์การประเมิน" : "ยังไม่ผ่านเกณฑ์ 60%";
  $("passBadge").classList.toggle("fail", !passed);
  $("resultIcon").textContent = endedByLives ? "💔" : (passed ? "🏆" : "🧪");
  $("resultTitle").textContent = endedByLives ? "สรุปผล: หัวใจหมด" : "สรุปผลการทดสอบ";
  if (endedByLives) {
    $("resultMessage").textContent = `ภารกิจสิ้นสุดที่ข้อ ${answered} บันทึกผลหน้านี้ แล้วเริ่มทำใหม่ตั้งแต่ข้อ 1`;
  } else {
    $("resultMessage").textContent = passed ? "ยอดเยี่ยม! คุณพิชิตภารกิจครบทั้ง 20 ข้อ" : "ทบทวนแนวคิดจากคำอธิบาย แล้วลองทำอีกครั้งนะ";
  }
  $("answeredCount").textContent = `${answered}/${questions.length}`;
  $("remainingLives").textContent = `${state.lives}/${state.maxLives}`;
  $("totalHints").textContent = state.hints;
  $("categoryResults").innerHTML = categories.map((category, index) => {
    const score = state.categoryScores[index];
    return `<div class="category-row">
      <div class="category-row-top"><span>${category}</span><b>${score}/5</b></div>
      <div class="category-bar"><div class="category-fill" style="width:${score * 20}%"></div></div>
    </div>`;
  }).join("");
  showScreen("resultScreen");
}

$("startForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.student = {
    name: $("studentName").value.trim(),
    room: $("studentClass").value.trim(),
    number: $("studentNumber").value.trim()
  };
  state.maxLives = Number(document.querySelector('input[name="lives"]:checked').value);
  state.lives = state.maxLives;
  $("playerName").textContent = `${state.student.name} • ${state.student.room}`;
  resetGame(true);
});

$("hintBtn").addEventListener("click", revealHint);
$("submitBtn").addEventListener("click", submitAnswer);
$("nextBtn").addEventListener("click", nextStep);
$("restartBtn").addEventListener("click", () => resetGame(true));
$("playAgainBtn").addEventListener("click", () => resetGame(true));
$("printBtn").addEventListener("click", () => window.print());
$("soundBtn").addEventListener("click", () => {
  state.sound = !state.sound;
  $("soundBtn").textContent = state.sound ? "🔊" : "🔇";
});
