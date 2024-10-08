# 台灣大專院校系統入口網站

歡迎來到台灣大專院校系統入口網站！此專案旨在為學生和訪客提供一個整合平台，快速訪問台灣各大專院校的數位系統和資源。

## 特色

- **響應式設計**：支援各種螢幕尺寸，自適應桌面與行動裝置。
- **搜尋系統**：內建搜尋功能，方便快速查找大學。
- **卡片佈局**：使用現代卡片式佈局，展示各大學的數位資源。
- **快速訪問各大學平台**：可快速訪問每個大學的學習管理系統（LMS）、圖書館入口與行政系統。

## 涵蓋的大專院校

本平台目前涵蓋以下院校的系統：
- 國立台灣大學（NTU）
- 國立成功大學（NCKU）
- 國立清華大學（NTHU）
- 國立交通大學（NCTU）
- 國立中山大學（NSYSU）
- 國立政治大學（NCCU）
- 國立台灣師範大學（NTNU）
- 國立台灣科技大學（NTUST）
- 國立屏東科技大學（NPUST）
- 臺北醫學大學（TMU）
- 南臺科技大學（STUST）
- 龍華科技大學（LHU）

## 如何開始

### 需求

要在本地運行此專案，您只需要一個網頁瀏覽器和基本的本地伺服器。

### 安裝

1. 複製此專案到您的本地：
   ```bash
   git clone https://github.com/rax0609/school_website.git
   ```

2. 進入專案目錄：
   ```bash
   cd school_website
   ```

3. 使用瀏覽器打開 `index.html`，或通過本地伺服器進行運行。

### 專案結構

- `index.html`: 首頁，包含搜尋系統與大學列表。
- `schools.html`: 以卡片式佈局顯示各大學及其數位資源的頁面。
- `css/styles.css`: 包含響應式設計和樣式的 CSS 檔案。
- `js/script.js`: 包含顯示和篩選大學的邏輯程式碼。
- `js/schoolsData.js`: 包含所有大學資料（名稱、URL、系統資訊）。

## 演示

您可以查看專案的線上演示：[網站演示](https://school.futuracept.com/)

## 貢獻

非常歡迎您貢獻此專案！若有任何改進建議，請提交 Pull Request 或開啟 Issue。

## 授權

此專案基於 MIT 授權，詳見 [LICENSE](LICENSE) 檔案。
