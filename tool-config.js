export const tool={
  "id": "E149",
  "slug": "eng-load-vswr",
  "title": "부하 반사와 정재파비 계산기",
  "title_en": "Complex Load VSWR Calculator",
  "category": "RF·전송선",
  "category_en": "RF and transmission lines",
  "fields": [
    {
      "key": "z0",
      "label": "실수 기준 특성임피던스 Z₀",
      "label_en": "Real reference impedance Z₀",
      "dimension": "resistance",
      "example": 50,
      "constraint": "positive",
      "display_unit": "ohm",
      "display_value": "50"
    },
    {
      "key": "r",
      "label": "부하 저항 Re(Z_L)",
      "label_en": "Load resistance Re(Z_L)",
      "dimension": "resistance",
      "example": 100,
      "constraint": "nonnegative",
      "display_unit": "ohm",
      "display_value": "100"
    },
    {
      "key": "reactance",
      "label": "부하 리액턴스 Im(Z_L)",
      "label_en": "Load reactance Im(Z_L)",
      "dimension": "resistance",
      "example": 50,
      "constraint": "signed",
      "display_unit": "ohm",
      "display_value": "50"
    }
  ],
  "result_label": "전압 정재파비 VSWR",
  "result_label_en": "Voltage standing wave ratio VSWR",
  "result_dimension": "ratio",
  "formula": "Γ = (Z_L−Z₀)/(Z_L+Z₀); VSWR = (1+|Γ|)/(1−|Γ|)",
  "purpose": "실수 기준임피던스와 유한 복소 부하로 전압 정재파비 계산.",
  "purpose_en": "Calculate voltage standing wave ratio from a real reference impedance and a finite complex load impedance.",
  "assumptions": "실수 양수 Z₀의 무손실 전송선과 Re(Z_L) ≥ 0인 수동 부하를 가정합니다. 허수부의 양수는 유도성, 음수는 용량성입니다. 단락과 순리액턴스 부하는 완전 반사이므로 VSWR가 무한대입니다. 개방 부하도 같은 한계지만, 입력칸은 유한 복소 임피던스만 받습니다. 능동 음저항·복소 기준임피던스·손실선의 위치별 변화는 제외합니다.",
  "assumptions_en": "Required: a lossless line with positive real Z₀ and a passive load with Re(Z_L) ≥ 0. Positive reactance is inductive and negative reactance is capacitive. A short or purely reactive load gives complete reflection and infinite VSWR. An open circuit has the same limit, while this form accepts only finite complex impedances. Excluded: active negative resistance, complex reference impedances and position dependence on a lossy line.",
  "sources": [
    {
      "label": "Keysight — Reflection Measurements, VSWR and reflection coefficient",
      "url": "https://helpfiles.keysight.com/csg/e5080b/Tutorials/Reflection_Measurements.htm"
    }
  ],
  "condition": "양의 실수 기준임피던스와 수동 부하·무손실선 조건을 확인했습니다.",
  "condition_en": "I have checked the positive real reference impedance, passive load and lossless-line conditions.",
  "site": "https://nanalab.kr/eng-load-vswr/",
  "repository": "https://github.com/NaNaCompany/eng-load-vswr",
  "groups": [],
  "output_unit": "1"
};
