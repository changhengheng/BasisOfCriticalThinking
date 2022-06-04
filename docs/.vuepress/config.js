module.exports = {
    title: 'foundationofCriticalThinking',
    dest: './dist',
    base: '/basisOfCriticalThinking/',
    repo:
        'https://github.com/changhengheng/basisOfCriticalThinking',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'External', link: 'https://github.com/changhengheng/basisOfCriticalThinking' },
        ],
        sidebar: [
            {
                title: '批判性思维基础',
                children: [
                    '/basic/1.导论', 
                    '/basic/2.论可靠且有效的演绎论证有多难',
                    '/basic/3.扩充论证之溯因（abductive）论证：问题的最佳解释',
                    '/basic/4.有效性',
                    '/basic/5.真实性和有效性',
                    '/basic/6.可靠性',
                    '/basic/7.必要条件和充分条件',
                    '/basic/8.必要条件和充分条件深入',
                    '/basic/9.隐含前提',
                    '/basic/10.正当性',
                    '/basic/11.描述性主张和规范性主张',
                    '/basic/12.工具价值和内在价值',
                    '/basic/13.相关性和因果关系',
                ],
            },
            {
                title: '认知偏误',
                children: [
                    '/cognitiveBias/1.虚念', 
                    '/cognitiveBias/2.锚定效应', 
                    '/cognitiveBias/3.价格认知偏差', 
                    '/cognitiveBias/4.心理账户', 
                    '/cognitiveBias/5.峰终效应', 
                    '/cognitiveBias/6.参照依赖和损失厌恶', 
                    '/cognitiveBias/7.特种部队谬误', 
                ],
            },
        ],
        lastUpdated: '最后一次更新：',
        smoothScroll: true,
    },
}