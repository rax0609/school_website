// 開啟側邊欄
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// 關閉側邊欄
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// 初始化學校卡片
document.addEventListener('DOMContentLoaded', () => {
    displaySchools(schoolsData);
});

// 顯示學校卡片
function displaySchools(schools) {
    const schoolsList = document.getElementById('schoolsList');
    schoolsList.innerHTML = ''; // 清空現有的學校列表

    schools.forEach((school) => {
        const card = document.createElement('div');
        card.className = 'school-card';

        const schoolName = document.createElement('h2');
        schoolName.textContent = school.name;

        const button = document.createElement('button');
        button.textContent = '查看網站';
        button.onclick = () => showSchoolWebsites(school);

        card.appendChild(schoolName);
        card.appendChild(button);
        schoolsList.appendChild(card);
    });
}

// 搜尋學校
function filterSchools() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const filteredSchools = schoolsData.filter((school) =>
        school.name.toLowerCase().includes(searchValue)
    );
    displaySchools(filteredSchools);
}

// 顯示學校網站
function showSchoolWebsites(school) {
    const websitesList = document.getElementById('schoolsList');
    websitesList.innerHTML = ''; // 清空學校卡片，顯示該學校的網站資訊

    school.websites.forEach((site) => {
        const card = document.createElement('div');
        card.className = 'school-card';

        const siteDescription = document.createElement('p');
        siteDescription.textContent = site.description;

        const button = document.createElement('button');
        button.textContent = '前往網站';
        button.onclick = () => window.open(site.url, '_blank');

        card.appendChild(siteDescription);
        card.appendChild(button);
        websitesList.appendChild(card);
    });
}
