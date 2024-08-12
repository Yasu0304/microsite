let medObj = [
    {
        aiItem: "醫療影像處理",
        aiName: '3D成像',
    },
    {
        aiItem: "醫療影像處理",
        aiName:
            '圖像增強和分割',
    }, {
        aiItem: "健康管理",
        aiName:
            '慢性病管理',
    },
    {
        aiItem: "健康管理",
        aiName: '預防保健',
    },
    {
        aiItem: "疾病診斷",
        aiName: '影像診斷',
    },
    {
        aiItem: "疾病診斷",
        aiName: '病理分析',

    }, {
        aiItem: "個性化醫療",
        aiName: '基因分析',
    },
    {
        aiItem: "個性化醫療",
        aiName: '藥物推薦',

    }, {
        aiItem: "手術輔助",
        aiName: '機器人手術',
    },
    {
        aiItem: "手術輔助",
        aiName: '術中導航',
    },
    {
        aiItem: "臨床決策支持",
        aiName: '輔助診斷',
    },
    {
        aiItem: "臨床決策支持",
        aiName: '癒後評估',
    }

]

let cardContent = document.querySelector(".col.cardContent")
// console.log(cardContent);
let cardGroup = document.querySelector(".row.row-cols-1.row-cols-md-3.g-4.cardGroup")
medObj.forEach((item, index) => {
    console.log(item.aiItem, item.aiName)
})

// console.log(cardGroup);
// cardGroup.innerHTML = `<div class="col cardContent">
//                 <div class="card h-100">
//                     <img src="..." class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${medobj[0].aiItem}</h5>
//                         <p>${medobj[0].aiName}</p>
//                         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
//                             additional content. This content is a little bit longer.</p>
//                     </div>
//                 </div>
//             </div>`;