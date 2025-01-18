// schoolsData.js
const schoolsData = [
    {
        name: '國立臺灣大學',
        websites: [
            { url: 'https://www.ntu.edu.tw', description: '臺灣大學首頁' },
            { url: 'https://my.ntu.edu.tw/', description: '臺灣大學 MyNTU' },
            { url: 'https://www.lib.ntu.edu.tw/', description: '臺灣大學 圖書館' },
            { url: 'https://if192.aca.ntu.edu.tw/index.php', description: '臺灣大學 網路選課系統' },
            { url: 'https://moodle.ntu.edu.tw', description: '臺灣大學 Moodle' }
        ]
    },
    {
        name: '國立成功大學',
        websites: [
            { url: 'https://www.ncku.edu.tw', description: '成功大學首頁' },
            { url: 'https://i.ncku.edu.tw/', description: '成功大學 成功入口' },
            { url: 'https://futureplus.ncku.edu.tw/ncku_fsp/', description: '成功大學 futureplus' },
            { url: 'https://course.ncku.edu.tw/', description: '成功大學 課程資訊及選課系統' }
        ]
    },
    {
        name: '國立清華大學',
        websites: [
            { url: 'https://www.nthu.edu.tw', description: '清華大學首頁' },
            { url: 'https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/', description: '清華大學 校務資訊系統' },
            { url: 'https://curricul.site.nthu.edu.tw/', description: '清華大學 課務組' }
        ]
    },
    {
        name: '國立陽明交通大學',
        websites: [
            { url: 'https://www.nctu.edu.tw', description: '陽明交通大學首頁' },
            { url: 'https://portal.nycu.edu.tw/', description: '陽明交通大學 校務行政系統' },
            { url: 'https://course.nycu.edu.tw/', description: '陽明交通大學 選課系統' },
            { url: 'https://www.lib.nycu.edu.tw/', description: '陽明交通大學 圖書館' }
        ]
    },
    {
        name: '國立中山大學',
        websites: [
            { url: 'https://www.nsysu.edu.tw', description: '中山大學首頁' },
            { url: 'https://sis.nsysu.edu.tw', description: '中山大學 學務綜合資訊平台' },
            { url: 'https://lis.nsysu.edu.tw', description: '中山大學 圖書館' },
            { url: 'https://selcrs.nsysu.edu.tw/', description: '中山大學 選課系統' }
        ]
    },
    {
        name: '國立政治大學',
        websites: [
            { url: 'https://www.nccu.edu.tw', description: '政治大學首頁' },
            { url: 'https://i.nccu.edu.tw/Login.aspx', description: '政治大學 愛政大(校園個人化入口)' },
            { url: 'https://www.lib.nccu.edu.tw', description: '政治大學 圖書館' },
            { url: 'https://wm5.nccu.edu.tw/', description: '政治大學 WM5' }
        ]
    },
    {
        name: '國立臺灣師範大學',
        websites: [
            { url: 'https://www.ntnu.edu.tw', description: '臺灣師範大學首頁' },
            { url: 'https://toc.co.ntnu.edu.tw', description: '臺灣師範大學 TOC' },
            { url: 'https://moodle.ntnu.edu.tw', description: '臺灣師範大學 Moodle' }
        ]
    },
    {
        name: '國立臺灣科技大學',
        websites: [
            { url: 'https://www.ntust.edu.tw', description: '臺灣科技大學首頁' },
            { url: 'https://i.ntust.edu.tw/student', description: '臺灣科技大學 校務行政系統(學生)' },
            { url: 'https://library.ntust.edu.tw/', description: '臺灣科技大學 圖書館' }
        ]
    },
    {
        name: '國立屏東科技大學',
        websites: [
            { url: 'https://www.npust.edu.tw', description: '屏東科技大學首頁' },
            { url: 'https://course.npust.edu.tw/CnAds/', description: '屏東科技大學 校務行政系統' },
            { url: 'https://course.npust.edu.tw/Course/', description: '屏東科技大學 選課系統' },
            { url: 'https://osas.npust.edu.tw/alltop/', description: '屏東科技大學 通行證申請系統' },
            { url: 'https://lib2.npust.edu.tw/', description: '屏東科技大學 圖書館' }
        ]
    },
    {
        name: '南臺科技大學',
        websites: [
            { url: 'https://www.stust.edu.tw/', description: '南臺科技大學首頁' },
            { url: 'https://eportal.stust.edu.tw/', description: '南臺科技大學 E網通' },
            { url: 'https://portal.stust.edu.tw/abs_stu/checkin.asp', description: '南臺科技大學 請假系統' },
            { url: 'https://course.stust.edu.tw/CourSel/Login.aspx', description: '南臺科技大學 選課系統' },
            { url: 'https://flipclass.stust.edu.tw/', description: '南臺科技大學 FlipClass' },
            { url: 'http://lib.stust.edu.tw/', description: '南臺科技大學 圖書館' },
            { url: 'https://portal.stust.edu.tw/studclub/Login.aspx', description: '南臺科技大學 社團課程管理系統' },
            { url: 'https://portal.stust.edu.tw/CourseWaived/Login.aspx', description: '南臺科技大學 學分抵免系統' },
            { url: 'https://webap.stust.edu.tw/pwd/Index.aspx', description: '南臺科技大學 校務帳號密碼啟用/變更入口系統' }
        ]
    },
    {
        name: '龍華科技大學',
        websites: [
            { url: 'https://www.lhu.edu.tw', description: '龍華科技大學首頁' },
            { url: 'https://eportal.lhu.edu.tw/index.do', description: '龍華科技大學 校務行政系統' },
            { url: 'https://e-learning.lhu.edu.tw/mooc/index.php', description: '龍華科技大學 數位學習平台' },
            { url: 'https://il.lhu.edu.tw/', description: '龍華科技大學 圖書館' }
        ]
    },
    {
        name: '臺北醫學大學',
        websites: [
            { url: 'https://www.tmu.edu.tw', description: '臺北醫學大學首頁' },
            { url: 'https://newacademic.tmu.edu.tw/', description: '臺北醫學大學 教務學務系統' },
            { url: 'https://library.tmu.edu.tw/', description: '臺北醫學大學 圖書館' }
        ]
    },
    {
        name: '逢甲大學',
        websites: [
            { url: 'https://www.fcu.edu.tw', description: '逢甲大學首頁' },
            { url: 'https://myfcu.fcu.edu.tw', description: '逢甲大學 MyFCU' },
            { url: 'https://course.fcu.edu.tw', description: '逢甲大學 選課系統' },
            { url: 'https://www.lib.fcu.edu.tw', description: '逢甲大學 圖書館' }
        ]
    },
    {
        name: '中國科技大學',
        websites: [
            { url: 'https://www.cute.edu.tw', description: '中國科技大學首頁' },
            { url: 'https://portal.cute.edu.tw', description: '中國科技大學 校務入口' },
            { url: 'https://lib.cute.edu.tw', description: '中國科技大學 圖書館' }
        ]
    },
    {
        name: '慈濟大學',
        websites: [
            { url: 'https://www.tcu.edu.tw', description: '慈濟大學首頁' },
            { url: 'https://myinfo.tcu.edu.tw', description: '慈濟大學 校務系統' },
            { url: 'https://lib.tcu.edu.tw', description: '慈濟大學 圖書館' }
        ]
    },
    {
        name: '國立臺灣體育運動大學',
        websites: [
            { url: 'https://www.ntus.edu.tw', description: '臺灣體育運動大學首頁' },
            { url: 'https://portal.ntus.edu.tw', description: '臺灣體育運動大學 校園入口網' },
            { url: 'https://lib.ntus.edu.tw', description: '臺灣體育運動大學 圖書館' }
        ]
    },
    {
        name: '輔仁大學',
        websites: [
            { url: 'https://www.fju.edu.tw', description: '輔仁大學首頁' },
            { url: 'https://eportal.fju.edu.tw', description: '輔仁大學 校務資訊系統' },
            { url: 'https://lib.fju.edu.tw', description: '輔仁大學 圖書館' },
            { url: 'https://course.fju.edu.tw', description: '輔仁大學 選課系統' }
        ]
    },
    {
        name: '義守大學',
        websites: [
            { url: 'https://www.isu.edu.tw', description: '義守大學首頁' },
            { url: 'https://netreg.isu.edu.tw', description: '義守大學 校務系統' },
            { url: 'https://www.lis.isu.edu.tw', description: '義守大學 圖書館' }
        ]
    },
    {
        name: '華梵大學',
        websites: [
            { url: 'https://www.hfu.edu.tw', description: '華梵大學首頁' },
            { url: 'https://aps.hfu.edu.tw', description: '華梵大學 校務系統' },
            { url: 'https://lib.hfu.edu.tw', description: '華梵大學 圖書館' }
        ]
    },
    {
        name: '東海大學',
        websites: [
            { url: 'https://www.thu.edu.tw', description: '東海大學首頁' },
            { url: 'https://course.thu.edu.tw', description: '東海大學 選課系統' },
            { url: 'https://www.lib.thu.edu.tw', description: '東海大學 圖書館' },
            { url: 'https://aca.thu.edu.tw', description: '東海大學 教務系統' }
        ]
    },
    {
        name: '淡江大學',
        websites: [
            { url: 'https://www.tku.edu.tw', description: '淡江大學首頁' },
            { url: 'https://portal.tku.edu.tw', description: '淡江大學 資訊服務入口' },
            { url: 'https://www.lib.tku.edu.tw', description: '淡江大學 圖書館' },
            { url: 'https://course.tku.edu.tw', description: '淡江大學 選課系統' }
        ]
    },
    {
        name: '中原大學',
        websites: [
            { url: 'https://www.cycu.edu.tw', description: '中原大學首頁' },
            { url: 'https://portal.cycu.edu.tw', description: '中原大學 校務資訊系統' },
            { url: 'https://www.lib.cycu.edu.tw', description: '中原大學 圖書館' },
            { url: 'https://course.cycu.edu.tw', description: '中原大學 選課系統' }
        ]
    }
];
