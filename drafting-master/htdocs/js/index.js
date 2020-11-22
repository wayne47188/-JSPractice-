'use strict';
//109153010 黃國瑋

let Html = function(tag) {
    let el = document.createElement(tag);

    return {
        get node() {
            return el;
        },

        appendChild: function(node) {
            el.appendChild(node);

            return this;
        },

        setAttribute: function(attribute, value) {
            el[attribute] = value;

            return this;
        },

        setClass: function(cls) {
            el.className = cls;

            return this;
        },
    };
};

window.addEventListener('load', () => {
    console.log("drafting.js loaded");

    let siteTitle = Html('h1')
        .setAttribute('innerHTML', 'Drafting');

    let siteSubtitle = Html('h3')
        .setAttribute('innerHTML', '一個 html/css/node.js 的練習專案');

    let siteBanner = Html('header')
        .setClass('site-banner')
        .appendChild(siteTitle.node)
        .appendChild(siteSubtitle.node);

    let siteStatus = Html('header')
        .setClass('site-status')
        .setAttribute(
            'innerHTML',
            '<span>x:<span id="cursor-x">0</span>y:<span id="cursor-y">0</span>'
        );

    let siteBody = Html('article')
        .setClass('site-body')
        .appendChild(siteStatus.node);

    let copyright = Html('small')
        .setClass('float-right')
        .setAttribute(
            'innerHTML',
            '&copy; Copyright 2020，佛光大學資訊應用學系'
        );

    let siteFooter = Html('footer')
        .setClass('site-footer')
        .appendChild(copyright.node);

    let siteContainer = Html('div')
        .setClass('site-container')
        .appendChild(siteBanner.node)
        .appendChild(siteBody.node)
        .appendChild(siteFooter.node);

    //姓名
    let input1 = Html('input')
        .setClass('input')
        .setAttribute('innerHTML', 'name')
        .setAttribute('placeholder', '王大錘')
        .setAttribute('id', 'name')
        .setAttribute('type', 'text');

    let p1 = Html('p')
        .setClass('control')
        .appendChild(input1.node);

    let label1 = Html('label')
        .setClass('control-label')
        .setAttribute('innerHTML', '姓名')
        .setAttribute('htmlFor', 'name');

    let hfirld1 = Html('div')
        .setClass('h-field')
        .appendChild(label1.node)
        .appendChild(p1.node);

    //血量
    let input2 = Html('input')
        .setClass('input')
        .setAttribute('innerHTML', 'hp')
        .setAttribute('placeholder', '10')
        .setAttribute('id', 'hp')
        .setAttribute('type', 'number');

    let p2 = Html('p')
        .setClass('control')
        .appendChild(input2.node);

    let label2 = Html('label')
        .setClass('control-label')
        .setAttribute('innerHTML', '血量(hp)')
        .setAttribute('htmlFor', 'hp');

    let hfirld2 = Html('div')
        .setClass('h-field')
        .appendChild(label2.node)
        .appendChild(p2.node);

    //攻擊力
    let input3 = Html('input')
        .setClass('input')
        .setAttribute('innrtHtml', 'ap')
        .setAttribute('placeholder', '1')
        .setAttribute('id', 'ap')
        .setAttribute('type', 'number');
    let p3 = Html('p')
        .setClass('control')
        .appendChild(input3.node);

    let label3 = Html('label')
        .setClass('control-label')
        .setAttribute('innerHTML', '攻擊力(ap)');

    let hfirld3 = Html('div')
        .setClass('h-field')
        .appendChild(label3.node)
        .appendChild(p3.node);

    //防禦力
    let input4 = Html('input')
        .setClass('input')
        .setAttribute('innerHTML', 'dp')
        .setAttribute('placeholder', '0')
        .setAttribute('id', 'dp')
        .setAttribute('type', 'number')

    let p4 = Html('p')
        .setClass('control')
        .appendChild(input4.node);

    let label4 = Html('label')
        .setClass('control-label')
        .setAttribute('innerHTML', '防禦力(dp)');

    let hfirld4 = Html('div')
        .setClass('h-field')
        .appendChild(label4.node)
        .appendChild(p4.node);


    let pane = Html('div')
        .setClass('pane')
        .appendChild(hfirld1.node)
        .appendChild(hfirld2.node)
        .appendChild(hfirld3.node)
        .appendChild(hfirld4.node);
    document.body.appendChild(siteContainer.node);

    // 準備承載 *網頁標題* (title) 的 HTML 元素
    let cardTitle = Html('span')
        .setAttribute('textContent', 'Drafting!');

    // 準備承載 *網頁版頭* (header) 的 HTML 元素
    let cardHeader = Html('header')
        .setClass('card-header')
        .appendChild(cardTitle.node); // 將 *網頁標題* 放上 *網頁版頭*

    // 準備承載 *網頁內容* 的 HTML 元素
    let cardContent = Html('article')
        .setClass('card-content')
        .appendChild(pane.node)

    // 準備 *網頁桌面* 的 HTML 元素
    let cardDesktop = Html('section')
        .setClass('card')
        .appendChild(cardHeader.node) // 將 *網頁版頭* 放上 *網頁桌面*
        .appendChild(cardContent.node); // 將 *網頁內容* 放上 *網頁桌面*

    // 將 *網頁桌面* 放上 *網頁*
    let desktop = document
        .querySelector('.site-body')
        .appendChild(cardDesktop.node);

    /**
     * 滑鼠游標移動追踪
     *
     * @callback
     * @param 'mousemove' : DOM 事件名
     * @param e : DOM event 物件
     * @returns {undefined}
     */
    desktop.addEventListener('mousemove', (e) => {
        document.getElementById('cursor-x').textContent = e.clientX;
        document.getElementById('cursor-y').textContent = e.clientY;
    });
});