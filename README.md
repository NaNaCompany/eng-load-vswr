# 부하 반사와 정재파비 계산기

실수 기준임피던스와 유한 복소 부하로 전압 정재파비 계산.

- ID: E149
- App: https://nanalab.kr/eng-load-vswr/
- Repository: https://github.com/NaNaCompany/eng-load-vswr
- Formula: Γ = (Z_L−Z₀)/(Z_L+Z₀); VSWR = (1+|Γ|)/(1−|Γ|)

## Model and data

실수 양수 Z₀의 무손실 전송선과 Re(Z_L) ≥ 0인 수동 부하를 가정합니다. 허수부의 양수는 유도성, 음수는 용량성입니다. 단락과 순리액턴스 부하는 완전 반사이므로 VSWR가 무한대입니다. 개방 부하도 같은 한계지만, 입력칸은 유한 복소 임피던스만 받습니다. 능동 음저항·복소 기준임피던스·손실선의 위치별 변화는 제외합니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
