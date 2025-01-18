# 台灣大專院校查詢系統

![GitHub](https://img.shields.io/badge/license-MIT-blue.svg)

一個美觀且實用的台灣大專院校網站查詢系統，提供流暢的使用體驗和直觀的介面設計。

## 🌟 功能特色

- **即時搜尋**：快速篩選學校名稱和相關網站
- **精美卡片設計**：採用現代化的卡片式設計
- **毛玻璃效果**：運用 backdrop-filter 實現時尚的磨砂玻璃效果
- **流暢動畫**：
  - 頁面載入動畫
  - 卡片展開動畫
  - 網站列表漸入效果
- **響應式設計**：完美支援各種裝置尺寸
- **直觀操作**：簡單易用的使用者介面

## 🛠️ 技術實現

- HTML5
- CSS3 (使用現代特性如 Grid, Flexbox, 動畫)
- JavaScript (原生 JS，無需框架)
- Font Awesome 圖示
- 毛玻璃效果 (backdrop-filter)

## 📦 安裝說明

1. 克隆專案到本地：
```bash
git clone https://github.com/rax0609/school_website.git
```

2. 進入專案目錄：
```bash
cd taiwan-university-finder
```

3. 使用瀏覽器開啟 `index.html` 檔案，或使用本地伺服器運行：
```bash
# 使用 Python 建立簡單的 HTTP 伺服器
python -m http.server 8000
```

## 🎯 使用方法

1. 在搜尋框輸入關鍵字即可搜尋學校
2. 點擊學校卡片可查看詳細資訊
3. 點擊網站連結可直接訪問對應網站
4. 使用關閉按鈕或點擊外部區域可返回列表視圖

## 🔧 自定義設定

### 新增學校資料

在 `script` 標籤中的 `schoolsData` 陣列中添加新的學校資料：

```javascript
{
    name: '學校名稱',
    websites: [
        { 
            url: '網站網址', 
            description: '網站描述' 
        }
    ]
}
```

### 修改視覺風格

可以通過修改 CSS 變數來調整主要視覺風格：

```css
:root {
    --primary-bg: #0a0a0a;
    --card-bg: rgba(255, 255, 255, 0.05);
    --text-color: #e0e0e0;
    --border-color: rgba(255, 255, 255, 0.05);
}
```

## 📱 瀏覽器支援

- Chrome (推薦)
- Firefox
- Safari
- Edge
- Opera

※ 需要現代瀏覽器才能支援毛玻璃效果

## 🤝 貢獻指南

1. Fork 此專案
2. 建立新的功能分支：`git checkout -b feature/AmazingFeature`
3. 提交更改：`git commit -m 'Add some AmazingFeature'`
4. 推送到分支：`git push origin feature/AmazingFeature`
5. 開啟一個 Pull Request

## 📄 授權協議

此專案使用 MIT 授權 - 查看 [LICENSE](LICENSE) 檔案了解詳細資訊

## 🙋 常見問題

**Q: 為什麼某些瀏覽器看不到毛玻璃效果？**  
A: 毛玻璃效果使用 `backdrop-filter` 屬性，需要現代瀏覽器支援。

**Q: 如何添加新的學校？**  
A: 在 `schoolsData` 陣列中按照既定格式添加新的學校資料即可。

## 🌟 致謝

- [Font Awesome](https://fontawesome.com/) - 提供優質圖示
- [Google Fonts](https://fonts.google.com/) - 提供字體支援
